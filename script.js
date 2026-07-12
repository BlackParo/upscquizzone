const quizData = [
    {
        question: "Which article of the Indian Constitution deals with the Amendment procedure?",
        a: "Article 352",
        b: "Article 360",
        c: "Article 368",
        d: "Article 370",
        correct: "c",
    },
    {
        question: "Who was the chairman of the Drafting Committee of the Constitution?",
        a: "Dr. B.R. Ambedkar",
        b: "Jawaharlal Nehru",
        c: "Sardar Patel",
        d: "Rajendra Prasad",
        correct: "a",
    },
    {
        question: "The 'Quit India Movement' was started in which year?",
        a: "1940",
        b: "1942",
        c: "1945",
        d: "1947",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz');
const resultContainer = document.getElementById('result-container');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const scoreText = document.getElementById('score-text');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.classList.add('hide');
            resultContainer.classList.remove('hide');
            scoreText.innerHTML = `Bhai, tumne <b>${score}/${quizData.length}</b> questions sahi kiye! 🎯`;
        }
    } else {
        alert("Pehle option select toh karo bhai!");
    }
});
