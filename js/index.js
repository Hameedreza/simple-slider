let images = ["images/slide-1.jpg","images/slide-2.jpg","images/slide-3.jpg"];
const image = document.querySelector('img');
const nextBtn = document.querySelector('.slider__button-next');
const prevBtn = document.querySelector('.slider__button-prev');
const playBtn = document.querySelector('.slider__button-play');
let currentImage = 0;

const nextImage= ()=> {
  if( currentImage < images.length - 1){
    currentImage++;
  } else{
    currentImage= 0;
  }
  image.src = images[currentImage];
}

const prevImage= ()=> {
  if( currentImage > 0){
    currentImage--;
  } else{
    currentImage= images.length - 1;
  }
  image.src = images[currentImage];
}

let interval;
const autoplay = ()=>{
  if(interval){
    clearInterval(interval);
    interval = null;
  }else{
    interval = setInterval(()=>{
      nextImage();
    }, 1000);
  }
  playBtn.children[0].classList.toggle('fa-play');
  playBtn.children[0].classList.toggle('fa-pause');
}

nextBtn.addEventListener('click' , nextImage);
prevBtn.addEventListener('click' , prevImage);
playBtn.addEventListener('click' , autoplay);
