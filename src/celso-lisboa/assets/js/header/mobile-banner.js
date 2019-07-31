$(document).ready(function() {
    $('.owl-carousel.owl-mobile').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        margin:10,
        responsiveClass:true,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1276:{
                items:1
            }
        }
    })
});
