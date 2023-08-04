const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#list");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const catName = input.value;
  const newLI = document.createElement("LI");
  newLI.innerText = catName;
  console.log(newLI);
});
