const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', setNextQuestion);
answerButtonsElement.addEventListener('click', selectAnswer);

function startGame() {
    
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    showQuestion(0);
    
}

function showQuestion(questionIndex) {

    questionElement.innerHTML = questions[questionIndex].question;

}

function setNextQuestion() {

}

function selectAnswer() {

}
