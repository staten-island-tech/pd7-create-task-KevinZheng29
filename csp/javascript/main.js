import "../styles/style.css";

const DOM = {
  card1: document.getElementById("Card1"),
  card2: document.getElementById("Card2"),
  card3: document.getElementById("Card3"),
  cardpage: document.getElementById("cardpage"),
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

let cardleft = 3;

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
    DOM.cardpage.innerHTML = `
    <div class="resultsentence">You got the joker!</div>
    <button class="playagain">Play Again</button>
    `;
    addlost();
    seehistory();
    jokernumber = Math.floor(Math.random() * 3) + 1;
  } else {
    this.remove();
    cardleft = cardleft - 1;
    if (cardleft === 2) {
      DOM.page.innerHTML = `<div class="resultsentence">This card wasn't the joker. Choose one more card!</div>`;
    } else {
      DOM.cardpage.innerHTML = `
      <div class="resultsentence">All cards you chose was not the joker. You win!</div>
      <button class="playagain">Play Again</button>
      `;
      addwin();
      seehistory();
    }
  }
});

DOM.card2.addEventListener("click", function () {
  if (card2number === jokernumber) {
    DOM.cardpage.innerHTML = `
    <div class="resultsentence">You got the joker!</div>
    <button class="playagain">Play Again</button>
    `;
    addlost();
    seehistory();
    jokernumber = Math.floor(Math.random() * 3) + 1;
  } else {
    this.remove();
    cardleft = cardleft - 1;
    if (cardleft === 2) {
      DOM.page.innerHTML = `<div class="resultsentence">This card wasn't the joker. Choose one more card!</div>`;
    } else {
      DOM.cardpage.innerHTML = `
      <div class="resultsentence">All cards you chose was not the joker. You win!</div>
      <button class="playagain">Play Again</button>
      `;

      addwin();
      seehistory();
    }
  }
});

DOM.card3.addEventListener("click", function () {
  if (card3number === jokernumber) {
    DOM.cardpage.innerHTML = `
    <div class="resultsentence">You got the joker!</div>
    <button class="playagain">Play Again</button>
    `;
    addlost();
    seehistory();
    jokernumber = Math.floor(Math.random() * 3) + 1;
  } else {
    this.remove();
    cardleft = cardleft - 1;
    if (cardleft === 2) {
      DOM.page.innerHTML = `<div class="resultsentence">This card wasn't the joker. Choose one more card!</div>`;
    } else {
      DOM.cardpage.innerHTML = `
      <div class="resultsentence">All cards you chose was not the joker. You win!</div>
      <button class="playagain">Play Again</button>
      `;
      addwin();
      seehistory();
    }
  }
});

function seehistory() {
  history.forEach((history) => {
    DOM.historyresult.innerHTML = `
    <div> Win: ${history.win}</div> 
    </div> Lost: ${history.lost}</div>`;
  });
}

seehistory();
