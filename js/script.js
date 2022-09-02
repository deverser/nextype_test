'use strict';

// Слайдер SwiperJS
const swiper = new Swiper(".mySwiper", {
	slidesPerView: 4,
	spaceBetween: 16,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		//dynamicBullets: true,
		//dynamicMainBullets: 4,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		1500: {
			slidesPerView: 4,
			spaceBetween: 16
		},
		1200: {
			slidesPerView: 4,
		},

		960: {
			slidesPerView: 3
		},

		768: {
			slidesPerView: 2
		},

		425: {
			slidesPerView: 2
		},
		320: {
			slidesPerView: 1
		}
	}
});

//Реализация переключения табов на странице
function openPage(pageName, elmnt, color) {
  // Спрятать все элементы с классом "tabcontent" по умолчанию
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("card__slider_wrapper");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Убираем нижнюю границу всех tablink кнопок
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.borderBottom = "none";
  }

  // Показываем контент определенного таба
  document.getElementById(pageName).style.display = "block";

  // Добавляем индикатор кнопки открытого таба
  elmnt.style.borderBottom = "2px solid" + color;
}

// Показываем дефолтный таб после загрузки страницы
document.getElementById("defaultOpen").click();