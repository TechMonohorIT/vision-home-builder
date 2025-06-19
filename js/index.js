//This js codes for header-side-menu add conditional background scrooling a sections
document.addEventListener("scroll", toggleHeaderScrolled);
window.addEventListener("load", toggleHeaderScrolled);

function toggleHeaderScrolled() {
  const header = document.querySelector(".header-sidemenu");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// image slider related js codes
document.querySelectorAll(".image-slider").forEach((slider) => {
  const section = slider.closest(".projects-container"); // Get parent section
  const slides = slider.querySelectorAll(".slide");
  const thumbs = section.querySelectorAll(".thumb");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  prevBtn?.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  });

  nextBtn?.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  });

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => {
      showSlide(i);
    });
  });

  showSlide(currentIndex); // Initialize
});

// -------------------------------------------------------------------------------
// all page side-menu link when active font will be bold. here add classlist active
const currentPage = window.location.pathname.split("/").pop();

// Get all menu links
const menuLinks = document.querySelectorAll(".side-menu a");

menuLinks.forEach((link) => {
  // If href ends with the current page, add 'active'
  if (
    link.getAttribute("href") === currentPage ||
    (currentPage === "" && link.getAttribute("href") === "./")
  ) {
    link.classList.add("active");
  }
});
