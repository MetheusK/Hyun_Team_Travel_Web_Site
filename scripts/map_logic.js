
// Map Logic and D3 Animations
(function () {
    // Configuration
    const width = window.innerWidth;
    const height = window.innerHeight;

    // State
    let lastCountry = "대한민국";
    let geoData = null;
    let svg = null;
    let path = null;
    let projection = null;
    let mapGroup = null;
    let isGlobe = false;
    let flightTimer = null;

    // Service Countries Mapping
    const countryMapping = {
        "대한민국": "410", "South Korea": "410",
        "미국": "840", "United States of America": "840",
        "일본": "392", "Japan": "392",
        "호주": "036", "Australia": "036",
        "중국": "156", "China": "156",
        "필리핀": "608", "Philippines": "608",
        "라오스": "418", "Laos": "418",
        "타이": "764", "Thailand": "764",
        "영국": "826", "United Kingdom": "826",
        "프랑스": "250", "France": "250",
        "이탈리아": "380", "Italy": "380",
        "스위스": "756", "Switzerland": "756",
        "독일": "276", "Germany": "276",
        "이집트": "818", "Egypt": "818"
    };

    const servicedCountries = [
        "대한민국", "미국", "일본", "호주", "중국", "필리핀", "라오스",
        "영국", "프랑스", "이탈리아", "스위스", "독일", "이집트"
    ];

    function init() {
        stopTimers();

        d3.select("#intro-page").html("");

        svg = d3.select("#intro-page").append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .style("position", "absolute");

        d3.selectAll(".map-tooltip").remove();
        const tooltip = d3.select("body").append("div")
            .attr("class", "map-tooltip");

        if (geoData) {
            renderMap(geoData, tooltip);
        } else {
            d3.json("https://unpkg.com/world-atlas@2.0.2/countries-110m.json").then(world => {
                geoData = topojson.feature(world, world.objects.countries);
                renderMap(geoData, tooltip);
            });
        }
    }

    function stopTimers() {
        if (flightTimer) {
            flightTimer.stop();
            flightTimer = null;
        }
    }

    function renderMap(data, tooltip) {
        // [Responsive] Larger scale for mobile
        const scaleFactor = width < 768 ? 2.5 : 6.5;
        projection = d3.geoEquirectangular()
            .scale(width / scaleFactor)
            .translate([width / 2, height / 2])
            .rotate([0, 0, 0]);

        path = d3.geoPath().projection(projection);

        mapGroup = svg.append("g").attr("class", "map-group");

        mapGroup.selectAll("path")
            .data(data.features)
            .enter().append("path")
            .attr("class", "country")
            .attr("d", path)
            .attr("fill", d => {
                const id = String(d.id).padStart(3, '0');
                const name = getNameById(id);
                // [Fix] Only color if explicitly in servicedCountries (returned by getNameById)
                return name ? "#a8dadc" : "#e0e0e0";
            })
            .attr("stroke", "#ffffff")
            .style("cursor", d => {
                const id = String(d.id).padStart(3, '0');
                // [Fix] Pointer only if serviced
                return getNameById(id) ? "pointer" : "default";
            })
            .on("mouseover", function (event, d) {
                if (isGlobe) return;

                const id = String(d.id).padStart(3, '0');
                const name = getNameById(id);

                if (name) {
                    d3.select(this)
                        .transition().duration(200)
                        .attr("fill", "#457b9d");

                    const countryData = travelData[name];
                    let imgHtml = "";
                    if (countryData) {
                        const imgKeys = {
                            "미국": "usa", "일본": "japan", "호주": "australia", "중국": "china", "필리핀": "philippines", "라오스": "laos",
                            "영국": "uk", "프랑스": "france", "이탈리아": "italy", "스위스": "switzerland", "독일": "germany", "이집트": "egypt",
                            "대한민국": "korea"
                        };
                        const key = imgKeys[name];
                        if (key) {
                            imgHtml = `<img src="images/${key}_main.jpg" alt="${name}">`;
                        }
                    }

                    tooltip.style("opacity", 1)
                        .html(`<h3>${name}</h3>${imgHtml}`)
                        .style("left", (event.pageX) + "px")
                        .style("top", (event.pageY - 20) + "px");
                }
            })
            .on("mouseout", function (event, d) {
                if (isGlobe) return;

                const id = String(d.id).padStart(3, '0');
                const name = getNameById(id);

                d3.select(this)
                    .transition().duration(200)
                    .attr("fill", name ? "#a8dadc" : "#e0e0e0");

                tooltip.style("opacity", 0).style("left", "-9999px");
            })
            .on("click", function (event, d) {
                if (isGlobe) return;

                const id = String(d.id).padStart(3, '0');
                const name = getNameById(id);
                if (name) {
                    tooltip.style("opacity", 0).remove();
                    zoomToGlobe(d, name);
                }
            });
    }

    function getNameById(id) {
        for (const [name, code] of Object.entries(countryMapping)) {
            if (code === id && servicedCountries.includes(name)) return name;
        }
        return null;
    }

    // [New] Helper for projection interpolation
    function rawProjectionInterpolate(a, b, t) {
        return function (lambda, phi) {
            const pa = a(lambda, phi); // Plane
            const pb = b(lambda, phi); // Sphere
            return [
                pa[0] * (1 - t) + pb[0] * t,
                pa[1] * (1 - t) + pb[1] * t
            ];
        };
    }

    // [New] Centroid Overrides for specific countries (e.g. France mainland)
    const centroidOverrides = {
        "프랑스": [2.2137, 46.2276], // Mainland France
        "France": [2.2137, 46.2276],
        "미국": [-95.7129, 37.0902], // Mainland USA (approx)
        "United States of America": [-95.7129, 37.0902]
    };

    function getCentroid(feature, name) {
        if (centroidOverrides[name]) {
            return centroidOverrides[name];
        }
        return d3.geoCentroid(feature);
    }

    function zoomToGlobe(targetFeature, targetName) {
        isGlobe = true;

        // [Modified] 1. Calculate centroid for STARTING country
        // Find start feature
        const startId = countryMapping[lastCountry];
        let startFeature = geoData.features.find(f => String(f.id).padStart(3, '0') === startId);
        if (!startFeature) {
            startFeature = geoData.features.find(f => String(f.id).padStart(3, '0') === "410"); // Default Korea
        }

        // Use Start Feature for Morph Rotation Target
        const centroid = getCentroid(startFeature, lastCountry);
        const targetRotate = [-centroid[0], -centroid[1]];

        // 2. Prepare Interpolation
        const startScale = projection.scale();
        // [Responsive] Larger globe for mobile
        const endScaleFactor = width < 768 ? 2.0 : 5.0;
        const endScale = width / endScaleFactor;
        const startRotate = [0, 0];

        // 3. Add Ocean background
        const ocean = mapGroup.insert("circle", ":first-child")
            .attr("cx", width / 2)
            .attr("cy", height / 2)
            .attr("r", endScale)
            .attr("fill", "#f0f8ff")
            .style("opacity", 0);

        // [New] Add Graticule (Grid)
        const graticule = d3.geoGraticule();
        const gridPath = mapGroup.insert("path", ".country") // Insert before countries
            .datum(graticule())
            .attr("class", "graticule")
            .attr("d", path)
            .attr("fill", "none")
            .attr("stroke", "#rgba(0,0,0,0.1)")
            .attr("stroke-width", "0.5px")
            .style("opacity", 0);

        // 4. Animation
        const duration = 1200;
        const timer = d3.timer((elapsed) => {
            const t = Math.min(1, elapsed / duration);
            const easeT = d3.easeCubicInOut(t);

            // Mix projections
            const mixedRawProjection = rawProjectionInterpolate(
                d3.geoEquirectangularRaw,
                d3.geoOrthographicRaw,
                easeT
            );

            // Update projection
            const currentScale = startScale * (1 - easeT) + endScale * easeT;
            const currentRotate = [
                startRotate[0] * (1 - easeT) + targetRotate[0] * easeT,
                startRotate[1] * (1 - easeT) + targetRotate[1] * easeT
            ];

            projection = d3.geoProjection(mixedRawProjection)
                .scale(currentScale)
                .translate([width / 2, height / 2])
                .rotate(currentRotate)
                .clipAngle(90 + (179.9 - 90) * (1 - easeT))
                .precision(0.1);

            path.projection(projection);

            mapGroup.selectAll("path.country").attr("d", path);
            // Update Graticule
            gridPath.attr("d", path);

            ocean.style("opacity", easeT);
            gridPath.style("opacity", easeT * 0.3); // Fade in grid slightly

            // 5. End of morph
            if (t >= 1) {
                timer.stop();

                // [Modified] Check if start and end countries are the same
                if (lastCountry === targetName) {
                    finishArrival(targetName);
                } else {
                    startFlight(targetFeature, targetName, targetRotate, ocean, gridPath);
                }
            }
        });
    }

    function startFlight(targetFeature, targetName, targetRotate, oceanCircle, gridPath) {
        // Fix to pure Orthographic
        // [Responsive] Larger globe for mobile
        const scaleFactor = width < 768 ? 2.0 : 5.0;
        projection = d3.geoOrthographic()
            .scale(width / scaleFactor)
            .translate([width / 2, height / 2])
            .rotate(targetRotate)
            .clipAngle(90);

        path.projection(projection);
        mapGroup.selectAll("path.country").attr("d", path); // Update countries
        if (gridPath) gridPath.attr("d", path); // Update grid

        mapGroup.selectAll("path").attr("d", path);

        const startId = countryMapping[lastCountry];
        let startFeature = geoData.features.find(f => String(f.id).padStart(3, '0') === startId);
        if (!startFeature) {
            console.warn("Start feature not found for ID:", startId, ". Defaulting to Korea.");
            startFeature = geoData.features.find(f => String(f.id).padStart(3, '0') === "410");
        }

        const startCentroid = getCentroid(startFeature, lastCountry);
        const endCentroid = getCentroid(targetFeature, targetName);

        // Rotate to starting point
        projection.rotate([-startCentroid[0], -startCentroid[1]]);
        mapGroup.selectAll("path.country").attr("d", path);
        if (gridPath) gridPath.attr("d", path);

        animateFlight(projection, path, mapGroup, startCentroid, endCentroid, targetName, gridPath);
    }

    function animateFlight(projection, path, group, startCentroid, endCentroid, targetName, gridPath) {
        const flightDuration = 1600;

        // [Modified] Use Great Circle Interpolation (Geo Interpolate)
        // This calculates the [lon, lat] along the shortest path on the sphere
        const interpolatePos = d3.geoInterpolate(startCentroid, endCentroid);

        let lastAngle = 0;

        // Calculate Initial Angle
        // Calculate Initial Angle using Spherical Geometry (Bearing)
        const toRad = (deg) => deg * Math.PI / 180;
        const toDeg = (rad) => rad * 180 / Math.PI;

        const lon1 = toRad(startCentroid[0]);
        const lat1 = toRad(startCentroid[1]);
        const lon2 = toRad(endCentroid[0]);
        const lat2 = toRad(endCentroid[1]);

        const dLon = lon2 - lon1;

        const y = Math.sin(dLon) * Math.cos(lat2);
        const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

        const bearing = toDeg(Math.atan2(y, x)); // Bearing relative to North (0 deg), Clockwise
        lastAngle = bearing - 90; // Convert to SVG Angle (0 is East)

        const plane = svg.append("text")
            .attr("class", "plane-icon")
            .attr("x", width / 2)
            .attr("y", height / 2)
            .attr("text-anchor", "middle")
            .attr("dy", ".35em")
            .style("font-size", "0px")
            .style("opacity", 1)
            .text("✈️")
            .attr("transform", `rotate(${lastAngle + 45}, ${width / 2}, ${height / 2})`);

        plane.transition().duration(500).style("font-size", "50px")
            .on("end", () => {
                stopTimers();

                flightTimer = d3.timer((elapsed) => {
                    let t = elapsed / flightDuration;
                    if (t > 1) t = 1;

                    const easeT = d3.easeCubicInOut(t);

                    // [Modified] Rotate to center the current interpolated position
                    const currentPos = interpolatePos(easeT);
                    projection.rotate([-currentPos[0], -currentPos[1]]);
                    group.selectAll("path.country").attr("d", path);
                    if (gridPath) gridPath.attr("d", path);

                    if (easeT < 0.95) {
                        const currentP = projection(endCentroid);
                        if (currentP) {
                            const dist = Math.sqrt(Math.pow(currentP[0] - width / 2, 2) + Math.pow(currentP[1] - height / 2, 2));
                            if (dist > 5) {
                                lastAngle = Math.atan2(currentP[1] - height / 2, currentP[0] - width / 2) * 180 / Math.PI;
                                plane.attr("transform", `rotate(${lastAngle + 45}, ${width / 2}, ${height / 2})`);
                            }
                        }
                    }

                    if (t === 1) {
                        flightTimer.stop();
                        flightTimer = null;

                        plane.transition().duration(500).style("font-size", "0px")
                            .on("end", () => {
                                finishArrival(targetName);
                            });
                    }
                });
            });
    }

    function finishArrival(countryName) {
        lastCountry = countryName;

        const intro = d3.select("#intro-page");
        intro.classed("hidden", true);

        setTimeout(() => {
            intro.style("visibility", "hidden");
        }, 1000);

        d3.select("#main-content").classed("visible", true);

        d3.selectAll(".map-tooltip").remove();

        if (window.handleCountrySelect) {
            window.handleCountrySelect(countryName);
        } else if (window.openCountry) {
            window.openCountry(countryName);
        }
    }

    // New Function to Sync Last Country
    window.updateLastCountry = function (name) {
        if (servicedCountries.includes(name)) {
            lastCountry = name;
        }
    };

    window.returnToMap = function () {
        stopTimers();

        const intro = d3.select("#intro-page");
        intro.style("visibility", "visible");
        intro.style("display", "flex");

        intro.classed("hidden", false);
        intro.style("opacity", "0");

        d3.select("#main-content")
            .transition().duration(500).style("opacity", 0)
            .on("end", () => {
                d3.select("#main-content")
                    .classed("visible", false)
                    .style("opacity", null);

                intro.transition().duration(500)
                    .style("opacity", 1)
                    .on("end", () => {
                        intro.style("opacity", null);
                    });

                isGlobe = false;
                d3.selectAll(".map-tooltip").remove();

                window.scrollTo({ top: 0 });

                init();
            });
    };

    init();

})();
