const yearElement = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

document.addEventListener("DOMContentLoaded", function() {
    const headerItem = document.querySelector('.header-item');
  
    headerItem.addEventListener('mouseleave', function() {
      const dropdownMenu = this.querySelector('.dropdown-menu');
      dropdownMenu.style.display = 'none';
    });
  
    headerItem.addEventListener('mouseenter', function() {
      const dropdownMenu = this.querySelector('.dropdown-menu');
      dropdownMenu.style.display = 'block';
    });
  });
document.addEventListener("DOMContentLoaded", function() {
    const headerItem = document.querySelector('.license');
    const popupBackground = document.querySelector('.license-popup__background');
    const popup = document.querySelector('.license-popup');
    const closeButton = document.querySelector('.close-button');
  
    if (headerItem) {
      headerItem.addEventListener('click', function(e) {
        e.preventDefault();
        popupBackground.style.display = 'block';
        popup.classList.add('show');
      });
    }
  
    if (popupBackground) {
      popupBackground.addEventListener('click', function() {
        popupBackground.style.display = 'none';
        popup.classList.remove('show');
      });
    }
  
    if (closeButton) {
      closeButton.addEventListener('click', function() {
        popupBackground.style.display = 'none';
        popup.classList.remove('show');
      });
    }
});