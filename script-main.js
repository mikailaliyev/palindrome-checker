const input = document.getElementById("input");
const button = document.getElementById("btn");
const historyButton = document.getElementById("historyBtn");
const historyClear = document.getElementById("historyClear");
const historyLog = document.getElementById("historyLog");
let myHistory = [];
let result = document.getElementById("result");
console.log(input);
//setting initial checker function
const checkIt = () => {
  let newArr = [];
  let value = input.value;
  //Setting up history of palindromes array
  value ? myHistory.push(`${new Date().toLocaleString()} - ${value}`) : "";

  if (input.value.length < 2 || parseInt(input.value) < 0) {
    return (result.textContent = "Not valid");
  }
  value = value.split("");
  if (value.reverse().join("") === input.value) {
    return (result.textContent = "This is a real palindrome!");
  }
  for (let i = 0; i < value.length; i++) {
    if (!newArr.includes(value[i])) {
      newArr.push(value[i]);
    } else {
      newArr = newArr.filter((item) => item !== value[i]);
    }
  }
  console.log(newArr);
  return (result.textContent =
    newArr.length < 2
      ? "Not a palindrom now, but might be one!"
      : "Nope, it's not a palindrome");
};

//Starting checker func either with web button or with Enter button
button.addEventListener("click", () => {
  checkIt();
});

document.addEventListener("keydown", (event) => {
  if (["Enter"].includes(event.key)) {
    checkIt();
  }
});

//Showing history of palindrome checks
historyButton.addEventListener("click", () => {
  historyLog.innerHTML = "";
  myHistory.forEach((e) => (historyLog.innerHTML += e + "<br>"));
  if (historyLog.style.visibility === "hidden") {
    historyLog.style.visibility = "visible";
  } else {
    historyLog.style.visibility = "hidden";
  }
  console.log(historyLog.style.visibility);
});

//Clearing history of palindrome checks
historyClear.addEventListener("click", () => {
  myHistory = [];
  historyLog.style.visibility = "hidden";
});
