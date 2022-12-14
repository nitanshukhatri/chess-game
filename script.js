let chess = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function draw() {
  let out = "";
  document.querySelector("#field").innerHTML = "";
  let m = 1;
  for (let i = 0; i < chess.length; i++) {
    let arr = chess[i];
    for (let k = 0; k < arr.length; k++) {
      if (m % 2 == 0) {
        document.querySelector("#field").innerHTML +=
          '<div class="chess-block bg-black" data-x="' + k + '" data-y="' + i + '"></div>';
      } else {
        document.querySelector("#field").innerHTML +=
          '<div class="chess-block" data-x="' + k + '" data-y="' + i + '"></div>';
      }
      m++;
    }
    m++;
  }
  document.querySelectorAll(".chess-block").forEach(function (element) {
    element.onclick = pawn;
  });
}

function horse() {
  document.querySelectorAll(".chess-block").forEach(function (element) {
    element.classList.remove("active");
    element.classList.remove("green");
  });
  // console.log(this);
  let x = this.dataset.x;
  let y = this.dataset.y;
  this.classList.add("green");
  // console.log(x + ' ' + y);

  if (+x + 2 < 8 && +y + 1 < 8) {
    document
      .querySelector('.chess-block[data-x="' + (+x + 2) + '"][data-y="' + (+y + 1) + '"]')
      .classList.add("active");
  }
  if (+x + 2 < 8 && +y - 1 >= 0) {
    document
      .querySelector('.chess-block[data-x="' + (+x + 2) + '"][data-y="' + (+y - 1) + '"]')
      .classList.add("active");
  }
  if (+x + 1 < 8 && +y + 2 < 8) {
    // console.log(document.querySelector('.chess-block[data-x="' + (+x + 1) + '"][data-y="' + (+y + 2) + '"]'));
    document
      .querySelector('.chess-block[data-x="' + (+x + 1) + '"][data-y="' + (+y + 2) + '"]')
      .classList.add("active");
  }
  if (x - 1 >= 0 && +y + 2 < 8) {
    document
      .querySelector('.chess-block[data-x="' + (+x - 1) + '"][data-y="' + (+y + 2) + '"]')
      .classList.add("active");
  }
  if (x - 2 >= 0 && +y + 1 < 8) {
    document
      .querySelector('.chess-block[data-x="' + (+x - 2) + '"][data-y="' + (+y + 1) + '"]')
      .classList.add("active");
  }
  if (x - 2 >= 0 && y - 1 >= 0) {
    document
      .querySelector('.chess-block[data-x="' + (+x - 2) + '"][data-y="' + (+y - 1) + '"]')
      .classList.add("active");
  }
  if (+x + 1 < 8 && y - 2 >= 0) {
    document
      .querySelector('.chess-block[data-x="' + (+x + 1) + '"][data-y="' + (+y - 2) + '"]')
      .classList.add("active");
  }
  if (x - 1 >= 0 && y - 2 >= 0) {
    document
      .querySelector('.chess-block[data-x="' + (+x - 1) + '"][data-y="' + (+y - 2) + '"]')
      .classList.add("active");
  }
}

function pawn() {
  clearField();
  let x = this.dataset.x;
  let y = this.dataset.y;
  this.classList.add("green");
  // ?????????????? ???????? ?????????? ???????????? ??????????
  for (let i = 1; i < 2; i++) {
    // document.querySelector(`.chess-block[data-x=${x - i}][data-y=${y}]`).classList.add("active");
    document.querySelector('.chess-block[data-x="' + +x + '"][data-y="' + (+y + i) + '"]').classList.add("active");
  }
}

const clearField = () => {
  document.querySelectorAll(".chess-block").forEach(function (element) {
    element.classList.remove("active");
    element.classList.remove("green");
  });
  // ?????????????? backgroundImage
  document.querySelector(".chess-block").style.backgroundImage = "none";
};

draw();
