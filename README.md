# 🌍 World Quiz Application

An interactive multiple-choice quiz website featuring questions about world geography and African history. Test your knowledge with engaging questions about countries, capital cities, famous attractions, African independence leaders, and colonial history.

## Features

### 📚 Two Quiz Categories
- **Geography Quiz**: 10 questions covering capital cities and world-famous attractions
- **African History Quiz**: 10 questions about founding fathers and colonial names of African nations

### ✨ Interactive Features
- **Real-time Scoring**: Track your progress as you answer questions
- **Visual Feedback**: Instant color-coded responses (green for correct, red for incorrect)
- **Progress Bar**: Visual indicator showing quiz completion
- **Score Summary**: Comprehensive results with performance-based messages
- **Answer Review**: Detailed breakdown of all questions and correct answers
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Quiz Content

### Geography Questions Cover:
- Capital cities of France, Japan, Australia, Egypt, Brazil
- Famous landmarks: Eiffel Tower, Great Wall of China, Colosseum, Taj Mahal, Machu Picchu
- World geographic knowledge

### African History Questions Cover:
- **Ghana**: Kwame Nkrumah (Founding Father)
- **Kenya**: East African Protectorate (Colonial Name)
- **South Africa**: Nelson Mandela (First Black President)
- **Zimbabwe**: Rhodesia/Southern Rhodesia (Former Name)
- **Tanzania**: Julius Nyerere (Founding Father)
- **Nigeria**: Royal Niger Company Territories (Colonial Name)
- **DR Congo**: Patrice Lumumba (Independence Leader)
- **Botswana**: Bechuanaland Protectorate (Colonial Name)
- **Egypt**: Gamal Abdel Nasser (Father of Independence)
- **Zambia**: Northern Rhodesia (Former Name)

## How to Use

1. **Open the Quiz**: Open `index.html` in any modern web browser
2. **Select Category**: Choose between Geography or African History
3. **Answer Questions**: Click on your answer choice for each question
4. **Review Results**: After completing all 10 questions, view your score and review answers
5. **Retry or Switch**: Take the same quiz again or choose a different category

## File Structure

```
quizapp/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Quiz logic and interactivity
└── README.md          # Documentation (this file)
```

## Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid layouts
- **JavaScript (ES6+)**: Interactive quiz logic and DOM manipulation

## Performance Scoring

Your quiz performance is evaluated with these messages:

- **100%**: "Perfect! You're a geography expert! 🏆"
- **80-99%**: "Excellent work! You know your geography well! 🌟"
- **60-79%**: "Good job! Keep learning about the world! 👍"
- **40-59%**: "Not bad! There's room for improvement! 📚"
- **Below 40%**: "Keep practicing! The world awaits! 🌍"

## Browser Compatibility

Works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Customization

To add more questions or modify existing ones, edit the question arrays in `script.js`:
- `geographyQuestions` array for geography quiz
- `historyQuestions` array for African history quiz

Each question object follows this structure:
```javascript
{
    question: "Your question text here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0  // Index of correct answer (0-3)
}
```

## Future Enhancements

Potential features for future updates:
- Timer mode for challenging gameplay
- Difficulty levels (Easy, Medium, Hard)
- More quiz categories (Asian History, European Geography, etc.)
- Leaderboard with local storage
- Sound effects and animations
- Share results on social media
- Multilingual support

## License

This project is open source and available for educational purposes.

## Author

Created as an educational quiz application to promote learning about world geography and African history.

---

**Enjoy testing your knowledge! 🎓**
