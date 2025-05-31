    
    //This js codes for header-side-menu add conditional background scrooling a sections
    document.addEventListener('scroll', toggleHeaderScrolled);
    window.addEventListener('load', toggleHeaderScrolled); // Apply style on reload if scrolled

    function toggleHeaderScrolled() {
      const header = document.querySelector('.header-sidemenu');

      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }





// Projects Page Image Slider ==js;
const slides = document.querySelectorAll('.slide');
const thumbs = document.querySelectorAll('.thumb');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    thumbs[i].classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

showSlide(currentIndex);







// Projects Page card slider_Last-section==js
const track = document.querySelector('.card-slider-track');
const cards = document.querySelectorAll('.card-box');
const btnNext = document.getElementById('nextBtn');
const btnPrev = document.getElementById('prevBtn');

let sliderIndex = 0;

function getCardsPerView() {
    return window.innerWidth <= 768 ? 1 : 2;
}

function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 40; // include gap
    track.style.transform = `translateX(-${sliderIndex * cardWidth}px)`;
}

btnNext.addEventListener('click', () => {
    const cardsPerView = getCardsPerView();
    if (sliderIndex < cards.length - cardsPerView) {
        sliderIndex += 1;
        updateSlider();
    }
});

btnPrev.addEventListener('click', () => {
    if (sliderIndex > 0) {
        sliderIndex -= 1;
        updateSlider();
    }
});

// window.addEventListener('resize', updateSlider);

