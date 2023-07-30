var swiper = new Swiper(".indexPreview", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".myLicense", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".myAwards", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var membersSwiper = document.querySelector(".membersSwiper");
if (membersSwiper) {
    var swiper = new Swiper(membersSwiper, {
        slidesPerView: getSlidesPerView(),
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

    function getSlidesPerView() {
        if (window.innerWidth <= 687) {
            return 1;
        }
        return 3;
    }

    // Мониторим изменения размера окна и обновляем параметры слайдера
    window.addEventListener('resize', function() {
        swiper.params.slidesPerView = getSlidesPerView();
        swiper.update();
    });
}