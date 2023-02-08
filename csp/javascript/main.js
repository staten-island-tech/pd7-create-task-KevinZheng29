import "../styles/style.css";

const DOM = {
  card1: document.getElementById("Card1"),
  card2: document.getElementById("Card2"),
  card3: document.getElementById("Card3"),
  page: document.getElementById("resultpage"),
  historybtn: document.getElementById("historybtn"),
  historyresult: document.getElementById("historyresult"),
};

const history = [
  {
    win: 0,
  },
  {
    lost: 0,
  },
];

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
  DOM.card1 = number1;
  DOM.card2 = number2;
  DOM.card3 = number3;
  console.log(DOM.card1);
  console.log(DOM.card2);
  console.log(DOM.card3);
}

generatenumber(a, b, c);

DOM.card1.addEventListener("click", function () {
  if (DOM.card1 === 1) {
    DOM.page.innerHTML = "You got joker. You lose!";
  } else {
    DOM.page.innerHTML = "You didn't get the joker. You win!";
  }
});

DOM.card2.addEventListener("click", function () {
  if (DOM.card2 === 1) {
    DOM.page.innerHTML = "You got joker. You lose!";
  } else {
    DOM.page.innerHTML = "You didn't get the joker. You win!";
  }
});

DOM.card3.addEventListener("click", function () {
  if (DOM.card3 === 1) {
    DOM.page.innerHTML = "You got joker. You lose!";
  } else {
    DOM.page.innerHTML = "You didn't get the joker. You win!";
  }
});
