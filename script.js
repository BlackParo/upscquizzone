const category = localStorage.getItem("category");

let questions;

if (category === "mixed") {

    questions = [
        ...allQuestions.polity,
        ...allQuestions.history,
        ...allQuestions.geography,
        ...allQuestions.economy,
        ...allQuestions.science,
        ...allQuestions.environment,
        ...allQuestions.current
    ];

} else {

    questions = allQuestions[category];

}
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionNumber = document.getElementById("question-number");

const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;

function startQuiz(){

    currentQuestionIndex = 0;
    score = 0;
    const username = localStorage.getItem("username");

    if(username){
        document.getElementById("welcome-user").textContent =
        "👋 Welcome, " + username + "!";
    }

    showQuestion();
}


function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];

    questionNumber.innerHTML =
    `Question ${currentQuestionIndex+1}/${questions.length}`;

    questionElement.innerHTML = currentQuestion.question;

    progressBar.style.width =
    ((currentQuestionIndex)/questions.length)*100 + "%";

    currentQuestion.answers.forEach(answer=>{

        const button=document.createElement("button");

        button.innerHTML=answer.text;
        button.classList.add("answer-btn");

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

        button.addEventListener("click",selectAnswer);

        answerButtons.appendChild(button);

    });

    startTimer();

}

function startTimer(){

    clearInterval(timer);

    timeLeft=30;

    timerElement.innerHTML="Time Left : "+timeLeft+"s";

    timer=setInterval(()=>{

        timeLeft--;

        timerElement.innerHTML="Time Left : "+timeLeft+"s";

        if(timeLeft<=0){

            clearInterval(timer);

            nextButton.style.display="block";

        }

    },1000);

}

function resetState(){

    nextButton.style.display="none";

    while(answerButtons.firstChild){

        answerButtons.removeChild(answerButtons.firstChild);

    }

}

function selectAnswer(e){

    clearInterval(timer);

    const selectedBtn=e.target;

    const correct=selectedBtn.dataset.correct==="true";

    if(correct){

        score++;

        selectedBtn.style.background="green";
        selectedBtn.style.color="#fff";

    }else{

        selectedBtn.style.background="red";
        selectedBtn.style.color="#fff";

    }

    Array.from(answerButtons.children).forEach(button=>{

        if(button.dataset.correct==="true"){

            button.style.background="green";
            button.style.color="#fff";

        }

        button.disabled=true;

    });

    nextButton.style.display="block";

}

function showScore(){

    resetState();

    progressBar.style.width="100%";

    timerElement.innerHTML="Completed";

    const username = localStorage.getItem("username") || "Player";
const percentage = Math.round((score / questions.length) * 100);

let leaderboard =
JSON.parse(localStorage.getItem("leaderboard")) || [];

const existingPlayer = leaderboard.find(
    player =>
        player.username === username &&
        player.category === category
);

if (!existingPlayer) {

    leaderboard.push({
        username,
        category,
        score,
        total: questions.length,
        percentage
    });

} else if (score > existingPlayer.score) {

    existingPlayer.score = score;
    existingPlayer.total = questions.length;
    existingPlayer.percentage = percentage;

}

localStorage.setItem(
    "leaderboard",
    JSON.stringify(leaderboard)
);
questionElement.innerHTML =
`🎉 Congratulations, <b>${username}</b>!<br><br>Your Score : ${score}/${questions.length}`;

    nextButton.innerHTML = "🏆 Leaderboard";

    nextButton.style.display="block";

}

nextButton.addEventListener("click", () => {

    // Agar quiz complete ho gaya hai
    if (currentQuestionIndex >= questions.length - 1 && nextButton.innerHTML === "🏆 Leaderboard") {
        window.location.href = "leaderboard.html";
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }

});

startQuiz();
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️ Light Mode";
    }else{
        themeBtn.innerHTML = "🌙 Dark Mode";
    }
});
