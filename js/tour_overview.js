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

const reviews_slider = new Swiper('.route_description_slider', {
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

