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

$(document).ready(function() {
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});