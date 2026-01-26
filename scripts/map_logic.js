
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
        projection = d3.geoEquirectangular()
            .scale(width / 6.5)
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
                const isServiced = Object.values(countryMapping).includes(id);
                return isServiced ? "#a8dadc" : "#e0e0e0";
            })
            .attr("stroke", "#ffffff")
            .style("cursor", d => {
                const id = String(d.id).padStart(3, '0');
                return Object.values(countryMapping).includes(id) ? "pointer" : "default";
            })
            .on("mouseover", function (event, d) {
                if (isGlobe) return;

                const id = String(d.id).padStart(3, '0');
                const name = getNameById(id);

                if (servicedCountries.includes(name)) {
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
                const isServiced = Object.values(countryMapping).includes(id);

                d3.select(this)
                    .transition().duration(200)
                    .attr("fill", isServiced ? "#a8dadc" : "#e0e0e0");

                tooltip.style("opacity", 0).style("left", "-9999px");
            })
            .on("click", function (event, d) {
                if (isGlobe) return;

                const id = String(d.id).padStart(3, '0');
                const name = getNameById(id);
                if (servicedCountries.includes(name)) {
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

    function zoomToGlobe(targetFeature, targetName) {
        isGlobe = true;

        const centroid = d3.geoCentroid(targetFeature);
        const [x, y] = projection(centroid);

        mapGroup.transition()
            .duration(1000)
            .attr("transform", `translate(${width / 2}, ${height / 2}) scale(4) translate(${-x}, ${-y})`)
            .style("opacity", 0)
            .on("end", () => {
                mapGroup.remove();
                createGlobeAndFly(targetFeature, targetName);
            });
    }

    function createGlobeAndFly(targetFeature, targetName) {
        const globeGroup = svg.append("g").attr("class", "globe-group").style("opacity", 0);

        const scaleEnd = width / 5.0;

        const globeProjection = d3.geoOrthographic()
            .scale(scaleEnd)
            .translate([width / 2, height / 2])
            .clipAngle(90);

        const globePath = d3.geoPath().projection(globeProjection);

        globeGroup.append("circle")
            .attr("cx", width / 2)
            .attr("cy", height / 2)
            .attr("r", scaleEnd)
            .attr("fill", "#f0f8ff");

        globeGroup.selectAll("path")
            .data(geoData.features)
            .enter().append("path")
            .attr("d", globePath)
            .attr("fill", d => {
                const id = String(d.id).padStart(3, '0');
                const isServiced = Object.values(countryMapping).includes(id);
                return isServiced ? "#a8dadc" : "#e0e0e0";
            })
            .attr("stroke", "#fff")
            .attr("stroke-width", 0.5);

        const startId = countryMapping[lastCountry];
        let startFeature = geoData.features.find(f => String(f.id).padStart(3, '0') === startId);
        if (!startFeature) {
            console.warn("Start feature not found for ID:", startId, ". Defaulting to Korea.");
            startFeature = geoData.features.find(f => String(f.id).padStart(3, '0') === "410");
        }

        const endFeature = targetFeature;

        const startCentroid = d3.geoCentroid(startFeature);
        const endCentroid = d3.geoCentroid(endFeature);

        globeProjection.rotate([-startCentroid[0], -startCentroid[1]]);
        globeGroup.selectAll("path").attr("d", globePath);

        globeGroup.transition().duration(500).style("opacity", 1)
            .on("end", () => {
                animateFlight(globeProjection, globePath, globeGroup, startCentroid, endCentroid, targetName);
            });
    }

    function animateFlight(projection, path, group, startCentroid, endCentroid, targetName) {
        const flightDuration = 2000;
        const r0 = [-startCentroid[0], -startCentroid[1]];
        const r1 = [-endCentroid[0], -endCentroid[1]];
        const interpolateRot = d3.interpolate(r0, r1);

        let lastAngle = 0; // Store last valid angle

        // Calculate Initial Angle
        const initialP = projection(endCentroid);
        if (initialP) {
            const dist = Math.sqrt(Math.pow(initialP[0] - width / 2, 2) + Math.pow(initialP[1] - height / 2, 2));
            // Only calculate if not directly on center (which shouldn't happen at start usually)
            if (dist > 1) {
                lastAngle = Math.atan2(initialP[1] - height / 2, initialP[0] - width / 2) * 180 / Math.PI;
            }
        }

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

                    const currentRot = interpolateRot(easeT);
                    projection.rotate(currentRot);
                    group.selectAll("path").attr("d", path);

                    // Update Angle
                    // Stop updating angle near the end to avoid instability (singularity at center)
                    if (easeT < 0.95) {
                        const currentP = projection(endCentroid);
                        if (currentP) {
                            const dist = Math.sqrt(Math.pow(currentP[0] - width / 2, 2) + Math.pow(currentP[1] - height / 2, 2));
                            if (dist > 5) { // Threshold in pixels
                                lastAngle = Math.atan2(currentP[1] - height / 2, currentP[0] - width / 2) * 180 / Math.PI;
                                plane.attr("transform", `rotate(${lastAngle + 45}, ${width / 2}, ${height / 2})`);
                            }
                        }
                    }
                    // If easeT >= 0.95, we keep the plane at 'lastAngle' which points towards the goal

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

        // [Fix] Force Visibility Hidden after transition to prevent overlay
        // We use a small timeout to allow the transition to start/run, 
        // but since we want to be safe, we can just use pointer-events:none which is in CSS.
        // However, user reports overlay. Let's use visibility hidden with delay.
        setTimeout(() => {
            intro.style("visibility", "hidden");
        }, 1000); // 1s matches CSS transition duration

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

        // [Fix] Immediately make intro visible (but transparent) to prepare for fade-in
        const intro = d3.select("#intro-page");
        intro.style("visibility", "visible");
        intro.style("display", "flex"); // Ensure flex display is restored if lost

        // Remove hidden class immediately to let D3 control opacity via style
        intro.classed("hidden", false);
        intro.style("opacity", "0");

        d3.select("#main-content")
            .transition().duration(500).style("opacity", 0)
            .on("end", () => {
                d3.select("#main-content")
                    .classed("visible", false)
                    .style("opacity", null);

                // Determine start opacity (0) and animate to 1
                intro.transition().duration(500)
                    .style("opacity", 1)
                    .on("end", () => {
                        // Ensure clear state
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
