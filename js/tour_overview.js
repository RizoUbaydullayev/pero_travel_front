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



