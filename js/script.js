const itemsWrapper = document.querySelector(".items-wrapper");
const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");

const images = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]

for(i = 0; i < 5; i++){

  console.log(images[i]);

  const img = images[i];
  itemsWrapper.innerHTML += `<img src = "${img}" class ="hide">`
}


