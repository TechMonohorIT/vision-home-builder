import 'swiper/css';
import { Swiper } from 'swiper';
import { EffectCoverflow } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [EffectCoverflow],
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  initialSlide: 1,
  loop: false,
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  speed: 1000,
});

// Add active class to navigation items
const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});