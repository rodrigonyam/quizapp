// Quiz questions separated by category
const geographyQuestions = [
    {
        question: "What is the capital city of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        correct: 1
    },
    {
        question: "Which country is home to the Great Wall?",
        options: ["Japan", "India", "China", "Mongolia"],
        correct: 2
    },
    {
        question: "The Eiffel Tower is located in which city?",
        options: ["Rome", "Paris", "London", "Brussels"],
        correct: 1
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correct: 2
    },
    {
        question: "The Colosseum is a famous attraction in which country?",
        options: ["Greece", "Spain", "Italy", "Turkey"],
        correct: 2
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2
    },
    {
        question: "Machu Picchu is located in which country?",
        options: ["Peru", "Mexico", "Brazil", "Chile"],
        correct: 0
    },
    {
        question: "What is the capital of Egypt?",
        options: ["Alexandria", "Cairo", "Giza", "Luxor"],
        correct: 1
    },
    {
        question: "The Taj Mahal is a famous monument in which country?",
        options: ["Pakistan", "Bangladesh", "India", "Nepal"],
        correct: 2
    },
    {
        question: "What is the capital city of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        correct: 2
    },
    // Additional 90 questions covering world countries, capitals, cities and imports
    {
        question: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
        correct: 0
    },
    {
        question: "Which country is known for exporting the most coffee?",
        options: ["Colombia", "Brazil", "Ethiopia", "Vietnam"],
        correct: 1
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Busan", "Seoul", "Incheon", "Daegu"],
        correct: 1
    },
    {
        question: "Which country is the world's largest producer of oil?",
        options: ["Saudi Arabia", "Russia", "United States", "Iran"],
        correct: 2
    },
    {
        question: "What is the capital of Thailand?",
        options: ["Chiang Mai", "Phuket", "Bangkok", "Pattaya"],
        correct: 2
    },
    {
        question: "Which city is known as the financial capital of India?",
        options: ["New Delhi", "Mumbai", "Bangalore", "Kolkata"],
        correct: 1
    },
    {
        question: "What is the capital of Norway?",
        options: ["Bergen", "Oslo", "Trondheim", "Stavanger"],
        correct: 1
    },
    {
        question: "Which country is the largest exporter of rice?",
        options: ["China", "India", "Thailand", "Vietnam"],
        correct: 0
    },
    {
        question: "What is the capital of Chile?",
        options: ["Valparaíso", "Santiago", "Concepción", "La Serena"],
        correct: 1
    },
    {
        question: "Which European city is known as the 'Pearl of the Danube'?",
        options: ["Vienna", "Budapest", "Prague", "Warsaw"],
        correct: 1
    },
    {
        question: "What is the capital of Sweden?",
        options: ["Gothenburg", "Malmö", "Stockholm", "Uppsala"],
        correct: 2
    },
    {
        question: "Which country is the world's largest producer of diamonds?",
        options: ["South Africa", "Russia", "Botswana", "Australia"],
        correct: 1
    },
    {
        question: "What is the largest city in Turkey?",
        options: ["Ankara", "Istanbul", "Izmir", "Bursa"],
        correct: 1
    },
    {
        question: "Which country exports the most bananas?",
        options: ["Ecuador", "Philippines", "Costa Rica", "Colombia"],
        correct: 0
    },
    {
        question: "What is the capital of Poland?",
        options: ["Kraków", "Warsaw", "Gdańsk", "Wrocław"],
        correct: 1
    },
    {
        question: "Which city is the largest in Nigeria?",
        options: ["Abuja", "Lagos", "Kano", "Ibadan"],
        correct: 1
    },
    {
        question: "What is the capital of Netherlands?",
        options: ["Amsterdam", "The Hague", "Rotterdam", "Utrecht"],
        correct: 0
    },
    {
        question: "Which country is the largest producer of copper?",
        options: ["Chile", "Peru", "China", "United States"],
        correct: 0
    },
    {
        question: "What is the capital of Portugal?",
        options: ["Porto", "Lisbon", "Braga", "Coimbra"],
        correct: 1
    },
    {
        question: "Which city is known as the 'Silicon Valley of India'?",
        options: ["Mumbai", "Chennai", "Bangalore", "Hyderabad"],
        correct: 2
    },
    {
        question: "What is the capital of Austria?",
        options: ["Vienna", "Salzburg", "Graz", "Innsbruck"],
        correct: 0
    },
    {
        question: "Which country is the world's largest exporter of wheat?",
        options: ["United States", "Russia", "Canada", "Ukraine"],
        correct: 1
    },
    {
        question: "What is the capital of Czech Republic?",
        options: ["Brno", "Prague", "Ostrava", "Plzeň"],
        correct: 1
    },
    {
        question: "Which city is the largest in Canada?",
        options: ["Toronto", "Montreal", "Vancouver", "Calgary"],
        correct: 0
    },
    {
        question: "What is the capital of Belgium?",
        options: ["Antwerp", "Brussels", "Ghent", "Bruges"],
        correct: 1
    },
    {
        question: "Which country produces the most tea?",
        options: ["India", "China", "Sri Lanka", "Kenya"],
        correct: 1
    },
    {
        question: "What is the capital of Denmark?",
        options: ["Aarhus", "Copenhagen", "Odense", "Aalborg"],
        correct: 1
    },
    {
        question: "Which city is known as the 'City of Love'?",
        options: ["Rome", "Paris", "Venice", "Vienna"],
        correct: 1
    },
    {
        question: "What is the capital of Finland?",
        options: ["Tampere", "Turku", "Helsinki", "Espoo"],
        correct: 2
    },
    {
        question: "Which country is the largest producer of gold?",
        options: ["South Africa", "China", "Australia", "Russia"],
        correct: 1
    },
    {
        question: "What is the capital of Hungary?",
        options: ["Debrecen", "Szeged", "Budapest", "Pécs"],
        correct: 2
    },
    {
        question: "Which city is the economic center of Germany?",
        options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
        correct: 2
    },
    {
        question: "What is the capital of Ireland?",
        options: ["Cork", "Dublin", "Galway", "Limerick"],
        correct: 1
    },
    {
        question: "Which country exports the most cocoa?",
        options: ["Ghana", "Côte d'Ivoire", "Ecuador", "Nigeria"],
        correct: 1
    },
    {
        question: "What is the capital of Switzerland?",
        options: ["Zurich", "Geneva", "Bern", "Basel"],
        correct: 2
    },
    {
        question: "Which is the largest city in Australia?",
        options: ["Sydney", "Melbourne", "Brisbane", "Perth"],
        correct: 0
    },
    {
        question: "What is the capital of New Zealand?",
        options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
        correct: 1
    },
    {
        question: "Which country is the largest producer of aluminum?",
        options: ["China", "Russia", "Canada", "Australia"],
        correct: 0
    },
    {
        question: "What is the capital of Mexico?",
        options: ["Guadalajara", "Mexico City", "Monterrey", "Puebla"],
        correct: 1
    },
    {
        question: "Which city is known as the 'Big Apple'?",
        options: ["Los Angeles", "Chicago", "New York City", "Boston"],
        correct: 2
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Cape Town", "Johannesburg", "Pretoria", "Durban"],
        correct: 2
    },
    {
        question: "Which country produces the most oranges?",
        options: ["Spain", "Brazil", "United States", "China"],
        correct: 1
    },
    {
        question: "What is the capital of Morocco?",
        options: ["Casablanca", "Rabat", "Marrakech", "Fez"],
        correct: 1
    },
    {
        question: "Which city is the largest in Spain?",
        options: ["Barcelona", "Madrid", "Valencia", "Seville"],
        correct: 1
    },
    {
        question: "What is the capital of Greece?",
        options: ["Thessaloniki", "Athens", "Patras", "Heraklion"],
        correct: 1
    },
    {
        question: "Which country is the world's largest exporter of natural gas?",
        options: ["Russia", "Qatar", "United States", "Iran"],
        correct: 0
    },
    {
        question: "What is the capital of Croatia?",
        options: ["Split", "Zagreb", "Rijeka", "Osijek"],
        correct: 1
    },
    {
        question: "Which city is known as the 'Fashion Capital of the World'?",
        options: ["Paris", "Milan", "New York", "London"],
        correct: 1
    },
    {
        question: "What is the capital of Romania?",
        options: ["Cluj-Napoca", "Bucharest", "Timișoara", "Iași"],
        correct: 1
    },
    {
        question: "Which country produces the most wool?",
        options: ["Australia", "China", "New Zealand", "Argentina"],
        correct: 0
    },
    {
        question: "What is the capital of Bulgaria?",
        options: ["Plovdiv", "Sofia", "Varna", "Burgas"],
        correct: 1
    },
    {
        question: "Which is the largest city in Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasília"],
        correct: 1
    },
    {
        question: "What is the capital of Serbia?",
        options: ["Novi Sad", "Belgrade", "Niš", "Kragujevac"],
        correct: 1
    },
    {
        question: "Which country is the largest producer of soybeans?",
        options: ["United States", "Brazil", "Argentina", "China"],
        correct: 1
    },
    {
        question: "What is the capital of Slovakia?",
        options: ["Košice", "Bratislava", "Prešov", "Žilina"],
        correct: 1
    },
    {
        question: "Which city is known as the 'Pearl of the Orient'?",
        options: ["Shanghai", "Hong Kong", "Singapore", "Manila"],
        correct: 3
    },
    {
        question: "What is the capital of Slovenia?",
        options: ["Maribor", "Ljubljana", "Celje", "Kranj"],
        correct: 1
    },
    {
        question: "Which country exports the most palm oil?",
        options: ["Malaysia", "Indonesia", "Thailand", "Colombia"],
        correct: 1
    },
    {
        question: "What is the capital of Lithuania?",
        options: ["Kaunas", "Vilnius", "Klaipėda", "Šiauliai"],
        correct: 1
    },
    {
        question: "Which is the financial center of the United Kingdom?",
        options: ["Manchester", "Birmingham", "London", "Edinburgh"],
        correct: 2
    },
    {
        question: "What is the capital of Latvia?",
        options: ["Daugavpils", "Riga", "Liepāja", "Jelgava"],
        correct: 1
    },
    {
        question: "Which country is the largest producer of corn (maize)?",
        options: ["China", "United States", "Brazil", "Argentina"],
        correct: 1
    },
    {
        question: "What is the capital of Estonia?",
        options: ["Tartu", "Tallinn", "Narva", "Pärnu"],
        correct: 1
    },
    {
        question: "Which city is known as the 'City of Canals'?",
        options: ["Amsterdam", "Venice", "Bruges", "Stockholm"],
        correct: 1
    },
    {
        question: "What is the capital of Ukraine?",
        options: ["Kharkiv", "Kyiv", "Odesa", "Dnipro"],
        correct: 1
    },
    {
        question: "Which country produces the most rubber?",
        options: ["Thailand", "Indonesia", "Malaysia", "Vietnam"],
        correct: 0
    },
    {
        question: "What is the capital of Belarus?",
        options: ["Gomel", "Minsk", "Vitebsk", "Grodno"],
        correct: 1
    },
    {
        question: "Which is the largest city in Russia?",
        options: ["St. Petersburg", "Moscow", "Novosibirsk", "Yekaterinburg"],
        correct: 1
    },
    {
        question: "What is the capital of Moldova?",
        options: ["Bălți", "Chișinău", "Tiraspol", "Cahul"],
        correct: 1
    },
    {
        question: "Which country is the largest exporter of iron ore?",
        options: ["Australia", "Brazil", "China", "India"],
        correct: 0
    },
    {
        question: "What is the capital of Georgia?",
        options: ["Batumi", "Tbilisi", "Kutaisi", "Rustavi"],
        correct: 1
    },
    {
        question: "Which city is known as the 'Eternal City'?",
        options: ["Athens", "Rome", "Istanbul", "Cairo"],
        correct: 1
    },
    {
        question: "What is the capital of Armenia?",
        options: ["Gyumri", "Yerevan", "Vanadzor", "Vagharshapat"],
        correct: 1
    },
    {
        question: "Which country produces the most cotton?",
        options: ["India", "China", "United States", "Pakistan"],
        correct: 1
    },
    {
        question: "What is the capital of Azerbaijan?",
        options: ["Ganja", "Baku", "Sumqayıt", "Lankaran"],
        correct: 1
    },
    {
        question: "Which is the largest city in the Middle East?",
        options: ["Istanbul", "Tehran", "Cairo", "Baghdad"],
        correct: 0
    },
    {
        question: "What is the capital of Kazakhstan?",
        options: ["Almaty", "Nur-Sultan", "Shymkent", "Aktobe"],
        correct: 1
    },
    {
        question: "Which country is the largest producer of uranium?",
        options: ["Kazakhstan", "Canada", "Australia", "Niger"],
        correct: 0
    },
    {
        question: "What is the capital of Uzbekistan?",
        options: ["Samarkand", "Tashkent", "Namangan", "Andijan"],
        correct: 1
    },
    {
        question: "Which city is known as the 'City of Gold'?",
        options: ["Dubai", "Johannesburg", "San Francisco", "Mumbai"],
        correct: 1
    },
    {
        question: "What is the capital of Kyrgyzstan?",
        options: ["Osh", "Bishkek", "Jalal-Abad", "Karakol"],
        correct: 1
    },
    {
        question: "Which country exports the most seafood?",
        options: ["China", "Norway", "Vietnam", "Chile"],
        correct: 0
    },
    {
        question: "What is the capital of Tajikistan?",
        options: ["Khujand", "Dushanbe", "Kulob", "Qurghonteppa"],
        correct: 1
    },
    {
        question: "Which is the largest port city in China?",
        options: ["Guangzhou", "Shanghai", "Shenzhen", "Tianjin"],
        correct: 1
    },
    {
        question: "What is the capital of Turkmenistan?",
        options: ["Turkmenbashi", "Ashgabat", "Mary", "Türkmenabat"],
        correct: 1
    },
    {
        question: "Which country is the largest producer of platinum?",
        options: ["South Africa", "Russia", "Zimbabwe", "Canada"],
        correct: 0
    },
    {
        question: "What is the capital of Mongolia?",
        options: ["Erdenet", "Ulaanbaatar", "Darkhan", "Choibalsan"],
        correct: 1
    },
    {
        question: "Which city is considered the tech capital of Europe?",
        options: ["London", "Berlin", "Dublin", "Stockholm"],
        correct: 2
    },
    {
        question: "What is the capital of Nepal?",
        options: ["Pokhara", "Kathmandu", "Lalitpur", "Biratnagar"],
        correct: 1
    },
    {
        question: "Which country produces the most spices?",
        options: ["India", "China", "Turkey", "Iran"],
        correct: 0
    },
    {
        question: "What is the capital of Bangladesh?",
        options: ["Chittagong", "Dhaka", "Sylhet", "Rajshahi"],
        correct: 1
    },
    {
        question: "Which is the largest city in Africa?",
        options: ["Cairo", "Lagos", "Kinshasa", "Johannesburg"],
        correct: 1
    },
    {
        question: "What is the capital of Sri Lanka?",
        options: ["Kandy", "Sri Jayawardenepura Kotte", "Colombo", "Galle"],
        correct: 1
    },
    {
        question: "Which country is the largest exporter of flowers?",
        options: ["Netherlands", "Colombia", "Kenya", "Ecuador"],
        correct: 0
    },
    {
        question: "What is the capital of Myanmar?",
        options: ["Yangon", "Naypyidaw", "Mandalay", "Bagan"],
        correct: 1
    },
    {
        question: "Which city is known as the 'Pearl of Africa'?",
        options: ["Nairobi", "Kampala", "Addis Ababa", "Kigali"],
        correct: 1
    },
    {
        question: "What is the capital of Cambodia?",
        options: ["Siem Reap", "Phnom Penh", "Battambang", "Sihanoukville"],
        correct: 1
    },
    {
        question: "Which country produces the most cashew nuts?",
        options: ["Vietnam", "India", "Brazil", "Tanzania"],
        correct: 0
    },
    {
        question: "What is the capital of Laos?",
        options: ["Luang Prabang", "Vientiane", "Savannakhet", "Pakse"],
        correct: 1
    },
    {
        question: "Which is the largest city in South America?",
        options: ["Buenos Aires", "São Paulo", "Lima", "Bogotá"],
        correct: 1
    }
];

