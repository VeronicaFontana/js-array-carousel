const itemsWrapper = document.querySelector(".items-wrapper");
const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");

const images = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]

btnDown.classList.add("hide");

for(i = 0; i < 5; i++){
  console.log(images[i]);

  const img = images[i];
  itemsWrapper.innerHTML += `<img src = "${img}" class ="items hide">`
}

const itemsCollection = document.getElementsByClassName("items");

let counterImg = 0;
itemsCollection[counterImg].classList.remove("hide");

btnUp.addEventListener("click", function(){
  itemsCollection[counterImg].classList.add("hide");

  counterImg ++;

  itemsCollection[counterImg].classList.remove("hide");

  btnDown.classList.remove("hide"); 
}) 

btnDown.addEventListener("click", function(){
  itemsCollection[counterImg].classList.add("hide");

  counterImg --;

  itemsCollection[counterImg].classList.remove("hide");
}) 

if (counterImg === (itemsCollection.length - 1)){
  btnUp.classList.add("hide");
}

if(counterImg === 0){
  btnDown.classList.add("hide");
}


