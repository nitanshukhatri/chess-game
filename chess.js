const NUMBERS = [8, 7, 6, 5, 4, 3, 2, 1];
const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h"];
const CHESS_PIECES = {
  a1: "&#9814;",
  a2: "&#9817;",
  b1: "&#9816;",
  b2: "&#9817;",
  c1: "&#9815;",
  c2: "&#9817;",
  d1: "&#9813;",
  d2: "&#9817;",
  e1: "&#9812;",
  e2: "&#9817;",
  f1: "&#9815;",
  f2: "&#9817;",
  g1: "&#9816;",
  g2: "&#9817;",
  h1: "&#9814;",
  h2: "&#9817;",
  a7: "&#9823;",
  a8: "&#9820;",
  b7: "&#9823;",
  b8: "&#9822;",
  c7: "&#9823;",
  c8: "&#9821;",
  d7: "&#9823;",
  d8: "&#9819;",
  e7: "&#9823;",
  e8: "&#9818;",
  f7: "&#9823;",
  f8: "&#9821;",
  g7: "&#9823;",
  g8: "&#9822;",
  h7: "&#9823;",
  h8: "&#9820;",
};

let chessBoardDiv = document.querySelector(".chess-board");

for (let i = 0; i < NUMBERS.length; i++) {
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("row");
  chessBoardDiv.append(rowDiv);
  for (let j = 0; j < LETTERS.length; j++) {
    let cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    if ((i + j) % 2 === 1) cellDiv.classList.add("white-cell");
    else cellDiv.classList.add("black-cell");
    let cellTextContainer = document.createElement("div");
    cellTextContainer.classList.add("cell-text-container");
    if (NUMBERS[i] === 1) {
      let cellText = document.createElement("div");
      cellText.classList.add("cell-text-row");
      cellText.innerHTML += LETTERS[j];
      cellTextContainer.append(cellText);
    }
    if (LETTERS[j] === "h") {
      let cellText = document.createElement("div");
      cellText.classList.add("cell-text-column");
      cellText.innerHTML += NUMBERS[i];
      cellTextContainer.append(cellText);
    }
    let piece = CHESS_PIECES[LETTERS[j] + NUMBERS[i]];
    if (piece !== undefined) {
      cellDiv.innerHTML += piece;
    }
    cellDiv.append(cellTextContainer);
    rowDiv.append(cellDiv);
  }
}
