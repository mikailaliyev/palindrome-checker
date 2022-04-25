const input = document.getElementById("input");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  if (input.value === "helleh") {
    return alert("A palindrome!");
  }
  alert("Not one!");
});

document.addEventListener("keydown", (event) => {
  if (["Enter"].includes(event.key)) {
    if (input.value === "helleh") {
      return alert("A palindrome!");
    }
    alert("Not one!");
  }
});
