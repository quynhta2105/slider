function fetchDogApi() {
  const cardImages = document.querySelectorAll(".slide img");

  fetch("https://dog.ceo/api/breeds/image/random/3")
    .then((response) => response.json())
    .then((data) => {
      const images = data.message;
      
      images.forEach((image, index) => {
        cardImages[index].src = image;
      });
    })
    .catch((error) => console.error("Error fetching images:", error));
}

fetchDogApi();

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
  
  //teporary disable button after click
  buttons.next.classList.add("tempo-disable");
  buttons.prev.classList.add("tempo-disable");

  if(dir === "next"){
    //switch card index
    indexSlide.classList.remove("current-slide");
    indexSlide.classList.add("previous-slide");

    nextSlide.classList.remove("next-slide");
    nextSlide.classList.add("current-slide");

    prevSlide.classList.remove("previous-slide");
    prevSlide.classList.add("next-slide");

    //switch image index
    indexImage.classList.remove("current-image");
    indexImage.classList.add("previous-image");

    nextImage.classList.remove("next-image");
    nextImage.classList.add("current-image");

    prevImage.classList.remove("previous-image");
    prevImage.classList.add("next-image");
  }else{
    //switch card index
    indexSlide.classList.remove("current-slide");
    indexSlide.classList.add("next-slide");

    nextSlide.classList.remove("next-slide");
    nextSlide.classList.add("previous-slide");

    prevSlide.classList.remove("previous-slide");
    prevSlide.classList.add("current-slide");

    //switch image index
    indexImage.classList.remove("current-image");
    indexImage.classList.add("next-image");

    nextImage.classList.remove("next-image");
    nextImage.classList.add("previous-image");

    prevImage.classList.remove("previous-image");
    prevImage.classList.add("current-image");
  }
  //set back ground image is current image
  bgImage = document.getElementsByClassName("current-image")[0].src;
  document.getElementsByClassName("bg")[0].src = bgImage

  //set time for temporary disable click
  setTimeout(()=>{
    buttons.next.classList.remove("tempo-disable");
    buttons.prev.classList.remove("tempo-disable");
  }, 500)
}