const historyQuestions = [
    {
        question: "Who is known as the founding father of Ghana?",
        options: ["Nelson Mandela", "Kwame Nkrumah", "Jomo Kenyatta", "Julius Nyerere"],
        correct: 1
    },
    {
        question: "What was Kenya called during British colonial rule?",
        options: ["British East Africa", "East African Protectorate", "British Kenya", "Kenya Colony"],
        correct: 1
    },
    {
        question: "Who led South Africa to independence and became its first Black president?",
        options: ["Desmond Tutu", "Nelson Mandela", "Steve Biko", "Oliver Tambo"],
        correct: 1
    },
    {
        question: "What was Zimbabwe called before independence in 1980?",
        options: ["Southern Rhodesia", "British Zimbabwe", "Rhodesia", "Both A and C"],
        correct: 3
    },
    {
        question: "Who was the founding father of Tanzania?",
        options: ["Julius Nyerere", "Kenneth Kaunda", "Jomo Kenyatta", "Patrice Lumumba"],
        correct: 0
    },
    {
        question: "What was Nigeria called before becoming a unified country?",
        options: ["British Niger", "Niger Territories", "Royal Niger Company Territories", "West African Colony"],
        correct: 2
    },
    {
        question: "Who founded and led the Democratic Republic of Congo to independence?",
        options: ["Mobutu Sese Seko", "Patrice Lumumba", "Joseph Kabila", "Laurent-Désiré Kabila"],
        correct: 1
    },
    {
        question: "What was Botswana called during British colonial rule?",
        options: ["British Botswana", "Bechuanaland Protectorate", "Southern Protectorate", "Tswana Territory"],
        correct: 1
    },
    {
        question: "Who is considered the father of Egyptian independence?",
        options: ["Anwar Sadat", "Hosni Mubarak", "Gamal Abdel Nasser", "King Farouk"],
        correct: 2
    },
    {
        question: "What was Zambia called before independence in 1964?",
        options: ["British Zambia", "Northern Rhodesia", "Zambezi Territory", "British Central Africa"],
        correct: 1
    }
];

