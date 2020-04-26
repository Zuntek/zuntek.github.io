(function ($) {
    "use strict"; // Start of use strict


    // Loading animation


    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            var header_size = 77;
            if ($(window).width() <= 767)
                header_size = 282;
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - header_size)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);


    //Technology Carousel
    $('.technology-slider').owlCarousel({
        loop: true,
        margin: 70,
        items: 6,
        nav: false,
        dots: false,
        responsiveClass: true,
        autoplay: 2500,
        autoplayHoverPause: true,
        slideSpeed: 300,
        paginationSpeed: 500,
        responsive: {
            0: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1024: {
                items: 4,
            },
            1224: {
                items: 6
            }
        }
    });

})(jQuery); // End of use strict

// Fade smooth screen loader
$(window).on('load', function(){
    setTimeout(function () {
        $('#loading-cover').fadeOut(300)
    },200)
})

//Check if form submit was sent

$(window).on('load', function(){
    let url = window.location.href
    if (url.includes('#success_contact')){
        $('#contactModal').modal()
    }
})





