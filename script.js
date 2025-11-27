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
