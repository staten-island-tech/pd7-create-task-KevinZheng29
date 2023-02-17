import "../styles/style.css";

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

const DOM = {
  start: document.getElementById("startbtn"),
  cardpage: document.getElementById("cardpage"),
  page: document.getElementById("resultpage"),
  historybtn: document.getElementById("historybtn"),
  historyresult: document.getElementById("historyresult"),
};

DOM.start.addEventListener("click", function () {
  this.remove();
  game();
});

function game() {
  generatenumber(a, b, c);
  gamesystem();
}

function displaycard() {
  DOM.cardpage.innerHTML = `
<img id="Card1" class="card" src="https://opengameart.org/sites/default/files/card%20back%20red.png"><img>

<img id="Card2" class="card" src="https://opengameart.org/sites/default/files/card%20back%20red.png"><img>

<img id="Card3" class="card" src="https://opengameart.org/sites/default/files/card%20back%20red.png"><img>
`;
  let card1 = document.getElementById("Card1");
  let card2 = document.getElementById("Card2");
  let card3 = document.getElementById("Card3");
  return { card1, card2, card3 };
}

let card1number;
let card2number;
let card3number;

let cardleft = 3;

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

function gamesystem() {
  let jokernumber = Math.floor(Math.random() * 3) + 1;
  displaycard();
  let cards = displaycard();
  cards.card1.addEventListener("click", function () {
    if (card1number === jokernumber) {
      DOM.page.innerHTML = "";
      DOM.cardpage.innerHTML = `
      <img class="img" src="https://th.bing.com/th/id/R.4cd75e78c5aacd5368b1f89b5f560e8a?rik=YkM41%2bvIuBE66g&pid=ImgRaw&r=0"><img>
      <div class="resultsentence">You got the joker!</div>
      <button class="playagain">Play Again</button>
      `;
      restartbtn();
      addlost();
      seehistory();
      jokernumber = Math.floor(Math.random() * 3) + 1;
    } else {
      this.remove();
      cardleft = cardleft - 1;
      if (cardleft === 2) {
        DOM.page.innerHTML = `<div class="resultsentence">This card wasn't the joker. Choose one more card!</div>`;
      } else {
        DOM.page.innerHTML = "";
        DOM.cardpage.innerHTML = `
        <img class="img2" src="https://th.bing.com/th/id/OIP.YyZpwBZLNULMV053kDBCrQHaHw?pid=ImgDet&rs=1"><img>
        <div class="resultsentence">All cards you chose was not the joker. You win!</div>
        <button class="playagain">Play Again</button>
        `;
        restartbtn();
        addwin();
        seehistory();
      }
    }
  });
  cards.card2.addEventListener("click", function () {
    if (card2number === jokernumber) {
      DOM.page.innerHTML = "";
      DOM.cardpage.innerHTML = `
      <img class="img" src="https://th.bing.com/th/id/R.4cd75e78c5aacd5368b1f89b5f560e8a?rik=YkM41%2bvIuBE66g&pid=ImgRaw&r=0"><img>
      <div class="resultsentence">You got the joker!</div>
      <button class="playagain">Play Again</button>
      `;
      restartbtn();
      addlost();
      seehistory();
      jokernumber = Math.floor(Math.random() * 3) + 1;
    } else {
      this.remove();
      cardleft = cardleft - 1;
      if (cardleft === 2) {
        DOM.page.innerHTML = `<div class="resultsentence">This card wasn't the joker. Choose one more card!</div>`;
      } else {
        DOM.page.innerHTML = "";
        DOM.cardpage.innerHTML = `
        <img class="img2" src="https://th.bing.com/th/id/OIP.YyZpwBZLNULMV053kDBCrQHaHw?pid=ImgDet&rs=1"><img>
        <div class="resultsentence">All cards you chose was not the joker. You win!</div>
        <button class="playagain">Play Again</button>
        `;
        restartbtn();
        addwin();
        seehistory();
      }
    }
  });
  cards.card3.addEventListener("click", function () {
    if (card3number === jokernumber) {
      DOM.page.innerHTML = "";
      DOM.cardpage.innerHTML = `
      <img class="img" src="https://th.bing.com/th/id/R.4cd75e78c5aacd5368b1f89b5f560e8a?rik=YkM41%2bvIuBE66g&pid=ImgRaw&r=0"><img>
      <div class="resultsentence">You got the joker!</div>
      <button class="playagain">Play Again</button>
      `;
      restartbtn();
      addlost();
      seehistory();
      jokernumber = Math.floor(Math.random() * 3) + 1;
    } else {
      this.remove();
      cardleft = cardleft - 1;
      if (cardleft === 2) {
        DOM.page.innerHTML = `<div class="resultsentence">This card wasn't the joker. Choose one more card!</div>`;
      } else {
        DOM.page.innerHTML = "";
        DOM.cardpage.innerHTML = `
        <img class="img2" src="https://th.bing.com/th/id/OIP.YyZpwBZLNULMV053kDBCrQHaHw?pid=ImgDet&rs=1"><img>
        <div class="resultsentence">All cards you chose was not the joker. You win!</div>
        <button class="playagain">Play Again</button>
        `;
        restartbtn();
        addwin();
        seehistory();
      }
    }
  });
}

function seehistory() {
  history.forEach((history) => {
    DOM.historyresult.innerHTML = `
    <div> Win: ${history.win}</div> 
    </div> Lost: ${history.lost}</div>`;
  });
}

seehistory();

function restartbtn() {
  let reset = document.querySelector(".playagain");
  reset.addEventListener("click", function () {
    if (cardleft === 1) {
      cardleft = cardleft + 2;
    } else if (cardleft === 2) {
      cardleft = cardleft + 1;
    }
    DOM.cardpage.innerHTML = "";
    game();
  });
}
