let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let scoreEle = document.querySelector(".score");

let highscoreEle = document.querySelector(".highscore");

question.textContent = secretNumber;

let score = 20;
let highScore = 0;

document.querySelector(".btn").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (guess === secretNumber) {
    let question = document.querySelector(".question").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct Guess";
    document.querySelector(".main-1").style.backgroundColor = "green";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too High";
    score--;
    scoreEle.textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too Low";
    score--;
    scoreEle.textContent = score;
  }
});

let againBtn = document.querySelector(".again-btn").textContent;
let main1 = document.querySelector(".main-1").textContent;
document.querySelector(".again-btn").addEventListener("click", function () {
  document.querySelector(".main-1").style.backgroundColor = "#00a9ff";
  document.querySelector(".score").textContent = 20;
});
