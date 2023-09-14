const itemsWrapper = document.querySelector(".items-wrapper");
const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");

const images = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]

images.push(" ");


for(i = 0; i < 6; i++){
  console.log(images[i]);

  const img = images[i];
  itemsWrapper.innerHTML += `<img src = "${img}" class ="items hide">`
}

const itemsCollection = document.getElementsByClassName("items");

let counterImg = 0;
itemsCollection[counterImg].classList.remove("hide");

btnUp.addEventListener("click", function(){
  itemsCollection[counterImg].classList.add("hide");

  counterImg++;

  itemsCollection[counterImg].classList.remove("hide");
  
  if (counterImg === (itemsCollection.length - 1)){
    itemsCollection[counterImg].classList.add("hide");

    counterImg = 0;

    itemsCollection[counterImg].classList.remove("hide");
  }
}) 

btnDown.addEventListener("click", function(){
  if(counterImg === 0){
    itemsCollection[counterImg].classList.add("hide");

    counterImg = (itemsCollection.length - 2);

    itemsCollection[counterImg].classList.remove("hide");
  }else{
    itemsCollection[counterImg].classList.add("hide");

    counterImg--;

    itemsCollection[counterImg].classList.remove("hide");
  }
}) 





