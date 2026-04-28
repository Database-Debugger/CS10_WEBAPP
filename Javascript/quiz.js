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
  if (ans1 == "ferrari") {
    score++;
    q1Input.style.border = "3px solid green";
    q1result.innerHTML = "Correct";
    q1result.style.color = "green";
  } else {
    q1Input.style.border = "3px solid red";
    q1result.innerHTML = "Wrong";
    q1result.style.color = "red";
  }

  // Q2
  let ans2 = q2Input.value.toLowerCase().trim();
  if (ans2 == "drs" || ans2 == "drag reduction system") {
    score++;
    q2Input.style.border = "3px solid green";
    q2result.innerHTML = "Correct";
    q2result.style.color = "green";
  } else {
    q2Input.style.border = "3px solid red";
    q2result.innerHTML = "Wrong";
    q2result.style.color = "red";
  }

  // Q3
  let ans3 = q3Input.value.toLowerCase().trim();
  if (ans3 == "singapore") {
    score++;
    q3Input.style.border = "3px solid green";
    q3result.innerHTML = "Correct";
    q3result.style.color = "green";
  } else {
    q3Input.style.border = "3px solid red";
    q3result.innerHTML = "Wrong";
    q3result.style.color = "red";
  }

  // Q4
  let ans4 = q4Input.value.toLowerCase().trim();
  if (ans4 == "rindt") {
    score++;
    q4Input.style.border = "3px solid green";
    q4result.innerHTML = "Correct";
    q4result.style.color = "green";
  } else {
    q4Input.style.border = "3px solid red";
    q4result.innerHTML = "Wrong";
    q4result.style.color = "red";
  }

  // Grade Calc
  let percent = (score / 4) * 100;

  // Score Output
  scoreDisplay.innerHTML = "Your Score: " + score + "/4 (" + percent + "%)";

  // Quiz Final Comment
  if (score == 4) {
    comment.innerHTML =
      "P1! Pure dominance. Welcome to the team, World Champion. You know more than some officials";
  } else if (score == 3) {
    comment.innerHTML =
      "Solid points finish. You've earned a seat as a Reserve Driver. You got some knowledge";
  } else if (score == 2) {
    comment.innerHTML =
      "Box, Box! The pace just isn't there. Back to Karting for you. GET BACK TO STUDYING";
  } else {
    comment.innerHTML =
      "DNF. You're miles off the pace. Did you even warm up your brain?";
  }
}
