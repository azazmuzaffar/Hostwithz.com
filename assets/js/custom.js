(function ($) {


    // Mobile Menu 

    var mainMenu = document.getElementById('main-menu');

    $('#menu-btn').on('click', function () {
        mainMenu.classList.toggle("active");
    });

    $('#close-btn').on('click', function () {
        mainMenu.classList.remove("active");
    });


    // CountDown
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        // document.getElementById("countdown").innerHTML = "<span>" + days + "</span><br>days" + "<span>" + hours + "</span><br>Hr" + "<span>" + minutes + "</span><br>Min " + "<span>" + seconds + "</span><br>Sec ";

        document.getElementById("countdown").innerHTML = "<div class='count'><span>" + days + "</span>:<br>Days</div>" + "<div class='count'><span>" + hours + "</span>:<br>hr</div>" + "<div class='count'><span>" + minutes + "</span>:<br>Min</div>" + "<div class='count'><span>" + seconds + "</span><br>Sec</div>";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);

    // Caruesel 

    $('.application-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    function owlInitialize() {
        if ($(window).width() < 992) {
            $('.review-carousel').owlCarousel({
                autoplay: false,
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    768: {
                        items: 2
                    }
                }
            });
            $('.whychoose-carousel').owlCarousel({
                autoplay: false,
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    768: {
                        items: 2
                    }
                }
            });
            $('.plan-carousel').owlCarousel({
                autoplay: false,
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    768: {
                        items: 2
                    }
                }
            });
        } else {
            $('.review-carousel').owlCarousel('destroy');
            $('.whychoose-carousel').owlCarousel('destroy');
            $('.plan-carousel').owlCarousel('destroy');
        }
    }

    $(document).ready(function (e) {
        owlInitialize()
    })

    $(window).resize(function () {
        owlInitialize()
    })

}(jQuery))