import "../styles/style.css";

const DOM = {
  card1: document.getElementById("Card1"),
  card2: document.getElementById("Card2"),
  page: document.getElementById("resultpage"),
  historybtn: document.getElementById("historybtn"),
  historyresult: document.getElementById("historyresult"),
};

const resulthistory = [];
let joker = 0;
let notjoker = 0;

function generaterandomnumber() {
  let x = Math.floor(Math.random() * 2) + 1;
  let y = Math.floor(Math.random() * 2) + 1;

  if (x === 1) {
    y = 2;
  } else if (x === 2) {
    y = 1;
  }
  DOM.card1 = x;
  DOM.card2 = y;
}

function result() {
  if (DOM.card1 === 1) {
    DOM.page.innerHTML = "You got joker! You lost!";
    resulthistory.push("joker");
  } else if (DOM.card1 === 2) {
    DOM.page.innerHTML = "It wasn't a joker. You are safe!";
    resulthistory.push("notjoker");
  }
  if (DOM.card2 === 1) {
    DOM.page.innerHTML = "You got joker! You lost!";
    resulthistory.push("joker");
  } else if (DOM.card2 === 2) {
    DOM.page.innerHTML = "It wasn't a joker. You are safe!";
    resulthistory.push("notjoker");
  }
}

DOM.card1.addEventListener("click", function () {
  generaterandomnumber();
  result();
  console.log(DOM.card1);
});

DOM.card2.addEventListener("click", function () {
  generaterandomnumber();
  result();
  console.log(DOM.card2);
});

DOM.historybtn.addEventListener("click", function () {
  DOM.historyresult.innerHTML = `${resulthistory}`;
});
