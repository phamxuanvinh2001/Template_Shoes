$(document).ready(function() {
    $('.slide-text').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            1000: {
                items: 1
            }
        }
    })

})