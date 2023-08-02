//const exams = [80, 98, 92, 50, 77, 90, 89, 84, 81, 77];
//exams.every((score) => score >= 75);
const person = {
  firstName: "viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullName());
    }, 3000);
  },
};
person.shoutName();
