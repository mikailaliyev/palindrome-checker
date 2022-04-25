const input = document.getElementById("input");
const button = document.getElementById("btn");

//setting fake checker function
const checkIt = () => {
  if (input.value.split("").reverse().join("") === input.value) {
    alert("A palindrome!");
    return (input.value = "");
  }
  alert("Not one!");
  return (input.value = "");
};

//Starting checker func either with web button or with Enter button
button.addEventListener("click", () => {
  checkIt();
});

document.addEventListener("keydown", (event) => {
  if (["Enter"].includes(event.key)) {
    checkIt()
  }
});
