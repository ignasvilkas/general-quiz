const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const answerElement = document.getElementsByClassName('answers');
let previousQuestionIndex = -1;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', setNextQuestion);
answerButtonsElement.addEventListener('click', selectAnswer);

function startGame() {

    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    showQuestion();
    
}

function showQuestion() {

    let questionIndex;
    do {
        questionIndex = Math.floor(Math.random() * questions.length);
    } while (questionIndex === previousQuestionIndex);;

    questionElement.innerText = questions[questionIndex].question;
    previousQuestionIndex = questionIndex;

    for (let i = 0; i < answerElement.length; i++) {
        answerElement[i].innerText = questions[questionIndex].answers[i].text;
    }
    
}

function setNextQuestion() {

    showQuestion();

}

function selectAnswer() {

}