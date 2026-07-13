let selectedCategory = "";

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        document.querySelectorAll(".category-card").forEach(c => {
            c.classList.remove("active");
        });

        card.classList.add("active");

        selectedCategory = card.dataset.category;

    });

});

function startQuiz(){

    const username = document.getElementById("username").value.trim();

    if(username === ""){
        alert("Please enter your name!");
        return;
    }

    if(selectedCategory === ""){
        alert("Please select a category!");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("category", selectedCategory);

    window.location.href = "quiz.html";

}
