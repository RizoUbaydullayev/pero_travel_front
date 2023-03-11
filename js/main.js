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