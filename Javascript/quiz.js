// HTML VARIABLES
let markButton = document.getElementById("mark-btn");
let scoreDisplay = document.getElementById("qz-rslt");
let comment = document.getElementById("comment");
let q1Input = document.getElementById("q-1");
let q2Input = document.getElementById("q-2");
let q3Input = document.getElementById("q-3");
let q4Input = document.getElementById("q-4");
let q1result = document.getElementById("result-1");
let q2result = document.getElementById("result-2");
let q3result = document.getElementById("result-3");
let q4result = document.getElementById("result-4");


// EVENT LISTENER
markButton.addEventListener("click", mark);


// Mark Event
function mark() {
    let score = 0;


    // Q1
    let ans1 = q1Input.value.toLowerCase().trim();
    if (ans1 == "confidentiality") {
        score++;
        q1Input.style.border = "3px solid green";
        q1result.innerHTML = "Correct";
        q1result.style.color = "green"
    } else {
        q1Input.style.border = "3px solid red";
        q1result.innerHTML = "Wrong";
        q1result.style.color = "red"
    }


    // Q2
    let ans2 = q2Input.value.toLowerCase().trim();
    if (ans2 == "worm") {
        score++;
        q2Input.style.border = "3px solid green";
        q2result.innerHTML = "Correct";
        q2result.style.color = "green"
    } else {
        q2Input.style.border = "3px solid red";
        q2result.innerHTML = "Wrong";
        q2result.style.color = "red"
    }


    // Q3
    let ans3 = q3Input.value.toLowerCase().trim();
    if (ans3 == "honeypot") {
        score++;
        q3Input.style.border = "3px solid green";
        q3result.innerHTML = "Correct";
        q3result.style.color = "green"
       
    } else {
        q3Input.style.border = "3px solid red";
        q3result.innerHTML = "Wrong";
        q3result.style.color = "red"
    }


    // Q4
    let ans4 = q4Input.value.toLowerCase().trim();
    if (ans4 == "phishing" || ans4 == "social") {
        score++;
        q4Input.style.border = "3px solid green";
        q4result.innerHTML = "Correct";
        q4result.style.color = "green"
    } else {
        q4Input.style.border = "3px solid red";
        q4result.innerHTML = "Wrong";
        q4result.style.color = "red"
    }


    // Grade Calc
    let percent = (score / 4) * 100;


    // Score Output
    scoreDisplay.innerHTML = "Your Score: " + score + "/4 (" + percent + "%)";


    // Quiz Final Comment
    if (score == 4) {
        comment.innerHTML = "Hired!";
    } else if (score == 3){
        comment.innerHTML = "Hired as an intern";
    } else if (score == 2) {
        comment.innerHTML = "Well, we have a job as janitor!"
    } else {
        comment.innerHTML = "YOU THINK YOU CAN GET A JOB WITH A 0 or AN 1 !?"
    }
}

