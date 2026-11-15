    const travelData = {
            "대한민국": {
                desc: "전통과 현대가 공존하는 다채로운 매력의 나라",
                cities: {
                    "서울": {
                        attractions: [
                            { name: "경복궁", desc: "조선 왕조의 법궁", img: "./images/asia_aus/korea/seoul/gyeongbokgung.jpg" },
                            { name: "N서울타워", desc: "서울의 랜드마크 전망대", img: "./images/asia_aus/korea/seoul/n_seoul_tower.jpg" },
                            { name: "북촌 한옥마을", desc: "전통 한옥의 정취", img: "./images/asia_aus/korea/seoul/bukchon_hanok.jpg" },
                            { name: "명동 거리", desc: "쇼핑과 길거리 음식의 천국", img: "./images/asia_aus/korea/seoul/myeongdong.jpg" },
                            { name: "롯데월드타워", desc: "대한민국 최고층 빌딩", img: "./images/asia_aus/korea/seoul/lotte_world_tower.jpg" }
                        ],
                        restaurants: [
                            { name: "명동 교자", desc: "칼국수와 만두의 전설", img: "./images/asia_aus/korea/seoul/myeongdong_gyoza.jpg" },
                            { name: "우래옥", desc: "전통 평양냉면", img: "./images/asia_aus/korea/seoul/wooraeok.jpg" },
                            { name: "토속촌 삼계탕", desc: "진한 국물의 보양식", img: "./images/asia_aus/korea/seoul/tosokchon.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "어니언 안국", desc: "한옥 베이커리 카페", img: "./images/asia_aus/korea/seoul/onion_anguk.jpg" },
                                { name: "블루보틀 삼청", desc: "한옥 뷰 모던 카페", img: "./images/asia_aus/korea/seoul/bluebottle_samcheong.jpg" }
                            ],
                            study: [
                                { name: "테라로사 포스코점", desc: "책과 커피가 있는 대형 공간", img: "./images/asia_aus/korea/seoul/terarosa_posco.jpg" },
                                { name: "할리스 커피 세종로점", desc: "광화문 뷰 카공 명소", img: "./images/asia_aus/korea/seoul/hollys_sejongro.jpg" }
                            ]
                        },
                        activities: [
                            { name: "한강 피크닉", desc: "도심 속 힐링, 라면은 필수", img: "./images/asia_aus/korea/seoul/hanriver_picnic.jpg" },
                            { name: "청계천 산책", desc: "도심을 가로지르는 물길", img: "./images/asia_aus/korea/seoul/cheonggyecheon.jpg" },
                            { name: "홍대 버스킹 관람", desc: "젊음의 거리, 길거리 공연", img: "./images/asia_aus/korea/seoul/hongdae_busking.jpg" },
                            { name: "동대문 야시장", desc: "밤이 더 화려한 쇼핑 천국", img: "./images/asia_aus/korea/seoul/dongdaemun_market.jpg" },
                            { name: "경복궁 한복체험", desc: "고궁에서 남기는 인생샷", img: "./images/asia_aus/korea/seoul/gyeongbokgung_hanbok.jpg" },
                            { name: "한강 오리배", desc: "뚝섬 유원지의 추억", img: "./images/asia_aus/korea/seoul/hanriver_duckboat.jpg" },
                            { name: "송파 파크 하비오 워터킹덤&찜질스파", desc: "도심 속 최대 규모 스파", img: "./images/asia_aus/korea/seoul/water_kingdom_spa.jpg" }
                        ],
                        hotels: [
                            { name: "신라호텔", price: "40만원대", desc: "최고의 서비스와 전통" },
                            { name: "L7 명동", price: "15만원대", desc: "트렌디한 라이프스타일 호텔" },
                            { name: "글래드 마포", price: "12만원대", desc: "공항철도 접근성 최고" }
                        ]
                    },
                    "제주": {
                        attractions: [
                            { name: "성산일출봉", desc: "세계자연유산의 일출", img: "./images/asia_aus/korea/jeju/seongsan_ilchulbong.jpg" },
                            { name: "협재 해수욕장", desc: "에메랄드빛 바다", img: "./images/asia_aus/korea/jeju/hyeopjae_beach.jpg" },
                            { name: "한라산", desc: "대한민국의 지붕", img: "./images/asia_aus/korea/jeju/hallasan.jpg" },
                            { name: "카멜리아 힐", desc: "동양에서 가장 큰 동백 수목원", img: "./images/asia_aus/korea/jeju/camellia_hill.jpg" },
                            { name: "섭지코지", desc: "아름다운 해안 절경", img: "./images/asia_aus/korea/jeju/seopjikoji.jpg" }
                        ],
                        restaurants: [
                            { name: "자매국수", desc: "제주 고기국수 맛집", img: "./images/asia_aus/korea/jeju/jamae_guksu.jpg" },
                            { name: "숙성도", desc: "제주 흑돼지의 정점", img: "./images/asia_aus/korea/jeju/sukseongdo.jpg" },
                            { name: "오는정 김밥", desc: "예약 필수 김밥", img: "./images/asia_aus/korea/jeju/oneunjeong_gimbap.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "카페 글렌코", desc: "핑크뮬리 명소", img: "./images/asia_aus/korea/jeju/cafe_glencoe.jpg" },
                                { name: "봄날 카페", desc: "맨도롱 또똣 촬영지", img: "./images/asia_aus/korea/jeju/bomnal_cafe.jpg" },
                                { name: "우무", desc: "제주 명물 커스터드 푸딩", img: "./images/asia_aus/korea/jeju/umu.jpg" },
                                { name: "시소 카이막", desc: "천상의 맛 카이막 맛집", img: "./images/asia_aus/korea/jeju/siso_kaymak.jpg" }
                            ],
                            study: [
                                { name: "에이바우트 커피", desc: "제주 곳곳의 카공 성지", img: "./images/asia_aus/korea/jeju/about_coffee.jpg" }
                            ]
                        },
                        activities: [
                            { name: "올레길 걷기", desc: "제주의 자연을 걷다", img: "./images/asia_aus/korea/jeju/olle_trail.jpg" },
                            { name: "감귤 따기 체험", desc: "새콤달콤 제철 감귤 수확", img: "./images/asia_aus/korea/jeju/tangerine_picking.jpg" },
                            { name: "우도 자전거 투어", desc: "섬 속의 섬, 해안도로 라이딩", img: "./images/asia_aus/korea/jeju/udo_bike.jpg" },
                            { name: "투명 카약 타기", desc: "에메랄드빛 바다 위를 둥둥", img: "./images/asia_aus/korea/jeju/transparent_kayak.jpg" },
                            { name: "황우지 선녀탕", desc: "자연이 만든 천연 수영장", img: "./images/asia_aus/korea/jeju/hwangwuji_coast.jpg" }
                        ],
                        hotels: [
                            { name: "파르나스 제주", price: "35만원대", desc: "서귀포 절경 호텔" },
                            { name: "호텔 신화월드", price: "20만원대", desc: "복합 리조트 단지" },
                            { name: "휘슬락 호텔", price: "8만원대", desc: "공항 근처 가성비 오션뷰" },
                            { name: "신라스테이 이호테우", price: "15만원대", desc: "이호테우 해변 바로 앞 오션뷰" }
                        ]
                    },
                    "강릉": {
                        attractions: [
                            { name: "경포해변 & 경포호", desc: "푸른 동해 바다와 소나무 숲이 어우러진 강릉 대표 해변", img: "./images/asia_aus/korea/gangneung/gyeongpo_beach.jpg" },
                            { name: "안목해변 커피거리", desc: "바다를 마주 보고 로스터리 카페들이 늘어선 해안 산책로", img: "./images/asia_aus/korea/gangneung/anmok_beach.jpg" },
                            { name: "정동진 해변 & 모래시계공원", desc: "바다와 가장 가까운 기차역과 대한민국 대표 일출 명소", img: "./images/asia_aus/korea/gangneung/jeongdongjin.jpg" },
                            { name: "오죽헌", desc: "신사임당과 율곡 이이의 얼이 깃든 검은 대나무 고택", img: "./images/asia_aus/korea/gangneung/ojukheon.jpg" },
                            { name: "주문진 방파제 (도깨비 촬영지)", desc: "에메랄드빛 파도가 부서지는 드라마 도깨비 인생샷 성지", img: "./images/asia_aus/korea/gangneung/jumunjin_breakwater.jpg" }
                        ],
                        restaurants: [
                            { name: "리틀다이너 (Little Diner)", desc: "경포호 인근 감각적인 아메리칸 빈티지 감성의 수제버거 & 브런치 맛집", img: "./images/asia_aus/korea/gangneung/little_diner_gangneung.jpg" },
                            { name: "동화가든", desc: "초당순두부와 얼큰한 짬뽕이 만난 원조 짬뽕순두부 성지", img: "./images/asia_aus/korea/gangneung/donghwa_garden.jpg" },
                            { name: "엄지네포장마차 본점", desc: "중독성 강한 꼬막무침과 꼬막비빔밥의 원조 맛집", img: "./images/asia_aus/korea/gangneung/eomjine_pocha.jpg" },
                            { name: "강릉 중앙시장 (배니닭강정·오징어순대)", desc: "바삭한 닭강정과 모자호떡 등 먹거리 가득한 전통시장", img: "./images/asia_aus/korea/gangneung/gangneung_central_market.jpg" },
                            { name: "형제칼국수", desc: "고추장·된장 칼국수 장칼국수의 진한 국물 노포", img: "./images/asia_aus/korea/gangneung/hyeongje_kalguksu.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "테라로사 커피공장 강릉본점", desc: "붉은 벽돌과 숲속 정원이 어우러진 대한민국 스페셜티 커피 성지", img: "./images/asia_aus/korea/gangneung/terarosa_gangneung.jpg" },
                                { name: "곳 (GOT)", desc: "사천해변 통유리 오션뷰와 천국의 계단 포토존 베이커리 카페", img: "./images/asia_aus/korea/gangneung/cafe_got_gangneung.jpg" }
                            ],
                            study: [
                                { name: "보헤미안 박이추 커피공장", desc: "한국 1세대 바리스타의 핸드드립 커피와 차분한 독서·작업 공간", img: "./images/asia_aus/korea/gangneung/bohemian_roasters.jpg" },
                                { name: "스타벅스 강릉안목항점", desc: "안목해변 정면 통창 오션뷰 좌석에서 여유롭게 집중하는 명당", img: "./images/asia_aus/korea/gangneung/starbucks_anmok.jpg" }
                            ]
                        },
                        activities: [
                            { name: "아르떼뮤지엄 강릉", desc: "영원한 자연을 테마로 한 압도적 몰입형 미디어아트 전시관", img: "./images/asia_aus/korea/gangneung/arte_museum_gangneung.jpg" },
                            { name: "정동진 레일바이크", desc: "시원한 동해 바닷바람을 맞으며 해안 철길을 달리는 레일바이크", img: "./images/asia_aus/korea/gangneung/jeongdongjin_railbike.jpg" },
                            { name: "하슬라아트월드 관람", desc: "절벽 위 동해 바다를 품은 피노키오 미술관과 야외 조각공원", img: "./images/asia_aus/korea/gangneung/haslla_art_world.jpg" },
                            { name: "경포호 자전거 일주", desc: "소나무 숲길과 호수 둘레길을 따라 달리는 커플·전기 자전거", img: "./images/asia_aus/korea/gangneung/gyeongpo_lake_bike.jpg" }
                        ],
                        hotels: [
                            { name: "씨마크 호텔 (SEAMARQ)", price: "약 45만원대", desc: "경포해변과 수평선이 이어지는 인피니티 풀 5성급 럭셔리 호텔" },
                            { name: "스카이베이 호텔 경포", price: "약 18만원대", desc: "경포해변과 경포호 사이에 우뚝 솟은 루프탑 수영장 랜드마크" },
                            { name: "세인트존스 호텔", price: "약 15만원대", desc: "강문해변 앞 소나무 숲과 오션뷰 인피니티 풀을 갖춘 인기 호텔" },
                            { name: "신라스테이 강릉", price: "약 14만원대", desc: "송정해변 인근 깔끔하고 모던한 신축 가성비 비즈니스 호텔" }
                        ]
                    },
                    "속초": {
                        attractions: [
                            { name: "설악산 국립공원 & 권금성", desc: "케이블카로 오르는 기암괴석 절경과 울산바위 파노라마", img: "./images/asia_aus/korea/sokcho/seoraksan.jpg" },
                            { name: "속초아이 대관람차 & 속초해수욕장", desc: "에메랄드빛 속초 해변 위를 수놓는 오션뷰 대관람차", img: "./images/asia_aus/korea/sokcho/sokcho_eye.jpg" },
                            { name: "영금정 해돋이정자", desc: "파도가 바위에 부딪히며 거문고 소리를 내는 해상 정자", img: "./images/asia_aus/korea/sokcho/yeonggeumjeong.jpg" },
                            { name: "외옹치 바다향기로", desc: "수십 년간 비공개였던 해안 절벽을 따라 걷는 데크 산책로", img: "./images/asia_aus/korea/sokcho/oeongchi_trail.jpg" },
                            { name: "아바이마을 & 갯배", desc: "사람이 직접 줄을 당겨 건너는 갯배와 실향민의 애환이 담긴 마을", img: "./images/asia_aus/korea/sokcho/abai_village.jpg" }
                        ],
                        restaurants: [
                            { name: "만석닭강정 본점", desc: "속초 관광수산시장 필수 코스, 식어도 바삭한 명물 닭강정", img: "./images/asia_aus/korea/sokcho/manseok_chicken.jpg" },
                            { name: "봉포머구리집", desc: "신선한 전복과 해산물이 산더미처럼 올라간 시원한 성게모둠물회", img: "./images/asia_aus/korea/sokcho/bongpo_meoguri.jpg" },
                            { name: "단천식당", desc: "아바이마을 3대째 이어오는 고소한 아바이순대와 명태회냉면", img: "./images/asia_aus/korea/sokcho/dancheon_sikdang.jpg" },
                            { name: "청초수물회 속초본점", desc: "청초호 뷰와 함께 사골 육수 살얼음으로 즐기는 해전물회", img: "./images/asia_aus/korea/sokcho/cheongchosu_mulhoe.jpg" },
                            { name: "속초 붉은대게수산 (중앙시장)", desc: "달큰하고 수율 좋은 동해 홍게·대게찜과 게딱지 볶음밥", img: "./images/asia_aus/korea/sokcho/sokcho_red_crab.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "칠성조선소 살롱", desc: "청초호변 옛 배를 만들던 조선소를 개조한 빈티지 오션뷰 카페", img: "./images/asia_aus/korea/sokcho/chilseong_shipyard.jpg" },
                                { name: "바다정원 (Bada Garden)", desc: "넓은 소나무 해변 정원과 루프탑에서 동해를 만끽하는 대형 베이커리", img: "./images/asia_aus/korea/sokcho/bada_garden_sokcho.jpg" }
                            ],
                            study: [
                                { name: "문우당서림 & 북카페", desc: "속초를 대표하는 로컬 동네서점과 조용히 독서하기 좋은 공간", img: "./images/asia_aus/korea/sokcho/munwoodang_bookshop.jpg" },
                                { name: "보사노바 커피로스터스 속초점", desc: "속초해수욕장 앞 쾌적한 통창 좌석과 직접 로스팅한 스페셜티 커피", img: "./images/asia_aus/korea/sokcho/bossanova_sokcho.jpg" }
                            ]
                        },
                        activities: [
                            { name: "설악 케이블카 탑승", desc: "해발 700m 권금성까지 단숨에 올라 설악산과 동해를 조망", img: "./images/asia_aus/korea/sokcho/seorak_cable_car.jpg" },
                            { name: "속초 관광수산시장 (중앙시장) 먹방 투어", desc: "오징어순대·새우강정·감자전 등 활기찬 시장 야식 탐방", img: "./images/asia_aus/korea/sokcho/sokcho_central_market.jpg" },
                            { name: "척산온천휴양촌 온천욕", desc: "설악산 자락 천연 알칼리성 온천수로 피로를 녹이는 힐링", img: "./images/asia_aus/korea/sokcho/cheoksan_onsen.jpg" },
                            { name: "청초호 요트 투어", desc: "속초 시내와 설악산 능선을 바다 위 요트에서 감상하는 크루즈", img: "./images/asia_aus/korea/sokcho/cheongchoho_yacht.jpg" }
                        ],
                        hotels: [
                            { name: "롯데리조트 속초", price: "약 28만원대", desc: "3면이 바다로 둘러싸인 외옹치 절벽 위 인피니티 풀 리조트" },
                            { name: "카시아 속초 (반얀트리 그룹)", price: "약 35만원대", desc: "대포항 옆 전 객실 욕조와 오션뷰를 갖춘 최신 5성급 럭셔리 호텔" },
                            { name: "체스터톤스 속초", price: "약 11만원대", desc: "청초호 인근 대형 온천 수영장을 갖춘 가성비 가족·커플 숙소" },
                            { name: "라마다 속초 호텔", price: "약 12만원대", desc: "대포항 바로 앞 전 객실 바다 발코니 뷰를 자랑하는 실속 호텔" }
                        ]
                    },
                    "부산": {
                        attractions: [
                            { name: "광안리 해수욕장 & 광안대교", desc: "다이아몬드 브리지 야경과 드론쇼가 펼쳐지는 부산의 낭만 해변", img: "./images/asia_aus/korea/busan/gwangalli_beach.jpg" },
                            { name: "해운대 해수욕장 & 더베이101", desc: "마천루 스카이라인과 푸른 바다가 어우러진 대한민국 대표 해변", img: "./images/asia_aus/korea/busan/haeundae_beach.jpg" },
                            { name: "감천문화마을", desc: "산비탈을 따라 파스텔톤 집들이 계단식으로 늘어선 한국의 마추픽추", img: "./images/asia_aus/korea/busan/gamcheon_village.jpg" },
                            { name: "해동용궁사", desc: "기장 해안 절벽 바위 위에 세워진 바다와 가장 가까운 수상 사찰", img: "./images/asia_aus/korea/busan/haedong_yonggungsa.jpg" },
                            { name: "흰여울문화마을", desc: "영도 절벽 끝 푸른 남항 바다를 끼고 걷는 영화 변호인 촬영지", img: "./images/asia_aus/korea/busan/huinnyeoul_village.jpg" }
                        ],
                        restaurants: [
                            { name: "쌍둥이돼지국밥 본점", desc: "진하고 구수한 사골 육수에 야들야들한 수육이 일품인 부산 소울푸드", img: "./images/asia_aus/korea/busan/ssangdungi_pork_soup.jpg" },
                            { name: "톤쇼우 (Tonsou 광안점)", desc: "비장탄 숯불 향을 입혀 육즙이 살아있는 부산 1등 돈카츠", img: "./images/asia_aus/korea/busan/tonsou_busan.jpg" },
                            { name: "해운대 암소갈비집", desc: "60년 전통 한옥에서 즐기는 부드러운 한우 생갈비와 감자사리", img: "./images/asia_aus/korea/busan/haeundae_amso_galbi.jpg" },
                            { name: "이재모피자", desc: "임실 치즈가 폭포처럼 흘러내리는 부산 로컬 웨이팅 1순위 피자", img: "./images/asia_aus/korea/busan/ijaemo_pizza.jpg" },
                            { name: "개미집 본점 (낙곱새)", desc: "매콤한 양념에 낙지·곱창·새우를 볶아 당면과 비벼 먹는 원조 낙곱새", img: "./images/asia_aus/korea/busan/gaemijip_busan.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "피아크 (P.ARK 영도)", desc: "오륙도와 부산항이 한눈에 펼쳐지는 초대형 복합문화 오션뷰 카페", img: "./images/asia_aus/korea/busan/p_ark_busan.jpg" },
                                { name: "웨이브온 커피 (Waveon 기장)", desc: "기장 바다 절벽 위 건축상을 받은 노출콘크리트 오션뷰 로스터리", img: "./images/asia_aus/korea/busan/waveon_coffee.jpg" }
                            ],
                            study: [
                                { name: "모모스커피 영도 로스터리", desc: "월드 바리스타 챔피언 전주연 바리스타의 스페셜티 커피 성지", img: "./images/asia_aus/korea/busan/momos_coffee.jpg" },
                                { name: "전포카페거리 에프엠커피 (FM Coffee)", desc: "서면 전포동의 진한 투모로우 모카와 차분한 작업 공간", img: "./images/asia_aus/korea/busan/fm_coffee_busan.jpg" }
                            ]
                        },
                        activities: [
                            { name: "해운대 블루라인파크 스카이캡슐", desc: "미포에서 청사포까지 바다 위 공중 레일을 달리는 알록달록 캡슐열차", img: "./images/asia_aus/korea/busan/haeundae_sky_capsule.jpg" },
                            { name: "광안리 선셋 & 불꽃 요트투어", desc: "광안대교 바로 아래에서 밤바다 불꽃놀이를 감상하는 럭셔리 요트", img: "./images/asia_aus/korea/busan/gwangalli_yacht_tour.jpg" },
                            { name: "송도 해상케이블카 & 용궁구름다리", desc: "바다 위를 가로지르는 크리스탈 크루즈 케이블카", img: "./images/asia_aus/korea/busan/songdo_cable_car.jpg" },
                            { name: "부산 엑스더스카이 & 클럽디오아시스", desc: "엘시티 100층 전망대와 해운대 오션뷰 인피니티 스파·워터파크", img: "./images/asia_aus/korea/busan/busan_x_the_sky.jpg" }
                        ],
                        hotels: [
                            { name: "시그니엘 부산", price: "약 45만원대", desc: "해운대 엘시티 타워에 자리한 파노라마 오션뷰 최고급 5성급 호텔" },
                            { name: "파라다이스 호텔 부산", price: "약 38만원대", desc: "해운대 바다와 맞닿은 야외 오션스파 씨메르로 유명한 명문 호텔" },
                            { name: "신라스테이 해운대", price: "약 16만원대", desc: "해운대 해수욕장 바로 앞 뛰어난 접근성과 가성비 비즈니스 호텔" },
                            { name: "켄트호텔 광안리 by 켄싱턴", price: "약 14만원대", desc: "광안대교 정면 뷰 루프탑 스카이덱을 갖춘 실속 오션뷰 호텔" }
                        ]
                    },
                    "경주": {
                        attractions: [
                            { name: "동궁과 월지 (안압지)", desc: "연못 위에 황홀하게 비치는 신라 왕궁 별궁의 천년 야경", img: "./images/asia_aus/korea/gyeongju/donggung_and_wolji.jpg" },
                            { name: "불국사 & 석굴암", desc: "다보탑과 석가탑이 자리한 유네스코 세계문화유산 신라 불교 예술의 정수", img: "./images/asia_aus/korea/gyeongju/bulguksa_temple.jpg" },
                            { name: "첨성대 & 대릉원 (천마총)", desc: "동양 최고(最古)의 천문대와 부드러운 곡선의 고분군 산책로", img: "./images/asia_aus/korea/gyeongju/cheomseongdae.jpg" },
                            { name: "황리단길", desc: "전통 한옥 지붕 아래 트렌디한 소품샵과 맛집이 모인 핫플레이스", img: "./images/asia_aus/korea/gyeongju/hwangnidan_gil.jpg" },
                            { name: "월정교", desc: "남천 위에 복원된 웅장한 신라 시대 목조 누각 다리와 반영 명소", img: "./images/asia_aus/korea/gyeongju/woljeonggyo_bridge.jpg" }
                        ],
                        restaurants: [
                            { name: "함양집 본점", desc: "새콤달콤 시원한 육수에 고소한 한우가 듬뿍 들어간 전통 한우물회", img: "./images/asia_aus/korea/gyeongju/hamyangjip.jpg" },
                            { name: "교리김밥 본점", desc: "계란지단이 빈틈없이 폭신하게 채워진 경주 3대 김밥 맛집", img: "./images/asia_aus/korea/gyeongju/gyori_gimbap.jpg" },
                            { name: "향화정", desc: "황리단길 한옥 마당에서 즐기는 바삭한 해물파전과 꼬막무침비빔밥", img: "./images/asia_aus/korea/gyeongju/hyanghwajeong.jpg" },
                            { name: "맷돌순두부", desc: "보문단지 인근 국내산 콩을 맷돌로 갈아 만든 구수한 순두부찌개", img: "./images/asia_aus/korea/gyeongju/maetdol_sundubu.jpg" },
                            { name: "황남빵 본점 & 십원빵", desc: "80년 전통 수제 팥앙금 황남빵과 치즈가 늘어나는 황리단길 십원빵", img: "./images/asia_aus/korea/gyeongju/hwangnambbang.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "스컹크웍스 (Skunk Works)", desc: "능소화와 배롱나무가 핀 넓은 한옥 정원에서 즐기는 감성 카페", img: "./images/asia_aus/korea/gyeongju/skunk_works_gyeongju.jpg" },
                                { name: "올리브 (Cafe Olive)", desc: "햇살 가득한 마당과 단풍나무가 아름다운 황리단길 베이커리 카페", img: "./images/asia_aus/korea/gyeongju/cafe_olive_gyeongju.jpg" }
                            ],
                            study: [
                                { name: "어서어서 (신간과 구간 사이)", desc: "약봉지에 책갈피를 담아주는 황리단길의 고즈넉한 감성 독립서점", img: "./images/asia_aus/korea/gyeongju/eoseoeoseo_bookshop.jpg" },
                                { name: "노워즈 (No Words)", desc: "고소한 플랫화이트와 미니멀한 한옥 인테리어의 스페셜티 커피 바", img: "./images/asia_aus/korea/gyeongju/no_words_gyeongju.jpg" }
                            ]
                        },
                        activities: [
                            { name: "경주월드 (드라켄 & 파에톤)", desc: "수직 하강 롤러코스터 드라켄으로 유명한 스릴 만점 테마파크", img: "./images/asia_aus/korea/gyeongju/gyeongju_world.jpg" },
                            { name: "대릉원 한복 스냅 & 고분 산책", desc: "목련 나무 포토존과 초록빛 왕릉 사이를 거니는 감성 산책", img: "./images/asia_aus/korea/gyeongju/daereungwon.jpg" },
                            { name: "보문관광단지 호수 백조보트 & 자전거", desc: "벚꽃과 단풍이 아름다운 보문호수 둘레길 라이딩", img: "./images/asia_aus/korea/gyeongju/bomun_lake.jpg" },
                            { name: "국립경주박물관 천마총 금관 관람", desc: "성덕대왕신종(에밀레종)과 찬란한 신라 황금 유물 탐방", img: "./images/asia_aus/korea/gyeongju/gyeongju_national_museum.jpg" }
                        ],
                        hotels: [
                            { name: "힐튼 경주 (Hilton Gyeongju)", price: "약 28만원대", desc: "보문호수와 경주월드가 한눈에 보이는 대표 5성급 패밀리 호텔" },
                            { name: "라한셀렉트 경주", price: "약 24만원대", desc: "보문호수 뷰와 대형 북스토어·편집샵을 갖춘 감각적인 호텔" },
                            { name: "황남관 한옥호텔", price: "약 15만원대", desc: "황리단길 도보권에서 전통 한옥의 정취를 느끼는 고택 숙소" },
                            { name: "베니키아 스위스로젠 호텔", price: "약 10만원대", desc: "보문단지 내 깔끔하고 합리적인 가격의 가성비 숙소" }
                        ]
                    },
                    "전주": {
                        attractions: [
                            { name: "전주한옥마을", desc: "700여 채의 전통 한옥 기와지붕이 끝없이 펼쳐진 대한민국 대표 한옥마을", img: "./images/asia_aus/korea/jeonju/jeonju_hanok_village.jpg" },
                            { name: "경기전 & 어진박물관", desc: "조선 태조 이성계의 어진을 모신 고즈넉한 대나무 숲 고궁", img: "./images/asia_aus/korea/jeonju/gyeonggijeon.jpg" },
                            { name: "전동성당", desc: "로마네스크와 비잔틴 양식이 조화를 이룬 호남 최초의 서양식 성당", img: "./images/asia_aus/korea/jeonju/jeondong_cathedral.jpg" },
                            { name: "오목대 & 이목대", desc: "전주한옥마을의 검은 기와 물결이 한눈에 내려다보이는 언덕 정자", img: "./images/asia_aus/korea/jeonju/omokdae.jpg" },
                            { name: "덕진공원 & 연화정도서관", desc: "여름이면 연꽃이 가득 피어나고 호수 위 한옥 도서관이 떠 있는 공원", img: "./images/asia_aus/korea/jeonju/deokjin_park.jpg" }
                        ],
                        restaurants: [
                            { name: "한국집 (전주비빔밥 원조)", desc: "놋그릇에 육회와 황포묵을 정갈하게 담아낸 70년 전통 전주비빔밥 명가", img: "./images/asia_aus/korea/jeonju/hangukjip_jeonju.jpg" },
                            { name: "삼백집 본점", desc: "달걀수란과 김을 곁들여 먹는 시원하고 깔끔한 전주 콩나물국밥 원조", img: "./images/asia_aus/korea/jeonju/sambaekjip.jpg" },
                            { name: "베테랑 칼국수", desc: "들깨가루와 고춧가루, 걸쭉한 계란 풀어낸 국물이 일품인 칼국수 & 쫄면", img: "./images/asia_aus/korea/jeonju/veteran_kalguksu.jpg" },
                            { name: "PNB 풍년제과 본점", desc: "촉촉한 빵 속에 크림과 딸기잼이 듬뿍 들어간 전주 수제 초코파이 원조", img: "./images/asia_aus/korea/jeonju/pnb_bakery.jpg" },
                            { name: "진미집 본점", desc: "연탄불 향 가득한 돼지불고기를 김과 쌈무에 싸서 간장소스에 찍어 먹는 노포", img: "./images/asia_aus/korea/jeonju/jinmijip_jeonju.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "전망 (Cafe Jeonmang)", desc: "한옥마을 최상층 테라스에서 기와지붕 파노라마와 노을을 감상하는 뷰 카페", img: "./images/asia_aus/korea/jeonju/cafe_jeonmang.jpg" },
                                { name: "마스랑 (Maslang)", desc: "한옥의 서까래와 통유리 중정이 어우러진 찹쌀 타르트 디저트 카페", img: "./images/asia_aus/korea/jeonju/maslang_jeonju.jpg" }
                            ],
                            study: [
                                { name: "평화와평화 (Peace and Peace)", desc: "객리단길의 차분한 우드톤 인테리어와 계절 타르트가 맛있는 조용한 카페", img: "./images/asia_aus/korea/jeonju/peace_and_peace.jpg" },
                                { name: "오디너리 (Ordinary)", desc: "전주 객사길 인근 향긋한 드립 커피와 독서·작업하기 좋은 공간", img: "./images/asia_aus/korea/jeonju/ordinary_cafe_jeonju.jpg" }
                            ]
                        },
                        activities: [
                            { name: "전주한옥마을 한복 대여 & 스냅 투어", desc: "화사한 전통·개량 한복을 입고 경기전 돌담길을 거니는 체험", img: "./images/asia_aus/korea/jeonju/jeonju_hanbok_experience.jpg" },
                            { name: "남부시장 야시장 & 청년몰 탐방", desc: "육전·삼겹살김밥 등 야식 먹거리와 레트로 감성 소품샵 구경", img: "./images/asia_aus/korea/jeonju/nambu_night_market.jpg" },
                            { name: "가맥집 (전일갑오·초원슈퍼) 맥주 체험", desc: "연탄불에 구운 황태와 갑오징어에 얼음 맥주를 마시는 전주만의 가맥 문화", img: "./images/asia_aus/korea/jeonju/jeonju_gamaek.jpg" },
                            { name: "자만벽화마을 산책", desc: "한옥마을 건너편 언덕배기 골목마다 동화 같은 벽화가 그려진 마을", img: "./images/asia_aus/korea/jeonju/jaman_mural_village.jpg" }
                        ],
                        hotels: [
                            { name: "라한호텔 전주", price: "약 18만원대", desc: "한옥마을 기와지붕 뷰와 루프탑 야외 수영장을 갖춘 대표 4성급 호텔" },
                            { name: "왕의지밀 (Royal Room)", price: "약 20만원대", desc: "조선 왕들의 이름을 딴 6천 평 규모의 웅장한 전통 한옥 호텔" },
                            { name: "베스트웨스턴 플러스 전주", price: "약 12만원대", desc: "한옥마을과 객리단길 사이에 위치한 깔끔한 가성비 비즈니스 호텔" },
                            { name: "학인당 (전주 고택 스테이)", price: "약 15만원대", desc: "백범 김구 선생이 머물렀던 100년 역사의 명문 고택 한옥 스테이" }
                        ]
                    },
                    "여수": {
                        attractions: [
                            { name: "오동도", desc: "붉은 동백꽃 숲길과 기암절벽 해안 산책로가 아름다운 여수의 상징 섬", img: "./images/asia_aus/korea/yeosu/odongdo.jpg" },
                            { name: "향일암", desc: "금오산 기암절벽 바위틈을 지나 마주하는 남해 최고의 해돋이 사찰", img: "./images/asia_aus/korea/yeosu/hyangiram.jpg" },
                            { name: "이순신광장 & 진남관", desc: "거북선 모형과 여수 먹거리 골목이 모인 여행의 시작점", img: "./images/asia_aus/korea/yeosu/yi_sun_sin_square.jpg" },
                            { name: "고소동 천사벽화마을", desc: "여수 밤바다와 돌산대교가 내려다보이는 언덕 위 감성 벽화 골목", img: "./images/asia_aus/korea/yeosu/gosodong_mural_village.jpg" },
                            { name: "여수 예술랜드 (미다스의 손)", desc: "남해 바다 위로 뻗은 거대한 손 조각상 포토존과 공중그네 명소", img: "./images/asia_aus/korea/yeosu/yeosu_art_land.jpg" }
                        ],
                        restaurants: [
                            { name: "명동게장 (여수 돌게장 백반)", desc: "감칠맛 넘치는 양념·간장 돌게장과 갈치조림이 푸짐하게 나오는 게장 맛집", img: "./images/asia_aus/korea/yeosu/myeongdong_gejang.jpg" },
                            { name: "여수 낭만포차거리 (해물삼합)", desc: "거북선대교 야경 아래서 돌산갓김치·삼겹살·낙지·전복을 구워 먹는 해물삼합", img: "./images/asia_aus/korea/yeosu/yeosu_nangman_pocha.jpg" },
                            { name: "경도회관 (하모 유비끼·샤브샤브)", desc: "배를 타고 들어가 바다를 보며 즐기는 여름 별미 갯장어(하모) 샤브샤브", img: "./images/asia_aus/korea/yeosu/gyeongdo_hoegwan.jpg" },
                            { name: "여수당 & 여수딸기모찌", desc: "이순신광장 필수 간식, 향긋한 해풍 쑥아이스크림과 앙금 딸기모찌", img: "./images/asia_aus/korea/yeosu/yeosudang.jpg" },
                            { name: "나진국밥", desc: "화양면에서 줄 서서 먹는 칼칼하고 진한 돼지국밥과 새콤한 수육", img: "./images/asia_aus/korea/yeosu/najin_gukbap.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "모이핀 (Moifin)", desc: "돌산도 절벽 통유리창 너머로 탁 트인 남해 바다가 펼쳐지는 대형 오션뷰 카페", img: "./images/asia_aus/korea/yeosu/moifin_yeosu.jpg" },
                                { name: "프롬나드 (Promenade)", desc: "실내 열대 식물원과 루프탑 바다 전망이 어우러진 돌산 감성 카페", img: "./images/asia_aus/korea/yeosu/promenade_yeosu.jpg" }
                            ],
                            study: [
                                { name: "카페 낭만도시", desc: "고소동 벽화마을 언덕에서 여수항과 거북선대교를 바라보며 쉬어가는 공간", img: "./images/asia_aus/korea/yeosu/cafe_nangman_yeosu.jpg" },
                                { name: "비스토니 커피 (Bistoni)", desc: "만성리 검은모래해변 인근 넓고 쾌적한 좌석을 갖춘 로스터리 카페", img: "./images/asia_aus/korea/yeosu/bistoni_coffee.jpg" }
                            ]
                        },
                        activities: [
                            { name: "여수 해상케이블카 탑승", desc: "돌산공원에서 자산공원까지 바다 위를 가로지르는 크리스탈 캐빈 야경", img: "./images/asia_aus/korea/yeosu/yeosu_cable_car.jpg" },
                            { name: "아쿠아플라넷 여수 & 아르떼뮤지엄", desc: "흰고래 벨루가를 만나는 아쿠아리움과 엑스포장 미디어아트 관람", img: "./images/asia_aus/korea/yeosu/aqua_planet_yeosu.jpg" },
                            { name: "여수 밤바다 낭만 크루즈 & 선상 불꽃쇼", desc: "돌산대교와 장군도 야경 위로 터지는 황홀한 선상 불꽃놀이 유람선", img: "./images/asia_aus/korea/yeosu/yeosu_night_cruise.jpg" },
                            { name: "여수 해양레일바이크", desc: "만성리 해안가를 따라 시원한 남해 바닷바람을 맞으며 달리는 레일바이크", img: "./images/asia_aus/korea/yeosu/yeosu_railbike.jpg" }
                        ],
                        hotels: [
                            { name: "소노캄 여수 (Sono Calm)", price: "약 25만원대", desc: "오동도 입구 바로 앞, 전 객실 그림 같은 남해 오션뷰 5성급 호텔" },
                            { name: "라테라스 리조트 & 스파", price: "약 22만원대", desc: "돌산도 바다와 맞닿은 온수 인피니티 풀과 자쿠지가 유명한 리조트" },
                            { name: "히든베이 호텔", price: "약 16만원대", desc: "날개 모양 건축 디자인으로 모든 객실에서 일몰 바다를 감상하는 호텔" },
                            { name: "베네치아 호텔 & 리조트", price: "약 14만원대", desc: "여수엑스포역 도보권, 루프탑 수영장을 갖춘 가성비 오션뷰 호텔" }
                        ]
                    },
                    "익산": {
                        attractions: [
                            { name: "미륵사지 & 국립익산박물관", desc: "백제 최대 사찰 터에 우뚝 선 국보 미륵사지 석탑과 유네스코 세계유산", img: "./images/asia_aus/korea/iksan/mireuksaji.jpg" },
                            { name: "익산 교도소 세트장", desc: "7번방의 선물·시그널 등 수백 편의 영화가 촬영된 이색 체험 명소", img: "./images/asia_aus/korea/iksan/iksan_prison_set.jpg" },
                            { name: "아가페 정원", desc: "50년 넘게 가꾼 40m 메타세쿼이아 산책로와 향나무 토피어리 비밀정원", img: "./images/asia_aus/korea/iksan/agape_garden.jpg" },
                            { name: "왕궁리 유적 & 왕궁리 오층석탑", desc: "백제 무왕의 왕궁터와 노을빛이 아름다운 천년 국보 석탑", img: "./images/asia_aus/korea/iksan/wanggungni_ruins.jpg" },
                            { name: "바람개비길 (성당포구 마을)", desc: "금강 강변 둑방을 따라 수천 개의 알록달록 바람개비가 돌아가는 산책길", img: "./images/asia_aus/korea/iksan/pinwheel_road_iksan.jpg" }
                        ],
                        restaurants: [
                            { name: "황등 시장비빔밥 (황등비빔밥·진미식당)", desc: "고운 선짓국 육수로 밥을 토렴해 육회를 듬뿍 올린 전국 3대 비빔밥의 전설", img: "./images/asia_aus/korea/iksan/hwangdeung_bibimbap.jpg" },
                            { name: "만석보 (시장비빔밥 노포)", desc: "황등시장 안에서 3대째 이어오는 따뜻하고 감칠맛 나는 전통 육회 비빔밥", img: "./images/asia_aus/korea/iksan/manseokbo_bibimbap.jpg" },
                            { name: "부송국수 본점", desc: "깊은 멸치 육수의 물국수와 매콤달콤 비빔국수로 줄 서는 익산 로컬 맛집", img: "./images/asia_aus/korea/iksan/busong_guksu.jpg" },
                            { name: "고려당 (익산 노포 분식)", desc: "냄비우동과 냉면, 찐만두와 단팥죽으로 오랜 세월 사랑받는 추억의 맛집", img: "./images/asia_aus/korea/iksan/goryeodang_iksan.jpg" },
                            { name: "익산 마룡통닭 & 시장 통닭골목", desc: "가마솥에서 바삭하게 튀겨낸 옛날 통닭과 닭똥집 튀김", img: "./images/asia_aus/korea/iksan/iksan_fried_chicken.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "왕궁포레스트 (Wanggung Forest)", desc: "1,300평 초대형 아열대 유리 온실 식물원과 족욕을 즐기는 힐링 카페", img: "./images/asia_aus/korea/iksan/wanggung_forest.jpg" },
                                { name: "클로이데이즈 (Chloe Days)", desc: "익산 구도심 적산가옥과 감각적인 정원이 어우러진 브런치·디저트 카페", img: "./images/asia_aus/korea/iksan/chloe_days_iksan.jpg" }
                            ],
                            study: [
                                { name: "금종제과 (Geumjong Bakery)", desc: "옛 은행을 개조해 금고 문을 그대로 살린 고풍스러운 대형 베이커리 카페", img: "./images/asia_aus/korea/iksan/geumjong_bakery.jpg" },
                                { name: "메이드인헤븐 (Made in Heaven)", desc: "모현동 호수공원 인근 넓고 쾌적한 좌석을 갖춘 카공 & 스페셜티 카페", img: "./images/asia_aus/korea/iksan/made_in_heaven_iksan.jpg" }
                            ]
                        },
                        activities: [
                            { name: "익산 보석박물관 & 공룡테마공원", desc: "11만 점의 진귀한 보석 전시와 거대한 공룡 조형물 슬라이드 체험", img: "./images/asia_aus/korea/iksan/iksan_jewelry_museum.jpg" },
                            { name: "웅포 곰개나루 금강 낙조 감상", desc: "서해와 만나는 금강 위로 붉게 타오르는 대한민국 7대 일몰 명소", img: "./images/asia_aus/korea/iksan/gomgaenaru_sunset.jpg" },
                            { name: "나바위성당 & 산책로 투어", desc: "한옥 기와와 서양 고딕 첨탑이 조화를 이룬 김대건 신부 첫 상륙 기념 성당", img: "./images/asia_aus/korea/iksan/nabawi_church.jpg" },
                            { name: "고스락 유기농 정원 항아리 산책", desc: "5천여 개의 전통 장독대가 소나무 정원과 어우러진 발효 테마파크", img: "./images/asia_aus/korea/iksan/gosrak_iksan.jpg" }
                        ],
                        hotels: [
                            { name: "웨스턴라이프 호텔 익산", price: "약 11만원대", desc: "루프탑 인피니티 풀을 갖춘 익산 유일의 4성급 관광호텔" },
                            { name: "익산 그랜드팰리스 호텔", price: "약 8만원대", desc: "어양동 중심가에 위치한 깔끔하고 넓은 객실의 비즈니스 숙소" },
                            { name: "링스관광호텔 익산", price: "약 7만원대", desc: "익산역·모현동 인근 이동이 편리한 실속형 가성비 호텔" }
                        ]
                    }
                }
            },
            "호주": {
                desc: "웅장한 자연과 세련된 시티 라이프의 완벽한 밸런스",
                cities: {
                    "시드니": {
                        attractions: [
                            { name: "오페라 하우스", desc: "시드니의 상징. 밤에는 클래식 공연 관람 추천!", img: "./images/asia_aus/australia/sydney/sydney_operahouse.jpg" },
                            { name: "천문대 언덕", desc: "욜로인영 추천 선셋 명당. 돗자리 지참 필수!", img: "./images/asia_aus/australia/sydney/sydney_observatory.jpg" },
                            { name: "QVB (퀸 빅토리아 빌딩)", desc: "세상에서 가장 아름다운 쇼핑몰. 어그 쇼핑 추천", img: "./images/asia_aus/australia/sydney/sydney_qvb.jpg" },
                            { name: "갭 파크 (Gap Park)", desc: "영화 '빠삐용' 촬영지. 절벽과 바다의 조화", img: "./images/asia_aus/australia/sydney/sydney_gap_park.jpg" },
                            { name: "시 라이프 시드니 아쿠아리움", desc: "대형 수중 터널과 듀공을 만날 수 있는 곳", img: "./images/asia_aus/australia/sydney/sydney_aquarium.jpg" },
                            { name: "밀슨스 포인트", desc: "하버브릿지를 가장 가까이서 보는 산책로", img: "./images/asia_aus/australia/sydney/sydney_milsens_point.jpg" }
                        ],
                        restaurants: [
                            { name: "허리케인 그릴 (Hurricane's Grill)", desc: "<b>[메뉴]</b> 포크 립(하프), 고구마 튀김<br><b>[특징]</b> 한국인 필수 코스. 양도 맛도 최고.", img: "./images/asia_aus/australia/sydney/sydney_hurricanes_grill.jpg" },
                            { name: "챗 타이 (Chat Thai)", desc: "<b>[메뉴]</b> 팟타이(새우), 똠얌꿍<br><b>[특징]</b> 기름지고 짭짤한 인생 팟타이.", img: "./images/asia_aus/australia/sydney/sydney_chat_thai.jpg" },
                            { name: "니치 (Nichi Getsu Do)", desc: "<b>[메뉴]</b> 스파이시 미소 라멘, 교자<br><b>[특징]</b> 느끼함 달래주는 얼큰한 국물.", img: "./images/asia_aus/australia/sydney/sydney_nichi.jpg" },
                            { name: "베티스 버거 (Betty's Burgers)", desc: "<b>[메뉴]</b> 비프 버거 (본다이 비치)<br><b>[특징]</b> 버터 향 가득한 자극적인 맛.", img: "./images/asia_aus/australia/sydney/sydney_betty_burgers.jpg" },
                            { name: "쉐프 갤러리 (Chefs Gallery)", desc: "<b>[메뉴]</b> 큐브 스테이크, 해산물 볶음면<br><b>[특징]</b> QVB 근처 부드러운 고기 맛집.", img: "./images/asia_aus/australia/sydney/sydney_chefs_gallery.jpg" },
                            { name: "마키아토 (Macchiato)", desc: "<b>[메뉴]</b> 페퍼로니 화덕 피자<br><b>[특징]</b> 짭짤한 도우와 신선한 토핑.", img: "./images/asia_aus/australia/sydney/sydney_macchiato.jpg" },
                            { name: "오페라 바 (Opera Bar)", desc: "<b>[메뉴]</b> 깔라마리 튀김, 무알콜 맥주<br><b>[특징]</b> 오페라 하우스 바로 앞에서 뷰를 즐기며 간단히 먹기 좋음.", img: "./images/asia_aus/australia/sydney/sydney_opera_bar.jpg" },
                            { name: "본다이 아이스버그 클럽", desc: "<b>[메뉴]</b> 아이스 모카<br><b>[특징]</b> 수영장 뷰 보며 당 충전.", img: "./images/asia_aus/australia/sydney/sydney_iceberg_club.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "파라마운트 커피 프로젝트", desc: "감각적인 브런치 맛집. 오션 트라우트 토스트 추천", img: "./images/asia_aus/australia/sydney/sydney_parliament_coffee_project.jpg" },
                                { name: "오페라 바 (Opera Bar)", desc: "오페라 하우스 뷰와 함께 즐기는 깔라마리 튀김", img: "./images/asia_aus/australia/sydney/sydney_opera_bar.jpg" },
                                { name: "The Grounds of Alexandria", desc: "동화 같은 정원 분위기. 인생샷 성지", img: "./images/asia_aus/australia/sydney/sydney_the_grounds_of_alexandria.jpg" },
                                { name: "블랙스타 페이스트리", desc: "시드니 필수 먹거리 '수박 케이크' 원조", img: "./images/asia_aus/australia/sydney/sydney_blackstar_pastries.jpg" }
                            ],
                            study: [
                                { name: "싱글 오 (Single O)", desc: "시드니 3대 커피. 바나나 브레드(에스프레소 버터) 필수", img: "./images/asia_aus/australia/sydney/sydney_single_o.jpg" },
                                { name: "에디션 로스터스", desc: "차분한 일본풍 분위기. 트러플 오믈렛 추천", img: "./images/asia_aus/australia/sydney/sydney_edition_roasters.jpg" },
                                { name: "캄포스 커피 (Campos)", desc: "뉴타운의 힙한 감성과 피콜로 라떼의 정석", img: "./images/asia_aus/australia/sydney/sydney_campos.jpg" },
                                { name: "검션 커피 (Gumption)", desc: "스트랜드 아케이드 내 위치. 깊은 라떼 맛", img: "./images/asia_aus/australia/sydney/sydney_gumption.jpg" },
                                { name: "킹스우드 커피", desc: "가이드 추천 고소한 라떼 명당", img: "./images/asia_aus/australia/sydney/sydney_kingswood_coffee.jpg" }
                            ]
                        },
                        activities: [
                            { name: "블루마운틴 데이 투어", desc: "세자매봉과 웅장한 대자연을 만끽하는 낮 코스", img: "./images/asia_aus/australia/sydney/blue_mountain_day_tour.jpg" },
                            { name: "블루마운틴 은하수 투어", desc: "밤하늘을 수놓는 별빛과 은하수를 보는 시네마틱 코스", img: "./images/asia_aus/australia/sydney/blue_mountain_night_tour.jpg" },
                            { name: "포트스테판 돌핀 크루즈 & 사막 샌딩", desc: "푸른 바다 위 돌고래 관람과 황금빛 사막 썰매를 한 번에!", img: "./images/asia_aus/australia/sydney/port_st_phineas_cruise.jpg" },
                            { name: "본다이 아이스버그 수영", desc: "바다와 맞닿은 해수풀에서의 특별한 수영 체험", img: "./images/asia_aus/australia/sydney/bondi_iceberg_swimming.jpg" },
                            { name: "페더데일 동물원 오픈런", desc: "쿼카, 코알라 등 야행성 동물을 가장 활발할 때 만나기", img: "./images/asia_aus/australia/sydney/federdale_zoo_open_run.jpg" }
                        ],
                        hotels: [
                            { name: "Song Hotel Sydney", price: "약 18만원", desc: "시내 중심 가성비 1순위 숙소" },
                            { name: "The Pod Sydney", price: "약 14만원", desc: "세련된 캡슐형 인테리어" },
                            { name: "Ibis Budget East", price: "약 15만원", desc: "실속형 여행자를 위한 체인 호텔" },
                            { name: "790 George", price: "약 12만원", desc: "교통 요충지에 위치한 숙소" },
                            { name: "Sydney Central YHA", price: "약 13만원", desc: "루프탑 뷰가 멋진 호스텔" }
                        ]
                    },
                    "멜버른": {
                        attractions: [
                            { name: "빅토리아 도서관", desc: "아름다운 공부 명당", img: "./images/asia_aus/australia/melbourne/state_library.jpg" },
                            { name: "플린더스 스트리트 역", desc: "멜버른의 아이콘", img: "./images/asia_aus/australia/melbourne/flinders_street_station.jpg" },
                            { name: "호시어 레인", desc: "미안하다 사랑한다 촬영지", img: "./images/asia_aus/australia/melbourne/hosier_lane.jpg" },
                            { name: "유레카 스카이덱", desc: "남반구 최고층 전망대", img: "./images/asia_aus/australia/melbourne/eureka_skydeck.jpg" },
                            { name: "로열 아케이드", desc: "고풍스러운 쇼핑 명소", img: "./images/asia_aus/australia/melbourne/royal_arcade.jpg" }
                        ],
                        restaurants: [
                            { name: "Hakata Gensuke", desc: "멜버른 1등 라멘 맛집", img: "./images/asia_aus/australia/melbourne/hakata_gensuke.jpg" },
                            { name: "Lune Croissanterie", desc: "세계 최고의 크루아상(줄 서야 함)", img: "./images/asia_aus/australia/melbourne/lune_croissanterie.jpg" },
                            { name: "Chin Chin", desc: "힙한 퓨전 타이 레스토랑", img: "./images/asia_aus/australia/melbourne/chin_chin.jpg" },
                            { name: "Tipo 00", desc: "멜버른 최고의 파스타", img: "./images/asia_aus/australia/melbourne/tipo_00.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Higher Ground", desc: "웅장한 창고형 브런치 카페", img: "./images/asia_aus/australia/melbourne/higher_ground.jpg" },
                                { name: "Brother Baba Budan", desc: "천장에 의자가 매달린 힙한 카페", img: "./images/asia_aus/australia/melbourne/brother_baba_budan.jpg" }
                            ],
                            study: [
                                { name: "Patricia Coffee Brewers", desc: "서서 마시는 찐 커피 맛집", img: "./images/asia_aus/australia/melbourne/patricia_coffee.jpg" },
                                { name: "Seven Seeds", desc: "넓고 쾌적한 로스터리 카페", img: "./images/asia_aus/australia/melbourne/seven_seeds.jpg" }
                            ]
                        },
                        activities: [
                            { name: "그레이트 오션 로드 투어", desc: "죽기 전에 꼭 가봐야 할 해안 도로", img: "./images/asia_aus/australia/melbourne/great_ocean_road.jpg" },
                            { name: "필립 아일랜드 펭귄 퍼레이드", desc: "귀여운 리틀 펭귄들의 귀가 행렬", img: "./images/asia_aus/australia/melbourne/phillip_island_penguin.jpg" },
                            { name: "퍼핑 빌리 증기기관차", desc: "숲속을 달리는 동화 같은 기차 여행", img: "./images/asia_aus/australia/melbourne/puffing_billy.jpg" },
                            { name: "야라강 크루즈", desc: "도심 야경을 즐기는 낭만 유람선", img: "./images/asia_aus/australia/melbourne/yarra_river_cruise.jpg" },
                            { name: "퀸 빅토리아 마켓 투어", desc: "남반구 최대 규모의 재래시장", img: "./images/asia_aus/australia/melbourne/queen_victoria_market.jpg" }
                        ],
                        hotels: [
                            { name: "Ibis Melbourne Central", price: "약 14만원", desc: "위치 깡패 가성비" },
                            { name: "The Victoria Hotel", price: "약 13만원", desc: "역사적인 가성비 호텔" },
                            { name: "Atlantis Hotel", price: "약 11만원", desc: "서던 크로스역 인근" },
                            { name: "Space Hotel", price: "약 5만원", desc: "럭셔리 호스텔" },
                            { name: "Travelodge Southbank", price: "약 15만원", desc: "강변 산책하기 좋은 곳" }
                        ]
                    },
                    "골드코스트·브리즈번": {
                        attractions: [
                            { name: "서퍼스 파라다이스 비치 (Surfers Paradise)", desc: "57km 황금빛 백사장과 초고층 마천루가 맞닿은 서퍼들의 천국", img: "./images/asia_aus/australia/gold_coast/surfers_paradise.jpg" },
                            { name: "스카이포인트 전망대 (Q1 빌딩)", desc: "해발 230m에서 골드코스트 해안선을 360도로 내려다보는 전망대", img: "./images/asia_aus/australia/gold_coast/skypoint_observation_deck.jpg" },
                            { name: "커럼빈 와일드라이프 생추어리", desc: "코알라를 안아보고 야생 캥거루에게 직접 먹이를 주는 자연 동물원", img: "./images/asia_aus/australia/gold_coast/currumbin_sanctuary.jpg" },
                            { name: "브리즈번 사우스뱅크 파크랜드", desc: "도심 강변 한가운데 조성된 인공 해변(스트리트 비치)과 산책로", img: "./images/asia_aus/australia/gold_coast/south_bank_brisbane.jpg" },
                            { name: "벌리 헤즈 국립공원 (Burleigh Heads)", desc: "현무암 해안 절벽 산책로와 서퍼들의 파도타기를 구경하는 피크닉 언덕", img: "./images/asia_aus/australia/gold_coast/burleigh_heads.jpg" }
                        ],
                        restaurants: [
                            { name: "Rick Shores (릭 쇼어스)", desc: "벌리 헤즈 파도 바로 앞에서 먹는 전설의 모어튼베이 벅 롤(버거)", img: "./images/asia_aus/australia/gold_coast/rick_shores.jpg" },
                            { name: "Hurricane's Grill Surfers Paradise", desc: "바다 전망과 함께 즐기는 푸짐한 폭립과 호주산 스테이크", img: "./images/asia_aus/australia/gold_coast/hurricanes_grill_gc.jpg" },
                            { name: "Eat Street Northshore (브리즈번)", desc: "컨테이너 박스를 개조한 화려한 강변 야시장 미식 테마파크", img: "./images/asia_aus/australia/gold_coast/eat_street_northshore.jpg" },
                            { name: "Peter's Fish Market", desc: "메인 비치 선착장에서 갓 튀겨낸 신선한 피시 앤 칩스와 굴", img: "./images/asia_aus/australia/gold_coast/peters_fish_market.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Paddock Bakery", desc: "정원 오두막에서 즐기는 수제 사워도우 디핑 에그와 크루아상", img: "./images/asia_aus/australia/gold_coast/paddock_bakery.jpg" },
                                { name: "Tarte Beach House", desc: "커럼빈 크릭 강변 파스텔톤 유럽 감성 베이커리 & 브런치 카페", img: "./images/asia_aus/australia/gold_coast/tarte_beach_house.jpg" }
                            ],
                            study: [
                                { name: "Blackboard Coffee Varsity Lakes", desc: "골드코스트 스페셜티 커피 문화를 이끄는 쾌적한 로스터리 카페", img: "./images/asia_aus/australia/gold_coast/blackboard_coffee.jpg" },
                                { name: "Coffee Iconic Brisbane", desc: "브리즈번 도심 속 비밀 정원 테라스를 갖춘 감성 카공 카페", img: "./images/asia_aus/australia/gold_coast/coffee_iconic_brisbane.jpg" }
                            ]
                        },
                        activities: [
                            { name: "서퍼스 파라다이스 서핑 레슨", desc: "초보자도 쉽게 파도 위에 일어서보는 호주 본고장 서핑 강습", img: "./images/asia_aus/australia/gold_coast/gold_coast_surfing.jpg" },
                            { name: "워너브라더스 무비월드 & 씨월드", desc: "DC 슈퍼히어로 롤러코스터와 해양 동물 쇼를 즐기는 테마파크", img: "./images/asia_aus/australia/gold_coast/movie_world_gold_coast.jpg" },
                            { name: "모어튼섬 (탕갈루마) 난파선 스노클링", desc: "투명한 바다 속 난파선 열대어 스노클링과 모래썰매 투어", img: "./images/asia_aus/australia/gold_coast/moreton_island_wrecks.jpg" },
                            { name: "브리즈번 스토리 브리지 클라임 & 페리", desc: "브리즈번 강을 가로지르는 시티캣 페리와 브리지 야경 등반", img: "./images/asia_aus/australia/gold_coast/story_bridge_brisbane.jpg" }
                        ],
                        hotels: [
                            { name: "Q1 Resort & Spa", price: "약 22만원대", desc: "서퍼스 파라다이스 해변이 내려다보이는 초고층 레지던스 리조트" },
                            { name: "voco Gold Coast", price: "약 18만원대", desc: "트램역 바로 앞, 해변 도보 2분 거리의 모던 4.5성급 호텔" },
                            { name: "Novotel Surfers Paradise", price: "약 17만원대", desc: "중심가 카빌 애비뉴 바로 옆 야외 수영장을 갖춘 가성비 호텔" },
                            { name: "ibis Styles Brisbane Elizabeth Street", price: "약 14만원대", desc: "브리즈번 사우스뱅크와 퀸스트리트 몰 도보권의 실속 숙소" }
                        ]
                    }
                }
            },

            "미국": {
                desc: "자유와 열정의 대륙, 화려한 스카이라인",
                cities: {
                    "뉴욕": {
                        attractions: [
                            { name: "타임스퀘어", desc: "잠들지 않는 도시의 심장", img: "./images/america/usa/new_york/times_square.jpg" },
                            { name: "센트럴 파크", desc: "도심 속 거대 녹지 휴식처", img: "./images/america/usa/new_york/central_park.jpg" },
                            { name: "자유의 여신상", desc: "미국의 상징적인 기념물", img: "./images/america/usa/new_york/statue_of_liberty.jpg" },
                            { name: "엠파이어 스테이트", desc: "클래식한 뉴욕 전망대", img: "./images/america/usa/new_york/empire_state.jpg" },
                            { name: "서밋 원 밴더빌트", desc: "몰입형 거울 미러 전망대", img: "./images/america/usa/new_york/summit_one_vanderbilt.jpg" }
                        ],
                        restaurants: [
                            { name: "Peter Luger Steak House", desc: "뉴욕의 전설적인 스테이크", img: "./images/america/usa/new_york/peter_luger.jpg" },
                            { name: "Joe's Pizza", desc: "스파이더맨이 배달하던 그 피자", img: "./images/america/usa/new_york/joes_pizza.jpg" },
                            { name: "Shake Shack", desc: "본점에서 즐기는 쉑쉑버거", img: "./images/america/usa/new_york/shake_shack.jpg" },
                            { name: "Chelsea Market", desc: "랍스터 플레이스와 타코 맛집", img: "./images/america/usa/new_york/chelsea_market.jpg" },
                            { name: "The Halal Guys", desc: "스트리트 푸드의 제왕", img: "./images/america/usa/new_york/halal_guys.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Stumptown", desc: "그리니치 빌리지의 힙한 감성", img: "./images/america/usa/new_york/stumptown.jpg" },
                                { name: "Black Cat LES", desc: "거실 같은 아늑한 분위기", img: "./images/america/usa/new_york/black_cat_les.jpg" }
                            ],
                            study: [
                                { name: "Think Coffee", desc: "공부하는 뉴요커들의 성지", img: "./images/america/usa/new_york/think_coffee.jpg" },
                                { name: "The Bean", desc: "넓은 좌석과 편안한 작업실", img: "./images/america/usa/new_york/the_bean.jpg" }
                            ]
                        },
                        activities: [
                            { name: "브로드웨이 뮤지컬", desc: "세계 최고의 공연 관람", img: "./images/america/usa/new_york/broadway_musical.jpg" },
                            { name: "하이라인 파크 걷기", desc: "도심 속 공중 정원 산책", img: "./images/america/usa/new_york/high_line_park.jpg" },
                            { name: "스테이튼 아일랜드 페리", desc: "무료로 즐기는 자유의 여신상 뷰", img: "./images/america/usa/new_york/staten_island_ferry.jpg" },
                            { name: "메트로폴리탄 미술관", desc: "세계 3대 미술관 투어", img: "./images/america/usa/new_york/met_museum.jpg" },
                            { name: "브루클린 브릿지 일몰", desc: "석양을 보며 다리 건너기", img: "./images/america/usa/new_york/brooklyn_bridge.jpg" }
                        ],
                        hotels: [
                            { name: "Motto by Hilton", price: "약 19만원", desc: "첼시 중심부 트렌디한 가성비" },
                            { name: "Hotel Mimosa", price: "약 16만원", desc: "차이나타운 인근 깔끔한 숙소" },
                            { name: "Arlo SoHo", price: "약 21만원", desc: "소호 감성의 미니멀 호텔" },
                            { name: "Pod Times Square", price: "약 17만원", desc: "실속형 뉴욕 여행 최적지" },
                            { name: "Windsor Inn", price: "약 14만원", desc: "가장 합리적인 클래식 호텔" }
                        ]
                    },
                    "워싱턴DC": {
                        attractions: [
                            { name: "링컨 기념관", desc: "미국 민주주의의 상징", img: "./images/america/usa/washington_dc/lincoln_memorial.jpg" },
                            { name: "백악관", desc: "미국 대통령의 관저", img: "./images/america/usa/washington_dc/white_house.jpg" },
                            { name: "스미소니언 박물관", desc: "세계 최대 규모의 박물관 단지", img: "./images/america/usa/washington_dc/smithsonian_museums.jpg" },
                            { name: "의회 도서관", desc: "세상에서 가장 아름다운 도서관", img: "./images/america/usa/washington_dc/library_of_congress.jpg" },
                            { name: "워싱턴 기념탑", desc: "도심의 가장 높은 랜드마크", img: "./images/america/usa/washington_dc/washington_monument.jpg" }
                        ],
                        restaurants: [
                            { name: "Old Ebbitt Grill", desc: "백악관 근처 전통의 맛집", img: "./images/america/usa/washington_dc/old_ebbitt_grill.jpg" },
                            { name: "Ben's Chili Bowl", desc: "오바마 대통령도 다녀간 핫도그", img: "./images/america/usa/washington_dc/bens_chili_bowl.jpg" },
                            { name: "Founding Farmers", desc: "미국 가정식의 정석", img: "./images/america/usa/washington_dc/founding_farmers.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Baked & Wired", desc: "조지타운 컵케이크 명당", img: "./images/america/usa/washington_dc/baked_and_wired.jpg" },
                                { name: "Tryst", desc: "예술적이고 빈티지한 거실 카페", img: "./images/america/usa/washington_dc/tryst.jpg" }
                            ],
                            study: [
                                { name: "Slipstream", desc: "모던하고 조용한 작업 공간", img: "./images/america/usa/washington_dc/slipstream.jpg" },
                                { name: "A Baked Joint", desc: "넓고 쾌적한 샌드위치 카페", img: "./images/america/usa/washington_dc/a_baked_joint.jpg" }
                            ]
                        },
                        activities: [
                            { name: "내셔널 몰 도보 투어", desc: "미국의 역사를 걷다", img: "./images/america/usa/washington_dc/national_mall_tour.jpg" },
                            { name: "조지타운 수변 산책", desc: "로맨틱한 강변 데이트", img: "./images/america/usa/washington_dc/georgetown_waterfront.jpg" },
                            { name: "스미소니언 자연사 박물관", desc: "박물관이 살아있다 촬영지", img: "./images/america/usa/washington_dc/natural_history_museum.jpg" },
                        ],
                        hotels: [
                            { name: "Motto Washington", price: "약 14만원", desc: "시티 센터 중심 가성비" },
                            { name: "District Hotel", price: "약 12만원", desc: "역사적인 합리적 숙소" },
                            { name: "Holiday Inn Capitol", price: "약 18만원", desc: "의사당 도보 거리 편리함" },
                            { name: "Arlo DC", price: "약 19만원", desc: "최신 시설의 세련된 숙소" },
                            { name: "Windsor Inn DC", price: "약 11만원", desc: "초저가 깔끔한 비즈니스형" }
                        ]
                    }

                    ,
                    "LA": {
                        attractions: [
                            { name: "할리우드 사인", desc: "영화의 도시 상징", img: "./images/america/usa/la/hollywood_sign.jpg" },
                            { name: "게티 센터", desc: "예술과 건축의 정점", img: "./images/america/usa/la/getty_center.jpg" },
                            { name: "산타모니카 피어", desc: "퍼시픽 파크의 낭만", img: "./images/america/usa/la/santa_monica_pier.jpg" },
                            { name: "그리피스 천문대", desc: "라라랜드의 그곳", img: "./images/america/usa/la/griffith_observatory.jpg" },
                            { name: "유니버설 스튜디오", desc: "할리우드 액션의 세계", img: "./images/america/usa/la/universal_studios_hollywood.jpg" }
                        ],
                        restaurants: [
                            { name: "In-N-Out Burger", desc: "서부의 자존심 인앤아웃", img: "./images/america/usa/la/innout_burger.jpg" },
                            { name: "Pink's Hot Dogs", desc: "할리우드 스타들의 단골집", img: "./images/america/usa/la/pinks_hot_dogs.jpg" },
                            { name: "Eggslut", desc: "그랜드 센트럴 마켓 필수 코스", img: "./images/america/usa/la/eggslut.jpg" },
                            { name: "BCD Tofu House", desc: "북창동 순두부 본점의 위엄", img: "./images/america/usa/la/bcd_tofu.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Alchemist Coffee", desc: "감각적인 실험실 컨셉", img: "./images/america/usa/la/alchemist_coffee.jpg" },
                                { name: "Pantheon Coffee", desc: "음악과 예술이 있는 공간", img: "./images/america/usa/la/pantheon_coffee.jpg" }
                            ],
                            study: [
                                { name: "Coffee MCO", desc: "한인타운 쾌적한 카공 성지", img: "./images/america/usa/la/coffee_mco.jpg" },
                                { name: "Archives of Us", desc: "미니멀하고 조용한 집중 명당", img: "./images/america/usa/la/archives_of_us.jpg" }
                            ]
                        },
                        activities: [
                            { name: "베니스 비치 산책", desc: "보헤미안 감성의 해변", img: "./images/america/usa/la/venice_beach.jpg" },
                            { name: "베벌리 힐즈 드라이브", desc: "럭셔리한 거리 드라이브", img: "./images/america/usa/la/beverly_hills.jpg" },
                            { name: "워너 브라더스 투어", desc: "영화 제작 비하인드 탐방", img: "./images/america/usa/la/warner_bros_tour.jpg" },
                            { name: "LACMA 조명 앞 사진", desc: "인생샷 필수 코스", img: "./images/america/usa/la/lacma_lights.jpg" },
                            { name: "그리피스 파크 하이킹", desc: "LA 전경을 한눈에", img: "./images/america/usa/la/griffith_park_hiking.jpg" }
                        ],
                        hotels: [
                            { name: "Miami Hotel LA", price: "약 15만원", desc: "깔끔한 로컬 가성비" },
                            { name: "Space Hotel", price: "약 13만원", desc: "최신식 호스텔 시스템" },
                            { name: "PodShare DTLA", price: "약 11만원", desc: "공유형 트렌디 숙소" },
                            { name: "Dunes Inn Sunset", price: "약 16만원", desc: "할리우드 인접 클래식" },
                            { name: "Hollywood Inn", price: "약 14만원", desc: "가장 무난한 실속 호텔" }
                        ]
                    },
                    "올랜도": {
                        attractions: [
                            { name: "디즈니 월드", desc: "꿈과 희망의 나라", img: "./images/america/usa/orlando/disney_world.jpg" },
                            { name: "유니버설 올랜도", desc: "해리포터의 마법 세계", img: "./images/america/usa/orlando/universal_studios.jpg" },
                            { name: "씨월드", desc: "해양 생태 체험", img: "./images/america/usa/orlando/seaworld.jpg" },
                            { name: "아이콘 파크", desc: "올랜도의 랜드마크 관람차", img: "./images/america/usa/orlando/icon_park.jpg" },
                            { name: "케네디 우주 센터", desc: "우주 과학의 중심", img: "./images/america/usa/orlando/kennedy_space_center.jpg" }
                        ],
                        restaurants: [
                            { name: "Gordon Ramsay Fish & Chips", desc: "고든 램지의 캐주얼 맛집", img: "./images/america/usa/orlando/fish_and_chips.jpg" },
                            { name: "Hot Dog Hall of Fame", desc: "유니버설 시티워크 핫도그", img: "./images/america/usa/orlando/hot_dog_hall_of_fame.jpg" },
                            { name: "Bubba Gump Shrimp", desc: "영화 포레스트 검프 테마", img: "./images/america/usa/orlando/bubba_gump.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Qreate Coffee", desc: "스튜디오 결합형 창의 공간", img: "./images/america/usa/orlando/qreate_coffee.jpg" },
                                { name: "Craft & Common", desc: "모던한 인테리어 분위기", img: "./images/america/usa/orlando/craft_and_common.jpg" }
                            ],
                            study: [
                                { name: "Haan Coffee", desc: "한인타운 인기 카공 카페", img: "./images/america/usa/orlando/haan_coffee.jpg" },
                                { name: "SnowBean", desc: "조용히 작업하기 좋은 곳", img: "./images/america/usa/orlando/snowbean.jpg" }
                            ]
                        },
                        activities: [
                            { name: "디스커버리 코브", desc: "돌고래 수영과 올인클루시브 휴양", img: "./images/america/usa/orlando/discovery_cove.jpg" },
                            { name: "유니버셜 스튜디오 플로리다", desc: "영화 속 주인공이 되는 곳", img: "./images/america/usa/orlando/universal_studios_florida.jpg" },
                            { name: "유니버셜 아일랜드 오브 어드벤처", desc: "스릴 넘치는 놀이기구의 천국", img: "./images/america/usa/orlando/islands_of_adventure.jpg" },
                            { name: "유니버셜 에픽 유니버스", desc: "새로운 차원의 테마파크", img: "./images/america/usa/orlando/epic_universe.jpg" },
                            { name: "유니버셜 볼케이노 베이", desc: "워터파크의 혁신", img: "./images/america/usa/orlando/volcano_bay.jpg" },
                            { name: "매직 킹덤", desc: "디즈니의 상징, 신데렐라 성", img: "./images/america/usa/orlando/magic_kingdom.jpg" },
                            { name: "앱콧", desc: "미래 기술과 세계 문화의 조화", img: "./images/america/usa/orlando/epcot.jpg" },
                            { name: "디즈니 할리우드 스튜디오", desc: "스타워즈와 영화의 세계", img: "./images/america/usa/orlando/hollywood_studios.jpg" },
                            { name: "디즈니 애니멀 킹덤", desc: "신비로운 자연과 아바타의 세계", img: "./images/america/usa/orlando/animal_kingdom.jpg" },
                            { name: "에어보트 악어 투어", desc: "플로리다 늪지대 탐험", img: "./images/america/usa/orlando/airboat_tour.jpg" },
                            { name: "아울렛 쇼핑", desc: "미국 최고의 쇼핑 천국", img: "./images/america/usa/orlando/outlet_shopping.jpg" },
                            { name: "빌드어베어 체험", desc: "나만의 인형 만들기", img: "./images/america/usa/orlando/build_a_bear.jpg" }
                        ],
                        hotels: [
                            { name: "La Quinta Inn", price: "약 10만원", desc: "공항 인접 안정적 체인" },
                            { name: "Hotel Monreale", price: "약 9만원", desc: "가장 저렴한 깔끔 숙소" },
                            { name: "Fairfield Inn", price: "약 12만원", desc: "믿고 가는 메리어트 체인" },
                            { name: "Pestana Suites", price: "약 15만원", desc: "디즈니 인근 가성비 킹" },
                            { name: "Courtyard Orlando", price: "약 18만원", desc: "쾌적한 시설의 비즈니스형" }
                        ]
                    }

                    ,
                    "라스베가스": {
                        attractions: [
                            { name: "라스베가스 스트립", desc: "세계 최대의 엔터테인먼트", img: "./images/america/usa/las_vegas/las_vegas_strip.jpg" },
                            { name: "프리몬트 스트리트", desc: "올드 베가스의 화려한 전광판", img: "./images/america/usa/las_vegas/fremont_street.jpg" },
                            { name: "벨라지오 분수", desc: "무료 분수쇼의 감동", img: "./images/america/usa/las_vegas/bellagio_fountain.jpg" },
                            { name: "하이 롤러", desc: "세계 최고층 대관람차", img: "./images/america/usa/las_vegas/high_roller.jpg" },
                            { name: "MSG 스피어", desc: "지구상 최대 구형 건축물", img: "./images/america/usa/las_vegas/msg_sphere.jpg" }
                        ],
                        restaurants: [
                            { name: "Bacchanal Buffet", desc: "라스베가스 1등 뷔페", img: "./images/america/usa/las_vegas/bacchanal_buffet.jpg" },
                            { name: "Gordon Ramsay Burger", desc: "헬스 키친 버거", img: "./images/america/usa/las_vegas/gordon_ramsay_burger.jpg" },
                            { name: "Earl of Sandwich", desc: "가성비 최고의 샌드위치", img: "./images/america/usa/las_vegas/earl_of_sandwich.jpg" },
                            { name: "In-N-Out Burger", desc: "스트립 근처 야식 필수", img: "./images/america/usa/las_vegas/innout_vegas.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Gäbi Coffee", desc: "차이나타운 몽환적 디자인", img: "./images/america/usa/las_vegas/gabi_coffee.jpg" },
                                { name: "Mothership Coffee", desc: "인더스트리얼 감성 로스터리", img: "./images/america/usa/las_vegas/mothership_coffee.jpg" }
                            ],
                            study: [
                                { name: "Capital One Cafe", desc: "은행 결합형 최고 집중 공간", img: "./images/america/usa/las_vegas/capital_one_cafe.jpg" },
                                { name: "Writer's Block", desc: "서점 속 조용한 커피 향", img: "./images/america/usa/las_vegas/writers_block.jpg" }
                            ]
                        },
                        activities: [
                            { name: "태양의 서커스 오 쇼", desc: "물 위에서 펼쳐지는 환상", img: "./images/america/usa/las_vegas/o_show.jpg" },
                            { name: "태양의 서커스 카 쇼 (KÀ)", desc: "MGM 그랜드의 거대한 회전 무대에서 펼쳐지는 압도적 무술·곡예 쇼", img: "./images/america/usa/las_vegas/ka_show_las_vegas.jpg" },
                            { name: "그랜드 캐년 데이 투어", desc: "죽기 전에 가봐야 할 곳", img: "./images/america/usa/las_vegas/grand_canyon_tour.jpg" },
                            { name: "레드락 캐년 (Red Rock Canyon)", desc: "사막 위 붉은 사암 절벽을 달리는 드라이브 명소", img: "./images/america/usa/las_vegas/red_rock_canyon.jpg" },
                            { name: "네온 박물관 (The Neon Museum)", desc: "빈티지 라스베가스 네온사인들이 빛나는 야간 명소", img: "./images/america/usa/las_vegas/neon_museum.jpg" },
                            { name: "카지노 호텔 투어", desc: "각양각색 호텔 구경", img: "./images/america/usa/las_vegas/casino_hotel_tour.jpg" }
                        ],
                        hotels: [
                            { name: "Paris Las Vegas", price: "약 16만원", desc: "스트립 중심부 최고 위치" },
                            { name: "Luxor Hotel", price: "약 12만원", desc: "피라미드 모양의 이색 가성비" },
                            { name: "The LINQ", price: "약 14만원", desc: "젊은 감각의 중심부 숙소" },
                            { name: "Harrah's Vegas", price: "약 13만원", desc: "실속형 여행자의 스테디셀러" },
                            { name: "Circus Circus", price: "약 8만원", desc: "가장 저렴한 스트립 숙소" }
                        ]
                    },
                    "샌프란시스코": {
                        attractions: [
                            { name: "금문교", desc: "안개 속의 붉은 다리", img: "./images/america/usa/san_francisco/golden_gate_bridge.jpg" },
                            { name: "알카트라즈 섬", desc: "전설적인 감옥 섬 투어", img: "./images/america/usa/san_francisco/alcatraz.jpg" },
                            { name: "피어 39", desc: "바다사자와 활기찬 부두", img: "./images/america/usa/san_francisco/pier_39.jpg" },
                            { name: "롬바드 스트리트", desc: "세계에서 가장 구불구불한 길", img: "./images/america/usa/san_francisco/lombard_street.jpg" },
                            { name: "금문교 공원", desc: "거대한 도심 공원", img: "./images/america/usa/san_francisco/golden_gate_park.jpg" }
                        ],
                        restaurants: [
                            { name: "Boudin Bakery", desc: "사워도우 클램 차우더", img: "./images/america/usa/san_francisco/boudin_bakery.jpg" },
                            { name: "Super Duper Burgers", desc: "샌프란시스코 인생 버거, 더블 쉬림프 버거는 한국에서만 있었던 것 같다", img: "./images/america/usa/san_francisco/super_duper_burgers.jpg" },
                            { name: "Hog Island Oyster", desc: "페리 빌딩 신선한 굴", img: "./images/america/usa/san_francisco/hog_island_oyster.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Saint Frank", desc: "러시안 힐 밝은 감성", img: "./images/america/usa/san_francisco/saint_frank.jpg" },
                                { name: "Flywheel Coffee", desc: "헤이트 애슈버리 로스터리", img: "./images/america/usa/san_francisco/flywheel_coffee.jpg" }
                            ],
                            study: [
                                { name: "Sextant Coffee", desc: "넓은 좌석과 작업 공간", img: "./images/america/usa/san_francisco/sextant_coffee.jpg" },
                                { name: "Saluhall", desc: "모던한 복합 문화 카페", img: "./images/america/usa/san_francisco/saluhall.jpg" }
                            ]
                        },
                        activities: [
                            { name: "케이블카 탑승", desc: "언덕을 오르내리는 낭만", img: "./images/america/usa/san_francisco/cable_car.jpg" },
                            { name: "페리 빌딩 푸드 투어", desc: "현지 미식 탐방", img: "./images/america/usa/san_francisco/ferry_building_food_tour.jpg" },
                            { name: "뮤어 우즈 숲 투어", desc: "거대 레드우드 숲 산책", img: "./images/america/usa/san_francisco/muir_woods.jpg" },
                            { name: "페인티드 레이디스 방문", desc: "알록달록 빅토리아 양식 집", img: "./images/america/usa/san_francisco/painted_ladies.jpg" },
                            { name: "미션 지구 벽화 투어", desc: "거리 예술의 중심지", img: "./images/america/usa/san_francisco/mission_district_murals.jpg" }
                        ],
                        hotels: [
                            { name: "Amsterdam Hostel", price: "약 11만원", desc: "유니언 스퀘어 인근 최고 가성비" },
                            { name: "HI SF Downtown", price: "약 12만원", desc: "청결한 국제 호스텔 시스템" },
                            { name: "Music City Hotel", price: "약 13만원", desc: "음악 테마의 독특한 가성비" },
                            { name: "Travelodge North", price: "약 14만원", desc: "안정적인 실속형 호텔" },
                            { name: "Chancellor Hotel", price: "약 19만원", desc: "위치와 서비스 검증된 곳" }
                        ]
                    }
                }
            }

            ,
            "일본": {
                desc: "가깝고도 깊은 감성, 완벽한 휴식의 나라",
                cities: {
                    "도쿄": {
                        attractions: [
                            { name: "시부야 스카이", desc: "360도 도심 뷰", img: "./images/asia_aus/japan/tokyo/shibuya_sky.jpg" },
                            { name: "센소지", desc: "전통 사찰", img: "./images/asia_aus/japan/tokyo/sensoji_temple.jpg" },
                            { name: "도쿄 타워", desc: "야경 상징", img: "./images/asia_aus/japan/tokyo/tokyo_tower.jpg" },
                            { name: "팀랩", desc: "미디어 아트", img: "./images/asia_aus/japan/tokyo/teamlab_planets.jpg" },
                            { name: "신주쿠 교엔", desc: "도심 공원", img: "./images/asia_aus/japan/tokyo/shinjuku_gyoen.jpg" }
                        ],
                        restaurants: [
                            { name: "Sushi Zanmai", desc: "츠키지 시장 스시", img: "./images/asia_aus/japan/tokyo/sushi_zanmai.jpg" },
                            { name: "츠키시마 몬자 스트리트 (Monjayaki Street)", desc: "도쿄 명물 철판 몬자야키 골목", img: "./images/asia_aus/japan/tokyo/monjayaki_street.jpg" },
                            { name: "아후리 라멘 (AFURI 하라주쿠)", desc: "상큼한 유자 향과 깔끔한 닭 육수가 어우러진 도쿄 대표 유자 시오 라멘", img: "./images/asia_aus/japan/tokyo/afuri_harajuku.jpg" },
                            { name: "규카츠 모토무라 신주쿠", desc: "미니 화로에 취향껏 구워 먹는 바삭하고 부드러운 소고기 카츠", img: "./images/asia_aus/japan/tokyo/gyukatsu_motomura.jpg" },
                            { name: "우동 신 (Udon Shin 신주쿠)", desc: "갓 뽑아낸 탱글탱글한 면발과 바삭한 튀김이 일품인 도쿄 1등 우동", img: "./images/asia_aus/japan/tokyo/udon_shin_tokyo.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "반넬리", desc: "감성 카페", img: "./images/asia_aus/japan/tokyo/vanne_cafe.jpg" },
                                { name: "Fuglen Tokyo (푸글렌 도쿄)", desc: "요요기 공원 옆 노르웨이 오슬로 감성 빈티지 커피 & 칵테일 바", img: "./images/asia_aus/japan/tokyo/fuglen_tokyo.jpg" }
                            ],
                            study: [
                                { name: "츠타야", desc: "공부 명당", img: "./images/asia_aus/japan/tokyo/tsutaya_books.jpg" },
                                { name: "블루보틀 아오야마 카페", desc: "오모테산도 나뭇잎 그늘 아래 조용히 집중하기 좋은 스페셜티 카페", img: "./images/asia_aus/japan/tokyo/blue_bottle_aoyama.jpg" }
                            ]
                        },
                        activities: [
                            { name: "디즈니 투어", desc: "환상적인 도쿄 디즈니 리조트", img: "./images/asia_aus/japan/tokyo/disney_tour.jpg" },
                            { name: "온천 체험", desc: "도심 속 힐링 온천", img: "./images/asia_aus/japan/tokyo/onsen_experience.jpg" },
                            { name: "쇼핑", desc: "트렌디한 시부야 거리 쇼핑", img: "./images/asia_aus/japan/tokyo/shibuya_shopping.jpg" },
                            { name: "맛집", desc: "신선한 해산물 먹방 투어", img: "./images/asia_aus/japan/tokyo/tsukiji_food_tour.jpg" },
                            { name: "일몰", desc: "일루미네이션과 환상적인 일몰", img: "./images/asia_aus/japan/tokyo/odaiba_sunset.jpg" }
                        ],
                        hotels: [
                            { name: "호텔 선루트 플라자 신주쿠", price: "약 18만원", desc: "신주쿠역 도보 3분, 공항 리무진 정차 가성비 호텔" },
                            { name: "신주쿠 그레이서리 호텔 (고질라 호텔)", price: "약 20만원", desc: "가부키초 중심부 고질라 테라스로 유명한 랜드마크 숙소" },
                            { name: "도미 인 우에노 오카치마치", price: "약 15만원", desc: "무료 야식 소바와 대욕장 온천을 갖춘 인기 비즈니스 호텔" },
                            { name: "소테츠 프레사 인 긴자", price: "약 14만원", desc: "긴자·도쿄역 인근 깔끔하고 모던한 실속 숙소" },
                            { name: "APA 호텔 신주쿠 가부키초 타워", price: "약 12만원", desc: "최상층 대욕장과 뛰어난 접근성을 자랑하는 가성비 호텔" }
                        ]
                    },
                    "오사카": {
                        attractions: [
                            { name: "유니버설 스튜디오", desc: "마리오와 해리포터의 세계", img: "./images/asia_aus/japan/osaka/universal_studios_japan.jpg" },
                            { name: "오사카성", desc: "역사와 공원이 어우러진 곳", img: "./images/asia_aus/japan/osaka/osaka_castle.jpg" },
                            { name: "도톤보리", desc: "화려한 간판과 미식의 거리", img: "./images/asia_aus/japan/osaka/dotonbori.jpg" },
                            { name: "가이유칸 수족관", desc: "세계 최대급 실내 수족관", img: "./images/asia_aus/japan/osaka/kaiyukan_aquarium.jpg" },
                            { name: "츠텐카쿠", desc: "오사카의 옛 향수 타워", img: "./images/asia_aus/japan/osaka/tsutenkaku_tower.jpg" }
                        ],
                        restaurants: [
                            { name: "카니도라쿠", desc: "대게 요리 전문점", img: "./images/asia_aus/japan/osaka/kani_doraku.jpg" },
                            { name: "Takoyaki Wanaka", desc: "겉바속촉 타코야키", img: "./images/asia_aus/japan/osaka/takoyaki_wanaka.jpg" },
                            { name: "Kushikatsu Daruma", desc: "오사카 명물 꼬치튀김", img: "./images/asia_aus/japan/osaka/kushikatsu_daruma.jpg" },
                            { name: "치보 (Chibo)", desc: "도톤보리 오코노미야끼 맛집", img: "./images/asia_aus/japan/osaka/chibo_okonomiyaki.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "LiLo Coffee", desc: "아메리카무라 힙한 로스터리", img: "./images/asia_aus/japan/osaka/lilo_coffee.jpg" },
                                { name: "Mother Moon", desc: "템포잔 분위기 맛집", img: "./images/asia_aus/japan/osaka/mother_moon_cafe.jpg" }
                            ],
                            study: [
                                { name: "Doutor Namba", desc: "공부하기 가장 만만한 곳", img: "./images/asia_aus/japan/osaka/doutor_coffee.jpg" },
                                { name: "Benkyo Cafe", desc: "카공족 전용 학습 카페", img: "./images/asia_aus/japan/osaka/benkyo_cafe.jpg" }
                            ]
                        },
                        activities: [
                            { name: "도톤보리 크루즈", desc: "운하를 따라 즐기는 야경", img: "./images/asia_aus/japan/osaka/dotonbori_cruise.jpg" },
                            { name: "쿠로몬 시장 투어", desc: "오사카의 부엌 탐방", img: "./images/asia_aus/japan/osaka/kuromon_market.jpg" },
                            { name: "TeamLab Botanical", desc: "환상적인 야간 미디어 아트", img: "./images/asia_aus/japan/osaka/teamlab_botanical.jpg" },
                            { name: "스파 월드 체험", desc: "세계 대온천에서의 휴식", img: "./images/asia_aus/japan/osaka/spa_world.jpg" },
                            { name: "햅파이브 관람차", desc: "도심 한가운데서 즐기는 뷰", img: "./images/asia_aus/japan/osaka/hep_five_ferris_wheel.jpg" }
                        ],
                        hotels: [
                            { name: "Toyoko Inn Namba", price: "약 11만원", desc: "믿고 가는 비즈니스 가성비" },
                            { name: "APA Namba Tower", price: "약 12만원", desc: "신축 시설과 대욕장" },
                            { name: "Hotel Trusty", price: "약 14만원", desc: "위치 최강 모던 숙소" },
                            { name: "Onyado Nono", price: "약 19만원", desc: "다다미 바닥 천연 온천" },
                            { name: "Namba Oriental", price: "약 16만원", desc: "중심부 넓은 객실" }
                        ]
                    },
                    "후쿠오카": {
                        attractions: [
                            { name: "오호리 공원", desc: "도심 속 거대 호수 쉼터", img: "./images/asia_aus/japan/fukuoka/ohori_park.jpg" },
                            { name: "후쿠오카 타워", desc: "해변 옆 환상적 야경", img: "./images/asia_aus/japan/fukuoka/fukuoka_tower.jpg" },
                            { name: "다자이후 텐만구", desc: "합격을 기원하는 사원", img: "./images/asia_aus/japan/fukuoka/dazaifu_tenmangu.jpg" },
                            { name: "캐널시티", desc: "복합 엔터테인먼트 쇼핑몰", img: "./images/asia_aus/japan/fukuoka/canal_city.jpg" },
                            { name: "쿠시다 신사", desc: "후쿠오카의 역사적 수호신", img: "./images/asia_aus/japan/fukuoka/kushida_shrine.jpg" }
                        ],
                        restaurants: [
                            { name: "Ichiran Main Branch", desc: "돈코츠 라멘의 본고장", img: "./images/asia_aus/japan/fukuoka/ichiran_main.jpg" },
                            { name: "Motsunabe Oyama", desc: "후쿠오카 명물 대창 전골", img: "./images/asia_aus/japan/fukuoka/motsunabe_oyama.jpg" },
                            { name: "Yatai Stalls", desc: "나카스 강변 포장마차", img: "./images/asia_aus/japan/fukuoka/nakasu_yatai.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "FUK Coffee", desc: "공항 테마의 트렌디 카페", img: "./images/asia_aus/japan/fukuoka/fuk_coffee.jpg" },
                                { name: "Manu Coffee", desc: "후쿠오카 로컬 감성 브랜드", img: "./images/asia_aus/japan/fukuoka/manu_coffee.jpg" }
                            ],
                            study: [
                                { name: "Coffee County", desc: "조용하고 깊이 있는 작업실", img: "./images/asia_aus/japan/fukuoka/coffee_county.jpg" },
                                { name: "Bookstore Cafe", desc: "책과 함께하는 집중 공간", img: "./images/asia_aus/japan/fukuoka/bookstore_cafe.jpg" }
                            ]
                        },
                        activities: [
                            { name: "나카스 야타이 포차", desc: "강변 포장마차 낭만", img: "./images/asia_aus/japan/fukuoka/nakasu_yatai_activity.jpg" },
                            { name: "모모치 해변 산책", desc: "여유로운 해변 산책", img: "./images/asia_aus/japan/fukuoka/momochi_beach.jpg" },
                            { name: "마린 월드 수족관", desc: "바다생물과의 만남", img: "./images/asia_aus/japan/fukuoka/marine_world.jpg" },
                            { name: "텐진 지하상가 쇼핑", desc: "끝없는 쇼핑의 즐거움", img: "./images/asia_aus/japan/fukuoka/tenjin_underground.jpg" },
                            { name: "다자이후 매화 투어", desc: "봄내음 가득한 신사 투어", img: "./images/asia_aus/japan/fukuoka/dazaifu_plum_tour.jpg" },
                            { name: "오호리 공원 피크닉", desc: "잔디밭에서의 여유로운 휴식", img: "./images/asia_aus/japan/fukuoka/ohori_park_picnic.jpg" }
                        ],
                        hotels: [
                            { name: "Hakata Green", price: "약 13만원", desc: "하카타역 바로 앞 위치" },
                            { name: "Fukuoka Hana", price: "약 9만원", desc: "저렴하고 청결한 호스텔" },
                            { name: "Richmond Tenjin", price: "약 15만원", desc: "가장 선호도 높은 가성비" },
                            { name: "The Life", price: "약 11만원", desc: "복합 문화형 트렌디 숙소" },
                            { name: "Sun Palace", price: "약 10만원", desc: "넓고 조용한 실속 호텔" }
                        ]
                    },
                    "오키나와": {
                        attractions: [
                            { name: "츄라우미 수족관", desc: "고래상어와 만나는 거대 수조", img: "./images/asia_aus/japan/okinawa/churaumi_aquarium.jpg" },
                            { name: "슈리 성", desc: "류큐 왕국의 역사적 유산", img: "./images/asia_aus/japan/okinawa/shuri_castle.jpg" },
                            { name: "국제거리", desc: "나하 시내의 활기찬 거리", img: "./images/asia_aus/japan/okinawa/kokusai_dori.jpg" },
                            { name: "아메리칸 빌리지", desc: "이국적인 풍경과 석양 명소", img: "./images/asia_aus/japan/okinawa/american_village.jpg" },
                            { name: "만좌모", desc: "코끼리 바위 절벽의 절경", img: "./images/asia_aus/japan/okinawa/manzam.jpg" }
                        ],
                        restaurants: [
                            { name: "Steak House 88", desc: "미국식 정통 스테이크", img: "./images/asia_aus/japan/okinawa/steak_house_88.jpg" },
                            { name: "Kijimuna", desc: "타코 라이스 맛집", img: "./images/asia_aus/japan/okinawa/kijimuna.jpg" },
                            { name: "A&W Burger", desc: "오키나와 한정 패스트푸드", img: "./images/asia_aus/japan/okinawa/aw_burger.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Zhyvago Coffee", desc: "아메리칸 빌리지 뷰 맛집", img: "./images/asia_aus/japan/okinawa/zhyvago_coffee.jpg" },
                                { name: "Hanon", desc: "바다 보며 팬케이크 힐링", img: "./images/asia_aus/japan/okinawa/hanon.jpg" }
                            ],
                            study: [
                                { name: "Study Cafe Naha", desc: "나하 시내 전문 학습 공간", img: "./images/asia_aus/japan/okinawa/study_cafe_naha.jpg" },
                                { name: "oHacorte Bakery", desc: "쾌적하고 조용한 베이커리", img: "./images/asia_aus/japan/okinawa/ohacorte_bakery.jpg" }
                            ]
                        },
                        activities: [
                            { name: "푸른동굴 스노클링", desc: "신비로운 푸른빛 수중 세계", img: "./images/asia_aus/japan/okinawa/blue_cave_snorkeling.jpg" },
                            { name: "슈리성 성곽길 걷기", desc: "옛 왕국의 정취를 따라", img: "./images/asia_aus/japan/okinawa/shuri_castle_walk.jpg" },
                            { name: "파인애플 파크 투어", desc: "달콤한 열대과일 농장 체험", img: "./images/asia_aus/japan/okinawa/pineapple_park.jpg" },
                            { name: "고래 관찰 (3월 한정)", desc: "거대한 혹등고래 왓칭", img: "./images/asia_aus/japan/okinawa/whale_watching.jpg" },
                            { name: "고래상어와 수영 체험", desc: "츄라우미의 감동을 물속에서", img: "./images/asia_aus/japan/okinawa/whale_shark_swim.jpg" }
                        ],
                        hotels: [
                            { name: "Kariyushi LCH", price: "약 9만원", desc: "나하 시내 가성비 최고봉" },
                            { name: "Naha Beach Side", price: "약 10만원", desc: "바다가 보이는 합리적 호텔" },
                            { name: "APA Naha", price: "약 8만원", desc: "접근성 좋은 비즈니스형" },
                            { name: "SmartCondo Tomari", price: "약 11만원", desc: "취사 가능 아파트먼트" },
                            { name: "My Place Hostel", price: "약 5만원", desc: "항구 옆 배낭여행자 성지" }
                        ]
                    },
                    "삿포로": {
                        attractions: [
                            { name: "오도리 공원 & 삿포로 TV 타워", desc: "계절마다 눈축제와 맥주축제가 열리는 삿포로의 심장 공원", img: "./images/asia_aus/japan/sapporo/odori_park_sapporo.jpg" },
                            { name: "오타루 운하 (Otaru Canal)", desc: "고풍스러운 석조 창고와 가스등이 낭만적으로 비치는 항구 운하", img: "./images/asia_aus/japan/sapporo/otaru_canal.jpg" },
                            { name: "시로이 코이비토 파크", desc: "동화 속 유럽 성 모양의 홋카이도 대표 과자 테마파크", img: "./images/asia_aus/japan/sapporo/shiroi_koibito_park.jpg" },
                            { name: "모이와야마 전망대", desc: "케이블카를 타고 오르는 일본 신 3대 야경 명소", img: "./images/asia_aus/japan/sapporo/mount_moiwa_sapporo.jpg" },
                            { name: "스스키노 닛카상 (Nikka)", desc: "화려한 네온사인이 불을 밝히는 홋카이도 최대 번화가", img: "./images/asia_aus/japan/sapporo/susukino_sapporo.jpg" }
                        ],
                        restaurants: [
                            { name: "다루마 (징기스칸 다루마 본점)", desc: "부드러운 어린 양고기를 숯불에 구워 먹는 삿포로 원조 징기스칸", img: "./images/asia_aus/japan/sapporo/daruma_jingisukan.jpg" },
                            { name: "스아게 플러스 (Suage+)", desc: "꼬치에 꽂은 구운 채소와 진한 향신료 국물이 일품인 1등 수프카레", img: "./images/asia_aus/japan/sapporo/suage_soup_curry.jpg" },
                            { name: "라멘 신겐 (Ramen Shingen)", desc: "고소한 미소 육수와 차슈로 줄 서서 먹는 스스키노 대표 미소라멘", img: "./images/asia_aus/japan/sapporo/ramen_shingen_sapporo.jpg" },
                            { name: "토리톤 회전초밥 (Toriton)", desc: "두툼하고 신선한 홋카이도산 성게·단새우·가리비를 합리적으로 즐기는 스시", img: "./images/asia_aus/japan/sapporo/toriton_sushi_sapporo.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Baristart Coffee Sapporo", desc: "진하고 고소한 홋카이도 저지 우유 라떼가 유명한 감성 카페", img: "./images/asia_aus/japan/sapporo/baristart_coffee_sapporo.jpg" },
                                { name: "모리히코 본점 (MORIHICO)", desc: "마루야마 공원 인근 담쟁이덩굴 목조 가옥 속 삿포로 전설의 로스터리", img: "./images/asia_aus/japan/sapporo/morihico_sapporo.jpg" }
                            ],
                            study: [
                                { name: "로쿠화테이 (롯카테이 삿포로 본점)", desc: "따뜻한 커피와 마르세이 버터샌드 디저트를 여유롭게 즐기는 공간", img: "./images/asia_aus/japan/sapporo/rokkatei_sapporo.jpg" },
                                { name: "마루야마 팬케이크 & 스페셜티 커피", desc: "조용한 마루야마 주택가에서 폭신한 수플레와 작업을 즐기는 카페", img: "./images/asia_aus/japan/sapporo/maruyama_pancake_sapporo.jpg" }
                            ]
                        },
                        activities: [
                            { name: "비에이·후라노 설원 & 청의 호수 투어", desc: "크리스마스트리 나무와 신비로운 아오이이케(청의 호수) 근교 버스 투어", img: "./images/asia_aus/japan/sapporo/biei_blue_pond.jpg" },
                            { name: "조잔케이 & 노보리베츠 온천 지옥계곡", desc: "눈 내리는 노천탕에서 피로를 녹이는 홋카이도 대표 온천 마을", img: "./images/asia_aus/japan/sapporo/noboribetsu_hell_valley.jpg" },
                            { name: "삿포로 맥주 박물관 시음 투어", desc: "붉은 벽돌 양조장에서 갓 만든 삿포로 클래식 생맥주 3종 시음", img: "./images/asia_aus/japan/sapporo/sapporo_beer_museum.jpg" },
                            { name: "오타루 오르골당 & 유리공방 산책", desc: "수천 개의 반짝이는 오르골과 따뜻한 르타오 치즈케이크를 즐기는 거리", img: "./images/asia_aus/japan/sapporo/otaru_music_box.jpg" }
                        ],
                        hotels: [
                            { name: "JR 타워 호텔 닛코 삿포로", price: "약 25만원대", desc: "삿포로역 직결, 고층 시티뷰와 천연 온천 스파를 갖춘 최고 인기 호텔" },
                            { name: "미쓰이 가든 호텔 삿포로 웨스트", price: "약 15만원대", desc: "삿포로역 도보 4분, 무료 대욕장과 깔끔한 객실의 가성비 호텔" },
                            { name: "베셀 인 삿포로 나카지마 공원", price: "약 13만원대", desc: "해산물 카이센동 무제한 조식으로 전국 1위를 다투는 인기 숙소" },
                            { name: "더 노트 삿포로 (THE KNOT)", price: "약 12만원대", desc: "스스키노·다누키코지 직결, 트렌디한 감성의 신축 라이프스타일 호텔" }
                        ]
                    },
                    "교토": {
                        attractions: [
                            { name: "후시미 이나리 신사 (천본토리)", desc: "산길을 따라 끝없이 이어지는 붉은 도리이 터널이 장관인 신사", img: "./images/asia_aus/japan/kyoto/fushimi_inari.jpg" },
                            { name: "기요미즈데라 (청수사)", desc: "못 없이 세운 절벽 위 목조 본당에서 교토 시내가 내려다보이는 천년 사찰", img: "./images/asia_aus/japan/kyoto/kiyomizu_dera.jpg" },
                            { name: "아라시야마 대나무 숲 & 도게츠교", desc: "하늘을 찌를 듯 솟은 푸른 대나무 숲길과 가쓰라강이 흐르는 힐링 명소", img: "./images/asia_aus/japan/kyoto/arashiyama_bamboo.jpg" },
                            { name: "금각사 (킨카쿠지)", desc: "연못 위에 눈부시게 반짝이는 순금 누각이 비치는 교토의 상징", img: "./images/asia_aus/japan/kyoto/kinkakuji.jpg" },
                            { name: "기온 거리 & 산넨자카·니넨자카", desc: "전통 목조 마찌야 가옥과 석판 골목이 살아 숨 쉬는 교토 옛 거리", img: "./images/asia_aus/japan/kyoto/gion_kyoto.jpg" }
                        ],
                        restaurants: [
                            { name: "교토 가츠규 (가와라마치 본점)", desc: "바삭하게 튀긴 소고기 규카츠를 온천계란 소스에 찍어 먹는 원조 맛집", img: "./images/asia_aus/japan/kyoto/kyoto_katsugyu.jpg" },
                            { name: "장어 히츠마부시 오카야마 (아라시야마 요시무라)", desc: "도게츠교를 바라보며 즐기는 100% 메밀 수제 소바 & 장어덮밥", img: "./images/asia_aus/japan/kyoto/arashiyama_yoshimura.jpg" },
                            { name: "니시키 시장 (Nishiki Market)", desc: "'교토의 부엌'이라 불리며 두유 도넛·계란말이·꼬치구이를 맛보는 전통시장", img: "./images/asia_aus/japan/kyoto/nishiki_market_kyoto.jpg" },
                            { name: "동양정 (교토 포르타점)", desc: "포일에 싸서 구워낸 육즙 가득 함박스테이크와 통토마토 샐러드 노포", img: "./images/asia_aus/japan/kyoto/toyotei_kyoto.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "% Arabica 교토 아라시야마 (응커피)", desc: "가쓰라강 물결을 마주 보고 마시는 교토 발 스페셜티 라떼 원조", img: "./images/asia_aus/japan/kyoto/arabica_kyoto_arashiyama.jpg" },
                                { name: "이노다 커피 본점 (INODA COFFEE)", desc: "1940년 개점해 교토 문인들의 사랑방이었던 클래식 정원 킷사텐", img: "./images/asia_aus/japan/kyoto/inoda_coffee_kyoto.jpg" }
                            ],
                            study: [
                                { name: "교토 스타벅스 니넨자카 야사카 차야점", desc: "100년 넘은 전통 다다미방 마찌야에서 커피를 마시는 세계 유일의 매장", img: "./images/asia_aus/japan/kyoto/starbucks_ninenzaka.jpg" },
                                { name: "Kurasu Kyoto (쿠라스 교토)", desc: "교토역 인근 일본 스페셜티 원두를 소개하는 깔끔하고 차분한 로스터리", img: "./images/asia_aus/japan/kyoto/kurasu_kyoto.jpg" }
                            ]
                        },
                        activities: [
                            { name: "기온·기요미즈데라 기모노 스냅 체험", desc: "화려한 기모노와 유카타를 입고 고즈넉한 산넨자카 돌길을 걷는 추억", img: "./images/asia_aus/japan/kyoto/kyoto_kimono_walk.jpg" },
                            { name: "아라시야마 사가노 로맨틱 트레인", desc: "호즈강 단풍과 벚꽃 협곡을 따라 달리는 오픈형 레트로 관광열차", img: "./images/asia_aus/japan/kyoto/sagano_romantic_train.jpg" },
                            { name: "우지 (Uji) 말차 투어 & 뵤도인 방문", desc: "일본 최고급 말차 본고장에서 즐기는 말차 파르페와 10엔 동전 사찰", img: "./images/asia_aus/japan/kyoto/uji_byodoin_kyoto.jpg" },
                            { name: "폰토초 (Pontocho) 강변 야경 산책", desc: "가모강변 좁은 목조 골목의 붉은 등불 아래 선술집과 야경을 즐기는 밤", img: "./images/asia_aus/japan/kyoto/pontocho_kyoto.jpg" }
                        ],
                        hotels: [
                            { name: "소테츠 프레사 인 교토 시조카라스마", price: "약 11만원대", desc: "가와라마치·니시키시장 도보권의 깔끔하고 합리적인 가성비 숙소" },
                            { name: "크로스 호텔 교토 (Cross Hotel Kyoto)", price: "약 22만원대", desc: "폰토초와 가모강 바로 앞, 넓은 욕조와 세련된 인테리어 인기 호텔" },
                            { name: "온야도 노노 교토 시치조 (Onyado Nono)", price: "약 20만원대", desc: "전 관 다다미 바닥과 천연 온천 대욕장, 무료 야식 라멘을 갖춘 료칸형 호텔" },
                            { name: "더 사우전드 교토 (THE THOUSAND KYOTO)", price: "약 32만원대", desc: "교토역 도보 2분, 선(Zen) 미니멀리즘 감성의 럭셔리 호텔" }
                        ]
                    },
                    "나고야": {
                        attractions: [
                            { name: "나고야 성 (Nagoya Castle)", desc: "지붕 위 황금 샤치호코와 웅장한 혼마루 어전이 빛나는 일본 3대 명성", img: "./images/asia_aus/japan/nagoya/nagoya_castle.jpg" },
                            { name: "지브리 파크 (Ghibli Park)", desc: "토토로·하울의 움직이는 성·센과 치히로 세계를 그대로 재현한 꿈의 공원", img: "./images/asia_aus/japan/nagoya/ghibli_park_nagoya.jpg" },
                            { name: "오아시스 21 & 미라이 타워", desc: "유리 지붕 '물의 우주선'과 밤하늘을 비추는 나고야 TV타워 야경 명소", img: "./images/asia_aus/japan/nagoya/oasis_21_nagoya.jpg" },
                            { name: "오스 상점가 & 오스 관음", desc: "빈티지 샵·애니메이션 굿즈·길거리 간식이 가득한 활기찬 아케이드 거리", img: "./images/asia_aus/japan/nagoya/osu_shopping_district.jpg" },
                            { name: "아쓰타 신궁 (Atsuta Jingu)", desc: "울창한 천년 녹나무 숲속에 자리한 일본 3대 신궁의 경건한 휴식처", img: "./images/asia_aus/japan/nagoya/atsuta_jingu.jpg" }
                        ],
                        restaurants: [
                            { name: "아쓰타 호라이켄 (히츠마부시 본점)", desc: "숯불에 바삭하게 구운 장어덮밥을 3가지 방식으로 즐기는 나고야 원조 맛집", img: "./images/asia_aus/japan/nagoya/atsuta_horaiken.jpg" },
                            { name: "야바톤 (Yabaton 본점)", desc: "진하고 달콤짭짤한 붉은 된장 소스를 듬뿍 부어 먹는 미소카츠 원조", img: "./images/asia_aus/japan/nagoya/yabaton_nagoya.jpg" },
                            { name: "세카이노 야마짱 (Sekai no Yamachan)", desc: "매콤한 후추 양념이 중독적인 바삭한 닭날개 튀김(테바사키) 성지", img: "./images/asia_aus/japan/nagoya/sekai_no_yamachan.jpg" },
                            { name: "야마모토야 본점 (미소니코미 우동)", desc: "뚝배기에 쫄깃한 면과 팔정 된장 육수를 끓여낸 나고야 겨울 별미", img: "./images/asia_aus/japan/nagoya/yamamotoya_udon.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "코메다 커피 본점 (Komeda's Coffee)", desc: "나고야에서 시작된 모닝 서비스(음료 주문 시 토스트·계란 무료)와 시로노와르", img: "./images/asia_aus/japan/nagoya/komeda_coffee_nagoya.jpg" },
                                { name: "카코 카야바 점 (KAKO BUCYO)", desc: "수제 팥앙금과 생크림을 올린 나고야 전통 오구라 토스트 브런치 명소", img: "./images/asia_aus/japan/nagoya/kako_coffee_nagoya.jpg" }
                            ],
                            study: [
                                { name: "TRUNK COFFEE (트렁크 커피)", desc: "북유럽 스타일의 세련된 인테리어와 에스프레소로 유명한 로스터리", img: "./images/asia_aus/japan/nagoya/trunk_coffee_nagoya.jpg" },
                                { name: "츠타야 서점 & 스타벅스 나고야 게이트타워", desc: "나고야역 15층에서 도심을 내려다보며 쾌적하게 작업하기 좋은 공간", img: "./images/asia_aus/japan/nagoya/nagoya_gate_tower_starbucks.jpg" }
                            ]
                        },
                        activities: [
                            { name: "시라카와고 & 다카야마 합장촌 일일 투어", desc: "동화 속 눈 덮인 삼각 지붕 갓쇼즈쿠리 마을과 옛 에도 거리 탐방", img: "./images/asia_aus/japan/nagoya/shirakawa_go_tour.jpg" },
                            { name: "나고야항 수족관 & 레고랜드 재팬", desc: "범고래·벨루가 쇼를 만나는 초대형 수족관과 가족 단위 테마파크", img: "./images/asia_aus/japan/nagoya/nagoya_aquarium.jpg" },
                            { name: "나바나노사토 (Nabana no Sato) 일루미네이션", desc: "수백만 개의 LED 빛 터널과 수상 조명이 펼쳐지는 일본 최대 빛 축제", img: "./images/asia_aus/japan/nagoya/nabana_no_sato.jpg" },
                            { name: "도요타 산업기술기념관 견학", desc: "직조기부터 미래형 로봇·자동차까지 도요타의 역사를 체험하는 박물관", img: "./images/asia_aus/japan/nagoya/toyota_museum_nagoya.jpg" }
                        ],
                        hotels: [
                            { name: "나고야 JR 게이트타워 호텔", price: "약 22만원대", desc: "나고야역 바로 위 직결, 공항·지브리·신칸센 이동이 가장 편리한 호텔" },
                            { name: "니시테쓰 호텔 크룸 나고야", price: "약 12만원대", desc: "사카에 중심가, 최상층 노천 대욕장을 갖춘 가성비 1순위 호텔" },
                            { name: "미쓰이 가든 호텔 나고야 프리미어", price: "약 18만원대", desc: "18층 이상 고층 객실과 스파 대욕장이 매력적인 모던 호텔" },
                            { name: "나고야 프린스 호텔 스카이 타워", price: "약 20만원대", desc: "32층 이상 초고층 파노라마 야경을 감상하는 낭만 뷰 호텔" }
                        ]
                    },
                    "마쓰야마": {
                        attractions: [
                            { name: "도고 온천 본관 (Dogo Onsen)", desc: "센과 치히로의 행방불명 모티브가 된 3,000년 역사의 일본 최고(最古) 온천", img: "./images/asia_aus/japan/matsuyama/dogo_onsen.jpg" },
                            { name: "마쓰야마 성 (Matsuyama Castle)", desc: "리프트·로프웨이를 타고 오르는 세토 내해 전망의 현존 12천수 명성", img: "./images/asia_aus/japan/matsuyama/matsuyama_castle.jpg" },
                            { name: "봇짱 시계탑 & 도고 하이칼라 거리", desc: "정각마다 인형이 춤추는 시계탑과 유카타 차림으로 거니는 온천 상점가", img: "./images/asia_aus/japan/matsuyama/dogo_botchan_clock.jpg" },
                            { name: "반스이소 (Bansuiso)", desc: "도심 숲속에 숨겨진 1922년 프랑스 르네상스 양식의 아름다운 저택", img: "./images/asia_aus/japan/matsuyama/bansuiso_matsuyama.jpg" },
                            { name: "시모나다 역 (Shimonada Station)", desc: "바다 바로 앞 무인 간이역, 영화와 애니메이션 속 노을 인생샷 성지", img: "./images/asia_aus/japan/matsuyama/shimonada_station.jpg" }
                        ],
                        restaurants: [
                            { name: "고시키 (Goshiki)", desc: "따뜻한 밥 위에 참돔 회와 달콤한 간장·계란 노른자를 비벼 먹는 우와지마 도미밥", img: "./images/asia_aus/japan/matsuyama/goshiki_taimeshi.jpg" },
                            { name: "카도야 오카이도점 (Kadoya)", desc: "마쓰야마식 솥밥 도미밥과 우와지마식 생선회 도미밥을 모두 맛보는 명가", img: "./images/asia_aus/japan/matsuyama/kadoya_matsuyama.jpg" },
                            { name: "아키요시 / 갓포 스시 명인", desc: "세토 내해의 신선한 제철 생선회와 마쓰야마 명물 자코텐(어묵) 맛집", img: "./images/asia_aus/japan/matsuyama/jakoten_matsuyama.jpg" },
                            { name: "10 Factory (도고 본점)", desc: "에히메 특산 귤 종류별 생과일주스와 젤라또를 골라 마시는 귤 성지", img: "./images/asia_aus/japan/matsuyama/10_factory_matsuyama.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "도고 맥주관 (Dogo Brewery)", desc: "온천 후 유카타를 입고 도고 특제 수제 맥주와 소시지를 즐기는 펍 카페", img: "./images/asia_aus/japan/matsuyama/dogo_brewery.jpg" },
                                { name: "스타벅스 도고온천역사점", desc: "1911년 메이지 시대 서양식 목조 기차역을 그대로 살린 레트로 카페", img: "./images/asia_aus/japan/matsuyama/starbucks_dogo_station.jpg" }
                            ],
                            study: [
                                { name: "플라잉 스코츠맨 (Flying Scotsman)", desc: "오카이도 인근 두툼한 핫케이크와 드립 커피로 유명한 조용한 킷사텐", img: "./images/asia_aus/japan/matsuyama/flying_scotsman_matsuyama.jpg" },
                                { name: "Noma Noma Cafe", desc: "도고 상점가 골목 안 아늑하고 차분한 감성의 로스터리 공간", img: "./images/asia_aus/japan/matsuyama/noma_cafe_matsuyama.jpg" }
                            ]
                        },
                        activities: [
                            { name: "감귤주스 수도꼭지 체험 (에히메의 식탁 1970·공항)", desc: "수도꼭지를 틀면 에히메 특산 품종별 감귤 주스가 콸콸 나오는 마쓰야마 필수 이색 체험", img: "./images/asia_aus/japan/matsuyama/mikan_juice_faucet.jpg" },
                            { name: "봇짱 열차 & 이요테쓰 노면전차 탑승", desc: "증기기관차 모양의 레트로 봇짱 열차를 타고 시내를 달리는 시간여행", img: "./images/asia_aus/japan/matsuyama/botchan_train_matsuyama.jpg" },
                            { name: "마쓰야마 성 1인용 체어 리프트 탑승", desc: "발아래 숲이 펼쳐지는 스릴 있고 시원한 야외 1인 리프트 체험", img: "./images/asia_aus/japan/matsuyama/matsuyama_castle_lift.jpg" },
                            { name: "도고 온천 아스카노유 & 족욕 순례", desc: "아스카 시대 황실 목욕탕을 재현한 온천과 마을 곳곳 무료 족욕 체험", img: "./images/asia_aus/japan/matsuyama/asuka_no_yu_dogo.jpg" },
                            { name: "우치코·오즈 (Ozu) 옛 거리 산책", desc: "에도·메이지 시대 전통 가옥과 흰 벽이 그대로 보존된 근교 소도시 투어", img: "./images/asia_aus/japan/matsuyama/uchiko_matsuyama.jpg" }
                        ],
                        hotels: [
                            { name: "도고 프린스 호텔", price: "약 24만원대", desc: "20여 종의 온천탕과 무료 송영버스, 귤 주스 수도꼭지를 갖춘 인기 료칸" },
                            { name: "다이이치 인 마쓰야마 / 칸데오 호텔 오카이도", price: "약 13만원대", desc: "마쓰야마성 뷰 최상층 스카이 스파 노천탕을 갖춘 한국인 1순위 호텔" },
                            { name: "ANA 크라운 플라자 마쓰야마", price: "약 15만원대", desc: "오카이도 아케이드 바로 앞, 공항 셔틀과 접근성이 가장 좋은 호텔" },
                            { name: "도고 온천 야마토야 본점", price: "약 28만원대", desc: "도고 온천 본관 도보 1분, 전통 노가쿠 무대와 가이세키 요리가 유명한 료칸" }
                        ]
                    },
                    "다카마쓰": {
                        attractions: [
                            { name: "리쓰린 공원 (Ritsurin Garden)", desc: "미슐랭 그린가이드 별 3개를 받은 에도 시대 최고(最古) 일본식 회유 정원", img: "./images/asia_aus/japan/takamatsu/ritsurin_garden.jpg" },
                            { name: "나오시마 (Naoshima) 호박 조형물", desc: "쿠사마 야요이의 노란 호박과 지중미술관이 있는 세계적 현대예술의 섬", img: "./images/asia_aus/japan/takamatsu/naoshima_pumpkin.jpg" },
                            { name: "쇼도시마 엔젤로드 (Angel Road)", desc: "하루 두 번 썰물 때만 바다 위로 나타나는 신비로운 사랑의 모래길", img: "./images/asia_aus/japan/takamatsu/shodoshima_angel_road.jpg" },
                            { name: "다카마쓰 성 (타마모 공원)", desc: "바닷물을 해자로 끌어다 쓴 일본 3대 수성(水城)과 아름다운 정원", img: "./images/asia_aus/japan/takamatsu/takamatsu_castle.jpg" },
                            { name: "야시마 전망대 (시시노레이간)", desc: "세토 내해의 다도해 섬들과 붉은 노을이 파노라마처럼 펼쳐지는 절벽", img: "./images/asia_aus/japan/takamatsu/yashima_viewpoint.jpg" }
                        ],
                        restaurants: [
                            { name: "우동 바카이치다이 (Udon Baka Ichidai)", desc: "버터와 흑후추·반숙 계란을 비벼 먹는 카마바타 우동의 전설적인 줄 서는 맛집", img: "./images/asia_aus/japan/takamatsu/udon_baka_ichidai.jpg" },
                            { name: "잇카쿠 (Ikkaku 다카마쓰)", desc: "매콤한 마늘 양념을 발라 바삭하게 구워낸 다카마쓰 명물 뼈다귀 닭구이(호네츠키도리)", img: "./images/asia_aus/japan/takamatsu/ikkaku_takamatsu.jpg" },
                            { name: "카와라 (Kawara 우동)", desc: "에도 시대 고택을 개조한 고풍스러운 정원 속에서 먹는 쫄깃한 사누키 우동", img: "./images/asia_aus/japan/takamatsu/kawara_udon_takamatsu.jpg" },
                            { name: "우에하라야 본점", desc: "리쓰린 공원 인근 현지인들이 매일 아침 찾는 가성비 최강 사누키 우동", img: "./images/asia_aus/japan/takamatsu/ueharaya_udon.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "키쿠게쓰테이 (Kikugetsutei 찻집)", desc: "리쓰린 공원 연못 위에 떠 있는 다실에서 말차와 화과자를 마시는 풍류", img: "./images/asia_aus/japan/takamatsu/kikugetsutei_takamatsu.jpg" },
                                { name: "우미마치 상점가 (Kitahama Alley)", desc: "옛 항구 창고를 개조한 바다 앞 빈티지 카페와 소품샵 복합 문화공간", img: "./images/asia_aus/japan/takamatsu/kitahama_alley.jpg" }
                            ],
                            study: [
                                { name: "리틀 베이커리 & 코워킹 카페 (마루가메마치)", desc: "다카마쓰 돔 아케이드 중심가에서 갓 구운 빵과 커피로 쉬어가는 공간", img: "./images/asia_aus/japan/takamatsu/marugamemachi_cafe.jpg" },
                                { name: "카미카와 커피 (Kamikawa Coffee)", desc: "조용한 주택가 인근 정성껏 내린 핸드드립 커피와 독서하기 좋은 로스터리", img: "./images/asia_aus/japan/takamatsu/kamikawa_coffee_takamatsu.jpg" }
                            ]
                        },
                        activities: [
                            { name: "나오시마·테시마 현대미술관 호핑투어", desc: "다카마쓰항에서 페리를 타고 떠나는 세토 내해 예술 섬 자전거 투어", img: "./images/asia_aus/japan/takamatsu/naoshima_ferry_art.jpg" },
                            { name: "쇼도시마 올리브 공원 마법 빗자루 인증샷", desc: "마녀 배달부 키키 실사판 촬영지 그리스 풍차 앞에서 빗자루 점프샷", img: "./images/asia_aus/japan/takamatsu/shodoshima_olive_park.jpg" },
                            { name: "고토히라구 (곤피라상) 1,368계단 참배", desc: "에도 시대부터 평생 한 번은 꼭 가봐야 한다는 영험한 산 위 신사 탐방", img: "./images/asia_aus/japan/takamatsu/kotohira_gu.jpg" },
                            { name: "부쇼잔 온천 (Busshozan Onsen)", desc: "건축상을 받은 미니멀한 모던 목조 건물에서 즐기는 야외 탄산 온천", img: "./images/asia_aus/japan/takamatsu/busshozan_onsen.jpg" }
                        ],
                        hotels: [
                            { name: "JR 호텔 클레멘트 다카마쓰", price: "약 14만원대", desc: "다카마쓰역과 페리 선착장 바로 앞, 세토 내해 뷰가 멋진 대표 호텔" },
                            { name: "도미 인 다카마쓰 추오코엔마에", price: "약 12만원대", desc: "천연 온천 대욕장과 무료 야식 소바가 제공되는 가성비 최고 호텔" },
                            { name: "다이이와 로이넷 호텔 다카마쓰", price: "약 11만원대", desc: "마루가메마치 쇼핑 아케이드 중심에 위치한 넓고 쾌적한 숙소" },
                            { name: "다카마쓰 도큐 REI 호텔", price: "약 10만원대", desc: "리무진 버스 정류장 도보 1분, 깔끔하고 합리적인 비즈니스 호텔" }
                        ]
                    }
                }
            }

            ,
            "필리핀": {
                desc: "에메랄드빛 바다, 활기찬 수중 낙원",
                cities: {
                    "마닐라": {
                        attractions: [
                            { name: "인트라무로스", desc: "16세기 스페인 식민지 시대의 성벽 도시", img: "./images/asia_aus/philippines/manila/intramuros.jpg" },
                            { name: "리잘 공원", desc: "필리핀 독립 영웅 호세 리잘을 기리는 도심 공원", img: "./images/asia_aus/philippines/manila/rizal_park.jpg" },
                            { name: "산티아고 요새 (Fort Santiago)", desc: "인트라무로스 내 역사적인 스페인 석조 요새", img: "./images/asia_aus/philippines/manila/fort_santiago.jpg" },
                            { name: "마닐라 대성당", desc: "웅장한 로마네스크 양식의 필리핀 대표 성당", img: "./images/asia_aus/philippines/manila/manila_cathedral.jpg" },
                            { name: "산 아구스틴 성당", desc: "유네스코 세계문화유산으로 지정된 최고(最古) 석조 성당", img: "./images/asia_aus/philippines/manila/san_agustin_church.jpg" }
                        ],
                        restaurants: [
                            { name: "Jollibee (졸리비)", desc: "필리핀 국민 패스트푸드 치킨조이와 달콤한 스파게티", img: "./images/asia_aus/philippines/manila/jollibee.jpg" },
                            { name: "The Aristocrat Restaurant", desc: "100년 전통의 마닐라 바비큐 치킨 맛집", img: "./images/asia_aus/philippines/manila/aristocrat.jpg" },
                            { name: "Barbara's Heritage Restaurant", desc: "인트라무로스 전통 공연과 함께 즐기는 필리핀 요리", img: "./images/asia_aus/philippines/manila/barbaras_manila.jpg" },
                            { name: "Manam Comfort Filipino", desc: "시식(Sisig)과 갈릭 라이스가 맛있는 모던 필리핀 식당", img: "./images/asia_aus/philippines/manila/manam_manila.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "The Henry Hotel Manila Cafe", desc: "엔틱한 정원과 빈티지 인테리어의 부티크 카페", img: "./images/asia_aus/philippines/manila/the_henry_hotel_cafe.jpg" },
                                { name: "La Cathedral Cafe", desc: "마닐라 대성당 야경을 바라보는 루프탑 테라스 카페", img: "./images/asia_aus/philippines/manila/la_cathedral_cafe.jpg" }
                            ],
                            study: [
                                { name: "Commune Cafe", desc: "마카티의 입체 라떼아트와 쾌적한 노트북 작업 공간", img: "./images/asia_aus/philippines/manila/commune_cafe.jpg" },
                                { name: "Single Origin BGC", desc: "보니파시오 하이스트리트의 넓고 세련된 카공 카페", img: "./images/asia_aus/philippines/manila/single_origin_bgc.jpg" }
                            ]
                        },
                        activities: [
                            { name: "마닐라 베이 선셋 크루즈", desc: "황금빛으로 물드는 마닐라만의 석양을 감상하는 유람선", img: "./images/asia_aus/philippines/manila/manila_bay_sunset_cruise.jpg" },
                            { name: "따가이따이 따알 화산 투어", desc: "호수 속의 화산 분화구를 조망하는 근교 데이 투어", img: "./images/asia_aus/philippines/manila/taal_volcano_tour.jpg" },
                            { name: "인트라무로스 밤부 바이크 투어", desc: "대나무 자전거를 타고 구시가지 유적지 일주", img: "./images/asia_aus/philippines/manila/bambike_intramuros.jpg" },
                            { name: "팍상한 폭포 카누 급류 타기", desc: "열대 협곡 사이를 가로지르는 스릴 만점 전통 방카 보트", img: "./images/asia_aus/philippines/manila/pagsanjan_falls.jpg" },
                            { name: "보니파시오 하이스트리트 야경 산책", desc: "마닐라에서 가장 안전하고 세련된 복합 쇼핑 거리", img: "./images/asia_aus/philippines/manila/bonifacio_high_street.jpg" }
                        ],
                        hotels: [
                            { name: "Hop Inn Hotel Ermita Manila", price: "약 4만원", desc: "마닐라 베이 인근 깔끔하고 합리적인 가성비 호텔" },
                            { name: "The Bayleaf Intramuros", price: "약 8만원", desc: "성벽 도시 뷰 루프탑 레스토랑을 갖춘 부티크 호텔" },
                            { name: "Lub d Philippines Makati", price: "약 5만원", desc: "마카티 중심부의 트렌디하고 활기찬 소셜 호텔" },
                            { name: "Savoy Hotel Manila", price: "약 9만원", desc: "공항 제3터미널 바로 앞 수영장을 갖춘 편리한 숙소" },
                            { name: "Seda Bonifacio Global City", price: "약 16만원", desc: "BGC 하이스트리트 도보 1분 거리의 안전한 비즈니스 호텔" }
                        ]
                    },
                    "세부": {
                        attractions: [
                            { name: "오슬롭 고래상어", desc: "거대 고래상어와의 조우", img: "./images/asia_aus/philippines/cebu/oslob_whale_shark.jpg" },
                            { name: "가와산 폭포", desc: "에메랄드빛 계곡 다이빙", img: "./images/asia_aus/philippines/cebu/kawasan_falls.jpg" },
                            { name: "마젤란 십자가", desc: "세부 역사의 시작점", img: "./images/asia_aus/philippines/cebu/magellans_cross.jpg" },
                            { name: "도교 사원", desc: "이국적인 산 위의 사원", img: "./images/asia_aus/philippines/cebu/taoist_temple.jpg" },
                            { name: "탑스 전망대", desc: "세부 시내 야경 한눈에", img: "./images/asia_aus/philippines/cebu/tops_lookout.jpg" }
                        ],
                        restaurants: [
                            { name: "Jollibee Cebu", desc: "치킨조이 필수", img: "./images/asia_aus/philippines/cebu/jollibee_cebu.jpg" },
                            { name: "Rico's Lechon", desc: "세부 최고의 레촌 맛집", img: "./images/asia_aus/philippines/cebu/ricos_lechon.jpg" },
                            { name: "Zubuchon", desc: "깔끔한 레촌 전문점", img: "./images/asia_aus/philippines/cebu/zubuchon.jpg" },
                            { name: "Gerry's Grill Cebu", desc: "그릴 오징어와 갈릭 라이스", img: "./images/asia_aus/philippines/cebu/gerrys_grill.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "La Vie Parisienne", desc: "파리 느낌 예쁜 와인 & 정원 카페", img: "./images/asia_aus/philippines/cebu/la_vie_parisenne.jpg" },
                                { name: "10,000 Roses Cafe", desc: "장미 조명이 가득한 코르도바 석양 뷰", img: "./images/asia_aus/philippines/cebu/10000_roses_cafe.jpg" }
                            ],
                            study: [
                                { name: "The Workplace Cafe Cebu", desc: "세부의 본격 카공 전용 코워킹 공간", img: "./images/asia_aus/philippines/cebu/workplace_cafe.jpg" },
                                { name: "Bo's Coffee IT Park", desc: "로컬 카공족의 스테디셀러 스페셜티 카페", img: "./images/asia_aus/philippines/cebu/bos_coffee.jpg" }
                            ]
                        },
                        activities: [
                            { name: "가와산 캐녀닝 투어", desc: "에메랄드빛 협곡을 따라 다이빙하며 내려오는 어드벤처", img: "./images/asia_aus/philippines/cebu/kawasan_canyoneering.jpg" },
                            { name: "모알보알 정어리떼 & 거북이 스노클링", desc: "수백만 마리 정어리 군무와 바다거북을 만나는 수중 체험", img: "./images/asia_aus/philippines/cebu/moalboal_snorkeling.jpg" },
                            { name: "막탄 아일랜드 호핑투어", desc: "날루수안·힐루뚱안 섬 산호초 스노클링과 선상 바비큐", img: "./images/asia_aus/philippines/cebu/cebu_island_hopping.jpg" },
                            { name: "산 페드로 요새 & 시티 유적 투어", desc: "스페인 통치 시대의 성곽과 산토니뇨 성당 역사 탐방", img: "./images/asia_aus/philippines/cebu/fort_san_pedro.jpg" },
                            { name: "SM 씨사이드 시티 세부 쇼핑", desc: "바다를 마주한 초대형 복합 쇼핑몰에서 기념품 쇼핑", img: "./images/asia_aus/philippines/cebu/sm_seaside_cebu.jpg" }
                        ],
                        hotels: [
                            { name: "Shejoje Poshtel", price: "약 3만원", desc: "최고의 청결도 캡슐형" },
                            { name: "Traveler's Home", price: "약 4만원", desc: "가정집 같은 푸근한 가성비" },
                            { name: "Hotel Pier Cuatro", price: "약 5만원", desc: "무료 조식 실속 숙소" },
                            { name: "Holiday Inn Cebu", price: "약 11만원", desc: "믿고 가는 글로벌 체인" },
                            { name: "Sempre Premier", price: "약 6만원", desc: "공항 인근 깔끔한 인" }
                        ]
                    },
                    "보라카이": {
                        attractions: [
                            { name: "화이트 비치 (White Beach)", desc: "밀가루처럼 고운 4km 산호 모래와 에메랄드빛 세계 3대 해변", img: "./images/asia_aus/philippines/boracay/white_beach_boracay.jpg" },
                            { name: "푸카 쉘 비치 (Puka Beach)", desc: "조개껍데기 모래와 야자수가 어우러진 한적하고 청량한 북부 해변", img: "./images/asia_aus/philippines/boracay/puka_shell_beach.jpg" },
                            { name: "윌리스 록 (Willy's Rock)", desc: "스테이션 1 얕은 바다 위 기암괴석에 세워진 성모 마리아상 포토존", img: "./images/asia_aus/philippines/boracay/willys_rock.jpg" },
                            { name: "디몰 (D'Mall Boracay)", desc: "보라카이 중심부에 자리한 야외 쇼핑·맛집·기념품 거리", img: "./images/asia_aus/philippines/boracay/dmall_boracay.jpg" },
                            { name: "루호산 전망대 (Mount Luho)", desc: "보라카이 섬 전체와 양쪽 바다를 한눈에 내려다보는 최고봉 전망대", img: "./images/asia_aus/philippines/boracay/mount_luho_boracay.jpg" }
                        ],
                        restaurants: [
                            { name: "게리스 그릴 보라카이 (Gerry's Grill)", desc: "화이트 비치 바로 앞에서 즐기는 통오징어 그릴 구이와 시식", img: "./images/asia_aus/philippines/boracay/gerrys_grill_boracay.jpg" },
                            { name: "아이 러브 바비큐 (I Love Backyard BBQ)", desc: "디몰에서 줄 서서 먹는 달콤짭짤 폭립과 어니언링 맛집", img: "./images/asia_aus/philippines/boracay/i_love_bbq_boracay.jpg" },
                            { name: "스파이스 버드 (Spicebird)", desc: "피리피리 소스를 곁들인 숯불 그릴 치킨과 감자튀김", img: "./images/asia_aus/philippines/boracay/spicebird_boracay.jpg" },
                            { name: "코코마마 (Coco Mama)", desc: "코코넛 껍질에 신선한 망고와 코코넛 아이스크림을 담아주는 디저트", img: "./images/asia_aus/philippines/boracay/coco_mama_boracay.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "써니 사이드 카페 (The Sunny Side Cafe)", desc: "화이트 비치 뷰와 폭신한 우베(자색고구마) 팬케이크 브런치 성지", img: "./images/asia_aus/philippines/boracay/sunny_side_cafe_boracay.jpg" },
                                { name: "할로망고 (Halomango)", desc: "디몰에서 꼭 먹는 시원달콤 망고홀릭 소프트 아이스크림 & 빙수", img: "./images/asia_aus/philippines/boracay/halomango_boracay.jpg" }
                            ],
                            study: [
                                { name: "Little Taj & Cafe Maruja", desc: "스테이션 3 해변가 알록달록한 쿠션과 여유로운 작업·휴식 라운지", img: "./images/asia_aus/philippines/boracay/cafe_maruja_boracay.jpg" },
                                { name: "Real Coffee & Tea Cafe", desc: "보라카이 명물 칼라만시 머핀과 향긋한 커피를 즐기는 아늑한 카페", img: "./images/asia_aus/philippines/boracay/real_coffee_boracay.jpg" }
                            ]
                        },
                        activities: [
                            { name: "선셋 세일링 파라우 (Paraw Sailing)", desc: "붉게 타오르는 보라카이 석양 바다를 바람으로만 가르는 무동력 요트", img: "./images/asia_aus/philippines/boracay/paraw_sunset_sailing.jpg" },
                            { name: "크리스탈 코브 & 악어섬 호핑투어", desc: "투명한 산호초 바다 스노클링과 크리스탈 동굴 탐험", img: "./images/asia_aus/philippines/boracay/boracay_island_hopping.jpg" },
                            { name: "헬멧 다이빙 (씨워킹) & 패러세일링", desc: "산소 헬멧을 쓰고 바닷속 열대어와 교감하는 해양 액티비티", img: "./images/asia_aus/philippines/boracay/boracay_helmet_diving.jpg" },
                            { name: "보라카이 고급 스파 & 태반 마사지", desc: "물놀이 후 노곤한 몸을 풀어주는 오션뷰 힐링 아로마 스파", img: "./images/asia_aus/philippines/boracay/boracay_spa_massage.jpg" }
                        ],
                        hotels: [
                            { name: "헤난 크리스탈 샌즈 리조트", price: "약 24만원대", desc: "화이트 비치와 맞닿은 루프탑 스카이풀로 가장 인기 있는 리조트" },
                            { name: "크림슨 리조트 앤 스파 보라카이", price: "약 38만원대", desc: "스테이션 제로 프라이빗 비치와 버블 파티로 유명한 5성급 리조트" },
                            { name: "더 린드 보라카이 (The Lind)", price: "약 35만원대", desc: "스테이션 1 해변 인피니티 풀과 최고급 선셋 뷰 럭셔리 호텔" },
                            { name: "펠리스 호텔 보라카이 (Feliz Hotel)", price: "약 14만원대", desc: "디몰 한복판에 위치한 라틴 식민지풍 루프탑 수영장 가성비 호텔" }
                        ]
                    }
                }
            }

            ,
            "중국": {
                desc: "찬란한 문명과 초현대적 풍경의 공존",
                cities: {
                    "상하이": {
                        attractions: [
                            { name: "와이탄 야경", desc: "동방명주를 마주하는 야경", img: "./images/asia_aus/china/shanghai/the_bund.jpg" },
                            { name: "예원 정원", desc: "중국 전통 조경의 정수", img: "./images/asia_aus/china/shanghai/yu_garden.jpg" },
                            { name: "상하이 디즈니랜드", desc: "상하이만의 특별한 테마파크", img: "./images/asia_aus/china/shanghai/shanghai_disneyland.jpg" },
                            { name: "상하이 신천지", desc: "유럽풍 카페 거리와 대한민국 임시정부 유적지", img: "./images/asia_aus/china/shanghai/xintiandi.jpg" },
                            { name: "상하이 타워", desc: "세계적인 높이의 루자쭈이 초고층 전망대", img: "./images/asia_aus/china/shanghai/shanghai_tower.jpg" }
                        ],
                        restaurants: [
                            { name: "하이디라오 상하이 (Haidilao)", desc: "최고의 서비스와 마라 육수를 자랑하는 훠궈", img: "./images/asia_aus/china/shanghai/haidilao_hot_pot.jpg" },
                            { name: "양스덤플링 (Yang's Dumpling)", desc: "바삭한 밑면과 뜨거운 육즙이 터지는 성젠바오", img: "./images/asia_aus/china/shanghai/yangs_dumpling.jpg" },
                            { name: "상하이 라오라오 (Grandmother's)", desc: "와이탄 인근 달콤짭짤한 홍소육 가정식 맛집", img: "./images/asia_aus/china/shanghai/grandmother_restaurant.jpg" },
                            { name: "점도덕 (Dian Dou De)", desc: "신천지 인근 홍미창펀과 하가우가 맛있는 딤섬 명가", img: "./images/asia_aus/china/shanghai/dian_dou_de_shanghai.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Starbucks Reserve Roastery Shanghai", desc: "난징시루의 거대한 원두 로스팅 팩토리 카페", img: "./images/asia_aus/china/shanghai/starbucks_roastery.jpg" },
                                { name: "% Arabica Wukang Road", desc: "우캉루 플라타너스 거리 감성의 스페셜티 커피", img: "./images/asia_aus/china/shanghai/arabica_wukang.jpg" }
                            ],
                            study: [
                                { name: "Seesaw Coffee Shanghai", desc: "조용하고 모던한 상하이 토종 스페셜티 카공 명소", img: "./images/asia_aus/china/shanghai/seesaw_coffee.jpg" },
                                { name: "Tsutaya Books Shanghai", desc: "컬럼비아 서클의 고풍스러운 서점 & 작업 카페", img: "./images/asia_aus/china/shanghai/tsutaya_shanghai.jpg" }
                            ]
                        },
                        activities: [
                            { name: "황푸강 유람선 야경 크루즈", desc: "와이탄과 푸동 마천루의 황홀한 조명을 가르는 밤배", img: "./images/asia_aus/china/shanghai/huangpu_river_cruise.jpg" },
                            { name: "난징동루 보행가 & 미니트레인", desc: "화려한 네온사인 거리를 달리는 레트로 관광열차", img: "./images/asia_aus/china/shanghai/nanjing_road.jpg" },
                            { name: "주가각 (Zhujiajiao) 수향마을 투어", desc: "상하이의 베네치아라 불리는 천년 운하 마을 나룻배", img: "./images/asia_aus/china/shanghai/zhujiajiao_water_town.jpg" },
                            { name: "동방명주 타워 투명 전망대", desc: "발아래로 상하이 도심이 펼쳐지는 유리 바닥 스카이워크", img: "./images/asia_aus/china/shanghai/oriental_pearl_tower.jpg" },
                            { name: "상하이 마그레브 (자기부상열차) 탑승", desc: "시속 300km 이상으로 질주하는 초고속 공항 열차 체험", img: "./images/asia_aus/china/shanghai/shanghai_maglev.jpg" }
                        ],
                        hotels: [
                            { name: "이텔 프리미엄 (인민광장점)", price: "약 9만원", desc: "난징동루·인민광장 도보권의 깔끔한 가성비 호텔" },
                            { name: "Ji Hotel Shanghai The Bund", price: "약 10만원", desc: "와이탄 야경 산책에 최적화된 모던 비즈니스 호텔" },
                            { name: "Campanile Shanghai Bund", price: "약 8만원", desc: "예원·와이탄 인근 프랑스 체인 실속형 숙소" },
                            { name: "SSAW Boutique Hotel Bund", price: "약 13만원", desc: "예원 바로 옆 무료 다도 라운지를 갖춘 부티크 호텔" },
                            { name: "Radisson Blu Hotel Shanghai New World", price: "약 18만원", desc: "인민광장 정면 UFO 모양 회전 전망 레스토랑 호텔" }
                        ]
                    },
                    "홍콩/마카오/선전": {
                        attractions: [
                            { name: "선전 세계지창 (Window of the World)", desc: "에펠탑·피라미드 등 세계 130여 명소를 모아둔 테마파크", img: "./images/asia_aus/china/shenzhen/window_of_the_world.jpg" },
                            { name: "홍콩 빅토리아 피크", desc: "백만 불짜리 홍콩 스카이라인과 하버 뷰의 정점", img: "./images/asia_aus/china/hong_kong/victoria_peak.jpg" },
                            { name: "홍콩 침사추이 시계탑 & 스타의 거리", desc: "빅토리아 하버를 따라 걷는 영화의 거리", img: "./images/asia_aus/china/hong_kong/avenue_of_stars_hk.jpg" },
                            { name: "마카오 성 바울 성당 유적", desc: "동서양 건축 양식이 융합된 마카오의 역사적 상징", img: "./images/asia_aus/china/hong_kong/ruins_of_st_paul.jpg" },
                            { name: "더 베네시안 마카오", desc: "실내 대운하와 곤돌라가 흐르는 초대형 복합 리조트", img: "./images/asia_aus/china/hong_kong/venetian_macau.jpg" }
                        ],
                        restaurants: [
                            { name: "팀호완 (Tim Ho Wan 홍콩)", desc: "세계에서 가장 저렴한 미슐랭 1스타 딤섬 맛집", img: "./images/asia_aus/china/hong_kong/dim_sum.jpg" },
                            { name: "Heytea (선전 본점)", desc: "쫀득한 과육과 진한 크림치즈 폼 티의 원조", img: "./images/asia_aus/china/shenzhen/heytea.jpg" },
                            { name: "침차이키 (Tsim Chai Kee)", desc: "탱글한 새우 완탕이 들어간 미슐랭 빕구르망 완탕면", img: "./images/asia_aus/china/hong_kong/tsim_chai_kee.jpg" },
                            { name: "로드 스토우즈 베이커리 (마카오)", desc: "겉바속촉 마카오 원조 포르투갈식 에그타르트", img: "./images/asia_aus/china/hong_kong/lord_stows_bakery.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Gee Coffee Roasters (선전)", desc: "선전을 대표하는 감각적인 스페셜티 로스터리", img: "./images/asia_aus/china/shenzhen/gee_coffee.jpg" },
                                { name: "% Arabica Star Ferry (홍콩)", desc: "침사추이 스타페리 선착장의 하버 뷰 카페", img: "./images/asia_aus/china/hong_kong/arabica_star_ferry.jpg" }
                            ],
                            study: [
                                { name: "선전 도서관 북카페 (Library Cafe)", desc: "조용하고 학구적인 분위기의 대형 작업 공간", img: "./images/asia_aus/china/shenzhen/library_cafe.jpg" },
                                { name: "The Cupping Room (홍콩 센트럴)", desc: "월드 바리스타 챔피언십 수상 로스터리 카페", img: "./images/asia_aus/china/hong_kong/cupping_room_hk.jpg" }
                            ]
                        },
                        activities: [
                            { name: "홍콩 피크트램 탑승", desc: "가파른 경사를 오르며 마천루가 기울어 보이는 이색 트램", img: "./images/asia_aus/china/hong_kong/peak_tram_hk.jpg" },
                            { name: "스타페리 & 심포니 오브 라이트 야경", desc: "빅토리아 하버를 건너며 감상하는 세계 최대 레이저 쇼", img: "./images/asia_aus/china/hong_kong/star_ferry_hk.jpg" },
                            { name: "선전 OCT 로프트 예술거리 탐방", desc: "공장 지대를 개조한 트렌디한 디자인 갤러리와 벽화 골목", img: "./images/asia_aus/china/shenzhen/oct_loft_shenzhen.jpg" },
                            { name: "선전만 공원 (런차이 공원) 야경 산책", desc: "미래 도시 같은 선전 마천루 라이트쇼와 드론쇼 명소", img: "./images/asia_aus/china/shenzhen/shenzhen_bay_park.jpg" },
                            { name: "마카오 세나도 광장 & 타이파 빌리지 투어", desc: "물결무늬 타일 광장과 파스텔톤 포르투갈 거리 산책", img: "./images/asia_aus/china/hong_kong/senado_square_macau.jpg" }
                        ],
                        hotels: [
                            { name: "MUJI Hotel Shenzhen", price: "약 13만원", desc: "무인양품의 미니멀 감성을 그대로 담은 디자인 호텔" },
                            { name: "ibis Hong Kong Central & Sheung Wan", price: "약 14만원", desc: "마카오 페리 터미널 옆 하버 뷰 가성비 숙소" },
                            { name: "The Salisbury - YMCA of Hong Kong", price: "약 16만원", desc: "침사추이 스타의 거리 바로 앞 최고의 가성비 위치" },
                            { name: "Broadway Hotel Macau", price: "약 12만원", desc: "갤럭시 리조트 그랜드 리조트 덱을 무료 이용하는 실속 호텔" },
                            { name: "Futian Shangri-La Shenzhen", price: "약 18만원", desc: "선전 중심가 고속철도역 인근 럭셔리 비즈니스 호텔" }
                        ]
                    },
                    "베이징": {
                        attractions: [
                            { name: "만리장성 (무톈위)", desc: "인류 최대의 건축 유산, 케이블카와 토보건 명소", img: "./images/asia_aus/china/beijing/great_wall.jpg" },
                            { name: "자금성 (고궁박물원)", desc: "명·청 왕조 황제들의 거대한 황궁", img: "./images/asia_aus/china/beijing/forbidden_city.jpg" },
                            { name: "천안문 광장", desc: "베이징의 심장부, 세계 최대 규모의 도심 광장", img: "./images/asia_aus/china/beijing/tiananmen_square.jpg" },
                            { name: "이화원", desc: "서태후가 사랑한 아름다운 황실 여름 별궁", img: "./images/asia_aus/china/beijing/summer_palace.jpg" },
                            { name: "천단 공원", desc: "황제가 하늘에 제사를 지내던 신성한 건축물", img: "./images/asia_aus/china/beijing/temple_of_heaven.jpg" }
                        ],
                        restaurants: [
                            { name: "성용싱 (晟永興)", desc: "미슐랭이 인정한 프리미엄 베이징덕(카오야) 명가", img: "./images/asia_aus/china/beijing/sheng_yong_xing.jpg" },
                            { name: "헌지우이치엔 (很久以前羊肉串)", desc: "자동 회전 불판에서 구워 먹는 인생 양꼬치", img: "./images/asia_aus/china/beijing/hen_jiu_yi_qian.jpg" },
                            { name: "외가댁 (外婆家·Wai Po Jia)", desc: "마파두부와 동파육이 일품인 가성비 최강 중식당", img: "./images/asia_aus/china/beijing/waipojia_beijing.jpg" },
                            { name: "사계민복 (Siji Minfu)", desc: "자금성 뷰와 함께 즐기는 바삭한 정통 베이징덕", img: "./images/asia_aus/china/beijing/peking_duck.jpg" },
                            { name: "하이디라오 (Haidilao)", desc: "변검 공연과 최고의 서비스를 자랑하는 훠궈의 정석", img: "./images/asia_aus/china/beijing/haidilao_beijing.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Metal Hands", desc: "옛 베이징 후퉁 골목 감성을 담은 스페셜티 카페", img: "./images/asia_aus/china/beijing/metal_hands_cafe.jpg" },
                                { name: "Voyage Coffee", desc: "난뤄구샹 인근 고즈넉한 전통 가옥 로스터리", img: "./images/asia_aus/china/beijing/voyage_coffee.jpg" }
                            ],
                            study: [
                                { name: "Soloist Coffee", desc: "양메이주셰제 골목의 엔틱하고 조용한 집중 명당", img: "./images/asia_aus/china/beijing/soloist_coffee.jpg" },
                                { name: "Page One 서점 카페", desc: "천안문 광장이 내려다보이는 대형 복합 서점 카페", img: "./images/asia_aus/china/beijing/page_one_beijing.jpg" }
                            ]
                        },
                        activities: [
                            { name: "유니버설 스튜디오 베이징", desc: "세계 최대 규모 테마파크와 쿵푸팬더 랜드", img: "./images/asia_aus/china/beijing/universal_beijing.jpg" },
                            { name: "고북수진 & 사마대장성 야경 투어", desc: "물길 위 수향마을과 밤에 빛나는 만리장성", img: "./images/asia_aus/china/beijing/gubei_water_town.jpg" },
                            { name: "스차하이 인력거 & 후퉁 투어", desc: "옛 베이징의 정취가 살아있는 호수 마을 산책", img: "./images/asia_aus/china/beijing/shichahai_hutong.jpg" },
                            { name: "798 예술구 탐방", desc: "군수공장을 개조한 트렌디한 현대미술 단지", img: "./images/asia_aus/china/beijing/798_art_zone.jpg" },
                            { name: "왕푸징 야시장 미식 투어", desc: "베이징 최대 번화가에서 즐기는 화려한 길거리 간식", img: "./images/asia_aus/china/beijing/wangfujing_street.jpg" }
                        ],
                        hotels: [
                            { name: "Novotel Beijing Peace", price: "약 13만원", desc: "왕푸징 중심가 도보 이동 가능한 베스트셀러" },
                            { name: "Sunworld Hotel Wangfujing", price: "약 11만원", desc: "자금성·왕푸징 접근성 최고의 가성비 호텔" },
                            { name: "Howard Johnson Paragon", price: "약 10만원", desc: "베이징역 바로 앞 교통 요충지 숙소" },
                            { name: "CitiGO Hotel Sanyuanqiao", price: "약 9만원", desc: "공항철도 연결, 세련된 모던 라이프스타일 호텔" },
                            { name: "Peking Station Hostel", price: "약 6만원", desc: "전통 중정 정원이 있는 감성 가성비 호스텔" }
                        ]
                    },
                    "칭다오": {
                        attractions: [
                            { name: "오사광장 (May Fourth Square)", desc: "붉은 조형물 '오월의 바람'과 화려한 빌딩 레이저 야경의 중심", img: "./images/asia_aus/china/qingdao/may_fourth_square.jpg" },
                            { name: "칭다오 맥주박물관", desc: "1903년 독일식 양조장 건물에서 갓 뽑은 원장맥주를 시음하는 필수 명소", img: "./images/asia_aus/china/qingdao/tsingtao_beer_museum.jpg" },
                            { name: "잔교 (Zhanqiao Pier)", desc: "칭다오 맥주 라벨의 모델이 된 바다 위 회란각 정자와 갈매기 해변", img: "./images/asia_aus/china/qingdao/zhanqiao_pier.jpg" },
                            { name: "성 미카엘 대성당 (천주교당)", desc: "붉은 쌍둥이 첨탑과 고딕 양식이 어우러진 중국 속 작은 유럽", img: "./images/asia_aus/china/qingdao/st_michaels_cathedral_qingdao.jpg" },
                            { name: "소어산 공원 & 팔대관 풍경구", desc: "칭다오의 주황색 독일식 지붕과 푸른 해변이 한눈에 내려다보이는 전망대", img: "./images/asia_aus/china/qingdao/xiaoyushan_park.jpg" }
                        ],
                        restaurants: [
                            { name: "춘화루 (Chunhelou·春和樓)", desc: "1891년 문을 연 칭다오 최고(最古) 산둥요리 명가, 바삭한 탕수리지(탕수육)", img: "./images/asia_aus/china/qingdao/chunhelou_qingdao.jpg" },
                            { name: "메이다얼 (Meidaer·美達爾)", desc: "매콤한 바지락볶음과 갈릭 가리비찜에 칭다오 생맥주를 곁들이는 맛집", img: "./images/asia_aus/china/qingdao/meidaer_qingdao.jpg" },
                            { name: "피차이위안 (Pichaiyuan) & 타이동 야시장", desc: "양꼬치와 해산물 구이, 취두부 등 산둥 길거리 미식이 모인 야시장", img: "./images/asia_aus/china/qingdao/taidong_night_market.jpg" },
                            { name: "와이포지아 칭다오 완샹청점", desc: "마늘당면 새우찜과 동파육을 극강의 가성비로 즐기는 인기 중식당", img: "./images/asia_aus/china/qingdao/waipojia_qingdao.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "소맥도 (Xiaomaidao) 해변 카페거리", desc: "초록빛 잔디 언덕과 바다가 어우러진 칭다오 청년들의 노을 성지", img: "./images/asia_aus/china/qingdao/xiaomaidao_cafe.jpg" },
                                { name: "대학로 (Daxue Road) 붉은담장 카페거리", desc: "모퉁이 붉은 벽 포토존과 플라타너스 그늘 아래 감성 로스터리 골목", img: "./images/asia_aus/china/qingdao/daxue_road_qingdao.jpg" }
                            ],
                            study: [
                                { name: "루신공원 해변 북카페", desc: "소나무와 바위 해안을 바라보며 독서와 커피를 즐기는 조용한 공간", img: "./images/asia_aus/china/qingdao/luxun_park_cafe.jpg" },
                                { name: "완샹청 (MixC) Fangsuo 코뮌 서점 카페", desc: "거대한 서가와 쾌적한 테이블을 갖춘 칭다오 대표 복합 문화 서점", img: "./images/asia_aus/china/qingdao/mixc_qingdao_cafe.jpg" }
                            ]
                        },
                        activities: [
                            { name: "칭다오 올림픽 요트경기장 선셋 크루즈", desc: "요트를 타고 바다에서 감상하는 오사광장 마천루 라이트쇼", img: "./images/asia_aus/china/qingdao/qingdao_sailing_center.jpg" },
                            { name: "라오산 (노산·Laoshan) 케이블카 & 도교 투어", desc: "바다와 맞닿은 기암절벽 명산에서 즐기는 케이블카 트레킹", img: "./images/asia_aus/china/qingdao/laoshan_qingdao.jpg" },
                            { name: "칭다오 비어 스트리트 (등주로서가) 봉지맥주 체험", desc: "비닐봉지에 갓 따른 신선한 생맥주를 담아 마시는 칭다오만의 진풍경", img: "./images/asia_aus/china/qingdao/qingdao_beer_street.jpg" },
                            { name: "칭다오 구시가지 은어골목 (Silver Fish Street) 산책", desc: "백년 된 리위안 전통 건축물을 힙한 편집샵과 펍으로 개조한 거리", img: "./images/asia_aus/china/qingdao/silver_fish_street_qingdao.jpg" }
                        ],
                        hotels: [
                            { name: "샹그릴라 호텔 칭다오", price: "약 18만원대", desc: "오사광장·완샹청 바로 옆 최고의 입지를 자랑하는 5성급 호텔" },
                            { name: "웨스틴 칭다오 (The Westin Qingdao)", price: "약 19만원대", desc: "고층 객실에서 오사광장과 바다를 한눈에 내려다보는 럭셔리 호텔" },
                            { name: "홀리데이 인 칭다오 시티 센터", price: "약 11만원대", desc: "루프탑 정원과 실내 수영장을 갖춘 오사광장 도보권 가성비 호텔" },
                            { name: "이비스 칭다오 닝샤로드", price: "약 6만원대", desc: "깔끔하고 실속 있게 머물기 좋은 글로벌 체인 비즈니스 숙소" }
                        ]
                    }
                }
            }

            ,
            "대만": {
                desc: "미식과 야시장의 천국, 아날로그 감성이 살아있는 섬",
                cities: {
                    "타이베이": {
                        attractions: [
                            { name: "타이베이 101", desc: "타이베이의 스카이라인을 상징하는 초고층 랜드마크", img: "./images/asia_aus/taiwan/taipei/taipei_101.jpg" },
                            { name: "중정기념당", desc: "웅장한 대리석 건축물과 근위병 교대식", img: "./images/asia_aus/taiwan/taipei/chiang_kai_shek_memorial.jpg" },
                            { name: "용산사", desc: "화려한 조각과 향불이 피어오르는 타이베이 최고(最古) 사원", img: "./images/asia_aus/taiwan/taipei/lungshan_temple.jpg" },
                            { name: "국립고궁박물관", desc: "중화권 5천 년 역사의 보물창고", img: "./images/asia_aus/taiwan/taipei/national_palace_museum.jpg" },
                            { name: "시먼딩 거리", desc: "젊음과 활기가 넘치는 타이베이의 명동", img: "./images/asia_aus/taiwan/taipei/ximending.jpg" }
                        ],
                        restaurants: [
                            { name: "딘타이펑 (Din Tai Fung)", desc: "육즙 가득 샤오롱바오의 세계적 원조", img: "./images/asia_aus/taiwan/taipei/din_tai_fung.jpg" },
                            { name: "삼미식당 (Sanwei Canteen)", desc: "주먹만 한 대왕 연어초밥으로 유명한 필수 맛집", img: "./images/asia_aus/taiwan/taipei/sanwei_canteen.jpg" },
                            { name: "아종면선 (Ay-Chung)", desc: "시먼딩에서 서서 먹는 중독성 강한 곱창국수", img: "./images/asia_aus/taiwan/taipei/ay_chung_noodle.jpg" },
                            { name: "진천미 (Jinzhenmei)", desc: "연두부 튀김과 파볶음이 일품인 한국인 입맛 저격 가정식", img: "./images/asia_aus/taiwan/taipei/jinzhenmei.jpg" },
                            { name: "임동방 우육면 (Lin Dong Fang)", desc: "진한 한방 육수와 부드러운 아롱사태 우육면", img: "./images/asia_aus/taiwan/taipei/lin_dong_fang.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Simple Kaffa (심플 카파)", desc: "세계 바리스타 챔피언이 운영하는 화산1914 감성 카페", img: "./images/asia_aus/taiwan/taipei/simple_kaffa.jpg" },
                                { name: "Fujin Tree 353 Cafe", desc: "민성 커뮤니티 가로수길의 여유로운 감성 카페", img: "./images/asia_aus/taiwan/taipei/fujin_tree_cafe.jpg" }
                            ],
                            study: [
                                { name: "Fika Fika Cafe", desc: "북유럽 감성의 밝고 쾌적한 로스터리 작업 공간", img: "./images/asia_aus/taiwan/taipei/fika_fika_cafe.jpg" },
                                { name: "성품서점 송산문창점 카페", desc: "책과 디자인 소품 속에서 집중하기 좋은 문화 공간", img: "./images/asia_aus/taiwan/taipei/eslite_songyan_cafe.jpg" }
                            ]
                        },
                        activities: [
                            { name: "예스진지 (예류·스펀·진과스·지우펀) 투어", desc: "천등 날리기와 홍등 가득한 지우펀 야경 핵심 코스", img: "./images/asia_aus/taiwan/taipei/jiufen_old_street.jpg" },
                            { name: "스린 야시장 먹방 투어", desc: "지파이·큐브스테이크 등 대만 최대 야시장 탐방", img: "./images/asia_aus/taiwan/taipei/shilin_night_market.jpg" },
                            { name: "베이터우 온천 체험", desc: "지열곡의 신비로운 수증기와 유황 온천 힐링", img: "./images/asia_aus/taiwan/taipei/beitou_hot_spring.jpg" },
                            { name: "단수이 일몰 & 워런마터우 산책", desc: "영화 말할 수 없는 비밀 촬영지와 낭만적인 석양", img: "./images/asia_aus/taiwan/taipei/tamsui_sunset.jpg" },
                            { name: "마오콩 곤돌라 & 다원 체험", desc: "크리스탈 케이블카를 타고 올라가 마시는 대만 전통차", img: "./images/asia_aus/taiwan/taipei/maokong_gondola.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel Papa Whale", price: "약 9만원", desc: "시먼딩 인더스트리얼 감성의 가성비 대표 호텔" },
                            { name: "Hotel Midtown Richardson", price: "약 11만원", desc: "시먼역 바로 앞 압도적 접근성" },
                            { name: "Caesar Metro Taipei", price: "약 12만원", desc: "반차오·용산사 인근 야외 수영장 보유 대형 호텔" },
                            { name: "Cho Hotel", price: "약 10만원", desc: "무료 라면·간식 라운지가 매력적인 부티크 숙소" },
                            { name: "Star Hostel Taipei Main Station", price: "약 6만원", desc: "타이베이 메인역 인근 친환경 감성 호스텔" }
                        ]
                    },
                    "가오슝": {
                        attractions: [
                            { name: "연지담 용호탑", desc: "용의 입으로 들어가 호랑이 입으로 나오는 행운의 탑", img: "./images/asia_aus/taiwan/kaohsiung/dragon_tiger_pagodas.jpg" },
                            { name: "보얼예술특구", desc: "항구 창고를 개조한 트렌디한 예술 문화 단지", img: "./images/asia_aus/taiwan/kaohsiung/pier2_art_center.jpg" },
                            { name: "미려도역 (빛의 돔)", desc: "세계에서 가장 아름다운 지하철역 스테인드글라스", img: "./images/asia_aus/taiwan/kaohsiung/formosa_boulevard_station.jpg" },
                            { name: "치진섬 & 치진 해수욕장", desc: "페리로 5분 만에 만나는 검은 모래 해변과 등대", img: "./images/asia_aus/taiwan/kaohsiung/cijin_island.jpg" },
                            { name: "불광산 불타기념관", desc: "압도적 스케일의 거대 좌불상과 불교 테마파크", img: "./images/asia_aus/taiwan/kaohsiung/fo_guang_shan.jpg" }
                        ],
                        restaurants: [
                            { name: "항원우육면 (Gang Yuan)", desc: "60년 전통 가오슝 1등 비빔 우육면 맛집", img: "./images/asia_aus/taiwan/kaohsiung/gang_yuan_beef_noodle.jpg" },
                            { name: "오리진 (Yazen·鴨肉珍)", desc: "미슐랭 빕구르망에 선정된 훈제 오리고기 덮밥", img: "./images/asia_aus/taiwan/kaohsiung/duck_zhen.jpg" },
                            { name: "딘타이펑 한신아레나점", desc: "타이베이보다 대기 짧게 즐기는 샤오롱바오", img: "./images/asia_aus/taiwan/kaohsiung/din_tai_fung_kaohsiung.jpg" },
                            { name: "흥륭거 (Xing Long Ju)", desc: "육즙이 터지는 전통 대만식 아침 만두(탕바오)", img: "./images/asia_aus/taiwan/kaohsiung/xing_long_ju.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "치진 선셋 바 (Cijin Sunset Bar)", desc: "야자수와 바다를 바라보며 쉬어가는 해변 라운지", img: "./images/asia_aus/taiwan/kaohsiung/cijin_sunset_bar.jpg" },
                                { name: "Sunny Queen (써니퀸)", desc: "보얼예술특구 인근 화사한 정원풍 브런치 카페", img: "./images/asia_aus/taiwan/kaohsiung/sunny_queen_kaohsiung.jpg" }
                            ],
                            study: [
                                { name: "Louisa Coffee (루이자 커피)", desc: "콘센트와 넓은 좌석을 갖춘 대만 국민 카공 카페", img: "./images/asia_aus/taiwan/kaohsiung/louisa_coffee_kaohsiung.jpg" },
                                { name: "My Cofi", desc: "입체 3D 라떼아트와 조용한 분위기의 로스터리", img: "./images/asia_aus/taiwan/kaohsiung/my_cofi_kaohsiung.jpg" }
                            ]
                        },
                        activities: [
                            { name: "아이허강 곤돌라 야경 크루즈", desc: "사랑의 강을 따라 흐르는 로맨틱한 밤배", img: "./images/asia_aus/taiwan/kaohsiung/love_river_cruise.jpg" },
                            { name: "치진섬 전동자전거 해안 투어", desc: "바닷바람을 맞으며 무지개 교회와 조개 박물관 일주", img: "./images/asia_aus/taiwan/kaohsiung/cijin_bike_tour.jpg" },
                            { name: "리우허(육합) 야시장 미식 투어", desc: "해산물 구이와 파파야 우유가 유명한 야시장", img: "./images/asia_aus/taiwan/kaohsiung/liuhe_night_market.jpg" },
                            { name: "다거우 영국영사관 선셋 관람", desc: "시즈만 해변의 붉은 노을을 한눈에 담는 언덕", img: "./images/asia_aus/taiwan/kaohsiung/british_consulate_kaohsiung.jpg" },
                            { name: "가오슝 트램(경전철) 일주", desc: "초록빛 잔디 선로 위를 달리는 감성 노면전차", img: "./images/asia_aus/taiwan/kaohsiung/kaohsiung_light_rail.jpg" }
                        ],
                        hotels: [
                            { name: "Kindness Hotel (카인드니스 호텔)", price: "약 9만원", desc: "무료 야식·아이스크림 뷔페로 유명한 가성비 끝판왕" },
                            { name: "City Suites Kaohsiung Chenai", price: "약 8만원", desc: "보얼예술특구 바로 앞 넓고 쾌적한 객실" },
                            { name: "Hotel Dua", price: "약 13만원", desc: "미려도역 1분 거리, 루프탑 조식이 훌륭한 호텔" },
                            { name: "Just Sleep Kaohsiung Station", price: "약 10만원", desc: "리젠트 그룹 계열의 깔끔하고 모던한 비즈니스 호텔" },
                            { name: "Hub Hotel Kaohsiung", price: "약 6만원", desc: "리우허 야시장 도보권의 초가성비 숙소" }
                        ]
                    }
                }
            }

            ,
            "싱가포르": {
                desc: "미래형 정원 도시와 다문화 미식이 어우러진 럭셔리 시티",
                cities: {
                    "싱가포르 시티": {
                        attractions: [
                            { name: "가든스 바이 더 베이", desc: "거대 인공 슈퍼트리와 거대한 유리 온실 식물원", img: "./images/asia_aus/singapore/singapore/gardens_by_the_bay.jpg" },
                            { name: "마리나 베이 샌즈 스카이파크", desc: "싱가포르의 마천루와 바다를 내려다보는 전망대", img: "./images/asia_aus/singapore/singapore/marina_bay_sands.jpg" },
                            { name: "머라이언 파크", desc: "물을 뿜는 반어반사자상과 마리나 베이 인증샷 명소", img: "./images/asia_aus/singapore/singapore/merlion_park.jpg" },
                            { name: "쥬얼 창이 공항 (레인 보텍스)", desc: "실내 숲 한가운데로 쏟아지는 세계 최고 높이 인공 폭포", img: "./images/asia_aus/singapore/singapore/jewel_changi.jpg" },
                            { name: "클락키 (Clarke Quay)", desc: "강변을 따라 펼쳐진 화려한 네온사인과 나이트라이프", img: "./images/asia_aus/singapore/singapore/clarke_quay.jpg" }
                        ],
                        restaurants: [
                            { name: "점보 씨푸드 (JUMBO Seafood)", desc: "매콤달콤한 칠리크랩과 시리얼 새우의 대명사", img: "./images/asia_aus/singapore/singapore/jumbo_seafood.jpg" },
                            { name: "송파 바쿠테 (Song Fa Bak Kut Teh)", desc: "깊고 진한 후추 마늘 육수의 미슐랭 돼지갈비탕", img: "./images/asia_aus/singapore/singapore/song_fa_bak_kut_teh.jpg" },
                            { name: "라우 파 삿 사테거리 (Lau Pa Sat)", desc: "빌딩 숲 야외 테이블에서 즐기는 숯불 사테 꼬치와 맥주", img: "./images/asia_aus/singapore/singapore/lau_pa_sat.jpg" },
                            { name: "티안티안 하이난 치킨라이스", desc: "맥스웰 푸드센터 1순위 촉촉한 닭고기 덮밥", img: "./images/asia_aus/singapore/singapore/tian_tian_chicken_rice.jpg" },
                            { name: "야쿤 카야토스트 본점", desc: "달콤한 카야잼 토스트와 수란으로 시작하는 아침", img: "./images/asia_aus/singapore/singapore/ya_kun_kaya_toast.jpg" },
                            { name: "동방미식 (東方美食·Oriental Chinese)", desc: "차이나타운에서 한국인들이 가장 사랑하는 마라샹궈·꿔바로우·양꼬치 맛집", img: "./images/asia_aus/singapore/singapore/oriental_chinese_singapore.jpg" },
                            { name: "싱가포르 호커센터 (뉴턴·맥스웰 푸드센터)", desc: "칠리크랩·사테·락사 등 다양한 로컬 스트리트 푸드를 한자리에서 즐기는 미식 천국", img: "./images/asia_aus/singapore/singapore/hawker_centre_singapore.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Bacha Coffee (바샤 커피)", desc: "모로코 궁전에 온 듯 화려한 전설의 드립 커피 하우스", img: "./images/asia_aus/singapore/singapore/bacha_coffee.jpg" },
                                { name: "PS.Cafe Harding Road", desc: "뎀시힐 열대 우림 정원 속에서 즐기는 트러플 감자튀김", img: "./images/asia_aus/singapore/singapore/ps_cafe_dempsey.jpg" }
                            ],
                            study: [
                                { name: "% Arabica Arab Street", desc: "아랍스트리트 벽화 거리에서 즐기는 진한 라떼", img: "./images/asia_aus/singapore/singapore/arabica_singapore.jpg" },
                                { name: "Tiong Bahru Bakery", desc: "고소한 수제 크루아상과 노트북 작업하기 좋은 공간", img: "./images/asia_aus/singapore/singapore/tiong_bahru_bakery.jpg" }
                            ]
                        },
                        activities: [
                            { name: "가든 랩소디 (슈퍼트리 라이트쇼)", desc: "밤하늘 아래 음악에 맞춰 춤추는 환상적인 불빛 쇼", img: "./images/asia_aus/singapore/singapore/garden_rhapsody.jpg" },
                            { name: "싱가포르 리버 범보트 크루즈", desc: "클락키에서 마리나 베이까지 유람선 야경 투어", img: "./images/asia_aus/singapore/singapore/singapore_river_cruise.jpg" },
                            { name: "싱가포르 나이트 사파리", desc: "세계 최초 야간 동물원에서 즐기는 스릴 만점 트램 투어", img: "./images/asia_aus/singapore/singapore/night_safari_singapore.jpg" },
                            { name: "마리나 베이 스펙트라 분수쇼", desc: "물보라와 레이저, 분수가 어우러진 수상 멀티미디어 쇼", img: "./images/asia_aus/singapore/singapore/spectra_light_show.jpg" },
                            { name: "하지레인 & 술탄 모스크 산책", desc: "알록달록한 스트리트 아트와 이국적인 아랍 거리 탐방", img: "./images/asia_aus/singapore/singapore/haji_lane.jpg" },
                            { name: "클락키 슬링샷 (Slingshot Singapore)", desc: "새총처럼 시속 160km로 밤하늘 70m 상공까지 솟구치는 극한 스릴 어트랙션", img: "./images/asia_aus/singapore/singapore/slingshot_singapore.jpg" },
                            { name: "클락키 GX-5 익스트림 스윙", desc: "50m 높이에서 자유낙하 후 싱가포르 강 위를 시속 120km로 스윙하는 액티비티", img: "./images/asia_aus/singapore/singapore/gx5_swing_singapore.jpg" },
                            { name: "유니버설 스튜디오 싱가포르", desc: "트랜스포머·미이라·쥬라기공원 등 스릴 만점 어트랙션이 가득한 테마파크", img: "./images/asia_aus/singapore/sentosa/universal_studios_singapore.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel Boss", price: "약 16만원", desc: "라벤더역 인근 야외 수영장을 갖춘 한국인 인기 가성비 호텔" },
                            { name: "V Hotel Lavender", price: "약 15만원", desc: "MRT 라벤더역 바로 위, 이동이 가장 편리한 실속 숙소" },
                            { name: "lyf Funan Singapore", price: "약 19만원", desc: "시청·클락키 도보권의 트렌디한 코리빙 호텔" },
                            { name: "ibis budget Singapore Clarke Quay", price: "약 13만원", desc: "클락키 인근 깔끔한 가성비 체인 호텔" },
                            { name: "The Pod Boutique Capsule Hotel", price: "약 8만원", desc: "아랍스트리트 인근 세련된 프리미엄 캡슐 호텔" }
                        ]
                    },
                    "센토사": {
                        attractions: [
                            { name: "유니버설 스튜디오 싱가포르", desc: "동남아 유일의 유니버설 테마파크", img: "./images/asia_aus/singapore/sentosa/universal_studios_singapore.jpg" },
                            { name: "실로소 비치 (Siloso Beach)", desc: "야자수와 비치 바가 늘어선 센토사 대표 해변", img: "./images/asia_aus/singapore/sentosa/siloso_beach.jpg" },
                            { name: "S.E.A. 아쿠아리움", desc: "10만 마리 해양 생물이 헤엄치는 초대형 아쿠아리움", img: "./images/asia_aus/singapore/sentosa/sea_aquarium_sentosa.jpg" },
                            { name: "팔라완 비치 출렁다리", desc: "아시아 대륙 최남단 전망대로 이어지는 해변 다리", img: "./images/asia_aus/singapore/sentosa/palawan_beach.jpg" },
                            { name: "센토사 센서리스케이프", desc: "오감을 자극하는 신개념 야간 산책 정원", img: "./images/asia_aus/singapore/sentosa/sentosa_sensoryscape.jpg" }
                        ],
                        restaurants: [
                            { name: "Coastes (코스테스)", desc: "실로소 해변 백사장 위에서 즐기는 비치 브런치 & 맥주", img: "./images/asia_aus/singapore/sentosa/coastes_sentosa.jpg" },
                            { name: "말레이시아 푸드 스트리트", desc: "유니버설 스튜디오 앞 다채로운 로컬 길거리 미식관", img: "./images/asia_aus/singapore/sentosa/malaysian_food_street.jpg" },
                            { name: "Trapizza (트라피자)", desc: "바다 전망과 함께 즐기는 화덕 피자와 파스타", img: "./images/asia_aus/singapore/sentosa/trapizza_sentosa.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Tanjong Beach Club", desc: "이국적인 휴양지 감성의 오션뷰 비치 클럽", img: "./images/asia_aus/singapore/sentosa/tanjong_beach_club.jpg" },
                                { name: "Rumours Beach Club", desc: "발리 스타일 선베드와 인피니티 풀을 갖춘 해변 카페", img: "./images/asia_aus/singapore/sentosa/rumours_beach_club.jpg" }
                            ],
                            study: [
                                { name: "Baristart Coffee Sentosa", desc: "부드러운 홋카이도 우유 라떼와 조용한 휴식 공간", img: "./images/asia_aus/singapore/sentosa/baristart_coffee_sentosa.jpg" },
                                { name: "Starbucks Resorts World", desc: "리조트 월드 내 시원하고 쾌적한 라운지형 매장", img: "./images/asia_aus/singapore/sentosa/starbucks_sentosa.jpg" }
                            ]
                        },
                        activities: [
                            { name: "스카이라인 루지 & 스카이라이드", desc: "리프트를 타고 올라가 신나게 내려오는 센토사 필수 액티비티", img: "./images/asia_aus/singapore/sentosa/skyline_luge_sentosa.jpg" },
                            { name: "싱가포르 케이블카 탑승", desc: "페이버 산에서 센토사 섬까지 바다 위를 가로지르는 파노라마", img: "./images/asia_aus/singapore/sentosa/singapore_cable_car.jpg" },
                            { name: "어드벤처 코브 워터파크", desc: "열대어와 함께 스노클링하는 이색 워터파크", img: "./images/asia_aus/singapore/sentosa/adventure_cove_waterpark.jpg" },
                            { name: "메가 어드벤처 짚라인", desc: "정글 위에서 실로소 해변까지 시속 60km로 활강", img: "./images/asia_aus/singapore/sentosa/mega_adventure_sentosa.jpg" },
                            { name: "윙스 오브 타임 (야간 레이저쇼)", desc: "바다 위에서 펼쳐지는 불꽃·분수·레이저 멀티미디어 쇼", img: "./images/asia_aus/singapore/sentosa/wings_of_time.jpg" }
                        ],
                        hotels: [
                            { name: "Village Hotel Sentosa", price: "약 25만원", desc: "4개의 테마 수영장을 갖춘 센토사 인기 리조트" },
                            { name: "The Outpost Hotel Sentosa", price: "약 27만원", desc: "루프탑 인피니티 풀이 매력적인 어덜트 온리 호텔" },
                            { name: "Siloso Beach Resort", price: "약 20만원", desc: "실로소 해변 바로 앞 자연 친화적 가성비 리조트" },
                            { name: "Travelodge HarbourFront", price: "약 16만원", desc: "비보시티·센토사 모노레일 입구 앞 최고의 가성비" },
                            { name: "ibis budget Mount Faber", price: "약 12만원", desc: "케이블카 역 인근 알뜰한 실속형 호텔" }
                        ]
                    }
                }
            }

            ,
            "말레이시아": {
                desc: "화려한 스카이라인과 세계 3대 석양이 공존하는 동남아의 보석",
                cities: {
                    "쿠알라룸푸르": {
                        attractions: [
                            { name: "페트로나스 트윈 타워 (KLCC)", desc: "세계 최고 높이 쌍둥이 빌딩과 화려한 야경", img: "./images/asia_aus/malaysia/kuala_lumpur/petronas_twin_towers.jpg" },
                            { name: "바투 동굴 (Batu Caves)", desc: "거대한 황금 무루간 신상과 272개의 무지개 계단", img: "./images/asia_aus/malaysia/kuala_lumpur/batu_caves.jpg" },
                            { name: "메르데카 광장 & 술탄 압둘 사마드 빌딩", desc: "말레이시아 독립의 역사와 무어 양식 시계탑", img: "./images/asia_aus/malaysia/kuala_lumpur/merdeka_square.jpg" },
                            { name: "부킷 빈탕 & 파빌리온 KL", desc: "쿠알라룸푸르 최대 쇼핑·미식·엔터테인먼트 중심가", img: "./images/asia_aus/malaysia/kuala_lumpur/pavilion_kl.jpg" },
                            { name: "천후궁 (Thean Hou Temple)", desc: "도심 전경이 내려다보이는 화려한 6층 중국식 사원", img: "./images/asia_aus/malaysia/kuala_lumpur/thean_hou_temple.jpg" }
                        ],
                        restaurants: [
                            { name: "잘란 알로 야시장 (황아화 치킨윙)", desc: "숯불 치킨윙과 칠리크랩으로 가득한 밤거리 포차 천국", img: "./images/asia_aus/malaysia/kuala_lumpur/jalan_alor.jpg" },
                            { name: "마담 콴스 (Madam Kwan's)", desc: "파빌리온에서 깔끔하게 즐기는 국민 음식 나시르막", img: "./images/asia_aus/malaysia/kuala_lumpur/madam_kwans.jpg" },
                            { name: "신키 비프누들 (Shin Kee)", desc: "부킷 빈탕 골목의 진한 육수 소고기 국수 노포", img: "./images/asia_aus/malaysia/kuala_lumpur/shin_kee_beef_noodles.jpg" },
                            { name: "호키 코피티암 (Ho Kow Hainam)", desc: "차이나타운 웨이팅 필수 레트로 브런치 & 카야토스트", img: "./images/asia_aus/malaysia/kuala_lumpur/ho_kow_kopitiam.jpg" },
                            { name: "빌리지 파크 레스토랑", desc: "현지인들이 손꼽는 쿠알라룸푸르 1등 바삭 치킨 나시르막", img: "./images/asia_aus/malaysia/kuala_lumpur/village_park_restaurant.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "VCR", desc: "부킷 빈탕의 시크한 블랙 독채 브런치 & 로스터리", img: "./images/asia_aus/malaysia/kuala_lumpur/vcr_cafe_kl.jpg" },
                                { name: "Merchant's Lane", desc: "차이나타운 옛 건물을 개조한 몽환적인 빈티지 카페", img: "./images/asia_aus/malaysia/kuala_lumpur/merchants_lane_kl.jpg" }
                            ],
                            study: [
                                { name: "Feeka Coffee Roasters", desc: "창캇 인근 초록빛 테라스와 여유로운 작업 공간", img: "./images/asia_aus/malaysia/kuala_lumpur/feeka_coffee_kl.jpg" },
                                { name: "Bean Brothers KL", desc: "높은 층고와 인더스트리얼 인테리어의 대형 카공 성지", img: "./images/asia_aus/malaysia/kuala_lumpur/bean_brothers_kl.jpg" }
                            ]
                        },
                        activities: [
                            { name: "KLCC 호수 심포니 분수쇼", desc: "트윈 타워 아래에서 펼쳐지는 화려한 음악 분수쇼", img: "./images/asia_aus/malaysia/kuala_lumpur/klcc_fountain_show.jpg" },
                            { name: "헬리 라운지 바 루프탑 선셋", desc: "실제 헬기 착륙장에서 360도 도심 야경과 칵테일 즐기기", img: "./images/asia_aus/malaysia/kuala_lumpur/heli_lounge_bar.jpg" },
                            { name: "쿠알라셀랑고르 반딧불이 & 블루티어스 투어", desc: "맹그로브 숲을 수놓는 반딧불이와 푸른 발광 플랑크톤", img: "./images/asia_aus/malaysia/kuala_lumpur/firefly_tour_kl.jpg" },
                            { name: "푸트라자야 핑크 모스크 투어", desc: "호수 위에 떠 있는 장미빛 돔의 푸트라 모스크 탐방", img: "./images/asia_aus/malaysia/kuala_lumpur/putra_mosque.jpg" },
                            { name: "겐팅 하이랜드 케이블카 & 테마파크", desc: "구름 위 고원 도시로 올라가는 글라스 플로어 곤돌라", img: "./images/asia_aus/malaysia/kuala_lumpur/genting_highlands.jpg" }
                        ],
                        hotels: [
                            { name: "Eaton Residences KLCC", price: "약 9만원", desc: "루프탑 인피니티 풀에서 트윈타워 인생샷을 남기는 가성비 레지던스" },
                            { name: "Sleeping Lion Suites", price: "약 8만원", desc: "파빌리온 도보 3분, 부킷 빈탕 신축 가성비 숙소" },
                            { name: "The Kuala Lumpur Journal", price: "약 10만원", desc: "부킷 빈탕 중심부의 감각적인 레트로 부티크 호텔" },
                            { name: "citizenM Kuala Lumpur", price: "약 8만원", desc: "잘란 알로 인근 스마트 컨트롤 시스템을 갖춘 모던 호텔" },
                            { name: "Traders Hotel Kuala Lumpur", price: "약 16만원", desc: "KLCC 공원 정면 뷰와 스카이바를 자랑하는 샹그릴라 계열 호텔" }
                        ]
                    },
                    "코타키나발루": {
                        attractions: [
                            { name: "탄중아루 해변 (Tanjung Aru)", desc: "하늘이 보랏빛과 붉은빛으로 물드는 세계 3대 석양 명소", img: "./images/asia_aus/malaysia/kota_kinabalu/tanjung_aru_beach.jpg" },
                            { name: "코타키나발루 시티 모스크 (블루 모스크)", desc: "인공 호수 위에 떠 있는 푸른 돔의 이슬람 사원", img: "./images/asia_aus/malaysia/kota_kinabalu/kk_city_mosque.jpg" },
                            { name: "UMS 핑크 모스크 & 사바 주청사", desc: "동화 속 파스텔 핑크빛 사원과 독특한 원통형 빌딩", img: "./images/asia_aus/malaysia/kota_kinabalu/ums_pink_mosque.jpg" },
                            { name: "제셀톤 포인트 (Jesselton Point)", desc: "섬 투어 보트가 출발하는 유럽풍 항구 선착장", img: "./images/asia_aus/malaysia/kota_kinabalu/jesselton_point.jpg" },
                            { name: "필리피노 마켓 (야시장)", desc: "열대과일과 해산물 구이 향기가 가득한 바닷가 야시장", img: "./images/asia_aus/malaysia/kota_kinabalu/filipino_market_kk.jpg" }
                        ],
                        restaurants: [
                            { name: "웰컴 씨푸드 (Welcome Seafood)", desc: "크림버터 타이거새우와 칠리크랩을 저렴하게 즐기는 해산물 천국", img: "./images/asia_aus/malaysia/kota_kinabalu/welcome_seafood_kk.jpg" },
                            { name: "유잇켕 (Yuit Cheong)", desc: "100년 전통 가야스트리트 카야토스트 & 사테 맛집", img: "./images/asia_aus/malaysia/kota_kinabalu/yuit_cheong_kk.jpg" },
                            { name: "이펑 락사 (Yee Fung Laksa)", desc: "고소하고 얼큰한 코코넛 커리 국물의 코타키나발루 1등 락사", img: "./images/asia_aus/malaysia/kota_kinabalu/yee_fung_laksa.jpg" },
                            { name: "쌍천 씨푸드 (Suang Tain)", desc: "한국인 입맛에 딱 맞는 오징어튀김과 가리비 구이 명소", img: "./images/asia_aus/malaysia/kota_kinabalu/suang_tain_seafood.jpg" },
                            { name: "올드타운 화이트커피 가야스트리트", desc: "시원한 에어컨 아래서 즐기는 헤이즐넛 화이트커피", img: "./images/asia_aus/malaysia/kota_kinabalu/oldtown_white_coffee_kk.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Sunset Bar (샹그릴라 탄중아루)", desc: "바다 바로 앞에서 칵테일과 함께 세계 3대 석양 감상", img: "./images/asia_aus/malaysia/kota_kinabalu/sunset_bar_kk.jpg" },
                                { name: "October Coffee Gaya", desc: "가야스트리트에서 만나는 아늑한 우드톤 감성 로스터리", img: "./images/asia_aus/malaysia/kota_kinabalu/october_coffee_kk.jpg" }
                            ],
                            study: [
                                { name: "Woo! Cafe", desc: "감각적인 통유리 인테리어와 노트북 작업하기 좋은 브런치 카페", img: "./images/asia_aus/malaysia/kota_kinabalu/woo_cafe_kk.jpg" },
                                { name: "Nook Cafe", desc: "조용하고 쾌적한 분위기에서 스페셜티 커피를 즐기는 공간", img: "./images/asia_aus/malaysia/kota_kinabalu/nook_cafe_kk.jpg" }
                            ]
                        },
                        activities: [
                            { name: "툰구 압둘 라만 해양공원 호핑투어", desc: "사피섬·마누칸섬 에메랄드빛 바다 스노클링과 패러세일링", img: "./images/asia_aus/malaysia/kota_kinabalu/sapi_island_hopping.jpg" },
                            { name: "반딧불이 & 맹그로브 선셋 투어", desc: "크리스마스트리처럼 반짝이는 반딧불이와 황홀한 강변 석양", img: "./images/asia_aus/malaysia/kota_kinabalu/kk_firefly_tour.jpg" },
                            { name: "탄중아루 선셋 패들보드 (SUP)", desc: "붉게 물든 바다 위에서 인생샷을 남기는 패들보드 체험", img: "./images/asia_aus/malaysia/kota_kinabalu/tanjung_aru_paddleboard.jpg" },
                            { name: "마리마리 컬처럴 빌리지", desc: "사바주 5개 원주민 부족의 전통 가옥과 문화를 체험하는 민속촌", img: "./images/asia_aus/malaysia/kota_kinabalu/mari_mari_cultural_village.jpg" },
                            { name: "키울루강 급류 래프팅", desc: "열대 우림 계곡을 따라 시원하게 내려오는 스릴 만점 래프팅", img: "./images/asia_aus/malaysia/kota_kinabalu/kiulu_river_rafting.jpg" }
                        ],
                        hotels: [
                            { name: "Horizon Hotel Kota Kinabalu", price: "약 9만원", desc: "가야스트리트·제셀톤 포인트 도보권의 깔끔한 4성급 호텔" },
                            { name: "Hotel Sixty3", price: "약 7만원", desc: "가야스트리트 한복판, 넓은 객실의 가성비 1순위 숙소" },
                            { name: "Mercure Kota Kinabalu City Centre", price: "약 8만원", desc: "제셀톤 포인트 바로 옆 루프탑 수영장을 갖춘 체인 호텔" },
                            { name: "The Luma Hotel", price: "약 11만원", desc: "이마고몰 인근 감각적인 디자인의 신축 부티크 호텔" },
                            { name: "Hilton Kota Kinabalu", price: "약 15만원", desc: "웰컴 씨푸드 바로 앞, 5성급 서비스를 합리적으로 즐기는 숙소" }
                        ]
                    }
                }
            }

            ,
            "라오스": {
                desc: "시간이 멈춘 듯한 배낭여행의 성지",
                cities: {
                    "비엔티엔": {
                        attractions: [
                            { name: "빠뚜사이 (Patuxai)", desc: "비엔티엔 시내가 한눈에 내려다보이는 라오스의 개선문", img: "./images/asia_aus/laos/vientiane/patuxai_arch.jpg" },
                            { name: "탓 루앙 사원 (Pha That Luang)", desc: "부처님의 사리가 봉안된 라오스의 상징 황금 대탑", img: "./images/asia_aus/laos/vientiane/that_luang.jpg" },
                            { name: "호 프라 케우 (Haw Phra Kaew)", desc: "에메랄드 불상이 모셔졌던 유서 깊은 왕실 사원 박물관", img: "./images/asia_aus/laos/vientiane/haw_phra_kaew.jpg" },
                            { name: "왓 시사켓 (Wat Si Saket)", desc: "수천 개의 불상이 회랑 벽면을 채운 최고(最古) 사원", img: "./images/asia_aus/laos/vientiane/wat_si_saket.jpg" },
                            { name: "씨엥쿠앙 불상공원 (Buddha Park)", desc: "메콩강변 초원에 자리한 거대 와불과 200여 개 조각상", img: "./images/asia_aus/laos/vientiane/buddha_park_vientiane.jpg" }
                        ],
                        restaurants: [
                            { name: "Kualao Restaurant (쿠아라오)", desc: "전통 음악 공연과 함께 즐기는 라오스 왕실 정찬 요리", img: "./images/asia_aus/laos/vientiane/kualao_restaurant.jpg" },
                            { name: "PVO Vietnamese Food", desc: "바삭한 스프링롤과 진한 국물의 가성비 쌀국수 맛집", img: "./images/asia_aus/laos/vientiane/pvo_vietnamese.jpg" },
                            { name: "Doi Ka Noi (도이카노이)", desc: "제철 식재료로 매일 메뉴가 바뀌는 라오스 슬로우푸드 맛집", img: "./images/asia_aus/laos/vientiane/doi_ka_noi.jpg" },
                            { name: "메콩강변 숯불 바비큐 & 비어라오", desc: "강바람을 맞으며 즐기는 틸라피아 생선구이와 비어라오", img: "./images/asia_aus/laos/vientiane/mekong_riverside_bbq.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Saffron Coffee Vientiane", desc: "라오스 북부 원두로 내리는 고즈넉한 감성 카페", img: "./images/asia_aus/laos/vientiane/saffron_coffee.jpg" },
                                { name: "Le Banneton Cafe & French Bakery", desc: "갓 구운 바게트와 크루아상 향기가 가득한 프렌치 베이커리", img: "./images/asia_aus/laos/vientiane/le_banneton_vientiane.jpg" }
                            ],
                            study: [
                                { name: "Joma Bakery Cafe Nam Phou", desc: "남푸 분수광장 앞 여행자와 노마드들의 대표 카공 성지", img: "./images/asia_aus/laos/vientiane/joma_bakery.jpg" },
                                { name: "Naked Espresso Vientiane", desc: "모던하고 쾌적한 좌석을 갖춘 스페셜티 커피 작업 공간", img: "./images/asia_aus/laos/vientiane/naked_espresso_vientiane.jpg" }
                            ]
                        },
                        activities: [
                            { name: "메콩강변 야시장 & 선셋 산책", desc: "붉게 물드는 메콩강 노을과 붉은 천막 야시장 쇼핑", img: "./images/asia_aus/laos/vientiane/vientiane_night_market.jpg" },
                            { name: "비엔티엔 황금 사원 순례 투어", desc: "탓 루앙·왓 시사켓·왓 시무앙을 잇는 불교 유적 탐방", img: "./images/asia_aus/laos/vientiane/wat_si_muang.jpg" },
                            { name: "라오스 전통 허벌 사우나 & 마사지", desc: "레몬그라스 증기 사우나로 여행 피로를 녹이는 힐링 체험", img: "./images/asia_aus/laos/vientiane/lao_herbal_sauna.jpg" },
                            { name: "COPE 방문자 센터 견학", desc: "라오스 현대사와 재활 지원 프로젝트를 만나는 뜻깊은 공간", img: "./images/asia_aus/laos/vientiane/cope_visitor_centre.jpg" }
                        ],
                        hotels: [
                            { name: "ibis Vientiane Nam Phou", price: "약 7만원", desc: "남푸 광장·메콩강 야시장 도보권의 깔끔한 체인 호텔" },
                            { name: "Lao Poet Hotel", price: "약 11만원", desc: "루프탑 인피니티 풀과 감각적인 레트로 인테리어 부티크 호텔" },
                            { name: "Salana Boutique Hotel", price: "약 9만원", desc: "여행자 거리 중심에 위치한 아늑한 목조 감성 숙소" },
                            { name: "Crowne Plaza Vientiane", price: "약 16만원", desc: "비엔티엔 최고 수준의 시설을 갖춘 5성급 비즈니스 호텔" }
                        ]
                    },
                    "방비엥": {
                        attractions: [
                            { name: "블루라군 1", desc: "신비로운 물빛 다이빙", img: "./images/asia_aus/laos/vang_vieng/blue_lagoon_1.jpg" },
                            { name: "탐짱 동굴", desc: "역사적 동굴 투어", img: "./images/asia_aus/laos/vang_vieng/tham_chang_cave.jpg" },
                            { name: "남송강", desc: "유유자적 튜빙 산책", img: "./images/asia_aus/laos/vang_vieng/nam_song_river.jpg" },
                            { name: "남싸이 전망대 (Pha Ngern)", desc: "카르스트 산맥 꼭대기 오토바이 인증샷 명소", img: "./images/asia_aus/laos/vang_vieng/pha_ngern_viewpoint.jpg" },
                            { name: "블루라군 3", desc: "조용한 시크릿 라군", img: "./images/asia_aus/laos/vang_vieng/blue_lagoon_3.jpg" }
                        ],
                        restaurants: [
                            { name: "풋 이모 샌드위치 (Poot's Sandwich)", desc: "방비엥 야시장 입구 바삭한 바게트 샌드위치의 전설", img: "./images/asia_aus/laos/vang_vieng/laos_sandwich.jpg" },
                            { name: "방비엥 바나나 로띠 (Banana Roti)", desc: "연유와 누텔라를 듬뿍 뿌려 구워내는 겉바속촉 길거리 로띠", img: "./images/asia_aus/laos/vang_vieng/banana_roti_vang_vieng.jpg" },
                            { name: "나피디 까오삐악 (No Name 식당·깨오 할머니)", desc: "꽃보다 청춘 나영석 PD가 극찬한 쫄깃한 수제 쌀국수 해장 맛집", img: "./images/asia_aus/laos/vang_vieng/khao_piak_vang_vieng.jpg" },
                            { name: "피핑솜 (Peeping Som's Bar & Restaurant)", desc: "숯불 불판 위에서 삼겹살 구이와 샤브샤브를 동시에 즐기는 원조 신닷 맛집", img: "./images/asia_aus/laos/vang_vieng/peepoks_bbq.jpg" },
                            { name: "방비엥 숯불 돼지 뽈살구이", desc: "야들야들한 돼지 뽈살을 숯불에 구워 특제 매콤 소스에 찍어 먹는 노포", img: "./images/asia_aus/laos/vang_vieng/pork_cheek_bbq_vang_vieng.jpg" },
                            { name: "Luang Prabang Bakery Vang Vieng", desc: "고소한 페이스트리와 아메리카노 브런치 맛집", img: "./images/asia_aus/laos/vang_vieng/luang_prabang_bakery.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "PullMind Cafe (풀마인드)", desc: "초록빛 논밭과 석회암 산봉우리가 펼쳐지는 힐링 뷰", img: "./images/asia_aus/laos/vang_vieng/pulluu_cafe.jpg" },
                                { name: "Smile Beach Bar", desc: "남송강변 해먹과 천막에서 즐기는 여유로운 선셋", img: "./images/asia_aus/laos/vang_vieng/utopia_bar.jpg" }
                            ],
                            study: [
                                { name: "Naked Espresso Vang Vieng", desc: "커피 맛집 카공 명당", img: "./images/asia_aus/laos/vang_vieng/naked_espresso.jpg" },
                                { name: "Common Grounds Cafe", desc: "노트북 작업하기 좋은 깔끔한 브런치 카페", img: "./images/asia_aus/laos/vang_vieng/common_grounds.jpg" }
                            ]
                        },
                        activities: [
                            { name: "방비엥 오프로드 버기카 질주", desc: "비포장 흙길과 개울을 시원하게 달리는 블루라군 버기카", img: "./images/asia_aus/laos/vang_vieng/buggy_car_vang_vieng.jpg" },
                            { name: "남송강 카약 & 동굴 튜빙", desc: "기암괴석 절경을 따라 흘러가는 카약과 탐남 동굴 튜빙", img: "./images/asia_aus/laos/vang_vieng/kayaking_nam_song.jpg" },
                            { name: "방비엥 열기구 일출 비행", desc: "운해 위로 솟은 카르스트 봉우리를 내려다보는 열기구", img: "./images/asia_aus/laos/vang_vieng/hot_air_balloon_vang_vieng.jpg" },
                            { name: "블루라군 짚라인 어드벤처", desc: "열대 우림 나무 사이를 가로지르는 짜릿한 짚라인", img: "./images/asia_aus/laos/vang_vieng/zipline_vang_vieng.jpg" },
                            { name: "방비엥 야시장 먹방 투어", desc: "코코넛 풀빵과 꼬치구이가 가득한 밤거리 산책", img: "./images/asia_aus/laos/vang_vieng/vang_vieng_night_market.jpg" }
                        ],
                        hotels: [
                            { name: "Amari Vang Vieng", price: "약 10만원", desc: "남송강과 산맥 뷰 수영장을 갖춘 최고급 가성비 호텔" },
                            { name: "Silver Naga Hotel", price: "약 7만원", desc: "강변 인피니티 풀이 매력적인 힐링 숙소" },
                            { name: "Inthira Vang Vieng", price: "약 8만원", desc: "시내 중심의 모던하고 세련된 신축 부티크 호텔" },
                            { name: "Riverside Boutique Resort", price: "약 12만원", desc: "남송강 다리 옆 이국적인 정원과 조망 최고 리조트" },
                            { name: "ViengTara VangVieng Resort", price: "약 9만원", desc: "논밭 한가운데 떠 있는 방갈로 뷰 숙소" }
                        ]
                    },
                    "루앙프라방": {
                        attractions: [
                            { name: "꽝시 폭포 (Kuang Si Falls)", desc: "숲속 계단식 에메랄드빛 석회암 폭포와 천연 수영장", img: "./images/asia_aus/laos/luang_prabang/kuang_si_falls.jpg" },
                            { name: "푸시산 (Mount Phousi)", desc: "메콩강과 칸강이 감싸 안은 루앙프라방 360도 일몰 전망대", img: "./images/asia_aus/laos/luang_prabang/mount_phousi.jpg" },
                            { name: "왓 씨엥통 (Wat Xieng Thong)", desc: "라오스 전통 사원 건축의 백미, 황금빛 '생명의 나무' 모자이크", img: "./images/asia_aus/laos/luang_prabang/wat_xieng_thong.jpg" },
                            { name: "루앙프라방 왕궁 박물관", desc: "라오스 마지막 왕실의 유물과 황금 불상 파방이 모셔진 궁전", img: "./images/asia_aus/laos/luang_prabang/royal_palace_luang_prabang.jpg" },
                            { name: "루앙프라방 몽족 야시장", desc: "수공예품과 오색 전등이 거리를 수놓는 평화로운 야시장", img: "./images/asia_aus/laos/luang_prabang/night_market_food.jpg" }
                        ],
                        restaurants: [
                            { name: "Khaiphaen (카이펜)", desc: "강변 해초 튀김 카이펜과 라오스 전통 요리를 선보이는 사회적 레스토랑", img: "./images/asia_aus/laos/luang_prabang/khaiphaen.jpg" },
                            { name: "Tamarind Restaurant (타마린드)", desc: "대나무 바구니에 담긴 5색 찹쌀밥과 정통 라오스 미식 코스", img: "./images/asia_aus/laos/luang_prabang/tamarind_luang_prabang.jpg" },
                            { name: "Coconut Garden (코코넛 가든)", desc: "야자수 정원 아래서 즐기는 코코넛 볼 커리와 스프링롤", img: "./images/asia_aus/laos/luang_prabang/coconut_garden.jpg" },
                            { name: "Manda de Laos (만다 드 라오)", desc: "유네스코 지정 연꽃 연못을 바라보며 즐기는 로맨틱 디너", img: "./images/asia_aus/laos/luang_prabang/manda_de_laos.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Saffron Coffee Mekong Riverview", desc: "메콩강을 바라보며 라오스 스페셜티 원두를 마시는 테라스 카페", img: "./images/asia_aus/laos/luang_prabang/pulluu.jpg" },
                                { name: "Le Banneton Cafe Luang Prabang", desc: "왓 씨엥통 인근 프렌치 크루아상 아침 식사 명소", img: "./images/asia_aus/laos/luang_prabang/le_banneton_lp.jpg" }
                            ],
                            study: [
                                { name: "Indigo Cafe (인디고 카페)", desc: "야시장 입구 2층 테라스와 조용한 독서·작업 공간", img: "./images/asia_aus/laos/luang_prabang/indigo_cafe.jpg" },
                                { name: "Joma Bakery Cafe Luang Prabang", desc: "시원한 에어컨과 안정적인 와이파이를 갖춘 카공 성지", img: "./images/asia_aus/laos/luang_prabang/joma_luang_prabang.jpg" }
                            ]
                        },
                        activities: [
                            { name: "새벽 탁발 (Alms Giving) 관람", desc: "동틀 녘 주황빛 가사를 입은 스님들의 경건한 탁발 행렬", img: "./images/asia_aus/laos/luang_prabang/alms_giving_luang_prabang.jpg" },
                            { name: "메콩강 선셋 롱테일 보트 크루즈", desc: "황금빛 노을이 내리는 메콩강 물결 위 낭만 유람", img: "./images/asia_aus/laos/luang_prabang/mekong_sunset_cruise.jpg" },
                            { name: "팍우 동굴 (Pak Ou Caves) 보트 투어", desc: "절벽 동굴 속 수천 개의 불상을 만나는 메콩강 상류 투어", img: "./images/asia_aus/laos/luang_prabang/pak_ou_caves.jpg" },
                            { name: "꽝시 폭포 에메랄드 풀 다이빙", desc: "나무 줄기를 잡고 뛰어드는 숲속 천연 폭포 물놀이", img: "./images/asia_aus/laos/luang_prabang/kuang_si_swimming.jpg" }
                        ],
                        hotels: [
                            { name: "My BanLao Hotel", price: "약 9만원", desc: "넓은 야외 수영장과 친절한 서비스로 유명한 인기 호텔" },
                            { name: "Maison Dalabua", price: "약 14만원", desc: "연꽃 연못으로 둘러싸인 루앙프라방 감성 부티크 호텔" },
                            { name: "Indigo House Hotel", price: "약 8만원", desc: "야시장 바로 앞 최고의 접근성을 자랑하는 가성비 숙소" },
                            { name: "Avani+ Luang Prabang", price: "약 22만원", desc: "왕궁 박물관 맞은편 프랑스 식민지풍 럭셔리 리조트" }
                        ]
                    }
                }
            }

            ,
            "태국": {
                desc: "황금빛 사원과 황홀한 야시장, 미소와 미식의 나라",
                cities: {
                    "방콕": {
                        attractions: [
                            { name: "방콕 왕궁 & 에메랄드 사원 (왓 프라깨우)", desc: "태국 왕실의 찬란한 황금 건축과 에메랄드 불상이 모셔진 성지", img: "./images/asia_aus/thailand/bangkok/grand_palace_bangkok.jpg" },
                            { name: "왓 아룬 (새벽 사원)", desc: "짜오프라야 강변에서 도자기 모자이크 탑이 황금빛으로 빛나는 사원", img: "./images/asia_aus/thailand/bangkok/wat_arun.jpg" },
                            { name: "왓 포 (와불 사원)", desc: "길이 46m의 거대한 황금 와불상과 태국 전통 마사지의 발상지", img: "./images/asia_aus/thailand/bangkok/wat_pho.jpg" },
                            { name: "아이콘시암 (ICONSIAM) & 쑥시암", desc: "실내에 태국 전통 수상시장을 그대로 재현한 초대형 럭셔리 쇼핑몰", img: "./images/asia_aus/thailand/bangkok/iconsiam.jpg" },
                            { name: "쭛다페어 (Jodd Fairs) 야시장", desc: "랭쌥(화산 등뼈찜)과 과일 스무디로 가득한 방콕 최고 인기 야시장", img: "./images/asia_aus/thailand/bangkok/jodd_fairs.jpg" },
                            { name: "담넌사두억 수상시장 (방콕 근교 수상시장)", desc: "운하 위 나룻배를 타고 열대 과일과 팟타이·코코넛 아이스크림을 즐기는 대표 수상시장", img: "./images/asia_aus/thailand/bangkok/damnoen_saduak_floating_market.jpg" },
                            { name: "매끌렁 기찻길 시장 (Maeklong Railway Market)", desc: "기차가 지나갈 때마다 선로 위 상점 천막을 순식간에 접었다 펴는 이색 기찻길 시장", img: "./images/asia_aus/thailand/bangkok/maeklong_railway_market.jpg" }
                        ],
                        restaurants: [
                            { name: "팁사마이 (Thipsamai)", desc: "얇은 계란 지단으로 감싼 오렌지 주스 조합 원조 팟타이 맛집", img: "./images/asia_aus/thailand/bangkok/thipsamai.jpg" },
                            { name: "나이소이 갈비국수 (Nai Soi)", desc: "카오산로드 인근 한국인 입맛에 딱 맞는 진한 육수의 푹 고은 갈비국수", img: "./images/asia_aus/thailand/bangkok/nai_soi_noodle.jpg" },
                            { name: "사보이 씨푸드 (Savoey)", desc: "부드러운 게살과 고소한 계란 커리가 일품인 푸팟퐁커리 명가", img: "./images/asia_aus/thailand/bangkok/savoey_seafood.jpg" },
                            { name: "폴로 프라이드 치킨 (Soi Polo)", desc: "바삭한 마늘 후레이크를 듬뿍 올려 먹는 미슐랭 빕구르망 치킨 & 솜땀", img: "./images/asia_aus/thailand/bangkok/polo_fried_chicken.jpg" },
                            { name: "짜런쌩 실롬 (Charoen Saeng Silom)", desc: "입안에서 사르르 녹는 60년 전통 미슐랭 족발덮밥(카오카무)", img: "./images/asia_aus/thailand/bangkok/charoen_saeng_silom.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "% Arabica Bangkok Empire Tower", desc: "엠파이어 타워 55층에서 마천루를 내려다보는 최고층 스카이 카페", img: "./images/asia_aus/thailand/bangkok/arabica_empire_tower.jpg" },
                                { name: "Bubble in the Forest Cafe", desc: "에메랄드빛 연못 위 수상 방갈로가 몰디브를 연상시키는 인생샷 카페", img: "./images/asia_aus/thailand/bangkok/bubble_in_the_forest.jpg" }
                            ],
                            study: [
                                { name: "Factory Coffee Bangkok", desc: "파야타이역 앞 태국 바리스타 챔피언이 운영하는 스페셜티 로스터리", img: "./images/asia_aus/thailand/bangkok/factory_coffee_bangkok.jpg" },
                                { name: "Roots at The Commons Thonglor", desc: "통로 더 커먼즈 내 태국산 원두 커피와 노트북 작업하기 좋은 공간", img: "./images/asia_aus/thailand/bangkok/roots_coffee_bangkok.jpg" }
                            ]
                        },
                        activities: [
                            { name: "짜오프라야 프린세스 디너 크루즈", desc: "라이브 음악과 선상 뷔페를 즐기며 왓 아룬 야경을 감상하는 유람선", img: "./images/asia_aus/thailand/bangkok/chao_phraya_dinner_cruise.jpg" },
                            { name: "킹파워 마하나콘 스카이워크", desc: "해발 314m 투명 유리 바닥 위를 걷는 아찔한 루프탑 전망대", img: "./images/asia_aus/thailand/bangkok/mahanakhon_skywalk.jpg" },
                            { name: "담넌사두억 수상시장 & 매끌렁 기찻길 투어", desc: "나룻배 수상시장과 기차가 지나갈 때 천막을 접는 진풍경 투어", img: "./images/asia_aus/thailand/bangkok/damnoen_saduak_floating_market.jpg" },
                            { name: "아시아티크 더 리버프론트 & 관람차", desc: "강변 옛 부두 창고를 개조한 야간 쇼핑몰과 대형 대관람차", img: "./images/asia_aus/thailand/bangkok/asiatique_bangkok.jpg" },
                            { name: "렛츠 릴렉스 (Let's Relax) 타이 스파", desc: "아로마 오일 마사지 후 달콤한 망고 스티키 라이스를 제공하는 스파", img: "./images/asia_aus/thailand/bangkok/lets_relax_spa_bangkok.jpg" }
                        ],
                        hotels: [
                            { name: "Eastin Grand Hotel Phaya Thai", price: "약 22만원", desc: "공항철도 파야타이역 직결, 환상적인 인피니티 풀을 갖춘 인기 1순위 호텔" },
                            { name: "Avani+ Riverside Bangkok Hotel", price: "약 20만원", desc: "짜오프라야강이 한눈에 펼쳐지는 루프탑 인피니티 풀 호텔" },
                            { name: "Centara Grand at CentralWorld", price: "약 21만원", desc: "시암 중심가 쇼핑몰 직결 및 유명 루프탑 바 레드스카이 보유" },
                            { name: "ibis Styles Bangkok Khaosan Viengtai", price: "약 8만원", desc: "카오산로드 인근 알록달록한 야외 수영장을 갖춘 가성비 호텔" },
                            { name: "NapPark Hostel at Khao San", price: "약 3만원", desc: "배낭여행자들의 성지 카오산의 깔끔하고 친절한 호스텔" }
                        ]
                    },
                    "파타야": {
                        attractions: [
                            { name: "진리의 성전 (Sanctuary of Truth)", desc: "못을 하나도 쓰지 않고 오직 나무 조각으로만 지은 바닷가 거대 목조 성전", img: "./images/asia_aus/thailand/pattaya/sanctuary_of_truth.jpg" },
                            { name: "농눅 빌리지 (Nong Nooch Garden)", desc: "끝없이 펼쳐진 열대 정원과 공룡 밸리를 만나는 테마 식물원", img: "./images/asia_aus/thailand/pattaya/nong_nooch_garden.jpg" },
                            { name: "파타야 수상시장 (Floating Market)", desc: "태국 4대 지역의 전통 가옥과 물길 먹거리를 체험하는 수상 시장", img: "./images/asia_aus/thailand/pattaya/pattaya_floating_market.jpg" },
                            { name: "파타야 비치 & 워킹 스트리트", desc: "낮에는 해양 스포츠, 밤에는 화려한 네온사인이 불타오르는 해변 거리", img: "./images/asia_aus/thailand/pattaya/pattaya_walking_street.jpg" },
                            { name: "황금절벽사원 (Khao Chi Chan)", desc: "깎아지른 바위 절벽에 순금 레이저로 새겨 넣은 거대 불상", img: "./images/asia_aus/thailand/pattaya/khao_chi_chan.jpg" }
                        ],
                        restaurants: [
                            { name: "뭄알로이 (Mum Aroi Naklua)", desc: "바다 바로 옆 파도 소리를 들으며 즐기는 블랙페퍼 크랩과 농어 튀김", img: "./images/asia_aus/thailand/pattaya/mum_aroi_pattaya.jpg" },
                            { name: "더 글래스 하우스 (The Glass House)", desc: "모래사장 위 소나무 숲과 유리 온실에서 즐기는 로맨틱 선셋 씨푸드", img: "./images/asia_aus/thailand/pattaya/glass_house_pattaya.jpg" },
                            { name: "까에 라이 (Jae Tho) 갈비국수", desc: "진하고 구수한 국물에 큼직한 돼지갈비가 들어간 파타야 해장 맛집", img: "./images/asia_aus/thailand/pattaya/jae_tho_noodle_pattaya.jpg" },
                            { name: "터미널 21 파타야 Pier 21 푸드코트", desc: "단돈 몇천 원으로 태국 로컬 음식을 쾌적하게 맛보는 가성비 성지", img: "./images/asia_aus/thailand/pattaya/pier21_pattaya.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "The Sky Gallery Pattaya", desc: "프라탐낙 절벽 위에서 파타야 바다와 산호섬 노을을 조망하는 뷰 카페", img: "./images/asia_aus/thailand/pattaya/sky_gallery_pattaya.jpg" },
                                { name: "Papa Beach Pattaya", desc: "인어공주 테마와 발리 스타일 해변 포토존으로 가득한 오션뷰 카페", img: "./images/asia_aus/thailand/pattaya/papa_beach_pattaya.jpg" }
                            ],
                            study: [
                                { name: "Sunset Coffee Roasters Pattaya Beach", desc: "파타야 비치 해변도로 앞 고소한 스페셜티 원두 로스터리", img: "./images/asia_aus/thailand/pattaya/sunset_coffee_pattaya.jpg" },
                                { name: "La Baguette Bakery Cafe", desc: "프랑스풍 정통 베이커리와 케이크, 조용한 실내 좌석을 갖춘 카페", img: "./images/asia_aus/thailand/pattaya/la_baguette_pattaya.jpg" }
                            ]
                        },
                        activities: [
                            { name: "꼬란 (산호섬) 스피드보트 & 해양스포츠", desc: "투명한 에메랄드빛 바다에서 즐기는 패러세일링·씨워킹·제트스키", img: "./images/asia_aus/thailand/pattaya/koh_larn_island.jpg" },
                            { name: "알카자 카바레 쇼 (Alcazar Show)", desc: "화려한 의상과 무대 연출로 세계적인 명성을 자랑하는 파타야 대표 공연", img: "./images/asia_aus/thailand/pattaya/alcazar_show_pattaya.jpg" },
                            { name: "컬럼비아 픽처스 아쿠아버스 워터파크", desc: "고스트버스터즈·쥬만지 영화 테마의 초대형 슬라이드 워터파크", img: "./images/asia_aus/thailand/pattaya/columbia_pictures_aquaverse.jpg" },
                            { name: "파타야 코끼리 생추어리 교감 체험", desc: "구조된 코끼리들에게 과일 먹이를 주고 진흙 목욕을 함께하는 윤리적 투어", img: "./images/asia_aus/thailand/pattaya/elephant_sanctuary_pattaya.jpg" },
                            { name: "데프랏 야시장 (Thepprasit Night Market)", desc: "열대과일과 해산물 꼬치, 기념품이 가득한 파타야 최대 로컬 야시장", img: "./images/asia_aus/thailand/pattaya/thepprasit_night_market.jpg" }
                        ],
                        hotels: [
                            { name: "Hilton Pattaya (힐튼 파타야)", price: "약 28만원", desc: "센트럴 페스티벌 쇼핑몰 위 파노라마 오션뷰 인피니티 풀 5성급 호텔" },
                            { name: "Grande Centre Point Space Pattaya", price: "약 26만원", desc: "우주 테마의 초대형 워터파크를 무료 이용하는 최신 럭셔리 호텔" },
                            { name: "Cape Dara Resort Pattaya", price: "약 19만원", desc: "프라이빗 비치와 두 개의 바다 전망 수영장을 갖춘 휴양 리조트" },
                            { name: "Siam@Siam Design Hotel Pattaya", price: "약 11만원", desc: "루프탑 더블 데크 수영장이 매력적인 힙한 가성비 디자인 호텔" },
                            { name: "Holiday Inn Express Pattaya Central", price: "약 6만원", desc: "무료 조식과 중심가 접근성을 모두 잡은 초가성비 체인 호텔" }
                        ]
                    },
                    "치앙마이": {
                        attractions: [
                            { name: "왓 프라탓 도이수텝 (Doi Suthep)", desc: "치앙마이 시내가 한눈에 내려다보이는 산 정상 황금 불탑 사원", img: "./images/asia_aus/thailand/chiang_mai/doi_suthep.jpg" },
                            { name: "타패 게이트 & 올드시티 성벽", desc: "붉은 벽돌 성문과 비둘기 떼가 어우러진 치앙마이 여행의 상징", img: "./images/asia_aus/thailand/chiang_mai/tha_phae_gate.jpg" },
                            { name: "왓 체디루앙 (Wat Chedi Luang)", desc: "란나 왕국의 역사를 간직한 거대하고 웅장한 고대 벽돌 불탑", img: "./images/asia_aus/thailand/chiang_mai/wat_chedi_luang.jpg" },
                            { name: "님만해민 & 원님만 (One Nimman)", desc: "유럽풍 시계탑 광장과 감각적인 편집샵·카페가 모인 트렌디 거리", img: "./images/asia_aus/thailand/chiang_mai/one_nimman.jpg" },
                            { name: "반캉왓 (Baan Kang Wat)", desc: "숲속에 예술가들의 공방과 독립서점이 모여 있는 핸드메이드 예술인 마을", img: "./images/asia_aus/thailand/chiang_mai/baan_kang_wat.jpg" }
                        ],
                        restaurants: [
                            { name: "카오소이 매사이 (Khao Soi Mae Sai)", desc: "미슐랭 빕구르망 선정, 진한 코코넛 커리 국물의 태국 북부식 카오소이 1등 맛집", img: "./images/asia_aus/thailand/chiang_mai/khao_soi_mae_sai.jpg" },
                            { name: "통마식당 (Huen Muan Jai)", desc: "미슐랭 선정 정통 란나 북부 가정식 샘플러(오더프 무앙) 맛집", img: "./images/asia_aus/thailand/chiang_mai/huen_muan_jai.jpg" },
                            { name: "블루누들 (Blue Noodle 올드시티)", desc: "부드러운 갈비와 수육이 듬뿍 올라간 치앙마이 해장 1순위 갈비국수", img: "./images/asia_aus/thailand/chiang_mai/blue_noodle_chiang_mai.jpg" },
                            { name: "창푸악 게이트 카우보이 족발덮밥", desc: "카우보이 모자를 쓴 여사장님이 썰어주는 야들야들한 카오카무(족발덮밥)", img: "./images/asia_aus/thailand/chiang_mai/cowboy_hat_lady.jpg" },
                            { name: "더 리버사이드 바 & 레스토랑", desc: "핑강변 라이브 밴드 음악과 함께 즐기는 타이 푸드와 시원한 맥주", img: "./images/asia_aus/thailand/chiang_mai/riverside_chiang_mai.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "No.39 Cafe", desc: "에메랄드빛 연못과 통나무 오두막 슬라이드가 있는 숲속 요정 카페", img: "./images/asia_aus/thailand/chiang_mai/no39_cafe_chiang_mai.jpg" },
                                { name: "Chom Cafe and Restaurant", desc: "신비로운 수증기와 이끼 폭포가 흐르는 열대 우림 정원 카페", img: "./images/asia_aus/thailand/chiang_mai/chom_cafe_chiang_mai.jpg" }
                            ],
                            study: [
                                { name: "Ristr8to Original (리스트레토)", desc: "월드 라떼아트 챔피언이 운영하는 님만해민 스페셜티 커피 성지", img: "./images/asia_aus/thailand/chiang_mai/ristr8to_chiang_mai.jpg" },
                                { name: "Graph Contemporary", desc: "고풍스러운 엔틱 인테리어와 독창적인 시그니처 커피로 사랑받는 공간", img: "./images/asia_aus/thailand/chiang_mai/graph_cafe_chiang_mai.jpg" }
                            ]
                        },
                        activities: [
                            { name: "치앙라이 백색사원 (왓 롱쿤) & 블루템플 투어", desc: "순백의 유리 모자이크로 빛나는 천국 같은 사원 근교 일일 투어", img: "./images/asia_aus/thailand/chiang_mai/wat_rong_khun.jpg" },
                            { name: "선데이 나이트마켓 & 진짜이 파머스 마켓", desc: "타패 게이트부터 이어지는 주말 야시장과 유기농 아침 마켓 탐방", img: "./images/asia_aus/thailand/chiang_mai/sunday_night_market_cm.jpg" },
                            { name: "도이 인타논 국립공원 트레킹", desc: "태국 최고봉의 쌍둥이 로열 파고다와 폭포·고산족 마을 투어", img: "./images/asia_aus/thailand/chiang_mai/doi_inthanon.jpg" },
                            { name: "타이 팜 쿠킹 클래스 (유기농 농장)", desc: "로컬 시장을 구경하고 농장에서 직접 팟타이와 똠얌꿍을 만들어보는 체험", img: "./images/asia_aus/thailand/chiang_mai/thai_cooking_class_cm.jpg" }
                        ],
                        hotels: [
                            { name: "U Nimman Chiang Mai (유 님만)", price: "약 18만원대", desc: "원님만 바로 맞은편, 24시간 레이트 체크아웃과 인피니티 풀 인기 호텔" },
                            { name: "Phra Singh Village", price: "약 17만원대", desc: "올드시티 중심에서 란나 전통 건축미와 무료 애프터눈 티를 즐기는 부티크 호텔" },
                            { name: "Buri Siri Boutique Hotel", price: "약 9만원대", desc: "님만해민의 유럽 식민지풍 감성과 야외 수영장을 갖춘 가성비 숙소" },
                            { name: "BED Nimman Hotel", price: "약 8만원대", desc: "무료 생수와 과일·라면이 무제한 제공되는 친절한 어덜트 온리 호텔" }
                        ]
                    }
                }
            },
            "인도네시아": {
                desc: "신들의 섬 발리, 열대 정글과 에메랄드빛 바다가 어우러진 휴양의 낙원",
                cities: {
                    "발리": {
                        attractions: [
                            { name: "우붓 뜨갈랄랑 계단식 논 (Tegallalang)", desc: "초록빛 야자수와 계단식 다랭이논이 어우러진 발리 대표 절경", img: "./images/asia_aus/indonesia/bali/tegallalang_rice_terrace.jpg" },
                            { name: "울루와뚜 절벽 사원 (Uluwatu Temple)", desc: "70m 깎아지른 인도양 해안 절벽 위에 세워진 붉은 노을 사원", img: "./images/asia_aus/indonesia/bali/uluwatu_temple.jpg" },
                            { name: "따나롯 해상 사원 (Tanah Lot)", desc: "밀물 때면 바다 위 섬이 되는 신비로운 인도양 대표 해상 사원", img: "./images/asia_aus/indonesia/bali/tanah_lot_temple.jpg" },
                            { name: "누사 페니다 클링킹 비치 (Kelingking Beach)", desc: "티라노사우루스 절벽과 압도적인 터키석 파도로 유명한 인생샷 성지", img: "./images/asia_aus/indonesia/bali/kelingking_beach_bali.jpg" },
                            { name: "우붓 몽키 포레스트 (Sacred Monkey Forest)", desc: "고대 힌두 사원과 이끼 낀 거목 사이를 원숭이들이 거니는 신성한 숲", img: "./images/asia_aus/indonesia/bali/ubud_monkey_forest.jpg" }
                        ],
                        restaurants: [
                            { name: "Naughty Nuri's Warung (너티누리스 우붓)", desc: "불향 가득한 특제 소스로 구워낸 발리 1등 폭립(Pork Ribs) 맛집", img: "./images/asia_aus/indonesia/bali/naughty_nuris_bali.jpg" },
                            { name: "Bebek Bengil (더티 덕 다이너 우붓)", desc: "푸른 논밭 정원을 바라보며 먹는 바삭한 발리 전통 오리튀김(베벡 고렝)", img: "./images/asia_aus/indonesia/bali/bebek_bengil_bali.jpg" },
                            { name: "Ibu Oka (이부 오카 바비굴링)", desc: "향신료를 채워 바삭하게 통구이한 발리 전통 돼지구이 나시 바비굴링 원조", img: "./images/asia_aus/indonesia/bali/ibu_oka_bali.jpg" },
                            { name: "짐바란 씨푸드 선셋 디너 (Menega Cafe)", desc: "짐바란 해변 모래사장 위에서 파도와 석양을 보며 즐기는 숯불 해산물 구이", img: "./images/asia_aus/indonesia/bali/jimbaran_seafood_bali.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Finns Beach Club (핀스 비치 클럽)", desc: "짱구 베라와 해변 앞 인피니티 풀과 선셋 DJ 파티로 뜨거운 비치 클럽", img: "./images/asia_aus/indonesia/bali/finns_beach_club_bali.jpg" },
                                { name: "Cretya Ubud (크레티아 우붓)", desc: "뜨갈랄랑 계단식 논을 내려다보는 3단 정글 인피니티 풀 데이 클럽", img: "./images/asia_aus/indonesia/bali/cretya_ubud_bali.jpg" }
                            ],
                            study: [
                                { name: "Seniman Coffee Studio (세니만 커피)", desc: "우붓의 감각적인 흔들의자와 인도네시아 스페셜티 원두를 즐기는 로스터리", img: "./images/asia_aus/indonesia/bali/seniman_coffee_bali.jpg" },
                                { name: "Crate Cafe Canggu (크레이트 카페)", desc: "짱구 디지털 노마드들이 모이는 푸짐한 브런치와 스무디볼 성지", img: "./images/asia_aus/indonesia/bali/crate_cafe_bali.jpg" }
                            ]
                        },
                        activities: [
                            { name: "바투르산 일출 지프 투어 (Mount Batur)", desc: "새벽 4WD 지프를 타고 화산 정상에서 붉은 일출과 운해를 만나는 투어", img: "./images/asia_aus/indonesia/bali/mount_batur_sunrise.jpg" },
                            { name: "발리 스윙 & 아융강 래프팅", desc: "열대 우림 협곡 위로 날아오르는 정글 그네와 아융강 급류 래프팅", img: "./images/asia_aus/indonesia/bali/bali_swing_ubud.jpg" },
                            { name: "울루와뚜 케착 파이어 댄스 관람", desc: "석양이 지는 절벽 원형 극장에서 펼쳐지는 전통 합창과 불춤 공연", img: "./images/asia_aus/indonesia/bali/kecak_fire_dance_bali.jpg" },
                            { name: "꾸따·짱구 서핑 레슨 & 발리니스 스파", desc: "서핑 입문자들의 천국 꾸따 비치 파도타기와 플라워 배스 힐링 스파", img: "./images/asia_aus/indonesia/bali/kuta_surfing_bali.jpg" }
                        ],
                        hotels: [
                            { name: "아야나 리조트 발리 (AYANA Resort)", price: "약 45만원대", desc: "절벽 위 락 바(Rock Bar)와 리버풀 인생샷으로 유명한 짐바란 대표 리조트" },
                            { name: "파드마 리조트 우붓 (Padma Resort Ubud)", price: "약 38만원대", desc: "열대 계곡을 품은 89m 온수 인피니티 풀을 갖춘 우붓 최고급 휴양 리조트" },
                            { name: "카만달루 우붓 (Kamandalu Ubud)", price: "약 32만원대", desc: "정글 프라이빗 풀빌라와 보트 조식 체험으로 유명한 감성 리조트" },
                            { name: "포테이토 헤드 스위트 & 스튜디오", price: "약 25만원대", desc: "스미냑 비치 클럽 바로 앞 친환경 디자인의 힙한 오션뷰 숙소" }
                        ]
                    }
                }
            }

            ,
            "영국": {
                desc: "전통과 현대가 공존하는 신사의 나라",
                cities: {
                    "런던": {
                        attractions: [
                            { name: "빅벤 & 영국 국회의사당", desc: "템즈강변을 지키는 런던의 영원한 상징 시계탑", img: "./images/europe/uk/london/big_ben.jpg" },
                            { name: "타워 브리지", desc: "고딕 양식 쌍둥이 탑이 우뚝 솟은 도개교 랜드마크", img: "./images/europe/uk/london/tower_bridge.jpg" },
                            { name: "버킹엄 궁전", desc: "화려한 근위병 교대식이 펼쳐지는 영국 왕실의 거처", img: "./images/europe/uk/london/buckingham_palace.jpg" },
                            { name: "대영박물관 (British Museum)", desc: "로제타석과 파르테논 조각 등 인류 문명의 보고", img: "./images/europe/uk/london/british_museum.jpg" },
                            { name: "런던 아이 (London Eye)", desc: "템즈강과 런던 전경을 360도로 조망하는 대관람차", img: "./images/europe/uk/london/london_eye.jpg" }
                        ],
                        restaurants: [
                            { name: "The Ledbury", desc: "노팅힐의 미슐랭 3스타 컨템포러리 브리티시 다이닝", img: "./images/europe/uk/london/ledbury.jpg" },
                            { name: "Poppies Fish & Chips (포피스)", desc: "바삭한 대구 튀김과 타르타르 소스의 정통 피시 앤 칩스", img: "./images/europe/uk/london/fish_and_chips.jpg" },
                            { name: "Flat Iron Covent Garden", desc: "합리적인 가격에 즐기는 육즙 가득 스테이크 맛집", img: "./images/europe/uk/london/flat_iron_london.jpg" },
                            { name: "Dishoom Covent Garden", desc: "봄베이 옛 카페 감성에서 즐기는 런던 1순위 커리 맛집", img: "./images/europe/uk/london/dishoom_london.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Monmouth Coffee Company", desc: "버로우 마켓과 코벤트 가든을 대표하는 런던 최고의 로스터리", img: "./images/europe/uk/london/monmouth.jpg" },
                                { name: "WatchHouse Tower Bridge", desc: "타워 브리지 옆 19세기 감시초소를 개조한 스페셜티 카페", img: "./images/europe/uk/london/watchhouse_london.jpg" }
                            ],
                            study: [
                                { name: "영국 국립도서관 (British Library)", desc: "비틀즈 친필 가사집과 학구적인 열람실 카페", img: "./images/europe/uk/london/british_library.jpg" },
                                { name: "Burr & Co. London", desc: "러셀 스퀘어 킴튼 호텔 내 높은 층고의 노트북 작업 명당", img: "./images/europe/uk/london/burr_and_co_london.jpg" }
                            ]
                        },
                        activities: [
                            { name: "웨스트엔드 뮤지컬 관람", desc: "오페라의 유령·레미제라블·위키드 본고장 공연 감상", img: "./images/europe/uk/london/west_end_musical.jpg" },
                            { name: "포트넘 앤 메이슨 애프터눈 티", desc: "300년 전통 왕실 홍차 브랜드에서 즐기는 3단 트레이 티타임", img: "./images/europe/uk/london/fortnum_and_mason.jpg" },
                            { name: "버로우 마켓 (Borough Market) 미식 투어", desc: "천년 역사의 런던 최대 식료품 시장 길거리 음식 탐방", img: "./images/europe/uk/london/borough_market.jpg" },
                            { name: "해리포터 스튜디오 투어 런던", desc: "호그와트 연회장과 다이애건 앨리 실제 세트장 체험", img: "./images/europe/uk/london/harry_potter_studio_london.jpg" }
                        ],
                        hotels: [
                            { name: "The Savoy London", price: "약 60만원대", desc: "템즈강변 130년 역사의 전설적인 럭셔리 호텔" },
                            { name: "Zedwell Piccadilly Circus", price: "약 19만원", desc: "소호·피카딜리 중심부의 방음 특화 모던 호텔" },
                            { name: "citizenM Tower of London", price: "약 22만원", desc: "타워 브리지 뷰 루프탑 바를 갖춘 스마트 부티크 호텔" },
                            { name: "Generator London", price: "약 6만원대", desc: "킹스크로스역 인근 감각적인 디자인 호스텔" }
                        ]
                    },
                    "에든버러": {
                        attractions: [
                            { name: "에든버러 성 (Edinburgh Castle)", desc: "캐슬록 바위산 꼭대기에 우뚝 솟은 스코틀랜드 왕실의 역사적 요새", img: "./images/europe/uk/edinburgh/edinburgh_castle.jpg" },
                            { name: "칼튼 힐 (Calton Hill)", desc: "에든버러 구시가지와 바다가 한눈에 내려다보이는 황혼 파노라마 언덕", img: "./images/europe/uk/edinburgh/calton_hill.jpg" },
                            { name: "빅토리아 스트리트 (해리포터 다이애건 앨리)", desc: "곡선형 알록달록 상점들이 늘어선 해리포터 모티브 중세 거리", img: "./images/europe/uk/edinburgh/victoria_street_edinburgh.jpg" },
                            { name: "로열 마일 & 세인트 자일스 대성당", desc: "왕관 모양 종탑과 백파이프 연주자가 반겨주는 구시가지 중심 대로", img: "./images/europe/uk/edinburgh/royal_mile_edinburgh.jpg" },
                            { name: "아서스 시트 (Arthur's Seat)", desc: "고대 화산 언덕 정상에서 스코틀랜드 대자연을 만끽하는 트레킹 명소", img: "./images/europe/uk/edinburgh/arthurs_seat.jpg" }
                        ],
                        restaurants: [
                            { name: "Makars Gourmet Mash Bar", desc: "스코틀랜드 전통 요리 해기스(Haggis)와 부드러운 매시드 포테이토 맛집", img: "./images/europe/uk/edinburgh/makars_mash_bar.jpg" },
                            { name: "Oink (오잉크 빅토리아 스트리트)", desc: "통돼지 바비큐를 갓 구운 빵에 듬뿍 넣어주는 스코티시 풀드포크 샌드위치", img: "./images/europe/uk/edinburgh/oink_edinburgh.jpg" },
                            { name: "The Witchery by the Castle", desc: "에든버러 성 입구 16세기 고딕 건물에서 즐기는 스코틀랜드 스테이크와 해산물", img: "./images/europe/uk/edinburgh/the_witchery_edinburgh.jpg" },
                            { name: "Bertie's Proper Fish & Chips", desc: "빅토리아 스트리트의 바삭하고 푸짐한 스코틀랜드 정통 피시 앤 칩스", img: "./images/europe/uk/edinburgh/berties_fish_and_chips.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "The Milkman (더 밀크맨)", desc: "콕번 스트리트 중세 돌담 골목의 아늑하고 감각적인 스페셜티 카페", img: "./images/europe/uk/edinburgh/the_milkman_edinburgh.jpg" },
                                { name: "Lannan Bakery", desc: "스톡브리지에서 아침마다 줄 서서 먹는 크루아상과 페이스트리 성지", img: "./images/europe/uk/edinburgh/lannan_bakery.jpg" }
                            ],
                            study: [
                                { name: "Cairngorm Coffee", desc: "조용하고 세련된 인테리어에서 로스터리 원두와 작업을 즐기는 공간", img: "./images/europe/uk/edinburgh/cairngorm_coffee.jpg" },
                                { name: "Artisan Roast Bruntsfield", desc: "스코틀랜드 스페셜티 커피 문화를 개척한 아늑한 로컬 카공 명당", img: "./images/europe/uk/edinburgh/artisan_roast_edinburgh.jpg" }
                            ]
                        },
                        activities: [
                            { name: "스카치 위스키 익스피리언스 투어", desc: "배럴 라이드를 타고 스코틀랜드 싱글몰트 위스키 시음하기", img: "./images/europe/uk/edinburgh/scotch_whisky_experience.jpg" },
                            { name: "딘 빌리지 (Dean Village) 수변 산책", desc: "리ith 강물 따라 동화 속 중세 방앗간 마을을 걷는 힐링 코스", img: "./images/europe/uk/edinburgh/dean_village.jpg" },
                            { name: "네스호 & 스코틀랜드 하이랜드 투어", desc: "글렌코 협곡의 웅장한 대자연과 네스호 유람선을 타는 근교 투어", img: "./images/europe/uk/edinburgh/scottish_highlands_tour.jpg" },
                            { name: "에든버러 언더그라운드 고스트 투어", desc: "사우스 브리지 지하 볼트에 숨겨진 중세 역사를 탐험하는 나이트 투어", img: "./images/europe/uk/edinburgh/edinburgh_vaults_tour.jpg" }
                        ],
                        hotels: [
                            { name: "The Balmoral Hotel", price: "약 65만원대", desc: "웨이벌리역 시계탑 랜드마크이자 조앤 롤링이 해리포터를 탈고한 전설의 호텔" },
                            { name: "Virgin Hotels Edinburgh", price: "약 32만원대", desc: "빅토리아 스트리트 바로 옆 고풍스러운 건축과 트렌디한 감성의 조화" },
                            { name: "Motel One Edinburgh-Royal", price: "약 18만원대", desc: "웨이벌리역과 로열 마일 도보 2분 거리 최고의 가성비 디자인 호텔" },
                            { name: "CoDE Pod – The CoURT Edinburgh", price: "약 7만원대", desc: "옛 법원 건물을 세련된 캡슐 호스텔로 개조한 올드타운 실속 숙소" }
                        ]
                    }
                }
            },
            "프랑스": {
                desc: "낭만과 예술, 미식의 나라",
                cities: {
                    "파리": {
                        attractions: [
                            { name: "에펠탑 (Tour Eiffel)", desc: "낮에는 우아하고 밤에는 화이트 에펠로 반짝이는 파리의 상징", img: "./images/europe/france/paris/eiffel_tower.jpg" },
                            { name: "루브르 박물관", desc: "유리 피라미드와 모나리자를 품은 세계 최대 예술 박물관", img: "./images/europe/france/paris/louvre.jpg" },
                            { name: "몽마르뜨 언덕 & 사크레쾨르 대성당", desc: "파리 시내가 내려다보이는 예술가들의 언덕과 순백의 성당", img: "./images/europe/france/paris/montmartre.jpg" },
                            { name: "개선문 & 샹젤리제 거리", desc: "12개 대로가 뻗어 나가는 에투알 광장의 웅장한 파노라마", img: "./images/europe/france/paris/arc_de_triomphe.jpg" },
                            { name: "오르세 미술관", desc: "기차역을 개조한 인상주의 걸작(고흐·모네)의 성지", img: "./images/europe/france/paris/musee_dorsay.jpg" }
                        ],
                        restaurants: [
                            { name: "Le Bouillon Chartier (부용 샤르티에)", desc: "100년 전통 벨에포크 홀에서 즐기는 가성비 정통 프렌치", img: "./images/europe/france/paris/bouillon.jpg" },
                            { name: "Angelina Paris (앙젤리나)", desc: "코코 샤넬이 사랑한 진한 쇼콜라 쇼(핫초코)와 몽블랑", img: "./images/europe/france/paris/angelina.jpg" },
                            { name: "Le Relais de l'Entrecôte", desc: "비법 허브 버터 소스와 감자튀김이 일품인 스테이크 맛집", img: "./images/europe/france/paris/relais_entrecote.jpg" },
                            { name: "L'As du Fallafel", desc: "마레지구에서 줄 서서 먹는 바삭한 팔라펠 피타 샌드위치", img: "./images/europe/france/paris/las_du_fallafel.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Café de Flore (카페 드 플로르)", desc: "사르트르와 피카소가 단골이었던 생제르맹데프레 역사적 노천카페", img: "./images/europe/france/paris/cafe_de_flore.jpg" },
                                { name: " Carette (카레트 트로카데로)", desc: "에펠탑 뷰 테라스에서 즐기는 크루아상과 어니언 수프", img: "./images/europe/france/paris/carette_paris.jpg" }
                            ],
                            study: [
                                { name: "프랑스 국립도서관 리슐리외관 (BnF)", desc: "화려한 원형 천장 아래 학구적 분위기가 흐르는 도서관", img: "./images/europe/france/paris/bnf.jpg" },
                                { name: "Nuage Café Paris", desc: "무제한 음료·스낵이 제공되는 파리 대표 코워킹 카페", img: "./images/europe/france/paris/nuage_cafe_paris.jpg" }
                            ]
                        },
                        activities: [
                            { name: "바토 파리지앵 센강 유람선", desc: "에펠탑과 노트르담을 스쳐 지나가는 황금빛 야경 크루즈", img: "./images/europe/france/paris/bateaux_parisiens.jpg" },
                            { name: "베르사유 궁전 & 거울의 방 투어", desc: "태양왕 루이 14세의 화려한 황금 궁전과 정원 산책", img: "./images/europe/france/paris/palace_of_versailles.jpg" },
                            { name: "마레지구 편집샵 & 갤러리 산책", desc: "보주 광장과 메르시(Merci) 등 트렌디한 파리지앵 거리 탐방", img: "./images/europe/france/paris/le_marais_paris.jpg" },
                            { name: "샹마르스 공원 에펠탑 피크닉", desc: "바게트와 와인을 곁들이며 정각 화이트 에펠 감상하기", img: "./images/europe/france/paris/champ_de_mars.jpg" }
                        ],
                        hotels: [
                            { name: "Pullman Paris Tour Eiffel", price: "약 35만원대", desc: "발코니에서 에펠탑이 정면으로 보이는 인생샷 호텔" },
                            { name: "citizenM Paris Gare de Lyon", price: "약 18만원", desc: "센강 뷰와 모던한 감각을 갖춘 실속 비즈니스 호텔" },
                            { name: "Hôtel Joke - Astotel", price: "약 19만원", desc: "몽마르뜨 인근 무료 오후 간식 바를 운영하는 부티크 호텔" },
                            { name: "The People Paris Marais", price: "약 8만원대", desc: "마레지구 중심의 세련되고 청결한 신축 호스텔" }
                        ]
                    },
                    "니스": {
                        attractions: [
                            { name: "프롬나드 데 장글레", desc: "코트다쥐르의 쪽빛 지중해를 따라 뻗은 야자수 해변 산책로", img: "./images/europe/france/nice/promenade.jpg" },
                            { name: "니스 성 전망대 (Colline du Château)", desc: "천사의 만과 주황색 지붕 구시가지를 한눈에 담는 파노라마", img: "./images/europe/france/nice/castle_hill.jpg" },
                            { name: "마세나 광장 (Place Masséna)", desc: "붉은 건물과 체크무늬 바닥, 태양의 분수가 어우러진 중심 광장", img: "./images/europe/france/nice/place_massena.jpg" },
                            { name: "살레야 광장 꽃시장 (Cours Saleya)", desc: "구시가지에서 열리는 향긋한 꽃과 프로방스 식재료 시장", img: "./images/europe/france/nice/cours_saleya.jpg" }
                        ],
                        restaurants: [
                            { name: "La Rossettisserie", desc: "구시가지 골목의 촉촉한 로스트 치킨과 감자 요리 맛집", img: "./images/europe/france/nice/rossettisserie.jpg" },
                            { name: "Boccaccio Nice", desc: "마세나 광장 인근 신선한 지중해 해산물 빠에야와 굴 요리", img: "./images/europe/france/nice/boccaccio_nice.jpg" },
                            { name: "Chez Pipo", desc: "병아리콩 가루로 구워낸 니스 전통 화덕 팬케이크 소카(Socca) 원조", img: "./images/europe/france/nice/chez_pipo_nice.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Plage Beau Rivage", desc: "지중해 파도 소리를 들으며 칵테일을 즐기는 프라이빗 비치 라운지", img: "./images/europe/france/nice/beau_rivage.jpg" },
                                { name: "Fenocchio Glacier", desc: "살레야 광장의 90가지 맛 수제 젤라또 디저트 카페", img: "./images/europe/france/nice/fenocchio_nice.jpg" }
                            ],
                            study: [
                                { name: "Workhouse Cafe Nice", desc: "노트북 작업과 스페셜티 커피에 최적화된 코워킹 카페", img: "./images/europe/france/nice/workhouse.jpg" },
                                { name: "Hobo Coffee Nice", desc: "구시가지 입구의 아늑하고 감각적인 라떼 맛집", img: "./images/europe/france/nice/hobo_coffee_nice.jpg" }
                            ]
                        },
                        activities: [
                            { name: "니스 해변 파란 의자 일광욕 & 해수욕", desc: "보석 같은 에메랄드빛 지중해 자갈 해변에서 즐기는 휴양", img: "./images/europe/france/nice/nice_blue_chairs.jpg" },
                            { name: "근교 에즈 빌리지 (Èze) & 열대 정원 투어", desc: "절벽 위 중세 독수리 요새 마을과 지중해 절경 산책", img: "./images/europe/france/nice/eze_village.jpg" },
                            { name: "모나코 & 몬테카를로 반나절 투어", desc: "세계에서 두 번째로 작은 부호들의 나라 모나코 탐방", img: "./images/europe/france/nice/monte_carlo_monaco.jpg" }
                        ],
                        hotels: [
                            { name: "Hôtel Le Negresco", price: "약 50만원대", desc: "프롬나드 데 장글레의 상징적인 핑크 돔 벨에포크 궁전 호텔" },
                            { name: "Hotel Suisse Nice", price: "약 22만원", desc: "성 전망대 아래 니스 해변 곡선이 가장 아름답게 보이는 호텔" },
                            { name: "Hôtel Ozz by HappyCulture", price: "약 8만원대", desc: "니스 기차역 인근 음악 테마의 깔끔한 가성비 숙소" }
                        ]
                    }
                }
            },
            "이탈리아": {
                desc: "고대 문명과 르네상스의 발상지",
                cities: {
                    "로마": {
                        attractions: [
                            { name: "콜로세움 (Colosseo)", desc: "2천 년 역사가 살아 숨 쉬는 고대 로마 제국의 원형 경기장", img: "./images/europe/italy/rome/colosseum.jpg" },
                            { name: "트레비 분수", desc: "어깨 너머로 동전을 던지면 로마로 다시 돌아온다는 바로크 분수", img: "./images/europe/italy/rome/trevi_fountain.jpg" },
                            { name: "바티칸 박물관 & 성 베드로 대성당", desc: "미켈란젤로의 천지창조와 피에타를 만나는 가톨릭의 성지", img: "./images/europe/italy/rome/vatican.jpg" },
                            { name: "판테온 (Pantheon)", desc: "완벽한 비율의 돔 천장과 오쿨루스 채광을 자랑하는 고대 신전", img: "./images/europe/italy/rome/pantheon_rome.jpg" },
                            { name: "포로 로마노 (Foro Romano)", desc: "고대 로마 시민들의 정치·경제·종교의 중심지 유적", img: "./images/europe/italy/rome/roman_forum.jpg" }
                        ],
                        restaurants: [
                            { name: "Da Enzo al 29", desc: "트라스테베레 골목의 줄 서서 먹는 정통 까르보나라 & 아티초크", img: "./images/europe/italy/rome/da_enzo.jpg" },
                            { name: "Giolitti (지올리띠)", desc: "오드리 헵번이 사랑한 120년 전통 로마 3대 젤라또", img: "./images/europe/italy/rome/giolitti.jpg" },
                            { name: "Roscioli Salumeria con Cucina", desc: "구안찰레와 페코리노 치즈가 진한 로마 4대 파스타 명가", img: "./images/europe/italy/rome/roscioli_rome.jpg" },
                            { name: "Two Sizes (투사이즈)", desc: "나보나 광장 인근 피스타치오·딸기 수제 티라미수 맛집", img: "./images/europe/italy/rome/two_sizes_rome.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Antico Caffè Greco", desc: "1760년 개점해 괴테와 리스트가 머물렀던 스페인 광장 고전 카페", img: "./images/europe/italy/rome/greco.jpg" },
                                { name: "Sant'Eustachio Il Caffè", desc: "판테온 인근 황금빛 크레마 에스프레소로 유명한 로마 3대 커피", img: "./images/europe/italy/rome/santeustachio_rome.jpg" }
                            ],
                            study: [
                                { name: "Barnum罗马 (Barnum Cafe)", desc: "캄포 데 피오리 인근 힙스터와 프리랜서들의 스페셜티 작업 카페", img: "./images/europe/italy/rome/barnum.jpg" },
                                { name: "Faro - Caffè Specialty", desc: "로마 최초의 스페셜티 커피 바, 브런치와 노트북 작업 명소", img: "./images/europe/italy/rome/faro_cafe_rome.jpg" }
                            ]
                        },
                        activities: [
                            { name: "진실의 입 (Bocca della Verità) 인증샷", desc: "영화 로마의 휴일처럼 손을 넣어보는 코스메딘 산타 마리아 성당", img: "./images/europe/italy/rome/mouth_of_truth.jpg" },
                            { name: "스페인 광장 & 핀초 언덕 선셋 산책", desc: "로마의 휴일 계단에서 포폴로 광장 전망대까지 걷는 황혼 코스", img: "./images/europe/italy/rome/spanish_steps_rome.jpg" },
                            { name: "천사의 성 (Castel Sant'Angelo) 야경", desc: "테베레강 다리 너머 황금빛으로 빛나는 성곽과 성 베드로 돔", img: "./images/europe/italy/rome/castel_sant_angelo.jpg" },
                            { name: "트라스테베레 중세 골목 나이트 투어", desc: "담쟁이덩굴 골목과 버스킹 공연이 어우러진 로마의 밤", img: "./images/europe/italy/rome/trastevere_rome.jpg" }
                        ],
                        hotels: [
                            { name: "Navona Palace Luxury Inn", price: "약 22만원대", desc: "나보나 광장·판테온 도보 3분 거리의 클래식 호텔" },
                            { name: "The Hive Hotel Rome", price: "약 18만원", desc: "테르미니역 인근 루프탑 테라스를 갖춘 깔끔한 4성급 호텔" },
                            { name: "Generator Rome", price: "약 7만원대", desc: "테르미니역 도보권의 감각적인 디자인 호스텔" }
                        ]
                    },
                    "피렌체": {
                        attractions: [
                            { name: "피렌체 두오모 (산타 마리아 델 피오레)", desc: "브루넬레스키의 거대한 붉은 쿠폴라가 솟은 르네상스 대성당", img: "./images/europe/italy/florence/duomo.jpg" },
                            { name: "우피치 미술관", desc: "보티첼리의 '비너스의 탄생' 등 메디치 가문 예술 컬렉션의 정수", img: "./images/europe/italy/florence/uffizi.jpg" },
                            { name: "시뇨리아 광장 & 베키오 궁전", desc: "다비드상 복제품과 넵투누스 분수가 서 있는 야외 조각 미술관", img: "./images/europe/italy/florence/piazza_della_signoria.jpg" },
                            { name: "아카데미아 미술관", desc: "미켈란젤로의 진품 '다비드상'의 압도적 실물을 마주하는 곳", img: "./images/europe/italy/florence/galleria_dell_accademia.jpg" }
                        ],
                        restaurants: [
                            { name: "Trattoria Zà Zà (트랏토리아 자자)", desc: "두툼한 피렌체식 티본 스테이크(비스테카)와 트러플 파스타 명가", img: "./images/europe/italy/florence/zaza.jpg" },
                            { name: "All'Antico Vinaio", desc: "우피치 미술관 옆 전 세계에서 줄이 가장 긴 포카치아 샌드위치", img: "./images/europe/italy/florence/antico_vinaio.jpg" },
                            { name: "Trattoria Dall'Oste", desc: "산타 마리아 노벨라역 인근 드라이에이징 티본 스테이크 전문점", img: "./images/europe/italy/florence/dall_oste_florence.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Caffè Gilli (카페 질리)", desc: "1733년 문을 연 레푸블리카 광장 회전목마 앞 역사적 카페", img: "./images/europe/italy/florence/gilli.jpg" },
                                { name: "Ditta Artigianale", desc: "이탈리아 바리스타 챔피언이 운영하는 스페셜티 브런치 카페", img: "./images/europe/italy/florence/ditta_artigianale.jpg" }
                            ],
                            study: [
                                { name: "La Cité Libreria Café", desc: "산토 스피리토 지구의 보헤미안 감성 독립서점 & 작업 카페", img: "./images/europe/italy/florence/la_cite.jpg" },
                                { name: "Todo Modo Bookshop Café", desc: "책장 사이 조용한 테이블에서 커피와 와인을 즐기는 북카페", img: "./images/europe/italy/florence/todo_modo_florence.jpg" }
                            ]
                        },
                        activities: [
                            { name: "베키오 다리 (Ponte Vecchio) 산책", desc: "아르노강 위 르네상스 시대 금세공 상점들이 늘어선 중세 다리", img: "./images/europe/italy/florence/ponte_vecchio.jpg" },
                            { name: "미켈란젤로 광장 노을 & 야경 감상", desc: "붉은 지붕의 피렌체 전경과 두오모를 물들이는 황혼 명소", img: "./images/europe/italy/florence/piazzale_michelangelo.jpg" },
                            { name: "산타 마리아 노벨라 약국 방문", desc: "800년 역사를 간직한 세계 최고(最古)의 수도원 향수·약국", img: "./images/europe/italy/florence/santa_maria_novella_pharmacy.jpg" }
                        ],
                        hotels: [
                            { name: "Grand Hotel Baglioni", price: "약 25만원대", desc: "두오모가 한눈에 들어오는 루프탑 레스토랑 호텔" },
                            { name: "c-hotels Ambasciatori", price: "약 19만원", desc: "산타 마리아 노벨라역 바로 옆 이동이 가장 편리한 4성급 숙소" },
                            { name: "PLUS Florence", price: "약 6만원대", desc: "수영장과 루프탑 테라스를 갖춘 피렌체 인기 가성비 호스텔" }
                        ]
                    },
                    "베니스": {
                        attractions: [
                            { name: "산 마르코 광장 & 산 마르코 대성당", desc: "황금빛 비잔틴 모자이크가 빛나는 '유럽에서 가장 아름다운 응접실'", img: "./images/europe/italy/venice/st_marks_square.jpg" },
                            { name: "리알토 다리 (Ponte di Rialto)", desc: "그랜드 캐널(대운하)을 가로지르는 우아한 흰 대리석 아치 다리", img: "./images/europe/italy/venice/rialto_bridge.jpg" },
                            { name: "탄식의 다리 & 두칼레 궁전", desc: "베네치아 공화국 총독의 고딕 양식 궁전과 전설적인 석조 다리", img: "./images/europe/italy/venice/bridge_of_sighs.jpg" },
                            { name: "부라노 섬 (Burano)", desc: "무지개색 파스텔톤 집들이 운하를 따라 늘어선 아이유 뮤직비디오 촬영지", img: "./images/europe/italy/venice/burano_island.jpg" },
                            { name: "산 마르코 종탑 전망대 (Campanile)", desc: "엘리베이터로 올라가 붉은 지붕의 베니스 섬과 석호를 한눈에 담는 전망대", img: "./images/europe/italy/venice/st_marks_campanile.jpg" }
                        ],
                        restaurants: [
                            { name: "Trattoria Alla Madonna", desc: "리알토 다리 인근 1954년부터 운영해온 오징어먹물 파스타와 해산물 튀김 명가", img: "./images/europe/italy/venice/alla_madonna_venice.jpg" },
                            { name: "Cantina Do Spade", desc: "바게트 위에 다채로운 해산물을 올린 베네치아 전통 타파스 치케티(Cicchetti)와 스프리츠", img: "./images/europe/italy/venice/cantina_do_spade.jpg" },
                            { name: "Dal Moro's Fresh Pasta to Go", desc: "주문 즉시 생면을 뽑아 테이크아웃 박스에 담아주는 가성비 생면 파스타", img: "./images/europe/italy/venice/dal_moros_venice.jpg" },
                            { name: "Gelateria Suso (수소 젤라또)", desc: "리알토 다리 옆 피스타치오와 만돌라토 맛으로 줄 서는 베니스 1등 젤라또", img: "./images/europe/italy/venice/gelateria_suso_venice.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Caffè Florian (카페 플로리안)", desc: "1720년 개점한 세계에서 가장 오래된 카페, 산 마르코 광장 오케스트라 연주", img: "./images/europe/italy/venice/caffe_florian_venice.jpg" },
                                { name: "Torrefazione Cannaregio", desc: "칸나레조 운하 바로 앞 물결을 보며 마시는 베니스 최고의 스페셜티 로스터리", img: "./images/europe/italy/venice/torrefazione_cannaregio.jpg" }
                            ],
                            study: [
                                { name: "Libreria Acqua Alta (아쿠아 알타 서점)", desc: "침수를 막기 위해 곤돌라와 욕조 안에 책을 쌓아둔 세상에서 가장 독특한 서점", img: "./images/europe/italy/venice/libreria_acqua_alta.jpg" },
                                { name: "Caffè del Doge", desc: "리알토 다리 뒷골목의 향긋한 원두와 차분히 쉬어가기 좋은 정통 로스터리", img: "./images/europe/italy/venice/caffe_del_doge.jpg" }
                            ]
                        },
                        activities: [
                            { name: "베니스 전통 곤돌라 세레나데 유람", desc: "줄무늬 셔츠 뱃사공이 노를 젓는 좁은 수로와 대운하 낭만 투어", img: "./images/europe/italy/venice/venice_gondola_ride.jpg" },
                            { name: "그랜드 캐널 1번 바포레토 (수상버스) 야경", desc: "산타 루치아역에서 산 마르코까지 대운하 고택 야경을 스쳐 지나는 배", img: "./images/europe/italy/venice/grand_canal_vaporetto.jpg" },
                            { name: "무라노 유리공예 & 부라노 레이스 섬 투어", desc: "유리 장인의 블로잉 시연과 알록달록 부라노 골목 인생샷 투어", img: "./images/europe/italy/venice/murano_glass_tour.jpg" },
                            { name: "아카데미아 다리 (Ponte dell'Accademia) 노을 감상", desc: "살루테 성당 돔 너머로 대운하가 붉게 물드는 베니스 최고의 석양 포인트", img: "./images/europe/italy/venice/accademia_bridge_sunset.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel Danieli Venice", price: "약 75만원대", desc: "영화 투어리스트 촬영지로 유명한 산 마르코 해변 궁전 호텔" },
                            { name: "Hotel Carlton On The Grand Canal", price: "약 24만원대", desc: "산타 루치아 기차역 바로 맞은편 캐리어 이동이 가장 편리한 대운하 뷰 호텔" },
                            { name: "Anda Venice Hostel", price: "약 7만원대", desc: "메스트레역 도보 3분, 본섬까지 기차 10분 거리의 힙한 초가성비 숙소" }
                        ]
                    }
                }
            },
            "스페인": {
                desc: "태양의 열정과 가우디의 건축 예술, 타파스의 나라",
                cities: {
                    "바르셀로나": {
                        attractions: [
                            { name: "사그라다 파밀리아 (성가족 대성당)", desc: "안토니 가우디의 영혼이 깃든 경이로운 숲 모양 기둥과 스테인드글라스", img: "./images/europe/spain/barcelona/sagrada_familia.jpg" },
                            { name: "구엘 공원 (Park Güell)", desc: "가우디의 화려한 타일 모자이크 도마뱀과 지중해가 내려다보이는 동화 속 공원", img: "./images/europe/spain/barcelona/park_guell.jpg" },
                            { name: "카사 바트요 & 카사 밀라", desc: "파도치는 곡선 외벽과 지붕 굴뚝이 예술인 가우디의 천재적 건축물", img: "./images/europe/spain/barcelona/casa_batllo.jpg" },
                            { name: "고딕 지구 & 바르셀로나 대성당", desc: "중세 돌담 골목과 비스베 다리가 이어지는 천년 역사의 구시가지", img: "./images/europe/spain/barcelona/gothic_quarter_barcelona.jpg" },
                            { name: "바르셀로네타 해변 & 벙커 델 카르멜", desc: "지중해 야자수 해변과 바르셀로나 도심 360도 황혼 전망대", img: "./images/europe/spain/barcelona/barceloneta_beach.jpg" }
                        ],
                        restaurants: [
                            { name: "Vinitus (비니투스)", desc: "한국인 입맛을 사로잡은 꿀대구(구운 대구)와 맛조개 구이 타파스 맛집", img: "./images/europe/spain/barcelona/vinitus_barcelona.jpg" },
                            { name: "Ciudad Condal (시우다드 콘달)", desc: "카탈루냐 광장 인근 신선한 해산물 핀초스와 상그리아로 줄 서는 타파스 바", img: "./images/europe/spain/barcelona/ciudad_condal.jpg" },
                            { name: "7 Portes (세테 포르테스)", desc: "피카소와 체 게바라가 방문했던 1836년 개점 정통 해산물 빠에야 명가", img: "./images/europe/spain/barcelona/7_portes_barcelona.jpg" },
                            { name: "Xurreria Trebol (추레리아 트레볼)", desc: "진한 핫초코에 갓 튀긴 바삭한 추로스를 찍어 먹는 바르셀로나 원조 맛집", img: "./images/europe/spain/barcelona/xurreria_trebol.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Nomad Coffee Lab & Shop", desc: "바르셀로나 스페셜티 커피 문화를 대표하는 고딕 지구 로스터리", img: "./images/europe/spain/barcelona/nomad_coffee_barcelona.jpg" },
                                { name: "El Bosc de les Fades (요정의 숲 카페)", desc: "람블라스 거리 옆 신비로운 숲과 폭포, 별빛으로 꾸며진 환상 테마 카페", img: "./images/europe/spain/barcelona/el_bosc_de_les_fades.jpg" }
                            ],
                            study: [
                                { name: "Satan's Coffee Co.", desc: "고딕 지구 조용한 광장 앞에서 진한 플랫화이트와 브런치를 즐기는 공간", img: "./images/europe/spain/barcelona/satans_coffee_barcelona.jpg" },
                                { name: "Federal Café Gòtic", desc: "채광 좋은 넓은 테이블과 루프탑 테라스를 갖춘 노마드 작업 카페", img: "./images/europe/spain/barcelona/federal_cafe_barcelona.jpg" }
                            ]
                        },
                        activities: [
                            { name: "보케리아 시장 (Mercat de la Boqueria) 미식 투어", desc: "하몽 이베리코와 생과일주스가 가득한 유럽 최고의 식료품 시장", img: "./images/europe/spain/barcelona/la_boqueria_market.jpg" },
                            { name: "몬세라트 수도원 케이블카 & 소년합창단 투어", desc: "톱니바퀴 산악열차를 타고 기암괴석 절벽 위 검은 성모상을 만나는 근교 투어", img: "./images/europe/spain/barcelona/montserrat_monastery.jpg" },
                            { name: "팔라우 달마세스 정통 플라멩코 공연", desc: "17세기 바로크 궁전 안뜰에서 펼쳐지는 열정적인 기타와 플라멩코 춤", img: "./images/europe/spain/barcelona/flamenco_barcelona.jpg" },
                            { name: "몬주익 언덕 케이블카 & 마법의 분수", desc: "바르셀로나 항구를 내려다보며 오르는 몬주익 성 케이블카", img: "./images/europe/spain/barcelona/montjuic_cable_car.jpg" }
                        ],
                        hotels: [
                            { name: "W Barcelona (W 바르셀로나)", price: "약 55만원대", desc: "바르셀로네타 해변 끝 돛단배 모양의 지중해 오션뷰 5성급 랜드마크 호텔" },
                            { name: "H10 Madison Barcelona", price: "약 28만원대", desc: "바르셀로나 대성당이 정면으로 보이는 루프탑 수영장 부티크 호텔" },
                            { name: "citizenM Barcelona Plaza Catalunya", price: "약 21만원대", desc: "카탈루냐 광장 바로 앞 이동이 가장 편리한 스마트 디자인 호텔" },
                            { name: "TOC Hostel Barcelona", price: "약 8만원대", desc: "야외 수영장과 세련된 라운지를 갖춘 중심가 가성비 호스텔" }
                        ]
                    },
                    "마드리드": {
                        attractions: [
                            { name: "마드리드 왕궁 (Palacio Real)", desc: "베르사유 궁전에 버금가는 3,000여 개의 화려한 방을 가진 유럽 최대 왕궁", img: "./images/europe/spain/madrid/royal_palace_madrid.jpg" },
                            { name: "프라도 미술관 (Museo del Prado)", desc: "벨라스케스의 '시녀들'과 고야의 걸작을 소장한 세계 3대 미술관", img: "./images/europe/spain/madrid/prado_museum.jpg" },
                            { name: "마요르 광장 & 푸에르타 델 솔", desc: "붉은 벽돌 아케이드로 둘러싸인 마드리드의 역사와 0km 지점 중심 광장", img: "./images/europe/spain/madrid/plaza_mayor_madrid.jpg" },
                            { name: "레티로 공원 & 크리스탈 궁전", desc: "호수 위 보트와 유리 온실 궁전이 어우러진 마드리드 시민들의 쉼터", img: "./images/europe/spain/madrid/retiro_park_madrid.jpg" },
                            { name: "데보드 신전 (Templo de Debod)", desc: "이집트에서 기증받은 고대 신전과 수면 위로 붉게 물드는 최고의 일몰 명소", img: "./images/europe/spain/madrid/temple_of_debod.jpg" }
                        ],
                        restaurants: [
                            { name: "산 미겔 시장 (Mercado de San Miguel)", desc: "유리와 철골 건축물 안에서 올리브·하몽·와인 타파스를 골라 먹는 미식 성지", img: "./images/europe/spain/madrid/mercado_san_miguel.jpg" },
                            { name: "Sobrino de Botín (소브리노 데 보틴)", desc: "1725년 개점해 기네스북에 등재된 세계에서 가장 오래된 식당, 새끼돼지 통구이", img: "./images/europe/spain/madrid/sobrino_de_botin.jpg" },
                            { name: "Chocolatería San Ginés (산 히네스)", desc: "1894년부터 24시간 불이 꺼지지 않는 마드리드 1등 초콜릿 추로스 노포", img: "./images/europe/spain/madrid/chocolateria_san_gines.jpg" },
                            { name: "Mesón del Champiñón", desc: "마요르 광장 옆 초리소 소시지를 채워 철판에 구워내는 통버섯 타파스 맛집", img: "./images/europe/spain/madrid/meson_del_champinon.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Hola Coffee Fourquet", desc: "스페인 바리스타 챔피언이 운영하는 라바피에스 지구의 힙한 로스터리", img: "./images/europe/spain/madrid/hola_coffee_madrid.jpg" },
                                { name: "Círculo de Bellas Artes 루프탑 카페", desc: "그란비아 대로의 메트로폴리스 빌딩을 발아래 두고 커피와 칵테일을 마시는 루프탑", img: "./images/europe/spain/madrid/circulo_bellas_artes_rooftop.jpg" }
                            ],
                            study: [
                                { name: "HanSo Café", desc: "말라사냐 지구의 미니멀하고 차분한 스페셜티 커피 & 말차 디저트 카페", img: "./images/europe/spain/madrid/hanso_cafe_madrid.jpg" },
                                { name: "La Bicicleta Café", desc: "자전거 테마 인테리어와 콘센트 좌석을 완비한 마드리드 대표 코워킹 카페", img: "./images/europe/spain/madrid/la_bicicleta_madrid.jpg" }
                            ]
                        },
                        activities: [
                            { name: "산티아고 베르나베우 (레알 마드리드 구장) 투어", desc: "최첨단 돔 구장으로 재탄생한 레알 마드리드 홈구장과 트로피 박물관 투어", img: "./images/europe/spain/madrid/santiago_bernabeu.jpg" },
                            { name: "근교 톨레도 (Toledo) 중세 고도 일일 투어", desc: "타호강이 감싸 안은 천년 고도 톨레도 대성당과 파라도르 전망대", img: "./images/europe/spain/madrid/toledo_spain.jpg" },
                            { name: "근교 세고비아 백설공주 성 (알카사르) & 수도교 투어", desc: "2천 년 전 로마 수도교와 디즈니 백설공주 성의 모델이 된 알카사르", img: "./images/europe/spain/madrid/segovia_alcazar.jpg" },
                            { name: "레이나 소피아 미술관 피카소 '게르니카' 관람", desc: "피카소의 불후의 대작 게르니카와 달리·미로의 현대미술 감상", img: "./images/europe/spain/madrid/reina_sofia_museum.jpg" }
                        ],
                        hotels: [
                            { name: "RIU Plaza España (리우 플라자 에스파냐)", price: "약 28만원대", desc: "스페인 광장 27층 스카이워크 유리 전망대와 루프탑 풀로 유명한 호텔" },
                            { name: "Dear Hotel Madrid", price: "약 23만원대", desc: "그란비아 대로 끝 왕궁이 내려다보이는 루프탑 인피니티 풀 부티크 호텔" },
                            { name: "Generator Madrid", price: "약 7만원대", desc: "그란비아 바로 옆 루프탑 테라스를 갖춘 깔끔하고 트렌디한 호스텔" }
                        ]
                    },
                    "세비야": {
                        attractions: [
                            { name: "스페인 광장 (Plaza de España)", desc: "반원형 운하와 48개 타일 벤치, 마차가 어우러진 스페인에서 가장 아름다운 광장", img: "./images/europe/spain/seville/plaza_de_espana_seville.jpg" },
                            { name: "세비야 대성당 & 히랄다 탑", desc: "콜럼버스의 묘가 안치된 세계 3대 규모의 고딕 대성당과 이슬람 종탑", img: "./images/europe/spain/seville/seville_cathedral.jpg" },
                            { name: "세비야 알카사르 (Real Alcázar)", desc: "정교한 이슬람 무데하르 양식 아치와 오렌지 정원이 환상적인 왕궁", img: "./images/europe/spain/seville/real_alcazar_seville.jpg" },
                            { name: "메트로폴 파라솔 (라스 세타스)", desc: "구시가지 위로 물결치는 세계 최대 목조 조형물과 노을 산책로", img: "./images/europe/spain/seville/metropol_parasol.jpg" }
                        ],
                        restaurants: [
                            { name: "El Rinconcillo (엘 린콘시요)", desc: "1670년 문을 연 세비야 최고(最古) 타파스 바, 시금치 병아리콩 스튜와 하몽", img: "./images/europe/spain/seville/el_rinconcillo_seville.jpg" },
                            { name: "La Brunilda Tapas", desc: "버섯 리조또와 이베리코 돼지 볼살 요리로 극찬받는 모던 타파스 맛집", img: "./images/europe/spain/seville/la_brunilda_seville.jpg" },
                            { name: "Bar El Comercio", desc: "바삭하고 폭신한 수제 추로스와 진한 초콜릿으로 아침을 여는 로컬 명소", img: "./images/europe/spain/seville/bar_el_comercio.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Virgen Coffee", desc: "메트로폴 파라솔 바로 옆 감각적인 작은 창문에서 내어주는 스페셜티 커피", img: "./images/europe/spain/seville/virgen_coffee_seville.jpg" },
                                { name: "EME Catedral 루프탑 테라스", desc: "손에 잡힐 듯 가까운 세비야 대성당과 히랄다 탑 야경을 마주하는 라운지", img: "./images/europe/spain/seville/eme_rooftop_seville.jpg" }
                            ],
                            study: [
                                { name: "Torch Coffee Roasters", desc: "과달키비르 강변 황금의 탑 옆 넓고 쾌적한 테이블을 갖춘 로스터리 카페", img: "./images/europe/spain/seville/torch_coffee_seville.jpg" },
                                { name: "Syra Coffee Sevilla", desc: "산타크루즈 골목 산책 중 향긋한 원두 커피로 쉬어가기 좋은 미니멀 카페", img: "./images/europe/spain/seville/syra_coffee_seville.jpg" }
                            ]
                        },
                        activities: [
                            { name: "플라멩코 박물관 (Museo del Baile Flamenco) 공연", desc: "안달루시아 본고장에서 숨죽이며 감상하는 영혼의 플라멩코 라이브", img: "./images/europe/spain/seville/museo_flamenco_seville.jpg" },
                            { name: "과달키비르강 선셋 크루즈 & 황금의 탑 산책", desc: "대항해시대 역사가 흐르는 강물 위를 유람하며 맞는 황금빛 노을", img: "./images/europe/spain/seville/guadalquivir_cruise.jpg" },
                            { name: "근교 론다 (Ronda) 누에보 다리 절벽 투어", desc: "120m 협곡 위를 가로지르는 아찔한 다리와 헤밍웨이가 사랑한 절벽 도시", img: "./images/europe/spain/seville/ronda_puente_nuevo.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel Alfonso XIII", price: "약 60만원대", desc: "스페인 국왕이 지은 무데하르 궁전 양식의 전설적인 5성급 럭셔리 호텔" },
                            { name: "Hotel Fernando III", price: "약 22만원대", desc: "산타크루즈 유대인 지구 중심의 루프탑 수영장을 갖춘 클래식 4성급 호텔" },
                            { name: "The Nomad Hostel & Pension", price: "약 6만원대", desc: "세비야 구시가지 중심에서 오렌지빛 감성과 루프탑 바를 즐기는 실속 숙소" }
                        ]
                    }
                }
            },
            "스위스": {
                desc: "알프스의 대자연과 힐링",
                cities: {
                    "인터라켄": {
                        attractions: [
                            { name: "융프라우요흐 (Jungfraujoch)", desc: "해발 3,454m 만년설이 펼쳐진 유럽의 지붕", img: "./images/europe/switzerland/interlaken/jungfrau.jpg" },
                            { name: "브리엔츠 호수 & 이젤트발트", desc: "드라마 사랑의 불시착 촬영지로 유명한 에메랄드빛 호수", img: "./images/europe/switzerland/interlaken/brienz.jpg" },
                            { name: "하더 쿨룸 (Harder Kulm)", desc: "푸니쿨라로 10분 만에 오르는 인터라켄 양대 호수 파노라마 전망대", img: "./images/europe/switzerland/interlaken/harder_kulm.jpg" },
                            { name: "라우터브루넨 & 슈타우바흐 폭포", desc: "깍아지른 절벽에서 300m 폭포수가 떨어지는 동화 속 골짜기", img: "./images/europe/switzerland/interlaken/lauterbrunnen.jpg" }
                        ],
                        restaurants: [
                            { name: "Restaurant Des Alpes", desc: "회헤마테 공원 뷰와 함께 즐기는 스위스 정통 치즈 퐁듀", img: "./images/europe/switzerland/interlaken/des_alpes.jpg" },
                            { name: "Hooters Interlaken", desc: "패러글라이딩 착륙장 바로 앞 활기찬 버거 & 윙 맛집", img: "./images/europe/switzerland/interlaken/hooters.jpg" },
                            { name: "Restaurant Taverne (호텔 인터라켄)", desc: "바삭한 감자전 뢰슈티(Rösti)와 송아지 소시지 요리", img: "./images/europe/switzerland/interlaken/taverne_interlaken.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Funky Chocolate Club", desc: "수제 스위스 초콜릿 클래스와 진한 핫초코를 즐기는 카페", img: "./images/europe/switzerland/interlaken/funky_choco.jpg" },
                                { name: "Velo Cafe Interlaken", desc: "건강한 비건 브런치와 스페셜티 커피를 내리는 감성 카페", img: "./images/europe/switzerland/interlaken/velo_cafe_interlaken.jpg" }
                            ],
                            study: [
                                { name: "Bäckerei Konditorei Mohler (Spatz)", desc: "조용하고 따뜻한 분위기에서 빵과 커피를 즐기는 베이커리", img: "./images/europe/switzerland/interlaken/spatz.jpg" },
                                { name: "Barracuda Cafe & Bar", desc: "어드벤처 여행자들이 모여 여유롭게 쉬어가는 라운지 카페", img: "./images/europe/switzerland/interlaken/barracuda_interlaken.jpg" }
                            ]
                        },
                        activities: [
                            { name: "인터라켄 알프스 패러글라이딩", desc: "만년설 봉우리와 에메랄드빛 두 호수 위를 나는 버킷리스트", img: "./images/europe/switzerland/interlaken/paragliding_interlaken.jpg" },
                            { name: "튠 호수 & 브리엔츠 호수 유람선", desc: "빙하수가 만든 청록빛 호수를 가로지르는 스위스 패스 유람선", img: "./images/europe/switzerland/interlaken/lake_thun_cruise.jpg" },
                            { name: "그린델발트 피르스트 클리프 워크 & 카트", desc: "아찔한 절벽 다리와 초원을 달리는 마운틴 카트 액티비티", img: "./images/europe/switzerland/interlaken/grindelwald_first.jpg" }
                        ],
                        hotels: [
                            { name: "Victoria-Jungfrau Grand Hotel & Spa", price: "약 70만원대", desc: "융프라우 설산이 정면으로 보이는 인터라켄 최고급 5성급 호텔" },
                            { name: "Hotel Interlaken", price: "약 28만원", desc: "동역 도보 5분, 600년 역사의 깔끔하고 고풍스러운 호텔" },
                            { name: "Balmers Hostel", price: "약 6만원대", desc: "전 세계 배낭여행자들이 모이는 스위스 대표 소셜 호스텔" }
                        ]
                    },
                    "루체른": {
                        attractions: [
                            { name: "카펠교 (Kapellbrücke)", desc: "14세기에 지어진 꽃 장식 가득한 유럽 최고(最古)의 목조 다리", img: "./images/europe/switzerland/luzern/kapell_bridge.jpg" },
                            { name: "리기산 (Mount Rigi)", desc: "산악열차와 유람선으로 오르는 알프스 산들의 여왕", img: "./images/europe/switzerland/luzern/rigi.jpg" },
                            { name: "필라투스 산 (Mount Pilatus)", desc: "세계에서 가장 가파른 톱니바퀴 열차로 오르는 알프스 전망대", img: "./images/europe/switzerland/luzern/mount_pilatus.jpg" },
                            { name: "무제크 성벽 (Museggmauer)", desc: "루체른 구시가지와 호수가 한눈에 내려다보이는 중세 성벽", img: "./images/europe/switzerland/luzern/musegg_wall.jpg" }
                        ],
                        restaurants: [
                            { name: "Old Swiss House", desc: "버터에 즉석에서 구워주는 전통 송아지 슈니첼 명가", img: "./images/europe/switzerland/luzern/old_swiss.jpg" },
                            { name: "Rathaus Brauerei Luzern", desc: "카펠교 바로 앞 로이스강변에서 즐기는 수제 맥주와 소시지", img: "./images/europe/switzerland/luzern/rathaus_brauerei.jpg" },
                            { name: "Zunfthausrestaurant Pfistern", desc: "강변 테라스에서 백조를 보며 먹는 치즈 퐁듀와 뢰슈티", img: "./images/europe/switzerland/luzern/pfistern_luzern.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Confiserie Bachmann", desc: "화려한 초콜릿 분수와 마카롱으로 유명한 루체른 대표 디저트 카페", img: "./images/europe/switzerland/luzern/bachmann.jpg" },
                                { name: "Mill'Feuille Luzern", desc: "로이스강 물가 바로 옆에서 여유로운 브런치를 즐기는 뷰 맛집", img: "./images/europe/switzerland/luzern/mill_feuille_luzern.jpg" }
                            ],
                            study: [
                                { name: "Café Conditorei Heini", desc: "전통 수제 케이크와 함께 조용히 쉬어가기 좋은 로컬 베이커리", img: "./images/europe/switzerland/luzern/heini.jpg" },
                                { name: "Alpineum Kaffeehaus", desc: "빈사의 사자상 인근 빈티지하고 차분한 스페셜티 커피 바", img: "./images/europe/switzerland/luzern/alpineum_luzern.jpg" }
                            ]
                        },
                        activities: [
                            { name: "루체른 호수 증기선 크루즈", desc: "비츠나우까지 설산과 호수 마을을 감상하며 달리는 유람선", img: "./images/europe/switzerland/luzern/lake_lucerne_cruise.jpg" },
                            { name: "빈사의 사자상 (Löwendenkmal) 방문", desc: "프랑스 혁명 당시 전사한 스위스 용병을 기리는 감동적인 바위 조각", img: "./images/europe/switzerland/luzern/lion_monument.jpg" },
                            { name: "리기 칼트바트 노천 알프스 온천", desc: "구름 위 설산을 바라보며 즐기는 미네랄 스파 힐링", img: "./images/europe/switzerland/luzern/rigi_kaltbad_spa.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel des Balances", price: "약 35만원대", desc: "로이스강변 아름다운 벽화 외관을 자랑하는 낭만 호텔" },
                            { name: "Ameron Luzern Hotel Flora", price: "약 24만원", desc: "루체른역과 카펠교 사이 최적의 위치를 자랑하는 4성급 호텔" },
                            { name: "Barabas Luzern", price: "약 14만원", desc: "옛 교도소를 감각적인 디자인 호텔로 개조한 이색 가성비 숙소" }
                        ]
                    },
                    "체르마트": {
                        attractions: [
                            { name: "마테호른 (Matterhorn)", desc: "파라마운트 로고의 모델이 된 해발 4,478m 피라미드형 황금빛 봉우리", img: "./images/europe/switzerland/zermatt/matterhorn.jpg" },
                            { name: "고르너그라트 전망대 (Gornergrat)", desc: "산악 톱니바퀴 열차를 타고 올라가 마테호른과 빙하를 마주하는 전망대", img: "./images/europe/switzerland/zermatt/gornergrat_zermatt.jpg" },
                            { name: "슈텔리제 호수 (Stellisee)", desc: "바람이 멈추면 수면 위에 완벽한 데칼코마니 마테호른 반영이 피어나는 호수", img: "./images/europe/switzerland/zermatt/stellisee_lake.jpg" },
                            { name: "마테호른 글래시어 파라다이스", desc: "유럽에서 가장 높은 해발 3,883m 케이블카 전망대와 만년설 얼음 궁전", img: "./images/europe/switzerland/zermatt/glacier_paradise_zermatt.jpg" }
                        ],
                        restaurants: [
                            { name: "Chez Vrony (쉐 브로니)", desc: "마테호른을 정면으로 바라보며 즐기는 미슐랭 가이드 알프스 수제 버거", img: "./images/europe/switzerland/zermatt/chez_vrony_zermatt.jpg" },
                            { name: "Whymper-Stube (윔퍼 슈투베)", desc: "체르마트 중심가에서 즐기는 진한 그뤼에르 치즈 퐁듀와 라클렛", img: "./images/europe/switzerland/zermatt/whymper_stube_zermatt.jpg" },
                            { name: "Schäferstube (쉐퍼슈투베)", desc: "화덕에서 구워내는 바삭하고 부드러운 스위스 전통 양고기 스테이크 맛집", img: "./images/europe/switzerland/zermatt/schaferstube_zermatt.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Fuchs Bistro & Bakery", desc: "마테호른 모양 초콜릿과 갓 구운 페이스트리가 가득한 체르마트 대표 베이커리", img: "./images/europe/switzerland/zermatt/fuchs_bakery_zermatt.jpg" },
                                { name: "Cervo Mountain Resort Terrace", desc: "하이킹이 끝나는 길목에서 마테호른을 보며 마시는 애프터스키 커피 & 칵테일", img: "./images/europe/switzerland/zermatt/cervo_terrace_zermatt.jpg" }
                            ],
                            study: [
                                { name: "Petit Royal Café", desc: "체르마트 반호프슈트라세의 아늑한 2층 스페셜티 커피 & 수제 케이크 카페", img: "./images/europe/switzerland/zermatt/petit_royal_zermatt.jpg" },
                                { name: "Bäckerei Läderach & Tea Room", desc: "달콤한 스위스 수제 초콜릿 음료와 함께 따뜻하게 쉬어가는 공간", img: "./images/europe/switzerland/zermatt/laderach_zermatt.jpg" }
                            ]
                        },
                        activities: [
                            { name: "체르마트 5대 호수 하이킹 (5-Seenweg)", desc: "수네가에서 출발해 마테호른이 비치는 다섯 개의 알프스 호수를 걷는 트레킹", img: "./images/europe/switzerland/zermatt/five_lakes_walk_zermatt.jpg" },
                            { name: "키르히다리 (Kirchbrücke) 일출 황금 마테호른 감상", desc: "해 뜰 녘 마테호른 꼭대기부터 황금빛으로 타오르는 감동적인 일출 명소", img: "./images/europe/switzerland/zermatt/kirchbrucke_sunrise.jpg" },
                            { name: "빙하특급 (Glacier Express) 파노라마 열차 탑승", desc: "체르마트에서 생모리츠까지 알프스 협곡과 다리를 달리는 세상에서 가장 느린 특급열차", img: "./images/europe/switzerland/zermatt/glacier_express_zermatt.jpg" }
                        ],
                        hotels: [
                            { name: "3100 Kulmhotel Gornergrat", price: "약 80만원대", desc: "해발 3,100m 고르너그라트 정상에서 은하수와 마테호른을 독차지하는 산악 호텔" },
                            { name: "BEAUSiTE Zermatt", price: "약 65만원대", desc: "야외 온수 인피니티 풀에서 마테호른이 정면으로 보이는 최고급 뷰 호텔" },
                            { name: "Hotel Butterfly, BW Signature Collection", price: "약 26만원대", desc: "체르마트 기차역 도보 3분 거리의 깔끔하고 합리적인 3성급 슈페리어 호텔" },
                            { name: "Zermatt Youth Hostel", price: "약 9만원대", desc: "조식 포함 마테호른 뷰 객실을 합리적인 가격에 제공하는 알뜰 숙소" }
                        ]
                    }
                }
            },
            "독일": {
                desc: "맥주와 역사의 나라",
                cities: {
                    "베를린": {
                        attractions: [
                            { name: "브란덴부르크 문", desc: "분단과 통일의 역사를 간직한 베를린의 대표 랜드마크", img: "./images/europe/germany/berlin/brandenburg_gate.jpg" },
                            { name: "이스트 사이드 갤러리", desc: "1.3km 베를린 장벽 위에 그려진 자유와 평화의 벽화 갤러리", img: "./images/europe/germany/berlin/east_side_gallery.jpg" },
                            { name: "독일 국회의사당 (Reichstag) 유리 돔", desc: "베를린 시내를 360도로 조망하는 노먼 포스터 설계 투명 돔", img: "./images/europe/germany/berlin/reichstag_dome.jpg" },
                            { name: "베를린 대성당 (Berliner Dom)", desc: "청록색 돔과 화려한 파이프 오르간이 압도적인 루터교 대성당", img: "./images/europe/germany/berlin/berlin_cathedral.jpg" }
                        ],
                        restaurants: [
                            { name: "Curry 36", desc: "매콤달콤한 카레 케첩 소스를 듬뿍 뿌린 베를린 소울푸드 커리부어스트", img: "./images/europe/germany/berlin/curry36.jpg" },
                            { name: "Burgermeister Schlesisches Tor", desc: "철교 아래 옛 공중화장실을 개조한 힙한 수제버거 맛집", img: "./images/europe/germany/berlin/burgermeister.jpg" },
                            { name: "Mustafa's Gemüse Kebap", desc: "구운 채소와 치즈가 어우러져 줄 서서 먹는 전설의 도너 케밥", img: "./images/europe/germany/berlin/mustafas_kebap.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "The Barn Coffee Roasters", desc: "유럽 스페셜티 커피 문화를 이끄는 베를린 3대 로스터리", img: "./images/europe/germany/berlin/the_barn.jpg" },
                                { name: "Bonanza Coffee Roasters", desc: "크로이츠베르크 중정 안쪽에 숨겨진 감각적인 로스터리", img: "./images/europe/germany/berlin/bonanza_coffee_berlin.jpg" }
                            ],
                            study: [
                                { name: "St. Oberholz", desc: "로젠탈러 광장의 베를린 스타트업·디지털 노마드 성지", img: "./images/europe/germany/berlin/oberholz.jpg" },
                                { name: "Father Carpenter Coffee Brewers", desc: "미테지구 아름다운 중정에서 노트북 작업하기 좋은 카페", img: "./images/europe/germany/berlin/father_carpenter_berlin.jpg" }
                            ]
                        },
                        activities: [
                            { name: "박물관 섬 (Museumsinsel) 패스 투어", desc: "페르가몬·구 국립미술관 등 유네스코 지정 5대 박물관 탐방", img: "./images/europe/germany/berlin/museum_island_berlin.jpg" },
                            { name: "마우어 파크 일요 벼룩시장 & 가라오케", desc: "빈티지 소품 쇼핑과 야외 원형극장 버스킹을 즐기는 일요일 코스", img: "./images/europe/germany/berlin/mauerpark_berlin.jpg" },
                            { name: "하케셔 호프 (Hackesche Höfe) 중정 산책", desc: "8개의 아르누보 양식 안뜰에 모인 공방과 편집샵 투어", img: "./images/europe/germany/berlin/hackesche_hofe.jpg" }
                        ],
                        hotels: [
                            { name: "Radisson Collection Hotel Berlin", price: "약 25만원대", desc: "박물관 섬과 대성당 바로 앞 슈프레강변 5성급 호텔" },
                            { name: "Motel One Berlin-Alexanderplatz", price: "약 14만원", desc: "알렉산더 광장 역 앞 뛰어난 가성비의 디자인 호텔" },
                            { name: "The Circus Hostel Berlin", price: "약 6만원대", desc: "로젠탈러 광장 앞 자체 수제 맥주 양조장을 갖춘 인기 호스텔" }
                        ]
                    },
                    "뮌헨": {
                        attractions: [
                            { name: "마리엔 광장 & 신시청사", desc: "정오마다 인형 시계탑(글로켄슈필)이 춤추는 뮌헨의 심장", img: "./images/europe/germany/munich/marienplatz.jpg" },
                            { name: "님펜부르크 궁전", desc: "백조가 노니는 운하와 바로크 정원이 아름다운 바이에른 왕실 별궁", img: "./images/europe/germany/munich/nymphenburg.jpg" },
                            { name: "영국 정원 (Englischer Garten)", desc: "도심 개울에서 서핑을 즐기는 세계 최대 규모의 도심 공원", img: "./images/europe/germany/munich/english_garden_munich.jpg" },
                            { name: "레지덴츠 뮌헨 (Residenz)", desc: "화려한 안티쿠아리움 홀을 품은 바이에른 군주들의 왕궁 박물관", img: "./images/europe/germany/munich/munich_residenz.jpg" }
                        ],
                        restaurants: [
                            { name: "Hofbräuhaus München (호프브로이하우스)", desc: "브라스 밴드 연주와 함께 1L 마스(Maß) 맥주와 학센을 즐기는 양조장", img: "./images/europe/germany/munich/hofbrauhaus.jpg" },
                            { name: "Augustiner-Keller (아우구스티너 켈러)", desc: "밤나무 그늘 아래서 뮌헨 최고 전통 맥주를 마시는 비어가든", img: "./images/europe/germany/munich/augustiner_keller.jpg" },
                            { name: "Haxnbauer (학센바우어)", desc: "장작불에 겉은 바삭하고 속은 촉촉하게 구워낸 슈바인스학센 명가", img: "./images/europe/germany/munich/haxnbauer_munich.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Dallmayr Delikatessenhaus", desc: "300년 전통 바이에른 왕실 납품 델리카트슨 & 우아한 살롱 카페", img: "./images/europe/germany/munich/dallmayr.jpg" },
                                { name: "Café Frischhut (카페 프리슈후트)", desc: "빅투알리엔 시장 옆 갓 튀겨낸 전통 페이스트리 슈말츠누델 맛집", img: "./images/europe/germany/munich/cafe_frischhut.jpg" }
                            ],
                            study: [
                                { name: "Man Versus Machine Coffee Roasters", desc: "글로켄바흐 지구의 미니멀하고 세련된 스페셜티 로스터리", img: "./images/europe/germany/munich/man_vs_machine.jpg" },
                                { name: "Lost Weekend Munich", desc: "뮌헨 대학교 앞 비건 카페 겸 서점·코워킹 스페이스", img: "./images/europe/germany/munich/lost_weekend_munich.jpg" }
                            ]
                        },
                        activities: [
                            { name: "BMW 박물관 & BMW 벨트 투어", desc: "4기통 실린더 빌딩에서 만나는 클래식카와 미래 모빌리티 전시", img: "./images/europe/germany/munich/bmw_museum_munich.jpg" },
                            { name: "노이슈반슈타인 성 (백조의 성) 근교 투어", desc: "디즈니 성의 모티브가 된 알프스 절벽 위 루트비히 2세의 성", img: "./images/europe/germany/munich/neuschwanstein_castle.jpg" },
                            { name: "빅투알리엔 시장 비어가든 미식 산책", desc: "화이트 소시지와 프레첼, 신선한 과일이 가득한 야외 시장", img: "./images/europe/germany/munich/viktualienmarkt.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel Bayerischer Hof", price: "약 45만원대", desc: "루프탑 스파와 미슐랭 레스토랑을 갖춘 전통의 명문 호텔" },
                            { name: "Motel One München-Sendlinger Tor", price: "약 15만원", desc: "마리엔 광장 도보권의 깔끔하고 합리적인 디자인 호텔" },
                            { name: "Wombat's City Hostel Munich", price: "약 6만원대", desc: "뮌헨 중앙역 바로 앞 유리 천장 라운지가 멋진 호스텔" }
                        ]
                    },
                    "밤베르크": {
                        attractions: [
                            { name: "밤베르크 구 시청사 (Altes Rathaus)", desc: "레그니츠강 다리 한가운데 인공섬 위에 지어진 프레스코화 건축물", img: "./images/europe/germany/bamberg/old_town_hall.jpg" },
                            { name: "작은 베네치아 (Klein Venedig)", desc: "강변을 따라 알록달록한 옛 어부들의 목조 가옥이 늘어선 수변 마을", img: "./images/europe/germany/bamberg/little_venice.jpg" },
                            { name: "밤베르크 대성당 (Bamberger Dom)", desc: "4개의 첨탑과 '밤베르크의 기사상'으로 유명한 로마네스크 성당", img: "./images/europe/germany/bamberg/bamberg_cathedral.jpg" },
                            { name: "신 궁전 장미정원 (Rosengarten)", desc: "4,500그루의 장미꽃 너머로 구시가지 붉은 지붕이 펼쳐지는 정원", img: "./images/europe/germany/bamberg/rose_garden_bamberg.jpg" }
                        ],
                        restaurants: [
                            { name: "Schlenkerla (슐렝케를라)", desc: "너도밤나무 연기로 훈연한 밤베르크 명물 훈제 맥주(라우흐비어) 원조", img: "./images/europe/germany/bamberg/schlenkerla.jpg" },
                            { name: "Brauerei Spezial", desc: "부드럽고 은은한 스모키 향의 라우흐비어와 밤베르크 양파 순대 요리", img: "./images/europe/germany/bamberg/brauerei_spezial.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Café Müller Bamberg", desc: "구시가지 중심에서 수제 타르트와 케이크를 즐기는 아늑한 디저트 카페", img: "./images/europe/germany/bamberg/cafe_muller.jpg" },
                                { name: "Kaffeerösterei Mahr", desc: "향긋한 직접 로스팅 원두와 여유로운 테라스를 갖춘 로컬 카페", img: "./images/europe/germany/bamberg/mahr_coffee_bamberg.jpg" }
                            ],
                            study: [
                                { name: "밤베르크 주립도서관 (Staatsbibliothek)", desc: "신 궁전 내에 자리한 고풍스럽고 조용한 역사 도서관", img: "./images/europe/germany/bamberg/library.jpg" },
                                { name: "Seven Cakes Coffee", desc: "모던한 감성과 콘센트 좌석을 갖춘 스페셜티 커피 & 브런치 카페", img: "./images/europe/germany/bamberg/seven_cakes_bamberg.jpg" }
                            ]
                        },
                        activities: [
                            { name: "슐렝케를라 길거리 서서 훈제 맥주 마시기", desc: "오크통에서 갓 따른 생맥주를 들고 골목에서 즐기는 로컬 문화", img: "./images/europe/germany/bamberg/rauchbier_tasting.jpg" },
                            { name: "유네스코 구시가지 & 미하엘스베르크 수도원 산책", desc: "천년 역사의 중세 돌길과 언덕 위 수도원 전망대 걷기", img: "./images/europe/germany/bamberg/michaelsberg_abbey.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel Nepomuk", price: "약 16만원대", desc: "레그니츠강 물 위에 떠 있는 로맨틱한 부티크 호텔" },
                            { name: "Welcome Hotel Residenzschloss Bamberg", price: "약 18만원", desc: "바로크 궁전 건물을 개조한 우아한 헤리티지 호텔" },
                            { name: "ibis Bamberg Altstadt", price: "약 11만원", desc: "구시가지 중심에 위치한 깔끔하고 실속 있는 가성비 호텔" }
                        ]
                    }
                }
            },
            "벨기에": {
                desc: "중세 동화 같은 운하 도시와 초콜릿·와플·맥주의 나라",
                cities: {
                    "브뤼셀": {
                        attractions: [
                            { name: "그랑 플라스 (Grand-Place)", desc: "황금빛 길드하우스와 고딕 시청사가 둘러싼 세계에서 가장 아름다운 광장", img: "./images/europe/belgium/brussels/grand_place_brussels.jpg" },
                            { name: "오줌싸개 동상 (Manneken Pis)", desc: "계절마다 천여 벌의 옷을 갈아입는 브뤼셀의 유쾌한 상징 동상", img: "./images/europe/belgium/brussels/manneken_pis.jpg" },
                            { name: "아토미움 (Atomium)", desc: "철 원자를 1,650억 배 확대한 9개의 거대한 은빛 구체 전망대", img: "./images/europe/belgium/brussels/atomium_brussels.jpg" },
                            { name: "갤러리 로열 생튀베르 (Galeries Royales)", desc: "유리 아케이드 아래 명품 쇼콜라티에들이 모인 1847년 개관 쇼핑 아케이드", img: "./images/europe/belgium/brussels/galeries_saint_hubert.jpg" }
                        ],
                        restaurants: [
                            { name: "Chez Léon (쉐 레옹)", desc: "1893년부터 브뤼셀의 상징이 된 화이트와인 홍합찜(물 프리트) 원조 맛집", img: "./images/europe/belgium/brussels/chez_leon_brussels.jpg" },
                            { name: "Maison Dandoy (메종 당두아)", desc: "겉바속촉 리에주·브뤼셀 스타일 수제 벨기에 와플의 최고봉", img: "./images/europe/belgium/brussels/maison_dandoy.jpg" },
                            { name: "Fritland (프리트랜드)", desc: "두 번 튀겨 바삭한 두툼한 벨기에 감자튀김과 수제 소스 성지", img: "./images/europe/belgium/brussels/fritland_brussels.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Delirium Café (델리리움 카페)", desc: "2,000종 이상의 벨기에·세계 맥주를 보유한 기네스북 등재 펍 & 카페", img: "./images/europe/belgium/brussels/delirium_cafe_brussels.jpg" },
                                { name: "Pierre Marcolini Sablon", desc: "벨기에 왕실 납품 쇼콜라티에의 진한 핫초코와 마카롱 살롱", img: "./images/europe/belgium/brussels/pierre_marcolini_brussels.jpg" }
                            ],
                            study: [
                                { name: "OR Coffee Roasters Brussels", desc: "모던하고 차분한 분위기에서 스페셜티 브루잉을 즐기는 작업 카페", img: "./images/europe/belgium/brussels/or_coffee_brussels.jpg" },
                                { name: "Mok Specialty Coffee", desc: "당사르 지구의 밝고 세련된 북유럽풍 로스터리 카공 명소", img: "./images/europe/belgium/brussels/mok_coffee_brussels.jpg" }
                            ]
                        },
                        activities: [
                            { name: "브뤼셀 만화 박물관 & 벽화 투어", desc: "스머프·땡땡의 모험 본고장에서 만나는 거리 벽화와 만화 박물관", img: "./images/europe/belgium/brussels/comic_strip_center_brussels.jpg" },
                            { name: "벨기에 수제 초콜릿 공방 체험", desc: "쇼콜라티에와 함께 프랄린·트러플 초콜릿을 직접 만들어보는 워크숍", img: "./images/europe/belgium/brussels/chocolate_workshop_brussels.jpg" },
                            { name: "몽 데 자르 (예술의 언덕) 야경 감상", desc: "기하학적 정원 너머 브뤼셀 시청사 첨탑과 노을을 한눈에 담는 언덕", img: "./images/europe/belgium/brussels/mont_des_arts_brussels.jpg" }
                        ],
                        hotels: [
                            { name: "The Dominican, Brussels", price: "약 26만원대", desc: "그랑 플라스 도보 3분, 중세 수도원 터를 개조한 우아한 부티크 호텔" },
                            { name: "Motel One Brussels", price: "약 15만원대", desc: "왕궁과 중앙역 인근 깔끔하고 합리적인 가성비 디자인 호텔" },
                            { name: "MEININGER Hotel Brussels City Center", price: "약 8만원대", desc: "운하변 옛 양조장 건물을 개조한 세련되고 실속 있는 호스텔" }
                        ]
                    },
                    "브뤼헤": {
                        attractions: [
                            { name: "마르크트 광장 & 브뤼헤 종탑 (Belfry)", desc: "계단식 박공지붕 알록달록 건물들과 366계단 전망대 종탑", img: "./images/europe/belgium/bruges/markt_square_bruges.jpg" },
                            { name: "로젠후드카이 (Rozenhoedkaai)", desc: "운하 물결 위로 고딕 첨탑과 버드나무가 비치는 브뤼헤 엽서 포토존", img: "./images/europe/belgium/bruges/rozenhoedkaai_bruges.jpg" },
                            { name: "사랑의 호수 (Minnewaterpark)", desc: "백조들이 평화롭게 헤엄치는 중세 성곽 옆 고즈넉한 호수 공원", img: "./images/europe/belgium/bruges/minnewater_bruges.jpg" },
                            { name: "부르크 광장 & 성혈 예배당", desc: "화려한 황금빛 고딕 시청사와 예수의 성혈 유물이 모셔진 예배당", img: "./images/europe/belgium/bruges/burg_square_bruges.jpg" }
                        ],
                        restaurants: [
                            { name: "De Vlaamsche Pot", desc: "흑맥주로 푹 끓여낸 벨기에 전통 소고기 스튜(카르보나드) 맛집", img: "./images/europe/belgium/bruges/vlaamsche_pot_bruges.jpg" },
                            { name: "Poules Moules", desc: "마르크트 광장 인근 신선한 홍합찜과 벨기에 맥주를 즐기는 인기 식당", img: "./images/europe/belgium/bruges/poules_moules_bruges.jpg" },
                            { name: "Chez Albert", desc: "달콤한 딸기와 초콜릿을 듬뿍 올린 브뤼헤 길거리 1등 와플 가판대", img: "./images/europe/belgium/bruges/chez_albert_bruges.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "The Old Chocolate House", desc: "수제 초콜릿 볼을 뜨거운 우유에 녹여 먹는 아늑한 2층 티룸", img: "./images/europe/belgium/bruges/old_chocolate_house_bruges.jpg" },
                                { name: "2be Beer Wall", desc: "수천 병의 맥주 병으로 꾸며진 벽과 운하 테라스를 갖춘 명물 카페", img: "./images/europe/belgium/bruges/2be_beer_wall_bruges.jpg" }
                            ],
                            study: [
                                { name: "Vero Caffè Bruges", desc: "조용한 광장 앞에서 진한 플랫화이트와 크루아상을 즐기는 공간", img: "./images/europe/belgium/bruges/vero_caffe_bruges.jpg" },
                                { name: "Li O Lait", desc: "빈티지 가구와 정원 테라스가 매력적인 브뤼헤 로컬 스페셜티 카페", img: "./images/europe/belgium/bruges/li_o_lait_bruges.jpg" }
                            ]
                        },
                        activities: [
                            { name: "브뤼헤 운하 보트 투어", desc: "'북유럽의 베네치아'라 불리는 중세 수로를 따라 흐르는 30분 보트 유람", img: "./images/europe/belgium/bruges/bruges_canal_tour.jpg" },
                            { name: "드 할베 만 양조장 (De Halve Maan) 투어", desc: "지하 맥주 파이프라인이 설치된 150년 전통 양조장 견학 및 시음", img: "./images/europe/belgium/bruges/de_halve_maan_brewery.jpg" },
                            { name: "근교 겐트 (Ghent) 그라슬레이 야경 산책", desc: "브뤼헤에서 기차 25분, 중세 길드 건물과 레이에강이 빛나는 대학 도시", img: "./images/europe/belgium/bruges/ghent_graslei.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel Dukes' Palace Brugge", price: "약 32만원대", desc: "15세기 부르고뉴 공작의 궁전을 개조한 5성급 럭셔리 호텔" },
                            { name: "Hotel Academie Bruges", price: "약 18만원대", desc: "사랑의 호수와 구시가지 사이 조용하고 깔끔한 4성급 숙소" },
                            { name: "Snuffel Hostel Bruges", price: "약 6만원대", desc: "아늑한 바가 있는 브뤼헤 구시가지 대표 배낭여행 호스텔" }
                        ]
                    }
                }
            },
            "네덜란드": {
                desc: "자유로운 운하 도시와 튤립·풍차·고흐 예술의 나라",
                cities: {
                    "암스테르담": {
                        attractions: [
                            { name: "반 고흐 미술관 (Van Gogh Museum)", desc: "'해바라기'·'아몬드 꽃' 등 고흐의 생애 걸작을 가장 많이 소장한 미술관", img: "./images/europe/netherlands/amsterdam/van_gogh_museum.jpg" },
                            { name: "암스테르담 국립미술관 (Rijksmuseum)", desc: "렘브란트의 '야경'과 베르메르의 '우유 따르는 여인'이 전시된 웅장한 박물관", img: "./images/europe/netherlands/amsterdam/rijksmuseum.jpg" },
                            { name: "안네 프랑크의 집 (Anne Frank House)", desc: "'안네의 일기'가 쓰여진 비밀 다락방이 보존된 감동적인 역사 공간", img: "./images/europe/netherlands/amsterdam/anne_frank_house.jpg" },
                            { name: "담 광장 & 암스테르담 왕궁", desc: "운하와 트램이 교차하는 암스테르담 중심부 활기찬 광장", img: "./images/europe/netherlands/amsterdam/dam_square_amsterdam.jpg" },
                            { name: "요르단 지구 & 9 스트리트 (De 9 Straatjes)", desc: "기울어진 박공지붕 집들과 부티크 샵이 이어지는 가장 낭만적인 운하 골목", img: "./images/europe/netherlands/amsterdam/jordaan_canals_amsterdam.jpg" }
                        ],
                        restaurants: [
                            { name: "The Seafood Bar", desc: "신선한 굴·랍스터·생선튀김 플래터를 합리적으로 즐기는 암스테르담 1등 해산물 바", img: "./images/europe/netherlands/amsterdam/seafood_bar_amsterdam.jpg" },
                            { name: "Manneken Pis Fries", desc: "트러플 마요네즈·사테 소스를 듬뿍 얹어주는 담락 거리 명물 감자튀김", img: "./images/europe/netherlands/amsterdam/manneken_pis_fries_ams.jpg" },
                            { name: "Foodhallen (푸드할렌)", desc: "옛 트램 차고지를 개조해 비터발렌 등 세계 각국 요리를 즐기는 실내 푸드마켓", img: "./images/europe/netherlands/amsterdam/foodhallen_amsterdam.jpg" },
                            { name: "The Pancake Bakery", desc: "운하 옆 17세기 창고에서 즐기는 큼직한 네덜란드식 팬케이크 파넨쿠컨", img: "./images/europe/netherlands/amsterdam/pancake_bakery_amsterdam.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Winkel 43", desc: "요르단 지구 노천 테이블에서 먹는 두툼하고 바삭한 전설의 애플파이 맛집", img: "./images/europe/netherlands/amsterdam/winkel_43_amsterdam.jpg" },
                                { name: "Van Stapele Koekmakerij", desc: "따뜻한 다크 초콜릿 쿠키 안에 화이트 초콜릿이 녹아내리는 웨이팅 쿠키 성지", img: "./images/europe/netherlands/amsterdam/van_stapele_amsterdam.jpg" }
                            ],
                            study: [
                                { name: "Bocca Coffee", desc: "네덜란드 스페셜티 커피 문화를 이끄는 넓고 모던한 로스터리 카페", img: "./images/europe/netherlands/amsterdam/bocca_coffee_amsterdam.jpg" },
                                { name: "암스테르담 중앙도서관 (OBA)", desc: "루프탑 테라스에서 암스테르담 전경을 보며 공부·휴식하는 초대형 도서관", img: "./images/europe/netherlands/amsterdam/oba_library_amsterdam.jpg" }
                            ]
                        },
                        activities: [
                            { name: "암스테르담 운하 유리보트 크루즈", desc: "유네스코 세계유산 165개 운하와 1,200개 다리 아래를 지나는 낭만 크루즈", img: "./images/europe/netherlands/amsterdam/amsterdam_canal_cruise.jpg" },
                            { name: "잔세 스칸스 (Zaanse Schans) 풍차 마을 투어", desc: "초록빛 목조 가옥과 거대한 풍차가 돌아가는 근교 동화 마을 & 나막신 공방", img: "./images/europe/netherlands/amsterdam/zaanse_schans.jpg" },
                            { name: "하이네켄 익스피리언스 (Heineken Experience)", desc: "옛 양조장에서 맥주 제조 과정을 체험하고 생맥주를 시음하는 인터랙티브 투어", img: "./images/europe/netherlands/amsterdam/heineken_experience.jpg" },
                            { name: "아담 전망대 (A'DAM Lookout) 하늘 그네", desc: "암스테르담 북부 20층 옥상에서 발아래 도시를 두고 타는 스릴 만점 그네", img: "./images/europe/netherlands/amsterdam/adam_lookout_swing.jpg" }
                        ],
                        hotels: [
                            { name: "Pulitzer Amsterdam", price: "약 55만원대", desc: "25채의 17세기 운하 저택을 연결해 만든 암스테르담 최고급 감성 호텔" },
                            { name: "citizenM Amstel Amsterdam", price: "약 23만원대", desc: "트렌디한 인테리어와 스마트 제어 시스템을 갖춘 실속 부티크 호텔" },
                            { name: "ibis Amsterdam Centre", price: "약 20만원대", desc: "암스테르담 중앙역 바로 옆 이동이 가장 편리한 깔끔한 호텔" },
                            { name: "ClinkNOORD Hostel", price: "약 7만원대", desc: "중앙역 뒤 무료 페리로 3분, 깔끔하고 활기찬 대규모 디자인 호스텔" }
                        ]
                    }
                }
            },
            "룩셈부르크": {
                desc: "천연 요새 절벽과 동화 속 그룬트 계곡이 숨 쉬는 평화로운 소국",
                cities: {
                    "룩셈부르크 시티": {
                        attractions: [
                            { name: "슈맹 드 라 코르니슈 (유럽에서 가장 아름다운 발코니)", desc: "요새 성벽을 따라 걸으며 그룬트 계곡의 동화 같은 마을을 내려다보는 산책로", img: "./images/europe/luxembourg/luxembourg_city/chemin_de_la_corniche.jpg" },
                            { name: "그룬트 (Grund) 지구 & 노이뮌스터 수도원", desc: "알제트강이 굽이 흐르는 성벽 아래 고즈넉한 돌길과 다리 풍경", img: "./images/europe/luxembourg/luxembourg_city/grund_luxembourg.jpg" },
                            { name: "보크 포대 (Casemates du Bock)", desc: "절벽 바위를 뚫어 만든 23km 길이의 거대한 지하 요새 터널", img: "./images/europe/luxembourg/luxembourg_city/bock_casemates.jpg" },
                            { name: "아돌프 다리 & 헌법 광장 (황금 여인상)", desc: "거대한 석조 아치 다리와 페트뤼스 계곡이 한눈에 펼쳐지는 랜드마크", img: "./images/europe/luxembourg/luxembourg_city/adolphe_bridge.jpg" }
                        ],
                        restaurants: [
                            { name: "Brasserie Guillaume", desc: "기욤 2세 광장에서 즐기는 신선한 홍합·해산물과 룩셈부르크 화이트와인", img: "./images/europe/luxembourg/luxembourg_city/brasserie_guillaume.jpg" },
                            { name: "Am Tiirmschen", desc: "룩셈부르크 전통 요리 주드 마트 가드부넨(훈제 돼지목살)과 감자 팬케이크", img: "./images/europe/luxembourg/luxembourg_city/am_tiirmschen.jpg" },
                            { name: "Bosso", desc: "그룬트 계곡 물가 바로 앞 아늑한 정원에서 즐기는 스테이크와 크레망 와인", img: "./images/europe/luxembourg/luxembourg_city/bosso_luxembourg.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Chocolate House Nathalie Bonn", desc: "대공궁 바로 맞은편에서 핫초코 스푼과 조각 케이크를 즐기는 명물 카페", img: "./images/europe/luxembourg/luxembourg_city/chocolate_house_luxembourg.jpg" },
                                { name: "Oberweis (오베르바이스)", desc: "룩셈부르크 왕실 납품 베이커리에서 맛보는 우아한 마카롱과 바움쿠헨", img: "./images/europe/luxembourg/luxembourg_city/oberweis_luxembourg.jpg" }
                            ],
                            study: [
                                { name: "Golden Bean Coffee", desc: "구시가지 중심의 조용하고 세련된 인테리어의 스페셜티 커피 바", img: "./images/europe/luxembourg/luxembourg_city/golden_bean_luxembourg.jpg" },
                                { name: "Bloom Coffee", desc: "가르 지구에서 브런치와 노트북 작업을 즐기기 좋은 아늑한 로스터리", img: "./images/europe/luxembourg/luxembourg_city/bloom_coffee_luxembourg.jpg" }
                            ]
                        },
                        activities: [
                            { name: "전 국토 대중교통 무료 트램·버스 일주", desc: "세계 최초 전 국민·관광객 무료 대중교통으로 도심과 근교를 자유롭게 여행", img: "./images/europe/luxembourg/luxembourg_city/luxembourg_tram.jpg" },
                            { name: "비안덴 성 (Vianden Castle) 근교 당일 투어", desc: "울창한 숲속 언덕 위에 솟은 중세 유럽에서 가장 웅장한 고성 중 하나", img: "./images/europe/luxembourg/luxembourg_city/vianden_castle.jpg" },
                            { name: "파펜탈 파노라마 유리 엘리베이터 탑승", desc: "구시가지 공원에서 71m 아래 알제트강 계곡으로 수직 하강하는 전망 엘리베이터", img: "./images/europe/luxembourg/luxembourg_city/pfaffenthal_elevator.jpg" }
                        ],
                        hotels: [
                            { name: "Le Place d'Armes", price: "약 45만원대", desc: "다르메스 광장 바로 앞 부티크 5성급 럭셔리 호텔" },
                            { name: "Novotel Luxembourg Centre", price: "약 22만원대", desc: "기차역과 구시가지 사이 이동이 편리한 깔끔한 4성급 호텔" },
                            { name: "Youth Hostel Luxembourg City", price: "약 6만원대", desc: "그룬트 계곡 전망을 품은 유럽 최고 시설의 가성비 호스텔" }
                        ]
                    }
                }
            },
            "체코": {
                desc: "백 개의 첨탑과 붉은 지붕, 황금빛 야경과 생맥주의 낭만",
                cities: {
                    "프라하": {
                        attractions: [
                            { name: "카를교 (Charles Bridge)", desc: "30개의 바로크 성인 조각상이 늘어선 블타바강 위 650년 역사의 돌다리", img: "./images/europe/czechia/prague/charles_bridge.jpg" },
                            { name: "프라하 성 & 성 비투스 대성당", desc: "세계에서 가장 큰 고대 성곽 단지와 황홀한 스테인드글라스 대성당", img: "./images/europe/czechia/prague/prague_castle.jpg" },
                            { name: "구시가지 광장 & 천문시계 (Orloj)", desc: "매 정각 12사도 인형이 등장하는 600년 된 천문시계와 틴 성모 성당", img: "./images/europe/czechia/prague/old_town_square_prague.jpg" },
                            { name: "존 레논 벽 & 캄파 섬", desc: "평화와 자유의 그래피티로 채워진 벽화와 운하 옆 여유로운 산책로", img: "./images/europe/czechia/prague/john_lennon_wall.jpg" },
                            { name: "페트르진 전망대 & 레트나 공원", desc: "프라하의 붉은 지붕과 블타바강 다리들이 한눈에 내려다보이는 언덕", img: "./images/europe/czechia/prague/letna_park_prague.jpg" }
                        ],
                        restaurants: [
                            { name: "U Kroka (우 크로카)", desc: "비셰흐라드 인근 부드러운 체코 전통 족발 꼴레뇨와 스비치코바 1등 맛집", img: "./images/europe/czechia/prague/u_kroka_prague.jpg" },
                            { name: "Lokál Dlouhááá (로칼)", desc: "탱크에서 갓 뽑은 신선한 필스너 우르켈 생맥주와 체코 가정식 맛집", img: "./images/europe/czechia/prague/lokal_dlouha_prague.jpg" },
                            { name: "Pork's (폭스)", desc: "카를교 바로 앞 바삭하게 구운 꼴레뇨(돼지 무릎 요리)와 굴라쉬 명가", img: "./images/europe/czechia/prague/porks_prague.jpg" },
                            { name: "Good Food (뜨르들로 굴뚝빵)", desc: "화덕에 구운 바삭한 굴뚝빵 안에 아이스크림과 누텔라를 채운 길거리 간식", img: "./images/europe/czechia/prague/trdelnik_prague.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Café Louvre (카페 루브르)", desc: "아인슈타인과 카프카가 즐겨 찾았던 1902년 개점 프라하 대표 고전 카페", img: "./images/europe/czechia/prague/cafe_louvre_prague.jpg" },
                                { name: "Café Imperial (카페 임페리얼)", desc: "화려한 아르데코 모자이크 타일 기둥 아래 즐기는 우아한 브런치 카페", img: "./images/europe/czechia/prague/cafe_imperial_prague.jpg" }
                            ],
                            study: [
                                { name: "EMA Espresso Bar", desc: "마사리코보역 인근 프라하 스페셜티 커피 성지이자 차분한 작업 카페", img: "./images/europe/czechia/prague/ema_espresso_prague.jpg" },
                                { name: "Kavárna co hledá jméno", desc: "스미호프 옛 공장을 개조한 힙하고 넓은 공간의 브런치·카공 명소", img: "./images/europe/czechia/prague/kavarna_prague.jpg" }
                            ]
                        },
                        activities: [
                            { name: "블타바강 야경 디너 크루즈", desc: "황금빛 조명을 받은 프라하 성과 카를교 아래를 유람하는 로맨틱 밤배", img: "./images/europe/czechia/prague/vltava_river_cruise.jpg" },
                            { name: "프라하 트램 22번 시티 투어", desc: "국립극장·카를교·프라하 성을 지나는 감성 붉은 트램 타고 도시 구경", img: "./images/europe/czechia/prague/prague_tram_22.jpg" },
                            { name: "스트라호프 수도원 도서관 & 양조장 투어", desc: "세상에서 가장 아름다운 바로크 도서관과 수도사 비법 맥주 시음", img: "./images/europe/czechia/prague/strahov_monastery.jpg" },
                            { name: "블랙 라이트 시어터 & 야경 스냅 투어", desc: "화려한 무언극 관람과 새벽·야간 카를교 인생샷 남기기", img: "./images/europe/czechia/prague/dancing_house_prague.jpg" }
                        ],
                        hotels: [
                            { name: "Four Seasons Hotel Prague", price: "약 75만원대", desc: "카를교 바로 앞 블타바강과 프라하 성 정면 뷰 5성급 럭셔리 호텔" },
                            { name: "BoHo Prague Hotel", price: "약 24만원대", desc: "구시가지 광장 도보 5분, 스파와 우아한 감성의 부티크 호텔" },
                            { name: "Motel One Prague-Florentinum", price: "약 13만원대", desc: "화약탑 도보권의 깔끔하고 모던한 가성비 디자인 호텔" },
                            { name: "Sophie's Hostel", price: "약 5만원대", desc: "신시가지 조용한 거리에 위치한 세련되고 청결한 부티크 호스텔" }
                        ]
                    },
                    "체스키 크룸로프": {
                        attractions: [
                            { name: "체스키 크룸로프 성 & 망토 다리", desc: "블타바강 S자 물줄기가 감싸 안은 동화 마을과 다층 아치 다리", img: "./images/europe/czechia/cesky_krumlov/cesky_krumlov_castle.jpg" },
                            { name: "세미나리 정원 전망대", desc: "주황색 지붕들과 둥근 성탑이 완벽한 구도로 담기는 대표 포토 스팟", img: "./images/europe/czechia/cesky_krumlov/seminary_garden_view.jpg" },
                            { name: "스보르노스티 광장 & 구시가지 골목", desc: "알록달록 르네상스 벽화 건물과 공방들이 모인 아기자기한 광장", img: "./images/europe/czechia/cesky_krumlov/svornosti_square.jpg" }
                        ],
                        restaurants: [
                            { name: "Krčma v Šatlavské ulici (동굴 식당)", desc: "중세 감옥을 개조한 장작 화덕에서 구워내는 스테이크·폭립 명가", img: "./images/europe/czechia/cesky_krumlov/satlava_cesky.jpg" },
                            { name: "Papa's Living Restaurant", desc: "블타바강 물가 야외 테라스에서 즐기는 파스타와 체코 맥주 맛집", img: "./images/europe/czechia/cesky_krumlov/papas_living_cesky.jpg" },
                            { name: "Krčma Markéta", desc: "체스키 성 정원 인근 중세 촛불 분위기 속에서 즐기는 정통 바비큐", img: "./images/europe/czechia/cesky_krumlov/krcma_marketa.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Kafe u Města Vídně", desc: "라트란 거리 옛 감성 그대로 따뜻한 애플 슈트루델과 커피를 즐기는 곳", img: "./images/europe/czechia/cesky_krumlov/kafe_vidne_cesky.jpg" },
                                { name: "Restaurace & Cafe Kolektiv", desc: "블타바강 바로 앞 테라스에서 흐르는 강물을 보며 쉬어가는 카페", img: "./images/europe/czechia/cesky_krumlov/kolektiv_cesky.jpg" }
                            ],
                            study: [
                                { name: "Masná 130", desc: "스페셜티 커피와 수제 케이크가 맛있는 아늑하고 조용한 골목 로스터리", img: "./images/europe/czechia/cesky_krumlov/masna_130_cesky.jpg" },
                                { name: "Apotheka Café Bar", desc: "옛 약국 인테리어를 살린 빈티지 감성의 조용한 낮 카페", img: "./images/europe/czechia/cesky_krumlov/apotheka_cesky.jpg" }
                            ]
                        },
                        activities: [
                            { name: "블타바강 목조 뗏목·카누 래프팅", desc: "중세 마을을 360도 휘감아 흐르는 강물 위를 천천히 내려가는 유람", img: "./images/europe/czechia/cesky_krumlov/vltava_rafting_cesky.jpg" },
                            { name: "에곤 쉴레 아트 센터 관람", desc: "체스키 크룸로프를 사랑했던 천재 화가 에곤 쉴레의 작품과 흔적 탐방", img: "./images/europe/czechia/cesky_krumlov/egon_schiele_center.jpg" },
                            { name: "체스키 성 야간 성벽 & 곰 해자 산책", desc: "단체 관광객이 떠난 밤, 고요한 중세 골목과 조명 켜진 성탑 산책", img: "./images/europe/czechia/cesky_krumlov/cesky_night_walk.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel Ruze (호텔 루제)", price: "약 22만원대", desc: "16세기 예수회 수도원을 개조한 중세 귀족 분위기의 5성급 호텔" },
                            { name: "Hotel Bellevue Český Krumlov", price: "약 15만원대", desc: "라트란 지구 성 바로 아래 조용하고 클래식한 4성급 호텔" },
                            { name: "Pensionek Olsakovsky", price: "약 8만원대", desc: "블타바강이 내려다보이는 정원을 갖춘 아늑한 가성비 게스트하우스" }
                        ]
                    }
                }
            },
            "오스트리아": {
                desc: "모차르트와 클림트의 예술, 알프스 호수 마을이 빛나는 음악의 나라",
                cities: {
                    "빈 (비엔나)": {
                        attractions: [
                            { name: "쇤브룬 궁전 (Schönbrunn Palace)", desc: "합스부르크 왕가의 화려한 여름 궁전과 글로리에테 정원", img: "./images/europe/austria/vienna/schonbrunn_palace.jpg" },
                            { name: "벨베데레 궁전 (Belvedere Palace)", desc: "구스타프 클림트의 불후의 명작 '키스'를 만나는 바로크 궁전 미술관", img: "./images/europe/austria/vienna/belvedere_palace.jpg" },
                            { name: "성 슈테판 대성당", desc: "모자이크 지붕과 136m 첨탑이 솟은 비엔나의 심장 고딕 대성당", img: "./images/europe/austria/vienna/st_stephens_cathedral_vienna.jpg" },
                            { name: "빈 국립 오페라극장", desc: "세계 3대 오페라 하우스, 화려한 황금 객석과 매일 밤 울리는 오페라", img: "./images/europe/austria/vienna/vienna_state_opera.jpg" },
                            { name: "호프부르크 왕궁 & 프라터 대관람차", desc: "합스부르크 황실의 겨울 궁전과 영화 비포 선라이즈의 낭만 관람차", img: "./images/europe/austria/vienna/hofburg_palace_vienna.jpg" }
                        ],
                        restaurants: [
                            { name: "Figlmüller (피글뮐러 본점)", desc: "접시보다 큰 바삭한 비엔나 정통 슈니첼(돼지고기·송아지 커틀릿) 원조", img: "./images/europe/austria/vienna/figlmuller_vienna.jpg" },
                            { name: "Ribs of Vienna (립스 오브 비엔나)", desc: "지하 아치형 벽돌 홀에서 즐기는 1m 길이의 푸짐한 매운·달콤 폭립", img: "./images/europe/austria/vienna/ribs_of_vienna.jpg" },
                            { name: "Plachutta Wollzeile (플라후타)", desc: "황제 프란츠 요제프가 사랑한 깊은 육수의 소고기 수육 타펠슈피츠 명가", img: "./images/europe/austria/vienna/plachutta_vienna.jpg" },
                            { name: "Bitzinger Würstelstand", desc: "알베르티나 미술관 앞 오페라 감상 전후로 먹는 치즈 소시지 핫도그", img: "./images/europe/austria/vienna/bitzinger_vienna.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Café Central (카페 센트럴)", desc: "아치형 돔 천장과 피아노 연주 속에서 즐기는 아인슈페너와 카이저슈마렌", img: "./images/europe/austria/vienna/cafe_central_vienna.jpg" },
                                { name: "Café Sacher Wien (카페 자허)", desc: "살구잼과 다크 초콜릿이 어우러진 원조 자허토르테(Sacher-Torte) 성지", img: "./images/europe/austria/vienna/cafe_sacher_vienna.jpg" }
                            ],
                            study: [
                                { name: "Kaffeefabrik (카페파브리크)", desc: "칼스플라츠 인근 로컬들이 찾는 진하고 깔끔한 비엔나 스페셜티 카페", img: "./images/europe/austria/vienna/kaffeefabrik_vienna.jpg" },
                                { name: "Café Phil (카페 필)", desc: "서점과 카페가 결합된 빈티지 소파 가득한 나슈마르크트 옆 독서 카페", img: "./images/europe/austria/vienna/cafe_phil_vienna.jpg" }
                            ]
                        },
                        activities: [
                            { name: "빈 국립 오페라 스탠딩·정식 공연 관람", desc: "저렴한 입석 티켓 또는 드레스업하고 즐기는 클래식 오페라와 발레", img: "./images/europe/austria/vienna/vienna_opera_concert.jpg" },
                            { name: "오스트리아 국립도서관 (프룽크잘)", desc: "화려한 천장 프레스코화와 호두나무 서가가 압도적인 세계 최고(最美) 도서관", img: "./images/europe/austria/vienna/austrian_national_library.jpg" },
                            { name: "나슈마르크트 (Naschmarkt) 토요 벼룩시장 탐방", desc: "빈 최대 야외 먹거리 시장과 주말 골동품 시장 구경", img: "./images/europe/austria/vienna/naschmarkt_vienna.jpg" },
                            { name: "훈데르트바서 하우스 (Hundertwasserhaus)", desc: "직선 없이 곡선과 원색 타일로 지어진 동화 같은 친환경 예술 아파트", img: "./images/europe/austria/vienna/hundertwasserhaus_vienna.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel Sacher Wien", price: "약 80만원대", desc: "오페라극장 바로 맞은편, 150년 역사의 빈 최고급 럭셔리 호텔" },
                            { name: "Motel One Wien-Staatsoper", price: "약 17만원대", desc: "오페라극장 도보 2분 거리, 최고의 위치와 가성비 디자인 호텔" },
                            { name: "Ruby Marie Hotel Vienna", price: "약 18만원대", desc: "마리아힐퍼 쇼핑거리 루프탑 테라스를 갖춘 감각적인 부티크 호텔" },
                            { name: "Wombat's City Hostel Vienna Naschmarkt", price: "약 6만원대", desc: "나슈마르크트 바로 앞 깔끔하고 넓은 라운지의 인기 호스텔" }
                        ]
                    },
                    "잘츠부르크·할슈타트": {
                        attractions: [
                            { name: "할슈타트 전망대 (Hallstatt Viewpoint)", desc: "에메랄드빛 호수와 알프스 절벽에 매달린 동화 속 소금 마을 파노라마", img: "./images/europe/austria/salzburg/hallstatt_viewpoint.jpg" },
                            { name: "호엔잘츠부르크 성채 (Hohensalzburg)", desc: "케이블카로 오르는 중부 유럽 최대의 11세기 중세 성채와 시내 전망", img: "./images/europe/austria/salzburg/hohensalzburg_fortress.jpg" },
                            { name: "미라벨 궁전 & 정원 (Mirabell Gardens)", desc: "영화 사운드 오브 뮤직에서 도레미송을 불렀던 바로크 꽃 정원", img: "./images/europe/austria/salzburg/mirabell_palace_salzburg.jpg" },
                            { name: "모차르트 생가 & 게트라이데 거리", desc: "아름다운 철제 간판들이 줄지어 선 모차르트의 고향 쇼핑 거리", img: "./images/europe/austria/salzburg/getreidegasse_salzburg.jpg" }
                        ],
                        restaurants: [
                            { name: "Stiftskulinarium St. Peter", desc: "서기 803년 기록이 남은 유럽에서 가장 오래된 수도원 레스토랑", img: "./images/europe/austria/salzburg/st_peter_salzburg.jpg" },
                            { name: "Seehotel Grüner Baum (할슈타트)", desc: "할슈타트 호숫가 테라스에서 즐기는 신선한 송어 구이 요리", img: "./images/europe/austria/salzburg/hallstatt_trout_restaurant.jpg" },
                            { name: "Balkan Grill Walter (보스나 핫도그)", desc: "게트라이데 거리 좁은 골목에서 줄 서서 먹는 매콤한 커리 소시지 빵", img: "./images/europe/austria/salzburg/balkan_grill_salzburg.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Café Tomaselli (카페 토마젤리)", desc: "모차르트가 단골이었던 300년 전통의 클래식 비엔나식 케이크 카페", img: "./images/europe/austria/salzburg/cafe_tomaselli_salzburg.jpg" },
                                { name: "Café Fürst (원조 모차르트 쿠겔)", desc: "은색·파란색 포장지의 수제 원조 피스타치오 마지판 초콜릿 본점", img: "./images/europe/austria/salzburg/cafe_furst_salzburg.jpg" }
                            ],
                            study: [
                                { name: "220 Grad (220 그라드)", desc: "잘츠부르크 로스터리 문화를 대표하는 향긋한 라떼와 조용한 공간", img: "./images/europe/austria/salzburg/220_grad_salzburg.jpg" },
                                { name: "Kaffee-Alchemie", desc: "잘자흐강변 인근 정성스러운 핸드드립 커피를 내리는 아담한 로스터리", img: "./images/europe/austria/salzburg/kaffee_alchemie_salzburg.jpg" }
                            ]
                        },
                        activities: [
                            { name: "할슈타트 스카이워크 & 소금광산 (Salzwelten)", desc: "세계 최초의 소금광산 미끄럼틀 체험과 해발 350m 공중 전망대", img: "./images/europe/austria/salzburg/hallstatt_skywalk.jpg" },
                            { name: "운터스베르크 케이블카 & 묀히스베르크 엘리베이터", desc: "잘츠부르크 알프스 설산 정상과 구시가지 파노라마 조망", img: "./images/europe/austria/salzburg/untersberg_cable_car.jpg" },
                            { name: "볼프강 호수 & 샤프베르크 산악열차", desc: "사운드 오브 뮤직 오프닝 장면에 나온 에메랄드빛 호수와 증기기관차", img: "./images/europe/austria/salzburg/wolfgangsee_schafberg.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel Sacher Salzburg", price: "약 55만원대", desc: "잘자흐강변에서 호엔잘츠부르크 성채를 마주 보는 5성급 명문 호텔" },
                            { name: "Heritage Hotel Hallstatt", price: "약 38만원대", desc: "할슈타트 호숫가 400년 역사의 전통 가옥을 개조한 꿈의 뷰 호텔" },
                            { name: "arte Hotel Salzburg", price: "약 17만원대", desc: "잘츠부르크 중앙역 도보 2분, 모던하고 깔끔한 고층 뷰 가성비 호텔" }
                        ]
                    }
                }
            },
            "슬로베니아": {
                desc: "알프스의 푸른 눈동자 블레드 호수와 동화 속 용의 도시",
                cities: {
                    "류블랴나·블레드": {
                        attractions: [
                            { name: "블레드 호수 & 블레드 성 (Lake Bled)", desc: "에메랄드빛 호수 한가운데 작은 성당 섬과 절벽 위 고성이 어우러진 절경", img: "./images/europe/slovenia/bled/lake_bled_island.jpg" },
                            { name: "오이스트리차 전망대 (Ojstrica)", desc: "블레드 호수와 줄리안 알프스가 한눈에 담기는 최고의 하이킹 뷰 포인트", img: "./images/europe/slovenia/bled/ojstrica_viewpoint_bled.jpg" },
                            { name: "류블랴나 용의 다리 & 삼중교", desc: "청동 용 동상이 지키는 류블랴나 강변 아르누보 다리와 파스텔 광장", img: "./images/europe/slovenia/bled/dragon_bridge_ljubljana.jpg" },
                            { name: "류블랴나 성 (Ljubljana Castle)", desc: "푸니쿨라를 타고 올라 붉은 지붕의 수도 전경을 감상하는 중세 성", img: "./images/europe/slovenia/bled/ljubljana_castle.jpg" },
                            { name: "빈트가르 협곡 (Vintgar Gorge)", desc: "투명한 옥색 급류 위로 나무 데크를 따라 걷는 신비로운 알프스 협곡", img: "./images/europe/slovenia/bled/vintgar_gorge.jpg" }
                        ],
                        restaurants: [
                            { name: "Julija Restaurant (율리야)", desc: "류블랴나 구시가지에서 트러플 파스타와 슬로베니아 와인을 즐기는 인기 식당", img: "./images/europe/slovenia/bled/julija_ljubljana.jpg" },
                            { name: "Klobasarna (클로바사르나)", desc: "류블랴나 대성당 앞 100년 전통 크란스카 소시지(Kranjska klobasa) 맛집", img: "./images/europe/slovenia/bled/klobasarna_ljubljana.jpg" },
                            { name: "Restavracija Sova Bled", desc: "블레드 호수를 바라보며 즐기는 슬로베니아 모던 송어·오리 요리 맛집", img: "./images/europe/slovenia/bled/sova_bled.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Kavarna Park (블레드 크림케이크 원조)", desc: "호숫가 테라스에서 바삭한 페이스트리와 부드러운 커스터드 크렘슈니타 맛보기", img: "./images/europe/slovenia/bled/bled_cream_cake_park.jpg" },
                                { name: "Nebotičnik Skyscraper Cafe", desc: "류블랴나 마천루 꼭대기 360도 테라스에서 성과 알프스를 보며 커피 한 잔", img: "./images/europe/slovenia/bled/neboticnik_ljubljana.jpg" }
                            ],
                            study: [
                                { name: "Stow Coffee Roasters", desc: "류블랴나 시립박물관 안쪽에 숨어있는 슬로베니아 최고의 스페셜티 로스터리", img: "./images/europe/slovenia/bled/stow_coffee_ljubljana.jpg" },
                                { name: "Črno Zrno", desc: "류블랴나 강변 좁은 골목의 콜롬비아 스페셜티 원두 전문 미니멀 카페", img: "./images/europe/slovenia/bled/crno_zrno_ljubljana.jpg" }
                            ]
                        },
                        activities: [
                            { name: "블레드 전통 나룻배 플레트나 (Pletna Boat)", desc: "뱃사공이 노를 저어 블레드 섬까지 건너가 99계단 소원의 종 울리기", img: "./images/europe/slovenia/bled/pletna_boat_bled.jpg" },
                            { name: "포스토이나 동굴 & 프레드야마 성 투어", desc: "동굴 열차를 타고 들어가는 거대 종유석 동굴과 절벽 속 동굴 성", img: "./images/europe/slovenia/bled/postojna_cave_slovenia.jpg" },
                            { name: "보히니 호수 (Lake Bohinj) & 보겔 케이블카", desc: "블레드보다 한적하고 순수한 트리글라브 국립공원의 거대 빙하 호수", img: "./images/europe/slovenia/bled/lake_bohinj_slovenia.jpg" }
                        ],
                        hotels: [
                            { name: "Grand Hotel Toplice", price: "약 35만원대", desc: "블레드 호수와 섬이 발코니 정면으로 보이는 유서 깊은 5성급 호숫가 호텔" },
                            { name: "InterContinental Ljubljana", price: "약 28만원대", desc: "류블랴나 최고층 루프탑 레스토랑과 스파를 갖춘 럭셔리 호텔" },
                            { name: "Bled Rose Hotel", price: "약 22만원대", desc: "블레드 호수 바로 앞 모던하고 화사한 디자인의 4성급 리조트 호텔" },
                            { name: "Hostel Celica", price: "약 7만원대", desc: "옛 군 감옥을 예술가들이 개조해 세계에서 가장 힙한 호스텔로 선정된 곳" }
                        ]
                    }
                }
            },
            "크로아티아": {
                desc: "아드리아해의 진주 두브로브니크와 에메랄드빛 폭포의 나라",
                cities: {
                    "두브로브니크": {
                        attractions: [
                            { name: "두브로브니크 성벽 투어 (City Walls)", desc: "주황색 지붕과 코발트빛 아드리아해가 맞닿은 세계 최고(最美) 성곽 산책로", img: "./images/europe/croatia/dubrovnik/dubrovnik_city_walls.jpg" },
                            { name: "스르지산 전망대 (Mount Srđ)", desc: "케이블카를 타고 올라 구시가지와 엘라피티 섬 노을을 감상하는 절경", img: "./images/europe/croatia/dubrovnik/mount_srd_dubrovnik.jpg" },
                            { name: "스트라둔 대로 (Stradun) & 오노프리오 분수", desc: "대리석 바닥이 거울처럼 반짝이는 두브로브니크 구시가지 중심 거리", img: "./images/europe/croatia/dubrovnik/stradun_dubrovnik.jpg" },
                            { name: "로브리예나츠 요새 (Fort Lovrijenac)", desc: "왕좌의 게임 킹스랜딩 촬영지이자 성벽 전체를 조망하는 절벽 요새", img: "./images/europe/croatia/dubrovnik/fort_lovrijenac.jpg" }
                        ],
                        restaurants: [
                            { name: "Nautika Restaurant (나우티카)", desc: "절벽 요새와 바다 야경을 마주하며 즐기는 크로아티아 최고급 랍스터 다이닝", img: "./images/europe/croatia/dubrovnik/nautika_dubrovnik.jpg" },
                            { name: "Taj Mahal Dubrovnik", desc: "해산물 대신 육즙 가득한 보스니아식 체바피와 구운 고기로 유명한 로컬 맛집", img: "./images/europe/croatia/dubrovnik/taj_mahal_dubrovnik.jpg" },
                            { name: "Proto Fish Restaurant", desc: "1886년부터 이어져 온 두브로브니크 대표 오징어 먹물 리조또 & 굴 요리", img: "./images/europe/croatia/dubrovnik/proto_dubrovnik.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Buža Bar (부자 바)", desc: "성벽 구멍을 빠져나가면 나타나는 아드리아해 절벽 바위 위 선셋 카페 바", img: "./images/europe/croatia/dubrovnik/buza_bar_dubrovnik.jpg" },
                                { name: "Gradska Kavana Arsenal", desc: "구항구와 루자 광장이 한눈에 내려다보이는 클래식한 야외 테라스 카페", img: "./images/europe/croatia/dubrovnik/gradska_kavana_dubrovnik.jpg" }
                            ],
                            study: [
                                { name: "Cogito Coffee Dubrovnik", desc: "구시가지 돌계단 골목 속 조용하고 향긋한 스페셜티 커피 바", img: "./images/europe/croatia/dubrovnik/cogito_coffee_dubrovnik.jpg" },
                                { name: "Dubravka 1836", desc: "필레 게이트 바로 앞 요새와 바다를 바라보며 여유롭게 브런치하는 공간", img: "./images/europe/croatia/dubrovnik/dubravka_1836.jpg" }
                            ]
                        },
                        activities: [
                            { name: "성벽 아래 아드리아해 씨 카약 & 로크룸 섬 투어", desc: "성벽 외곽 바다를 노 저어 돌며 해식동굴 스노클링을 즐기는 액티비티", img: "./images/europe/croatia/dubrovnik/dubrovnik_sea_kayaking.jpg" },
                            { name: "바예 비치 (Banje Beach) 해수욕", desc: "구시가지 성벽이 바로 보이는 투명한 자갈 해변에서의 선베드 휴식", img: "./images/europe/croatia/dubrovnik/banje_beach_dubrovnik.jpg" },
                            { name: "근교 코토르 (몬테네그로) 피오르드 일일 투어", desc: "국경을 넘어 만나는 아드리아해 최남단 협만과 중세 성벽 도시", img: "./images/europe/croatia/dubrovnik/kotor_bay_tour.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel Excelsior Dubrovnik", price: "약 55만원대", desc: "구시가지와 로크룸 섬이 한눈에 보이는 100년 전통의 5성급 럭셔리 호텔" },
                            { name: "Rixos Premium Dubrovnik", price: "약 35만원대", desc: "아드리아해 절벽 위 인피니티 풀과 대형 스파를 갖춘 휴양 리조트" },
                            { name: "Hotel Lero", price: "약 18만원대", desc: "미라마레 만 해변 인근 깔끔한 야외 수영장을 갖춘 가성비 4성급 호텔" }
                        ]
                    },
                    "스플리트·자그레브": {
                        attractions: [
                            { name: "플리트비체 호수 국립공원 (Plitvice Lakes)", desc: "16개의 에메랄드빛 호수와 수백 개 폭포가 이어지는 유네스코 천국", img: "./images/europe/croatia/split/plitvice_lakes.jpg" },
                            { name: "스플리트 디오클레티아누스 궁전 & 리바 거리", desc: "로마 황제의 은퇴 궁전 유적 속에 현재도 사람들이 살아 숨 쉬는 활기찬 도시", img: "./images/europe/croatia/split/diocletians_palace_split.jpg" },
                            { name: "자그레브 성 마르코 성당 & 반 옐라치치 광장", desc: "레고 블록처럼 화려한 모자이크 지붕의 성당과 낭만적인 트램 도시", img: "./images/europe/croatia/split/st_marks_church_zagreb.jpg" },
                            { name: "마리안 언덕 전망대 (Marjan Hill)", desc: "스플리트 항구와 디오클레티아누스 종탑이 한눈에 펼쳐지는 소나무 언덕", img: "./images/europe/croatia/split/marjan_hill_split.jpg" }
                        ],
                        restaurants: [
                            { name: "Bokeria Kitchen & Wine Bar (스플리트)", desc: "구시가지 중심에서 즐기는 지중해식 트러플 파스타와 스테이크 맛집", img: "./images/europe/croatia/split/bokeria_split.jpg" },
                            { name: "Fife (피페 스플리트)", desc: "항구 바로 앞 큼직한 해산물 모둠과 전통 달마티안 스튜 파슈티차다 가성비 맛집", img: "./images/europe/croatia/split/fife_split.jpg" },
                            { name: "La Štruk (라 슈트루크 자그레브)", desc: "치즈·트러플을 넣어 오븐에 구워낸 크로아티아 전통 요리 슈트루클리 전문점", img: "./images/europe/croatia/split/la_struk_zagreb.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "D16 Specialty Coffee (스플리트)", desc: "로마 궁전 돌담 골목 안에서 가장 맛있는 플랫화이트를 내리는 로스터리", img: "./images/europe/croatia/split/d16_coffee_split.jpg" },
                                { name: "Tkalčićeva 거리 노천 카페 (자그레브)", desc: "트칼치체바 보행자 거리를 가득 메운 활기찬 유럽풍 야외 테라스 카페", img: "./images/europe/croatia/split/tkalciceva_zagreb.jpg" }
                            ],
                            study: [
                                { name: "Quahwa Coffee Roasters (자그레브)", desc: "정원 테라스와 아늑한 실내에서 스페셜티 원두를 즐기는 로스터리", img: "./images/europe/croatia/split/quahwa_zagreb.jpg" },
                                { name: "4coffee Soul Food (스플리트)", desc: "리바 산책로 인근 차분하게 커피와 디저트로 쉬어가기 좋은 로컬 카페", img: "./images/europe/croatia/split/4coffee_split.jpg" }
                            ]
                        },
                        activities: [
                            { name: "흐바르 섬 & 블루 케이브 (청의 동굴) 스피드보트 투어", desc: "태양빛이 바닷속으로 굴절되어 푸르게 빛나는 비셰보 동굴 호핑투어", img: "./images/europe/croatia/split/blue_cave_hvar_split.jpg" },
                            { name: "자그레브 실연 박물관 & 돌라츠 시장 탐방", desc: "전 세계 이별의 사연이 모인 이색 박물관과 붉은 파라솔의 아침 재래시장", img: "./images/europe/croatia/split/dolac_market_zagreb.jpg" },
                            { name: "라스트케 (Rastoke) 물레방아 마을 & 크르카 폭포", desc: "집 아래로 폭포수가 흐르는 요정 마을과 시원한 계곡 산책", img: "./images/europe/croatia/split/rastoke_croatia.jpg" }
                        ],
                        hotels: [
                            { name: "Cornaro Hotel Split", price: "약 26만원대", desc: "디오클레티아누스 궁전 바로 앞 루프탑 자쿠지와 바를 갖춘 5성급 호텔" },
                            { name: "Esplanade Zagreb Hotel", price: "약 28만원대", desc: "오리엔트 특급열차 승객들을 위해 지어진 1925년 아르데코 럭셔리 호텔" },
                            { name: "Canopy by Hilton Zagreb", price: "약 17만원대", desc: "자그레브 중앙역 인근 트렌디하고 넓은 객실의 힐튼 라이프스타일 호텔" }
                        ]
                    }
                }
            },
            "이집트": {
                desc: "파라오의 신비와 사막의 매력",
                cities: {
                    "카이로": {
                        attractions: [
                            { name: "기자 피라미드 단지 (Giza Pyramids)", desc: "4,500년 역사를 간직한 고대 세계 7대 불가사의의 유일한 현존 유적", img: "./images/africa/egypt/cairo/pyramids.jpg" },
                            { name: "기자 대스핑크스 (Great Sphinx)", desc: "사자의 몸과 파라오의 얼굴로 피라미드를 수호하는 거대 석상", img: "./images/africa/egypt/cairo/sphinx.jpg" },
                            { name: "이집트 박물관 (Egyptian Museum)", desc: "황금 유물과 고대 미라 등 파라오 문명의 보물이 모인 박물관", img: "./images/africa/egypt/cairo/museum.jpg" },
                            { name: "살라딘 시타델 & 무함마드 알리 모스크", desc: "카이로 시내가 한눈에 내려다보이는 중세 요새와 은빛 돔 사원", img: "./images/africa/egypt/cairo/citadel_of_saladin.jpg" },
                            { name: "이집트 대박물관 (Grand Egyptian Museum)", desc: "피라미드 인근에 개관한 세계 최대 규모의 최첨단 고고학 박물관", img: "./images/africa/egypt/cairo/grand_egyptian_museum.jpg" }
                        ],
                        restaurants: [
                            { name: "Koshary Abou Tarek (아부 타렉)", desc: "렌틸콩·파스타·병아리콩에 매콤한 토마토소스를 비벼 먹는 국민 음식 코샤리", img: "./images/africa/egypt/cairo/abou_tarek.jpg" },
                            { name: "Felfela (펠펠라)", desc: "아라비안 인테리어 속에서 즐기는 정통 팔라펠과 케밥 요리", img: "./images/africa/egypt/cairo/felfela.jpg" },
                            { name: "Khufu's Restaurant", desc: "기자 피라미드를 정면으로 바라보며 즐기는 모던 이집션 파인다이닝", img: "./images/africa/egypt/cairo/khufus_cairo.jpg" },
                            { name: "Naguib Mahfouz Cafe & Restaurant", desc: "노벨문학상 수상 작가의 이름을 딴 칸 엘 칼릴리 전통 레스토랑", img: "./images/africa/egypt/cairo/naguib_mahfouz_cafe.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "El Fishawy (엘 피샤위)", desc: "200년 넘게 불이 꺼지지 않은 칸 엘 칼릴리 시장의 전설적인 민트티 카페", img: "./images/africa/egypt/cairo/el_fishawy.jpg" },
                                { name: "9 Pyramids Lounge", desc: "사막 언덕 위 베두인 텐트에서 9개의 피라미드를 조망하는 뷰 카페", img: "./images/africa/egypt/cairo/9_pyramids_lounge.jpg" }
                            ],
                            study: [
                                { name: "Espresso Lab Zamalek", desc: "나일강 섬 자말렉 지구의 세련되고 쾌적한 스페셜티 커피 & 작업 공간", img: "./images/africa/egypt/cairo/espresso_lab.jpg" },
                                { name: "Holm Cafe Zamalek", desc: "조용한 분위기에서 브런치와 노트북 작업을 즐기기 좋은 모던 카페", img: "./images/africa/egypt/cairo/holm_cafe_cairo.jpg" }
                            ]
                        },
                        activities: [
                            { name: "나일강 전통 범선 펠루카 (Felucca) 선셋", desc: "바람의 힘으로만 미끄러지듯 나일강 위를 유영하는 황혼 유람", img: "./images/africa/egypt/cairo/nile_felucca_ride.jpg" },
                            { name: "칸 엘 칼릴리 (Khan el-Khalili) 야시장 쇼핑", desc: "아라비안 램프와 향신료가 반짝이는 중동 최대 규모의 전통 시장", img: "./images/africa/egypt/cairo/khan_el_khalili.jpg" },
                            { name: "기자 피라미드 사막 낙타 트레킹", desc: "황금빛 사막 능선을 따라 피라미드 파노라마 포인트로 이동하는 체험", img: "./images/africa/egypt/cairo/pyramids_camel_ride.jpg" },
                            { name: "피라미드 사운드 & 라이트 나이트 쇼", desc: "밤하늘 아래 스핑크스와 피라미드 외벽에 펼쳐지는 역사 조명 쇼", img: "./images/africa/egypt/cairo/pyramids_sound_and_light.jpg" }
                        ],
                        hotels: [
                            { name: "Marriott Mena House Cairo", price: "약 45만원대", desc: "객실과 조식당에서 대피라미드가 바로 보이는 유서 깊은 5성급 호텔" },
                            { name: "Steigenberger Hotel El Tahrir", price: "약 16만원대", desc: "이집트 박물관 도보 2분, 타흐리르 광장 최고의 가성비 비즈니스 호텔" },
                            { name: "Kempinski Nile Hotel Cairo", price: "약 28만원", desc: "나일강 전경 루프탑 수영장을 갖춘 우아한 부티크 호텔" },
                            { name: "Guardian Guest House", price: "약 7만원대", desc: "스핑크스 정문 바로 앞 루프탑 테라스 뷰로 유명한 실속 숙소" }
                        ]
                    },
                    "룩소르·후르가다": {
                        attractions: [
                            { name: "카르나크 신전 (Karnak Temple)", desc: "134개의 거대한 열주실 기둥이 압도하는 고대 테베 최대의 신전 복합체", img: "./images/africa/egypt/luxor/karnak_temple.jpg" },
                            { name: "왕들의 계곡 (Valley of the Kings)", desc: "투탕카멘과 람세스 왕들의 화려한 지하 벽화 무덤이 잠든 신비의 계곡", img: "./images/africa/egypt/luxor/valley_of_the_kings.jpg" },
                            { name: "하트셉수트 장제전 & 룩소르 신전", desc: "절벽 아래 대칭미를 자랑하는 여왕의 신전과 밤에 황금빛으로 빛나는 룩소르 신전", img: "./images/africa/egypt/luxor/hatshepsut_temple.jpg" },
                            { name: "후르가다 홍해 & 기프툰 섬 (오렌지 베이)", desc: "사막 끝에서 만나는 몰디브 같은 에메랄드빛 홍해 산호초 해변", img: "./images/africa/egypt/luxor/orange_bay_hurghada.jpg" }
                        ],
                        restaurants: [
                            { name: "Sofra Restaurant & Café (소프라)", desc: "1930년대 룩소르 전통 가옥에서 맛보는 비둘기 요리와 타진 스튜", img: "./images/africa/egypt/luxor/sofra_luxor.jpg" },
                            { name: "Al-Sahaby Lane Restaurant", desc: "룩소르 신전과 나일강이 내려다보이는 루프탑에서 즐기는 케밥과 화덕 빵", img: "./images/africa/egypt/luxor/al_sahaby_lane_luxor.jpg" },
                            { name: "Starfish Seafood Restaurant (후르가다)", desc: "홍해에서 갓 잡은 랍스터와 해산물 수프를 합리적으로 즐기는 맛집", img: "./images/africa/egypt/luxor/starfish_hurghada.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "1886 Terrace (소피텔 윈터 팰리스)", desc: "아가사 크리스티가 '나일강의 죽음'을 집필한 왕실 정원 테라스 티타임", img: "./images/africa/egypt/luxor/winter_palace_luxor.jpg" },
                                { name: "Hurghada Marina Sunset Cafe", desc: "호화 요트가 정박한 홍해 마리나 항구에서 즐기는 선셋 민트티", img: "./images/africa/egypt/luxor/hurghada_marina_cafe.jpg" }
                            ],
                            study: [
                                { name: "Aboudi Coffee Break", desc: "룩소르 신전 바로 맞은편 에어컨이 시원한 2층 통창 커피 & 휴식 공간", img: "./images/africa/egypt/luxor/aboudi_coffee_luxor.jpg" },
                                { name: "Costa Coffee Hurghada Marina", desc: "홍해 바닷바람과 함께 쾌적하게 노트북 작업하기 좋은 마리나 카페", img: "./images/africa/egypt/luxor/costa_hurghada.jpg" }
                            ]
                        },
                        activities: [
                            { name: "룩소르 동안·서안 일출 열기구 투어", desc: "떠오르는 태양 아래 왕들의 계곡과 나일강 초록 평원을 내려다보는 열기구 비행", img: "./images/africa/egypt/luxor/luxor_hot_air_balloon.jpg" },
                            { name: "홍해 스쿠버 다이빙 & 돌고래 호핑투어", desc: "세계 3대 다이빙 포인트 홍해의 산호초와 야생 돌고래 스노클링", img: "./images/africa/egypt/luxor/red_sea_diving_hurghada.jpg" },
                            { name: "나일강 5성급 럭셔리 크루즈 (룩소르~아스완)", desc: "선상 수영장에서 에드푸·콤옴보 신전을 따라 항해하는 파라오 크루즈", img: "./images/africa/egypt/luxor/nile_cruise_luxor.jpg" }
                        ],
                        hotels: [
                            { name: "Sofitel Winter Palace Luxor", price: "약 40만원대", desc: "열대 왕실 정원과 나일강 노을을 품은 130년 역사의 전설적 궁전 호텔" },
                            { name: "Hilton Luxor Resort & Spa", price: "약 28만원대", desc: "나일강과 맞닿은 두 개의 인피니티 풀이 환상적인 5성급 리조트" },
                            { name: "Steigenberger ALDAU Beach Hotel (후르가다)", price: "약 32만원대", desc: "홍해 프라이빗 비치와 유수풀을 갖춘 올인클루시브 휴양 리조트" }
                        ]
                    }
                }
            },
            "남아공": {
                desc: "대서양과 인도양이 만나는 대자연, 테이블 마운틴과 펭귄의 땅",
                cities: {
                    "케이프타운": {
                        attractions: [
                            { name: "테이블 마운틴 (Table Mountain)", desc: "360도 회전 케이블카로 오르는 칼로 자른 듯 평평한 세계 7대 자연경관", img: "./images/africa/south_africa/cape_town/table_mountain.jpg" },
                            { name: "볼더스 비치 (Boulders Beach)", desc: "화강암 바위 해변을 뒤뚱거리며 걷는 야생 아프리카 펭귄 군락지", img: "./images/africa/south_africa/cape_town/boulders_beach_penguins.jpg" },
                            { name: "희망봉 & 케이프 포인트 (Cape of Good Hope)", desc: "아프리카 대륙 최남서단 절벽 끝에서 대서양의 거센 파도를 마주하는 곳", img: "./images/africa/south_africa/cape_town/cape_of_good_hope.jpg" },
                            { name: "보캅 (Bo-Kaap) 컬러풀 빌리지", desc: "에메랄드·핑크·노란색 파스텔톤 집들이 줄지어 선 케이프 말레이 지구", img: "./images/africa/south_africa/cape_town/bo_kaap_cape_town.jpg" },
                            { name: "V&A 워터프론트 (Victoria & Alfred)", desc: "테이블 마운틴을 배경으로 쇼핑몰· 관람차·레스토랑이 모인 활기찬 항구", img: "./images/africa/south_africa/cape_town/va_waterfront_cape_town.jpg" }
                        ],
                        restaurants: [
                            { name: "Gold Restaurant (골드 레스토랑)", desc: "젬베 드럼 연주와 전통 춤 공연 속에서 즐기는 14코스 아프리카 미식 만찬", img: "./images/africa/south_africa/cape_town/gold_restaurant_ct.jpg" },
                            { name: "The Codfather Seafood & Sushi", desc: "캠프스 베이 해변 인근 메뉴판 없이 당일 잡은 신선한 해산물과 스시를 고르는 맛집", img: "./images/africa/south_africa/cape_town/the_codfather_ct.jpg" },
                            { name: "Kloof Street House", desc: "빅토리아 시대 대저택 정원에서 즐기는 타조 스테이크와 남아공 와인", img: "./images/africa/south_africa/cape_town/kloof_street_house.jpg" },
                            { name: "The Pot Luck Club", desc: "올드 비스킷 밀 사일로 꼭대기에서 케이프타운 파노라마와 즐기는 타파스 다이닝", img: "./images/africa/south_africa/cape_town/pot_luck_club_ct.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Truth Coffee Roasting (트루스 커피)", desc: "영국 텔레그래프 선정 '세계 최고의 커피숍', 스팀펑크 인테리어 로스터리", img: "./images/africa/south_africa/cape_town/truth_coffee_ct.jpg" },
                                { name: "The Bungalow Clifton", desc: "클리프턴 해변 파도와 12사도 봉우리를 보며 샴페인과 커피를 즐기는 오션뷰 라운지", img: "./images/africa/south_africa/cape_town/the_bungalow_clifton.jpg" }
                            ],
                            study: [
                                { name: "Origin Coffee Roasting", desc: "드 워터칸트 지구의 남아공 스페셜티 커피 문화를 개척한 넓고 차분한 로스터리", img: "./images/africa/south_africa/cape_town/origin_coffee_ct.jpg" },
                                { name: "Bootlegger Coffee Company Sea Point", desc: "시 포인트 해변 산책로 인근 노트북 작업과 브런치에 최적화된 인기 카페", img: "./images/africa/south_africa/cape_town/bootlegger_coffee_ct.jpg" }
                            ]
                        },
                        activities: [
                            { name: "채프먼스 피크 드라이브 & 라이온스 헤드 선셋", desc: "세계에서 가장 아름다운 해안 절벽 도로 드라이브와 황혼 하이킹", img: "./images/africa/south_africa/cape_town/chapmans_peak_drive.jpg" },
                            { name: "스텔렌보스 & 프란슈후크 와인 트램 투어", desc: "유럽풍 포도밭 사이를 달리는 트램을 타고 남아공 와이너리 시음하기", img: "./images/africa/south_africa/cape_town/franschhoek_wine_tram.jpg" },
                            { name: "커스텐보쉬 국립식물원 트리 캐노피 워크", desc: "테이블 마운틴 동쪽 기슭 공중 다리(붐슬랑)를 걷는 희귀 식물원 산책", img: "./images/africa/south_africa/cape_town/kirstenbosch_gardens.jpg" },
                            { name: "아퀼라 프라이빗 게임 리저브 빅5 사파리", desc: "사자·코끼리·코뿔소·기린을 오픈 사파리 차량으로 만나는 야생 투어", img: "./images/africa/south_africa/cape_town/aquila_safari_ct.jpg" }
                        ],
                        hotels: [
                            { name: "The Silo Hotel (더 사일로 호텔)", price: "약 150만원대", desc: "볼록한 다면체 유리창 너머로 테이블 마운틴이 펼쳐지는 세계적 건축 호텔" },
                            { name: "One&Only Cape Town", price: "약 110만원대", desc: "V&A 워터프론트 프라이빗 아일랜드에 위치한 최고급 5성급 리조트" },
                            { name: "The Table Bay Hotel", price: "약 45만원대", desc: "워터프론트 항구와 바로 연결된 클래식하고 안전한 럭셔리 호텔" },
                            { name: " Mojo Hotel & Market Sea Point", price: "약 11만원대", desc: "시 포인트 해변 앞 라이브 푸드 마켓과 루프탑을 갖춘 트렌디 가성비 숙소" }
                        ]
                    }
                }
            },
            "페루": {
                desc: "구름 위 잃어버린 잉카의 공중도시, 안데스 문명의 심장",
                cities: {
                    "쿠스코·마추픽추": {
                        attractions: [
                            { name: "마추픽추 (Machu Picchu)", desc: "해발 2,430m 안데스 산맥 능선 위에 세워진 신비로운 잉카 제국의 공중도시", img: "./images/americas/peru/machu_picchu/machu_picchu.jpg" },
                            { name: "쿠스코 아르마스 광장 & 대성당", desc: "잉카 제국의 옛 수도 쿠스코의 심장부이자 황홀한 산비탈 야경이 펼쳐지는 광장", img: "./images/americas/peru/machu_picchu/plaza_de_armas_cusco.jpg" },
                            { name: "비니쿤카 (무지개산·Rainbow Mountain)", desc: "해발 5,200m 광물 퇴적층이 일곱 빛깔 파스텔 무지개로 물든 경이로운 대자연", img: "./images/americas/peru/machu_picchu/rainbow_mountain_peru.jpg" },
                            { name: "마라스 염전 & 모라이 (Maras & Moray)", desc: "안데스 협곡을 수놓은 3,000개의 계단식 소금밭과 잉카의 원형 계단식 농업 연구소", img: "./images/americas/peru/machu_picchu/salineras_de_maras.jpg" },
                            { name: "삭사이와만 & 12각 돌 (Sacsayhuamán)", desc: "종이 한 장 들어가지 않을 만큼 정교하게 맞물린 잉카 거석 건축의 미스터리", img: "./images/americas/peru/machu_picchu/sacsayhuaman_cusco.jpg" }
                        ],
                        restaurants: [
                            { name: "Chicha por Gastón Acurio", desc: "페루 국민 셰프 가스통 아쿠리오가 선보이는 알파카 스테이크와 세비체 파인다이닝", img: "./images/americas/peru/machu_picchu/chicha_cusco.jpg" },
                            { name: "Morena Peruvian Kitchen", desc: "아르마스 광장 인근 감각적인 인테리어에서 즐기는 로모 살타도(소고기 감자볶음)", img: "./images/americas/peru/machu_picchu/morena_cusco.jpg" },
                            { name: "Cicciolina (치치올리나 쿠스코)", desc: "산 블라스 입구 2층 고택에서 즐기는 안데스 타파스와 수제 파스타 명소", img: "./images/americas/peru/machu_picchu/cicciolina_cusco.jpg" },
                            { name: "Indio Feliz (인디오 펠리즈·아구아스 칼리엔테스)", desc: "마추픽추 아래 마을의 화려한 장식 속에서 즐기는 송어 요리와 프렌치 페루비안", img: "./images/americas/peru/machu_picchu/indio_feliz_machu_picchu.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "L'Atelier Café Concept", desc: "산 블라스 언덕길 창가 발코니에서 쿠스코의 붉은 기와지붕을 내려다보는 감성 카페", img: "./images/americas/peru/machu_picchu/latelier_cafe_cusco.jpg" },
                                { name: "Limbus Restobar (림부스)", desc: "쿠스코 시내 전체가 발아래 펼쳐지는 파노라마 유리 테라스와 피스코 사워", img: "./images/americas/peru/machu_picchu/limbus_restobar_cusco.jpg" }
                            ],
                            study: [
                                { name: "Three Monkeys Coffee Cusco", desc: "페루 스페셜티 원두로 내리는 최상급 에스프레소와 아늑한 중정 카페", img: "./images/americas/peru/machu_picchu/three_monkeys_cusco.jpg" },
                                { name: "Cappuccino Café Plaza de Armas", desc: "아르마스 광장이 한눈에 내려다보이는 2층 목조 발코니에서 코카차를 마시는 공간", img: "./images/americas/peru/machu_picchu/cappuccino_cafe_cusco.jpg" }
                            ]
                        },
                        activities: [
                            { name: "페루레일 비스타돔 & 히람빙엄 파노라마 열차", desc: "천장까지 뚫린 유리창으로 우루밤바 협곡과 만년설을 감상하며 마추픽추로 가는 기차", img: "./images/americas/peru/machu_picchu/vistadome_train_peru.jpg" },
                            { name: "우만타이 호수 (Humantay Lake) 빙하 트레킹", desc: "설산 아래 보석 같은 터키석 빛깔 빙하 호수를 만나는 감동의 하이킹", img: "./images/americas/peru/machu_picchu/humantay_lake_peru.jpg" },
                            { name: "산 블라스 예술가 지구 & 알파카 교감 산책", desc: "전통 의상을 입은 원주민과 귀여운 아기 알파카와 함께 사진을 남기는 골목 투어", img: "./images/americas/peru/machu_picchu/san_blas_cusco.jpg" },
                            { name: "산 페드로 중앙시장 (San Pedro Market) 탐방", desc: "수십 가지 안데스 감자와 열대과일 주스, 알파카 니트 기념품이 가득한 로컬 시장", img: "./images/americas/peru/machu_picchu/san_pedro_market_cusco.jpg" }
                        ],
                        hotels: [
                            { name: "Sanctuary Lodge, A Belmond Hotel", price: "약 160만원대", desc: "마추픽추 유적지 입구 바로 앞에 위치한 전 세계 유일의 독점 럭셔리 호텔" },
                            { name: "Palacio del Inka, a Luxury Collection Hotel", price: "약 45만원대", desc: "쿠스코 코리칸차(태양의 신전) 맞은편 500년 역사의 궁전 호텔 (산소 공급 객실 보유)" },
                            { name: "Inkaterra Machu Picchu Pueblo Hotel", price: "약 65만원대", desc: "아구아스 칼리엔테스 운무림 정원과 안데스 빌라로 꾸며진 자연 친화 5성급 리조트" },
                            { name: "Antigua Casona San Blas", price: "약 22만원대", desc: "산 블라스 지구의 따뜻한 벽난로 중정과 요가 스튜디오를 갖춘 감성 부티크 호텔" }
                        ]
                    }
                }
            },
            "볼리비아": {
                desc: "세상에서 가장 거대한 거울, 하늘과 땅이 하나 되는 우유니 사막",
                cities: {
                    "우유니": {
                        attractions: [
                            { name: "우유니 소금사막 (Salar de Uyuni)", desc: "우기에는 하늘을 그대로 비추는 세상에서 가장 큰 거울, 건기에는 끝없는 육각형 소금 대지", img: "./images/americas/bolivia/uyuni/salar_de_uyuni.jpg" },
                            { name: "물고기 섬 (잉카와시 섬·Isla Incahuasi)", desc: "새하얀 소금사막 한가운데 우뚝 솟은 천년 된 거대 선인장 군락의 섬", img: "./images/americas/bolivia/uyuni/incahuasi_island.jpg" },
                            { name: "열차 무덤 (Cementerio de Trenes)", desc: "광산 산업 시대를 달렸던 녹슨 증기기관차들이 황량한 사막 위에 멈춰 선 포토존", img: "./images/americas/bolivia/uyuni/train_cemetery_uyuni.jpg" },
                            { name: "라구나 콜로라다 (붉은 호수·Laguna Colorada)", desc: "붉은빛 호수 위를 수천 마리의 분홍 플라밍고 떼가 거니는 알티플라노 고원 절경", img: "./images/americas/bolivia/uyuni/laguna_colorada_bolivia.jpg" },
                            { name: "소금 호텔 박물관 & 만국기 광장 (Playa Blanca)", desc: "소금 블록으로 지은 최초의 호텔과 전 세계 여행자들의 국기가 휘날리는 광장", img: "./images/americas/bolivia/uyuni/playa_blanca_flags_uyuni.jpg" }
                        ],
                        restaurants: [
                            { name: "Minuteman Pizza Uyuni", desc: "라마 고기 토핑과 할라피뇨를 얹어 장작 화덕에 구워내는 우유니 1등 피자 맛집", img: "./images/americas/bolivia/uyuni/minuteman_pizza_uyuni.jpg" },
                            { name: "Tika Restaurant (호텔 하르딘 데 우유니)", desc: "부드러운 알파카 스테이크와 퀴노아 수프를 아늑한 분위기에서 즐기는 레스토랑", img: "./images/americas/bolivia/uyuni/tika_restaurant_uyuni.jpg" },
                            { name: "Lithium Club", desc: "우유니 투어를 마친 여행자들이 모여 볼리비아 전통 요리와 와인을 나누는 다이닝 바", img: "./images/americas/bolivia/uyuni/lithium_club_uyuni.jpg" }
                        ],
                        cafes: {
                            vibe: [
                                { name: "Salar Sunset Wine Bar (소금사막 선셋 와인바)", desc: "소금물 거울 위로 붉게 물드는 노을 속에서 차려지는 지프차 야외 와인 테이블", img: "./images/americas/bolivia/uyuni/uyuni_sunset_table.jpg" },
                                { name: "Llama Cafe Uyuni", desc: "우유니 시내에서 귀여운 라마 소품과 따뜻한 핫초코·레몬 파이로 몸을 녹이는 비건 카페", img: "./images/americas/bolivia/uyuni/llama_cafe_uyuni.jpg" }
                            ],
                            study: [
                                { name: "Breakfast Cafe & Bakery Uyuni", desc: "야간 버스로 도착한 여행자들에게 갓 내린 커피와 크루아상, 와이파이를 제공하는 쉼터", img: "./images/americas/bolivia/uyuni/uyuni_bakery_cafe.jpg" },
                                { name: "Luna Salada Salt Lounge", desc: "바닥부터 테이블까지 모두 소금으로 만들어진 호텔 라운지에서 마시는 코카 티", img: "./images/americas/bolivia/uyuni/luna_salada_lounge.jpg" }
                            ]
                        },
                        activities: [
                            { name: "우유니 은하수 & 별빛 데칼코마니 나이트 투어", desc: "발아래까지 쏟아지는 남반구 은하수 한가운데 서서 우주 속을 걷는 듯한 야간 투어", img: "./images/americas/bolivia/uyuni/uyuni_milky_way_tour.jpg" },
                            { name: "우유니 소금사막 원근법 트릭샷 촬영", desc: "끝없는 수평선 위에서 공룡 장난감과 와인병을 활용해 찍는 유쾌한 착시 사진", img: "./images/americas/bolivia/uyuni/uyuni_perspective_photo.jpg" },
                            { name: "에두아르도 아바로아 2박3일 지프 오프로드 투어", desc: "달리의 사막·솔 데 마냐나 간헐천·천연 노천온천을 가로지르는 안데스 대탐험", img: "./images/americas/bolivia/uyuni/sol_de_manana_geysers.jpg" },
                            { name: "콜차니 (Colchani) 소금 가공 마을 방문", desc: "소금 사막 입구 마을에서 전통 소금 채취 과정과 알파카 수공예품을 만나는 시간", img: "./images/americas/bolivia/uyuni/colchani_salt_village.jpg" }
                        ],
                        hotels: [
                            { name: "Hotel Palacio de Sal (팔라시오 데 살)", price: "약 32만원대", desc: "벽·천장·침대까지 100만 개의 소금 블록으로 지어진 세계 최초의 럭셔리 소금 호텔" },
                            { name: "Hotel de Sal Luna Salada (루나 살라다)", price: "약 35만원대", desc: "우유니 소금사막이 내려다보이는 언덕 위에 자리한 파노라마 뷰 소금 스파 호텔" },
                            { name: "Kachi Lodge (카치 로지)", price: "약 180만원대", desc: "소금사막 한가운데 설치된 우주선 모양의 투명 글램핑 돔 최고급 올인클루시브 로지" },
                            { name: "Hotel Jardín de Uyuni", price: "약 11만원대", desc: "우유니 시내 중심에서 따뜻한 난방과 온수를 제공하는 깔끔한 가성비 숙소" }
                        ]
                    }
                }
            }
        }

            ;

        // Regional Data Configuration
        const regionData = {
            "아시아·호주": ["대한민국", "호주", "일본", "대만", "싱가포르", "말레이시아", "태국", "인도네시아", "필리핀", "중국", "라오스"],
            "아메리카": ["미국", "페루", "볼리비아"],
            "유럽": ["영국", "프랑스", "벨기에", "네덜란드", "룩셈부르크", "스페인", "이탈리아", "스위스", "독일", "체코", "오스트리아", "슬로베니아", "크로아티아"],
            "아프리카": ["이집트", "남아공"]
        };

        ;

