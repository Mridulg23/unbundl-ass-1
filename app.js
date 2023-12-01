$('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 40,
    nav: true,
    autoplay: true,
    autoplaySpeed: 1200,
    autoplayTimeout: 2000,
    stagePadding: 15,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        800: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})