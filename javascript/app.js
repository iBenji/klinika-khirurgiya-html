const yearElement = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
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

document.addEventListener("DOMContentLoaded", function() {
  if (location.pathname.includes("members.html")) {
    const headerItems = document.querySelectorAll('.awards');
    const popupBackground = document.querySelector('.license-popup__background');
    const popups = document.querySelectorAll('.awards-popup');
    const closeButton = document.querySelector('.close-button');

    headerItems.forEach(function(headerItem) {
      headerItem.addEventListener('click', function(e) {
        e.preventDefault();
        const popupId = this.id.replace('awards', 'awards-popup');
        const popup = document.getElementById(popupId);
        popupBackground.style.display = 'block';
        popup.classList.add('show');
      });
    });

    const expItems = document.querySelectorAll('.exp');
    expItems.forEach(function(expItem) {
      expItem.addEventListener('click', function(e) {
        e.preventDefault();
        const popupId = this.id.replace('awards', 'awards-popup');
        const popup = document.getElementById(popupId);
        popupBackground.style.display = 'block';
        popup.classList.add('show');
      });
    });

    if (popupBackground) {
      popupBackground.addEventListener('click', function() {
        popupBackground.style.display = 'none';
        popups.forEach(function(popup) {
          popup.classList.remove('show');
        });
      });
    }

    if (closeButton) {
      closeButton.addEventListener('click', function() {
        popupBackground.style.display = 'none';
        popups.forEach(function(popup) {
          popup.classList.remove('show');
        });
      });
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  if (location.pathname.includes("news.html")) {
    var readMoreLinks = document.querySelectorAll(".read-more");
    var modal = document.getElementById("news-modal");
    var modalContent = document.getElementById("modal-content");

    readMoreLinks.forEach(function(readMoreLink) {
      readMoreLink.addEventListener("click", function(event) {
        event.preventDefault();

        var newsContent = this.parentNode;
        var newsTitle = newsContent.querySelector(".news-title").textContent;
        var newsDescription = newsContent.querySelector(".news-description").textContent;

        modalContent.querySelector(".news-title").textContent = newsTitle;
        modalContent.querySelector(".news-description").textContent = newsDescription;

        modal.style.display = "flex";
      });
    });

    modal.addEventListener("click", function(event) {
      if (event.target.classList.contains("close") || event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
// Бургер меню
var burgerMenu = document.querySelector(".header-burger__menu");
var headerList = document.querySelector(".header-navigation");

burgerMenu.addEventListener("click", function(event) {
  event.stopPropagation(); // Остановим всплытие события, чтобы бургер-меню не закрывалось сразу после клика на само меню
  
  headerList.classList.toggle("active");
});

document.addEventListener("click", function(event) {
  var targetElement = event.target;
  var isClickInside = headerList.contains(targetElement);
  
  if (!isClickInside) {
    headerList.classList.remove("active");
  }
});

// функция для прокрутки страницы вверх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // чтобы прокрутка была плавной
  });
}

// показывать/скрывать кнопку при прокрутке страницы
window.addEventListener("scroll", function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 0) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});