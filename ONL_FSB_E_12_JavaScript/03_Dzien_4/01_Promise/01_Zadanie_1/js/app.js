const ulList = document.querySelector(".list-group");

const getNames = function () {
  const names = ["Jan", "Piotr", "Anna"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(names);
    }, 2000);
  });
};

function renderNames(names) {
  names.forEach(name=>{
    const newLi = document.createElement("li");
    newLi.classList.add("list-group-item");
    newLi.innerText = name
    ulList.append(newLi)
      }
  )



}

getNames().then(renderNames)