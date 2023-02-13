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
    lost: 0,
    win: 0,
  },
];

function addlost() {
  history.forEach((history) => history.lost++);
}
function addwin() {
  history.forEach((history) => history.win++);
}

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
}

generatenumber(a, b, c);

DOM.card1.addEventListener("click", function () {
  if (card1number === jokernumber) {
    DOM.page.innerHTML = "You got joker. You lose!";
    addlost();
    jokernumber = Math.floor(Math.random() * 3) + 1;
  } else {
    DOM.page.innerHTML = "You didn't get the joker. You win!";
    addwin();
    jokernumber = Math.floor(Math.random() * 3) + 1;
  }
});

DOM.card2.addEventListener("click", function () {
  if (card2number === jokernumber) {
    DOM.page.innerHTML = "You got joker. You lose!";
    addlost();
    jokernumber = Math.floor(Math.random() * 3) + 1;
  } else {
    DOM.page.innerHTML = "You didn't get the joker. You win!";
    addwin();
    jokernumber = Math.floor(Math.random() * 3) + 1;
  }
});

DOM.card3.addEventListener("click", function () {
  if (card3number === jokernumber) {
    DOM.page.innerHTML = "You got joker. You lose!";
    addlost();
    jokernumber = Math.floor(Math.random() * 3) + 1;
  } else {
    DOM.page.innerHTML = "You didn't get the joker. You win!";
    addwin();
    jokernumber = Math.floor(Math.random() * 3) + 1;
  }
});

historybtn.addEventListener("click", function () {
  history.forEach((history) => {
    DOM.historyresult.innerHTML = `
    <div> Win: ${history.win}</div> 
    </div> Lost: ${history.lost}</div>`;
  });
});
