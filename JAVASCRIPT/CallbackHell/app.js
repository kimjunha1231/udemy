/*setTimeout(() => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "orange";
    setTimeout(() => {
      document.body.style.backgroundColor = "yellow";
    }, 1000);
  }, 1000);
}, 1000);
*/
const delayedColorChange = (newColor, delay) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
  }, delay);
};
delayedColorChange("olive", 3000);
delayedColorChange("teal", 3000);
