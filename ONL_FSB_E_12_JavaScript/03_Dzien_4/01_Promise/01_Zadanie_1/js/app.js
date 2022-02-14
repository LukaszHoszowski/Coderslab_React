const ulList = document.querySelector(".list-group");

const getNames = function () {
  const names = ["Jan", "Piotr", "Anna"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(names);
    }, 2000);
  });
};