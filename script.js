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

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let quizData = [];
let currentCategory = '';

// DOM Elements
const categorySelector = document.getElementById('category-selector');
const geographyBtn = document.getElementById('geography-btn');
const historyBtn = document.getElementById('history-btn');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const progressElement = document.getElementById('progress');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const finalScoreElement = document.getElementById('final-score');
const resultMessageElement = document.getElementById('result-message');
const scoreBreakdownElement = document.getElementById('score-breakdown');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

// Category selection
geographyBtn.addEventListener('click', () => {
    currentCategory = 'Geography';
    quizData = geographyQuestions;
    startQuiz();
});

historyBtn.addEventListener('click', () => {
    currentCategory = 'African History';
    quizData = historyQuestions;
    startQuiz();
});

// Start quiz
function startQuiz() {
    categorySelector.style.display = 'none';
    quizContainer.style.display = 'block';
    initQuiz();
}

// Initialize quiz
function initQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    totalQuestionsElement.textContent = quizData.length;
    loadQuestion();
}

// Load question
function loadQuestion() {
    const question = quizData[currentQuestion];
    
    // Update question counter
    currentQuestionElement.textContent = currentQuestion + 1;
    
    // Update progress bar
    const progress = ((currentQuestion) / quizData.length) * 100;
    progressElement.style.width = progress + '%';
    
    // Display question
    questionElement.textContent = question.question;
    
    // Display options
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectOption(index, optionDiv));
        optionsElement.appendChild(optionDiv);
    });
    
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

// Next question handler
nextBtn.addEventListener('click', () => {
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Show results
function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    // Display final score
    finalScoreElement.textContent = score;
    
    // Display result message
    const percentage = (score / quizData.length) * 100;
    let message = '';
    
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
    
    resultMessageElement.textContent = message;
    
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

// Restart quiz
restartBtn.addEventListener('click', () => {
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    initQuiz();
});

// Go back to category selection
homeBtn.addEventListener('click', () => {
    resultContainer.style.display = 'none';
    categorySelector.style.display = 'block';
    currentCategory = '';
    quizData = [];
});
