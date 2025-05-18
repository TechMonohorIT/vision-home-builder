    
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