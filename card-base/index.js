const { gsap} = window;

var bgImage = document.getElementsByClassName("current-image")[0].src;

document.getElementsByClassName("bg")[0].src = bgImage

const buttons = {
  prev: document.querySelector(".prev"),
  next: document.querySelector(".next"),
};

buttons.next.addEventListener('click', () => reIndex("next"));
buttons.prev.addEventListener('click', () => reIndex("prev"));

function reIndex(dir){
  const indexSlide = document.querySelector(".current-slide");
  const nextSlide = document.querySelector(".next-slide");
  const prevSlide = document.querySelector(".previous-slide");

  const indexImage = document.querySelector(".current-image");
  const nextImage = document.querySelector(".next-image");
  const prevImage = document.querySelector(".previous-image");
  
  buttons.next.classList.add("tempo-disable");
  buttons.prev.classList.add("tempo-disable");

  if(dir === "next"){
    indexSlide.classList.remove("current-slide");
    indexSlide.classList.add("previous-slide");

    nextSlide.classList.remove("next-slide");
    nextSlide.classList.add("current-slide");

    prevSlide.classList.remove("previous-slide");
    prevSlide.classList.add("next-slide");


    indexImage.classList.remove("current-image");
    indexImage.classList.add("previous-image");

    nextImage.classList.remove("next-image");
    nextImage.classList.add("current-image");

    prevImage.classList.remove("previous-image");
    prevImage.classList.add("next-image");
  }else{
    indexSlide.classList.remove("current-slide");
    indexSlide.classList.add("next-slide");

    nextSlide.classList.remove("next-slide");
    nextSlide.classList.add("previous-slide");

    prevSlide.classList.remove("previous-slide");
    prevSlide.classList.add("current-slide");


    indexImage.classList.remove("current-image");
    indexImage.classList.add("next-image");

    nextImage.classList.remove("next-image");
    nextImage.classList.add("previous-image");

    prevImage.classList.remove("previous-image");
    prevImage.classList.add("current-image");
  }
  bgImage = document.getElementsByClassName("current-image")[0].src;
  document.getElementsByClassName("bg")[0].src = bgImage

  setTimeout(()=>{
    buttons.next.classList.remove("tempo-disable");
    buttons.prev.classList.remove("tempo-disable");
  }, 500)
}

