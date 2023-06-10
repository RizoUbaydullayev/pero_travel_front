// =============== header =================================
let addToFavoritesBtn = document.querySelector("#add_to_favorites");
let addToFavoritesBtnLabels = document.querySelectorAll(".add_to_favorites_label");
addToFavoritesBtnLabels.forEach(label => {
	label.addEventListener("click", (event) => {
		event.target.classList.toggle("label_checked");
	})
})

// =============== travel_calendar =================================
let travelCalendar = new AirDatepicker('.travel_calendar-calendar', {
	classes: "air_datepicker-travel_calendar",

});

let calendarDays = document.querySelectorAll(".-day-");

calendarDays.forEach(el => {
	if (!el.classList.contains('-other-month-')) {
		let startTime = "6:00";
		let endTime = "20:00";
		el.innerHTML = `
        <div class="day_inner">
            <div>${el.textContent}</div>
            <div class="tour_time">${startTime}:${endTime}</div>
        </div>`
	}
})

// =============== route_description =================================
const routeDescriptionSlider = new Swiper('.route_description_slider', {
	wrapperClass: "route_description_slider-wrap",
	slideClass: "page",
	slidesPerView: 1.5,
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
let pop_up_img = pop_up_for_gallery.children[0].children[1];
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

let reviews_slider = new Swiper('.reviews_slider', {
	wrapperClass: "reviews_slider_wrap",
	slideClass: "page",
	slidesPerView: 2.3,
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