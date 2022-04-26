let input = document.getElementById("input");
const button = document.getElementById("btn");
let result = document.getElementById("result");
console.log(input);
//setting initial checker function
const checkIt = () => {
  let newArr = [];
  let value = input.value;
  if (input.value.length < 2) {
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
    newArr.length < 2 ? "Not a palindrom now, but might be one!" : "Nope, it's not a palindrome");
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
