/*const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs]; //복사

const feline = { legs: 4, family: "Felidae" };
const camine = { isFurry: true, family: "Caninae" };
*/
function fullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}
