'use strict';

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
			slidesPerView: 3
		},

		425: {
			slidesPerView: 1
		},
		320: {
			slidesPerView: 1
		}
	}
});