// Magic 8 Ball 

// Variables to stpre HTML Elements
let ballsEl = document.getElementById("ateball");
let answer = document.getElementById("AI");


// Event Listener
ballsEl.addEventListener("click", fortrand);

// Event Function
function fortrand () {

    // Input
    let quest = document.getElementById("question").value; 

    // Output
    if (quest === "") {
        answer.innerHTML = 'Please enter a question.';
    } else if (quest === "Does a magic 8 ball actually work?") {
        answer.innerHTML = 'How dare you doubt me!';
    } else if (quest === "Is JavaScript awesome?") {
        answer.innerHTML = 'Of Course!'
    } else {
        let randNum = Math.random();

        if (randNum <0.2) {
            answer.innerHTML = "Without a Doubt."
        } else if (randNum <0.4) {
            answer.innerHTML = "As I see it, yes."
        } else if (randNum <0.6) {
            answer.innerHTML = "Concentrate and ask again."
        } else if (randNum <0.8) {
            answer.innerHTML = "Dont count on it."
        } else {
            answer.innerHTML = "Outlook not so good."
        }
    }

}
