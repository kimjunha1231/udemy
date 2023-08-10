const fakeRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
fakeRequest("/dogs/1")
  .then((data) => {
    console.log("DONE WITH REQUEST!");
    console.log("data is:", data);
  })
  .catch((err) => {
    console.log("OH NO!", err);
  });