const diagramQuestions = [
    {
        question: "Which diagram shows the correct water cycle process?",
        image: "images/water_cycle.svg",
        source: "NASA Earth Science Division",
        options: ["Evaporation → Condensation → Precipitation", "Precipitation → Evaporation → Condensation", "Condensation → Precipitation → Evaporation", "Precipitation → Condensation → Evaporation"],
        correct: 0
    },
    {
        question: "This diagram shows which type of geological formation?",
        image: "images/volcano_cross_section.svg",
        source: "U.S. Geological Survey",
        options: ["Sedimentary layers", "Volcanic structure", "Tectonic plate boundary", "Erosion pattern"],
        correct: 1
    },
    {
        question: "What does this world map projection represent?",
        image: "images/mercator_projection.svg",
        source: "National Geographic Society",
        options: ["Robinson Projection", "Mercator Projection", "Peters Projection", "Mollweide Projection"],
        correct: 1
    },
    {
        question: "This climate diagram represents which climate type?",
        image: "images/tropical_climate_chart.svg",
        source: "World Meteorological Organization",
        options: ["Desert Climate", "Tropical Climate", "Temperate Climate", "Arctic Climate"],
        correct: 1
    },
    {
        question: "What type of mountain formation is shown in this cross-section?",
        image: "images/fold_mountains.svg",
        source: "British Geological Survey",
        options: ["Fold Mountains", "Fault-block Mountains", "Volcanic Mountains", "Dome Mountains"],
        correct: 0
    },
    {
        question: "This river system diagram shows which geographical feature?",
        image: "images/placeholder_diagram.svg",
        source: "USGS Water Resources",
        options: ["River Source", "River Delta", "River Meander", "River Canyon"],
        correct: 1
    },
    {
        question: "What type of coastal feature is illustrated in this diagram?",
        image: "images/coastal_erosion.svg",
        source: "Coastal Studies Institute",
        options: ["Coastal Deposition", "Coastal Erosion", "Coral Reef Formation", "Tidal Pool System"],
        correct: 1
    },
    {
        question: "This diagram shows which atmospheric layer structure?",
        image: "images/atmosphere_layers.svg",
        source: "NOAA Earth System Research Laboratory",
        options: ["Troposphere only", "Complete Atmosphere", "Stratosphere only", "Ionosphere only"],
        correct: 1
    },
    {
        question: "What type of ecosystem is represented in this food web diagram?",
        image: "images/forest_ecosystem.svg",
        source: "World Wildlife Fund",
        options: ["Desert Ecosystem", "Forest Ecosystem", "Marine Ecosystem", "Grassland Ecosystem"],
        correct: 1
    },
    {
        question: "This geological time scale shows which era highlighted?",
        image: "images/geological_timeline.svg",
        source: "International Commission on Stratigraphy",
        options: ["Paleozoic Era", "Mesozoic Era", "Cenozoic Era", "Precambrian Era"],
        correct: 2
    },
    {
        question: "What type of plate boundary is shown in this cross-section?",
        image: "images/convergent_boundary.svg",
        source: "U.S. Geological Survey",
        options: ["Divergent Boundary", "Convergent Boundary", "Transform Boundary", "Passive Boundary"],
        correct: 1
    },
    {
        question: "This weather map symbol indicates what meteorological condition?",
        image: "images/weather_front.svg",
        source: "National Weather Service",
        options: ["High Pressure", "Cold Front", "Warm Front", "Occluded Front"],
        correct: 1
    },
    {
        question: "What type of soil profile is illustrated in this diagram?",
        image: "images/soil_horizons.svg",
        source: "Soil Science Society of America",
        options: ["Sandy Soil", "Clay Soil", "Layered Soil Horizons", "Rocky Soil"],
        correct: 2
    },
    {
        question: "This urban planning diagram shows which city layout principle?",
        image: "images/radial_city_plan.svg",
        source: "Urban Land Institute",
        options: ["Grid Pattern", "Radial Pattern", "Organic Pattern", "Linear Pattern"],
        correct: 1
    },
    {
        question: "What type of glacier formation is depicted in this cross-section?",
        image: "images/valley_glacier.svg",
        source: "National Snow and Ice Data Center",
        options: ["Continental Glacier", "Valley Glacier", "Piedmont Glacier", "Tidewater Glacier"],
        correct: 1
    },
    {
        question: "This population pyramid represents which demographic trend?",
        image: "images/aging_population.svg",
        source: "United Nations Population Division",
        options: ["Young Population", "Aging Population", "Stable Population", "Declining Population"],
        correct: 1
    },
    {
        question: "What type of transportation network is shown in this diagram?",
        image: "images/hub_spoke_network.svg",
        source: "International Air Transport Association",
        options: ["Linear Network", "Hub-and-Spoke Network", "Grid Network", "Ring Network"],
        correct: 1
    },
    {
        question: "This cross-section shows which type of aquifer system?",
        image: "images/confined_aquifer.svg",
        source: "U.S. Geological Survey",
        options: ["Unconfined Aquifer", "Confined Aquifer", "Perched Aquifer", "Artesian Aquifer"],
        correct: 1
    },
    {
        question: "What agricultural pattern is illustrated in this aerial view?",
        image: "images/contour_farming.svg",
        source: "USDA Natural Resources Conservation Service",
        options: ["Strip Farming", "Contour Farming", "Terraced Farming", "Monoculture Farming"],
        correct: 1
    },
    {
        question: "This diagram represents which type of economic model?",
        image: "images/core_periphery_model.svg",
        source: "World Bank Economic Research",
        options: ["Linear Economy", "Core-Periphery Model", "Circular Economy", "Mixed Economy"],
        correct: 1
    },
    {
        question: "What type of settlement pattern is shown in this map?",
        image: "images/linear_settlement.svg",
        source: "Geographic Information Systems Society",
        options: ["Clustered Settlement", "Linear Settlement", "Dispersed Settlement", "Nucleated Settlement"],
        correct: 1
    },
    {
        question: "This energy flow diagram represents which renewable source?",
        image: "images/solar_energy_flow.svg",
        source: "International Renewable Energy Agency",
        options: ["Wind Energy", "Solar Energy", "Hydroelectric Energy", "Geothermal Energy"],
        correct: 1
    },
    {
        question: "What type of land use pattern is depicted in this urban model?",
        image: "images/concentric_zone_model.svg",
        source: "American Planning Association",
        options: ["Sector Model", "Concentric Zone Model", "Multiple Nuclei Model", "Galactic City Model"],
        correct: 1
    },
    {
        question: "This ocean current map shows which major circulation pattern?",
        image: "images/gulf_stream.svg",
        source: "NOAA Ocean Service",
        options: ["California Current", "Gulf Stream", "Kuroshio Current", "Antarctic Circumpolar Current"],
        correct: 1
    },
    {
        question: "What type of mineral formation process is illustrated here?",
        image: "images/crystal_formation.svg",
        source: "Mineralogical Society of America",
        options: ["Sedimentary Process", "Igneous Process", "Metamorphic Process", "Crystal Formation"],
        correct: 3
    },
    {
        question: "This cross-section shows which type of cave formation?",
        image: "images/limestone_cave.svg",
        source: "National Speleological Society",
        options: ["Lava Tube", "Limestone Cave", "Sea Cave", "Ice Cave"],
        correct: 1
    },
    {
        question: "What agricultural zone is represented in this von Thünen model?",
        image: "images/von_thunen_model.svg",
        source: "Agricultural Geography Research Institute",
        options: ["Market Gardening", "Grain Farming", "Livestock Ranching", "Forestry"],
        correct: 0
    },
    {
        question: "This migration flow diagram shows which type of movement?",
        image: "images/rural_urban_migration.svg",
        source: "International Organization for Migration",
        options: ["International Migration", "Rural-Urban Migration", "Seasonal Migration", "Return Migration"],
        correct: 1
    },
    {
        question: "What type of coastal landform is shown in this formation diagram?",
        image: "images/barrier_island.svg",
        source: "Coastal Geology Institute",
        options: ["Peninsula", "Barrier Island", "Headland", "Bay"],
        correct: 1
    },
    {
        question: "This watershed diagram illustrates which hydrological concept?",
        image: "images/drainage_basin.svg",
        source: "International Association of Hydrological Sciences",
        options: ["Groundwater Flow", "Drainage Basin", "Water Table", "Aquifer Recharge"],
        correct: 1
    },
    {
        question: "What type of vegetation distribution is shown in this biome map?",
        image: "images/biome_distribution.svg",
        source: "World Biome Research Center",
        options: ["Tropical Rainforest", "Temperate Grassland", "Boreal Forest", "Global Biome Distribution"],
        correct: 3
    },
    {
        question: "This seismic activity map indicates which geological phenomenon?",
        image: "images/earthquake_zones.svg",
        source: "Global Seismographic Network",
        options: ["Volcanic Activity", "Earthquake Zones", "Mineral Deposits", "Fault Lines"],
        correct: 1
    },
    {
        question: "What urban growth pattern is illustrated in this development model?",
        image: "images/suburban_sprawl.svg",
        source: "Urban Studies Research Institute",
        options: ["Compact Development", "Suburban Sprawl", "Vertical Growth", "Mixed-Use Development"],
        correct: 1
    },
    {
        question: "This trade flow diagram represents which economic relationship?",
        image: "images/global_trade_flows.svg",
        source: "World Trade Organization",
        options: ["Bilateral Trade", "Global Trade Flows", "Regional Trade", "Commodity Exchange"],
        correct: 1
    },
    {
        question: "What type of erosion pattern is shown in this landscape diagram?",
        image: "images/badlands_erosion.svg",
        source: "National Park Service Geology Division",
        options: ["Glacial Erosion", "Water Erosion", "Wind Erosion", "Chemical Weathering"],
        correct: 1
    },
    {
        question: "This climate change projection shows which environmental trend?",
        image: "images/sea_level_rise.svg",
        source: "Intergovernmental Panel on Climate Change",
        options: ["Temperature Rise", "Sea Level Rise", "Precipitation Change", "Ice Sheet Melting"],
        correct: 1
    },
    {
        question: "What type of agricultural system is depicted in this field pattern?",
        image: "images/field_systems.svg",
        source: "Food and Agriculture Organization",
        options: ["Open Field System", "Enclosed Field System", "Collective Farming", "Plantation System"],
        correct: 1
    },
    {
        question: "This demographic transition model shows which population stage?",
        image: "images/demographic_transition.svg",
        source: "Population Reference Bureau",
        options: ["Stage 1: High Growth", "Stage 2: Early Transition", "Stage 3: Late Transition", "Stage 4: Low Growth"],
        correct: 2
    },
    {
        question: "What type of landform evolution is illustrated in this sequence?",
        image: "images/mountain_erosion_sequence.svg",
        source: "Geomorphology Research Center",
        options: ["Mountain Building", "Mountain Erosion", "Valley Formation", "Plateau Development"],
        correct: 1
    },
    {
        question: "This industrial location model represents which economic theory?",
        image: "images/weber_location_theory.svg",
        source: "Industrial Geography Association",
        options: ["Central Place Theory", "Weber's Location Theory", "Growth Pole Theory", "Cumulative Causation"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let quizData = [];
let currentCategory = '';

// DOM Elements - Will be initialized after DOM loads
let categorySelector, geographyBtn, historyBtn, diagramBtn;
let questionElement, optionsElement, nextBtn, currentQuestionElement;
let totalQuestionsElement, progressElement, quizContainer, resultContainer;
let finalScoreElement, resultMessageElement, scoreBreakdownElement;
let restartBtn, homeBtn, questionImageContainer, questionImage;
let imageSource, sourcesSection, sourcesList, sourcesBtn;

// Initialize DOM elements
function initializeElements() {
    categorySelector = document.getElementById('category-selector');
    geographyBtn = document.getElementById('geography-btn');
    historyBtn = document.getElementById('history-btn');
    diagramBtn = document.getElementById('diagram-btn');
    questionElement = document.getElementById('question');
    optionsElement = document.getElementById('options');
    nextBtn = document.getElementById('next-btn');
    currentQuestionElement = document.getElementById('current-question');
    totalQuestionsElement = document.getElementById('total-questions');
    progressElement = document.getElementById('progress');
    quizContainer = document.getElementById('quiz-container');
    resultContainer = document.getElementById('result-container');
    finalScoreElement = document.getElementById('final-score');
    resultMessageElement = document.getElementById('result-message');
    scoreBreakdownElement = document.getElementById('score-breakdown');
    restartBtn = document.getElementById('restart-btn');
    homeBtn = document.getElementById('home-btn');
    questionImageContainer = document.getElementById('question-image-container');
    questionImage = document.getElementById('question-image');
    imageSource = document.getElementById('image-source');
    sourcesSection = document.getElementById('sources-section');
    sourcesList = document.getElementById('sources-list');
    sourcesBtn = document.getElementById('sources-btn');
}

// Category selection with mobile-friendly events
function addCategoryListeners() {
    if (geographyBtn) {
        geographyBtn.addEventListener('click', handleGeographyClick);
        geographyBtn.addEventListener('touchstart', handleGeographyClick);
    }
    
    if (historyBtn) {
        historyBtn.addEventListener('click', handleHistoryClick);
        historyBtn.addEventListener('touchstart', handleHistoryClick);
    }
    
    if (diagramBtn) {
        diagramBtn.addEventListener('click', handleDiagramClick);
        diagramBtn.addEventListener('touchstart', handleDiagramClick);
    }
}

function handleGeographyClick(e) {
    e.preventDefault();
    currentCategory = 'Geography';
    quizData = geographyQuestions;
    startQuiz();
}

function handleHistoryClick(e) {
    e.preventDefault();
    currentCategory = 'African History';
    quizData = historyQuestions;
    startQuiz();
}

function handleDiagramClick(e) {
    e.preventDefault();
    currentCategory = 'Geography Diagrams';
    quizData = diagramQuestions;
    startQuiz();
}

// Start quiz with error handling
function startQuiz() {
    try {
        if (categorySelector) categorySelector.style.display = 'none';
        if (quizContainer) quizContainer.style.display = 'block';
        initQuiz();
    } catch (error) {
        console.error('Error starting quiz:', error);
        // Fallback: try to reload the page
        alert('There was an error starting the quiz. Please refresh the page.');
    }
}

// Initialize quiz with error handling
function initQuiz() {
    try {
        currentQuestion = 0;
        score = 0;
        userAnswers = [];
        if (totalQuestionsElement) {
            totalQuestionsElement.textContent = quizData.length;
        }
        loadQuestion();
    } catch (error) {
        console.error('Error initializing quiz:', error);
        alert('There was an error loading the quiz. Please refresh the page.');
    }
}

// Load question
function loadQuestion() {
    const question = quizData[currentQuestion];
    
    // Update question counter
    currentQuestionElement.textContent = currentQuestion + 1;
    
    // Update progress bar with animation
    const progress = ((currentQuestion) / quizData.length) * 100;
    progressElement.style.width = progress + '%';
    
    // Handle image display for diagram questions
    if (question.image) {
        questionImageContainer.style.display = 'block';
        questionImage.src = question.image;
        questionImage.alt = question.question;
        imageSource.textContent = `Source: ${question.source}`;
        
        // Add loading animation with error handling
        questionImage.style.opacity = '0';
        questionImage.onload = () => {
            questionImage.style.transition = 'opacity 0.5s ease';
            questionImage.style.opacity = '1';
        };
        
        questionImage.onerror = () => {
            // Try to load the placeholder image instead
            if (questionImage.src.includes('placeholder_diagram.svg')) {
                // If even placeholder fails, show HTML placeholder
                questionImageContainer.innerHTML = `
                    <div class="image-placeholder">
                        <div class="placeholder-icon">📊</div>
                        <p>Educational Diagram</p>
                        <p class="image-source">Source: ${question.source}</p>
                        <small>Diagram not yet available</small>
                    </div>
                `;
            } else {
                // Try placeholder image first
                questionImage.src = "images/placeholder_diagram.svg";
            }
            questionImageContainer.style.display = 'block';
        };
    } else {
        questionImageContainer.style.display = 'none';
    }
    
    // Display question with typewriter effect
    questionElement.textContent = '';
    typeWriterEffect(questionElement, question.question, 30);
    
    // Display options with stagger animation and mobile support
    if (optionsElement) {
        optionsElement.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.style.opacity = '0';
            optionDiv.style.transform = 'translateY(20px)';
            
            // Add both click and touch events for mobile
            optionDiv.addEventListener('click', (e) => {
                e.preventDefault();
                selectOption(index, optionDiv);
            });
            optionDiv.addEventListener('touchstart', (e) => {
                e.preventDefault();
                selectOption(index, optionDiv);
            });
            
            optionsElement.appendChild(optionDiv);
            
            // Stagger animation - faster on mobile
            const delay = isMobile() ? index * 50 + 200 : index * 100 + 500;
            setTimeout(() => {
                optionDiv.style.transition = 'all 0.3s ease';
                optionDiv.style.opacity = '1';
                optionDiv.style.transform = 'translateY(0)';
            }, delay);
        });
    }
    
    // Hide next button initially
    nextBtn.style.display = 'none';
}

// Handle option selection
function selectOption(selectedIndex, selectedElement) {
    const question = quizData[currentQuestion];
    const allOptions = document.querySelectorAll('.option');
    
    // Disable all options after selection
    allOptions.forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';
    });
    
    // Store user's answer
    userAnswers.push({
        question: question.question,
        userAnswer: selectedIndex,
        correctAnswer: question.correct,
        options: question.options
    });
    
    // Check if answer is correct
    if (selectedIndex === question.correct) {
        selectedElement.classList.add('correct');
        score++;
    } else {
        selectedElement.classList.add('incorrect');
        // Highlight correct answer
        allOptions[question.correct].classList.add('correct');
    }
    
    // Show next button
    nextBtn.style.display = 'block';
}

