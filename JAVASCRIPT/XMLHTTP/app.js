const req = new XMLHttpRequest();
req.onload = function () {
  console.log("IT LOADED!!");
  console.log(this);
};
req.onerror = function () {
  console.log("ERROR!!");
  console.log(this);
};
req.open("GET", "https://swapi.dev/api/people/1/");
req.send();
