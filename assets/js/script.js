const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
}

function setNextQuestion() {
}

function selectAnswer() {

}
 
const questions = [
   {
    question: 'What is the smallest country in the world?',
    answers: [
        {text: 'San Marino', correct: false},
        {text: 'Vatican City', correct: true},
        {text: 'Bahamas', correct: false},
        {text: 'Maldives', correct: false}
    ]
   }, 
   {
    question: 'What is the name of the paradise Viking warriors go to after death?',
    answers: [
        {text: 'Heaven', correct: false},
        {text: 'Nirvana', correct: false},
        {text: 'Valhalla', correct: true},
        {text: 'Jannah', correct: false}
    ]
   }, 
   {
    question: 'What was the first feature-length movie made by Pixar?',
    answers: [
        {text: 'Toy Story', correct: true},
        {text: 'Cars', correct: false},
        {text: 'Monsters University', correct: false},
        {text: 'Finding Nemo', correct: false}
    ]
   }, 
   {
    question: 'What is the name of the coffee shop in the sitcom Friends',
    answers: [
        {text: 'Big Apple', correct: false},
        {text: 'Central Perk', correct: true},
        {text: 'Munchattan', correct: false},
        {text: 'Liberty cafe', correct: false}
    ]
   }, 
   {
    question: 'What year was the first model of the Iphone released?',
    answers: [
        {text: '2002', correct: false},
        {text: '2005', correct: false},
        {text: '1999', correct: false},
        {text: '2007', correct: true}
    ]
   }, 
   {
    question: 'What is the capital of Texas?',
    answers: [
        {text: 'San Antonio', correct: false},
        {text: 'Austin', correct: true},
        {text: 'Houston', correct: false},
        {text: 'Dallas', correct: false}
    ]
   }, 
   {
    question: 'Which famous American band was originally called "Karas Flowers"?',
    answers: [
        {text: 'Blink 182', correct: false},
        {text: 'Red Hot Chilli Peppers', correct: false},
        {text: 'Sum 41', correct: false},
        {text: 'Maroon 5', correct: true}
    ]
   },
   {
    question: 'What country were the French fries created in?',
    answers: [
        {text: 'Belgium', correct: true},
        {text: 'USA', correct: false},
        {text: 'France', correct: false},
        {text: 'United Kingdom', correct: false}
    ]
   },  
   {
    question: 'How many teeth does an adult have',
    answers: [
        {text: '28', correct: false},
        {text: '34', correct: false},
        {text: '26', correct: false},
        {text: '32', correct: true}
    ]
   }, 
   {
    question: 'How many years are there in a century?',
    answers: [
        {text: '50', correct: false},
        {text: '10', correct: false},
        {text: '100', correct: true},
        {text: '1000', correct: false}
    ]
   } 
]
