import "../styles/style.css";

const DOM = {
  card1: document.getElementById("Card1"),
  card2: document.getElementById("Card2"),
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

let x = Math.floor(Math.random() * 2) + 1;
let y = Math.floor(Math.random() * 2) + 1;
while (x === y) {
  x = Math.floor(Math.random() * 2) + 1;
}

function generatenumber(number1, number2) {
  DOM.card1 = number1;
  DOM.card2 = number2;
  console.log(DOM.card1);
  console.log(DOM.card2);
}

generatenumber(x, y);

function result() {
  if (DOM.card1 === 1) {
    console.log("u got joker");
  } else {
    console.log("u win");
  }
}
result();
