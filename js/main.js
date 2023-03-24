/*=========================  header slider  ================================================*/

const header_slider = new Swiper('.header_slider', {
	wrapperClass: "header_slider_wrap",
	slideClass: "page",
	slidesPerView: 4,
	spaceBetween: 20,
	loop: true,
})

/*=========================  popular excursions slider  ================================================*/

const popular_excursions_slider = new Swiper('.popular_excursions_slider', {
	wrapperClass: "popular_excursions_slider_wrap",
	slideClass: "page",
	slidesPerView: 5.1,
	spaceBetween: 20,
	freeMode: {
		enabled: true,
		sticky: false,
	},
	pagination: {
		el: ".progress_line",
		type: "progressbar",
		progressbarOpposite: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
})

/*=========================  galery  ================================================*/

let pop_up_for_gallery = document.querySelector(".pop_up_for_gallery");
let pop_up_img = pop_up_for_gallery.children[1].children[0];
let gallery_images = document.querySelector(".gallery > .gallery_images");
document.addEventListener("click", event => {
	if (event.target == pop_up_img ||
		event.target == pop_up_for_gallery.children[1]) {
		pop_up_for_gallery.style.cssText = "display: flex;";
		
	}
	else {
		gallery_images.style.cssText = "opacity: 1;";
		pop_up_for_gallery.style.cssText = "display: none;";
	}
})

document.addEventListener("click", event => {
	if (event.target.classList.contains("gallery_image")) {
		console.log(document.querySelector("body"));
		src_for_popup = window.getComputedStyle(event.target).backgroundImage;
		pop_up_for_gallery.style.cssText = "display: flex;";
		gallery_images.style.cssText = "opacity: 0.3;";
		pop_up_img.setAttribute("src", `./${src_for_popup.slice(src_for_popup.indexOf("img"), -2)}`);
	}
})

/*=========================  reviews  ================================================*/
const reviews_slider = new Swiper('.reviews_slider', {
	wrapperClass: "reviews_slider_wrap",
	slideClass: "page",
	slidesPerView: 2.3,
	// spaceBetween: 20,
	freeMode: {
		enabled: true,
		sticky: false,
	},
	pagination: {
		el: ".progress_line",
		type: "progressbar",
		progressbarOpposite: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
})

