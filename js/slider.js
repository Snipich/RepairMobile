const swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        999: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        }
    }
});