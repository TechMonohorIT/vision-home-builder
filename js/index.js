    
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





document.querySelectorAll('.image-slider').forEach((slider) => {
  const section = slider.closest('.projects-container'); // Get parent section
  const slides = slider.querySelectorAll('.slide');
  const thumbs = section.querySelectorAll('.thumb');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  prevBtn?.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  });

  nextBtn?.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  });

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      showSlide(i);
    });
  });

  showSlide(currentIndex); // Initialize
});









// Projects Page card slider_Last-section==js
const track = document.querySelector('.card-slider-track');
const cards = document.querySelectorAll('.card-box');
const btnNext = document.getElementById('nextBtn');
const btnPrev = document.getElementById('prevBtn');

let sliderIndex = 0;

function getCardsPerView() {
    return window.innerWidth <= 767 ? 1 : 2;
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