// Next question handler with mobile support
function addButtonListeners() {
    if (nextBtn) {
        nextBtn.addEventListener('click', handleNextQuestion);
        nextBtn.addEventListener('touchstart', handleNextQuestion);
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', handleRestart);
        restartBtn.addEventListener('touchstart', handleRestart);
    }
    
    if (homeBtn) {
        homeBtn.addEventListener('click', handleHome);
        homeBtn.addEventListener('touchstart', handleHome);
    }
    
    if (sourcesBtn) {
        sourcesBtn.addEventListener('click', handleSources);
        sourcesBtn.addEventListener('touchstart', handleSources);
    }
}

function handleNextQuestion(e) {
    e.preventDefault();
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    // Display final score
    finalScoreElement.textContent = score;
    
    // Display result message
    const percentage = (score / quizData.length) * 100;
    let message = '';
    
    if (currentCategory === 'Geography Diagrams') {
        if (percentage === 100) {
            message = 'Perfect! You\'re a visual geography expert! 🏆📊';
        } else if (percentage >= 80) {
            message = 'Excellent! You can read maps and diagrams like a pro! 🌟🗺️';
        } else if (percentage >= 60) {
            message = 'Good work! Your diagram interpretation skills are developing! 👍📈';
        } else if (percentage >= 40) {
            message = 'Keep practicing! Visual geography takes time to master! 📚🔍';
        } else {
            message = 'Don\'t give up! Study more maps and diagrams! 🌍📊';
        }
    } else {
        if (percentage === 100) {
            message = 'Perfect! You\'re a geography expert! 🏆';
        } else if (percentage >= 80) {
            message = 'Excellent work! You know your geography well! 🌟';
        } else if (percentage >= 60) {
            message = 'Good job! Keep learning about the world! 👍';
        } else if (percentage >= 40) {
            message = 'Not bad! There\'s room for improvement! 📚';
        } else {
            message = 'Keep practicing! The world awaits! 🌍';
        }
    }
    
    resultMessageElement.textContent = message;
    
    // Show sources button for diagram questions
    if (currentCategory === 'Geography Diagrams') {
        sourcesBtn.style.display = 'inline-block';
    }
    
    // Display score breakdown
    scoreBreakdownElement.innerHTML = '<h3 style="margin-bottom: 15px; color: #667eea;">Review Your Answers:</h3>';
    
    userAnswers.forEach((answer, index) => {
        const scoreItem = document.createElement('div');
        scoreItem.className = 'score-item';
        
        const isCorrect = answer.userAnswer === answer.correctAnswer;
        const statusClass = isCorrect ? 'correct-answer' : 'incorrect-answer';
        const statusSymbol = isCorrect ? '✓' : '✗';
        
        scoreItem.innerHTML = `
            <span>Q${index + 1}: ${answer.options[answer.correctAnswer]}</span>
            <span class="${statusClass}">${statusSymbol} ${isCorrect ? 'Correct' : 'Wrong'}</span>
        `;
        
        scoreBreakdownElement.appendChild(scoreItem);
    });
}

