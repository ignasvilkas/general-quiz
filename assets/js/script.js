let startButton = document.getElementById('start-btn');
let questionContainerElement = document.getElementById('question-container');
let questionELement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions;
let currentQuestionIndex;

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionELement.innerText = question.question;
}

function showQuestion(question) {

}

function selectAnswer() {

}

let questions = [
    {
        question: 'What is the smallest country in the world?',
        answers: [
            { text: 'Vatican City', correct: true },
            { text: 'San Marino', correct: false },
            { text: 'Bahamas', correct: false },
            { text: 'Barbados', correct: false }
        ]
    }
]