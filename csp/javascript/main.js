import "../styles/style.css";

const DOM = {
  card1: document.getElementById("Card1"),
  card2: document.getElementById("Card2"),
  card3: document.getElementById("Card3"),
  page: document.getElementById("resultpage"),
  historybtn: document.getElementById("historybtn"),
  historyresult: document.getElementById("historyresult"),
};

const history = [];

let card1number;
let card2number;
let card3number;

let jokernumber = Math.floor(Math.random() * 3) + 1;

let a = Math.floor(Math.random() * 3) + 1;
let b = Math.floor(Math.random() * 3) + 1;
let c = Math.floor(Math.random() * 3) + 1;
while (a === b || a === c) {
  a = Math.floor(Math.random() * 3) + 1;
}
while (b === c || b === a) {
  b = Math.floor(Math.random() * 3) + 1;
}

function generatenumber(number1, number2, number3) {
  card1number = number1;
  card2number = number2;
  card3number = number3;
  console.log(card1number);
  console.log(card2number);
  console.log(card3number);
}

generatenumber(a, b, c);

DOM.card1.addEventListener("click", function () {
  if (card1number === jokernumber) {
    DOM.page.innerHTML = "You got joker. You lose!";
    history.push("Lose");
    jokernumber = Math.floor(Math.random() * 3) + 1;
  } else {
    DOM.page.innerHTML = "You didn't get the joker. You win!";
    history.push("Win");
    jokernumber = Math.floor(Math.random() * 3) + 1;
  }
});

console.log(history);

DOM.card2.addEventListener("click", function () {
  if (card2number === jokernumber) {
    DOM.page.innerHTML = "You got joker. You lose!";
    history.push("Lose");
    jokernumber = Math.floor(Math.random() * 3) + 1;
  } else {
    DOM.page.innerHTML = "You didn't get the joker. You win!";
    history.push("Win");
    jokernumber = Math.floor(Math.random() * 3) + 1;
  }
});

DOM.card3.addEventListener("click", function () {
  if (card3number === jokernumber) {
    DOM.page.innerHTML = "You got joker. You lose!";
    history.push("Lose");
    jokernumber = Math.floor(Math.random() * 3) + 1;
  } else {
    DOM.page.innerHTML = "You didn't get the joker. You win!";
    history.push("Win");
    jokernumber = Math.floor(Math.random() * 3) + 1;
  }
});

historybtn.addEventListener("click", function () {
  historyresult.innerHTML = history;
});