function handleRestart(e) {
    e.preventDefault();
    if (resultContainer && quizContainer) {
        resultContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        initQuiz();
    }
}

function handleHome(e) {
    e.preventDefault();
    if (resultContainer && categorySelector && sourcesSection && sourcesBtn) {
        resultContainer.style.display = 'none';
        categorySelector.style.display = 'block';
        sourcesSection.style.display = 'none';
        sourcesBtn.style.display = 'none';
        currentCategory = '';
        quizData = [];
    }
}

function handleSources(e) {
    e.preventDefault();
    if (sourcesSection && sourcesBtn) {
        if (sourcesSection.style.display === 'none') {
            sourcesSection.style.display = 'block';
            sourcesBtn.textContent = 'Hide Sources';
            displaySources();
        } else {
            sourcesSection.style.display = 'none';
            sourcesBtn.textContent = 'View Sources';
        }
    }
}

// Typewriter effect function - faster on mobile
function typeWriterEffect(element, text, speed = 50) {
    if (!element) return;
    
    // Skip typewriter effect on mobile for better performance
    if (isMobile()) {
        element.textContent = text;
        return;
    }
    
    let i = 0;
    function typeWriter() {
        if (i < text.length && element) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}

// Display sources for diagram questions
function displaySources() {
    sourcesList.innerHTML = '';
    const uniqueSources = new Set();
    
    quizData.forEach((question, index) => {
        if (question.source && !uniqueSources.has(question.source)) {
            uniqueSources.add(question.source);
            const sourceItem = document.createElement('div');
            sourceItem.className = 'source-item';
            sourceItem.innerHTML = `
                <strong>Source:</strong> ${question.source}<br>
                <em>Used in: ${question.question.substring(0, 50)}...</em>
            `;
            sourcesList.appendChild(sourceItem);
        }
    });
}

// Enhanced option selection with mobile-friendly feedback
function addInteractiveEffects() {
    // Desktop hover effects
    if (!isMobile()) {
        document.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('option') && !e.target.classList.contains('disabled')) {
                e.target.style.transform = 'translateX(10px) scale(1.02)';
            }
            if (e.target.classList.contains('btn')) {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
            }
        });
        
        document.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('option') && !e.target.classList.contains('disabled')) {
                e.target.style.transform = 'translateX(0) scale(1)';
            }
            if (e.target.classList.contains('btn')) {
                e.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }
    
    // Touch effects for mobile
    document.addEventListener('touchstart', (e) => {
        if (e.target.classList.contains('option') && !e.target.classList.contains('disabled')) {
            e.target.style.transform = 'translateX(5px) scale(1.02)';
            e.target.style.backgroundColor = '#e8e8e8';
        }
        if (e.target.classList.contains('btn')) {
            e.target.style.transform = 'translateY(-2px) scale(1.02)';
        }
    });
    
    document.addEventListener('touchend', (e) => {
        if (e.target.classList.contains('option')) {
            setTimeout(() => {
                e.target.style.transform = 'translateX(0) scale(1)';
                if (!e.target.classList.contains('correct') && !e.target.classList.contains('incorrect')) {
                    e.target.style.backgroundColor = '#f5f5f5';
                }
            }, 150);
        }
        if (e.target.classList.contains('btn')) {
            setTimeout(() => {
                e.target.style.transform = 'translateY(0) scale(1)';
            }, 150);
        }
    });
}

// Detect mobile devices
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           (window.innerWidth <= 768 && 'ontouchstart' in window);
}

// Add floating animation to category buttons
function addFloatingAnimation() {
    const categoryButtons = document.querySelectorAll('.btn-category');
    categoryButtons.forEach((btn, index) => {
        btn.style.animation = `float 3s ease-in-out infinite`;
        btn.style.animationDelay = `${index * 0.5}s`;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements first
    initializeElements();
    
    // Add event listeners
    addCategoryListeners();
    addButtonListeners();
    
    // Add interactive effects
    addInteractiveEffects();
    addFloatingAnimation();
    
    // Ensure proper initial state
    if (categorySelector) {
        categorySelector.style.display = 'block';
    }
    if (quizContainer) {
        quizContainer.style.display = 'none';
    }
    if (resultContainer) {
        resultContainer.style.display = 'none';
    }
});
