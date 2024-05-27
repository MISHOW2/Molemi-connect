let lastScrollTop = 0;
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
    // Scroll down, hide the header
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scroll up or at the top, show the header
    header.style.transform = 'translateY(0)';
  }
  lastScrollTop = currentScroll;
});
