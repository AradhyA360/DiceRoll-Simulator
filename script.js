const buttonE1 = document.getElementById("roll-button");
const diceE1 = document.getElementById("dice");
const rollHistoryE1 = document.getElementById("roll-history");

let historyList = [];

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(randomNumber);
  diceE1.innerHTML = diceFace;
  historyList.push(randomNumber);
  updateRollHistory();
}

function updateRollHistory() {
  rollHistoryE1.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;
    rollHistoryE1.appendChild(listItem);
  }
}

function getDiceFace(randomNumber) {
  switch (randomNumber) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9860;";
    case 3:
      return "&#9861;";
    case 4:
      return "&#9862;";
    case 5:
      return "&#9863;";
    case 6:
      return "&#9864;";
    default:
      return "";
  }
}

buttonE1.addEventListener("click", () => {
  diceE1.classList.add("roll-animation");
  setTimeout(() => {
    diceE1.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
