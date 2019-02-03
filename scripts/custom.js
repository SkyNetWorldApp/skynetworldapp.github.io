document.onreadystatechange = function () {
  if (document.readyState == "complete") { // can also wait for "complete" here
    vid = document.getElementById("video")
    vid.setAttribute("src","videos/video.mp4")
  }
}

// $(window).on('load', function() { 
  // $('#status').fadeOut();
  // $('#preloader').delay(500).fadeOut('slow');
  // $('body').delay(500).css({'overflow':'visible'});
// })

new WOW().init();

var url = $("#road-modal-video").attr('src');

$("#road-modal-video").attr('src', '');

$('#video-modal').on('show.bs.modal', function (e) {
    $('body').addClass('remove');
    $("#road-modal-video").attr('src', url);
    $("#road-modal-video").attr('allow', "autoplay");
});

$("#video-modal").on('hide.bs.modal', function () {
    $("#road-modal-video").attr('src', '');
});

$('#language-modal').on('show.bs.modal', function (e) {
    $('body').addClass('remove');
});

$('.nav a').click(function () {
    $('.navbar-collapse').collapse('hide');
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('.ec-lock-container').hover(function () {
        $('.ec-lock-container .locked').toggle(20);
        $('.ec-lock-container .unlocked').toggle(20);
    }, function () {
        $('.ec-lock-container .locked').toggle(20);
        $('.ec-lock-container .unlocked').toggle(20);
    });

    $('.ps-lock-container').hover(function () {
        $('.ps-lock-container .locked').toggle(20);
        $('.ps-lock-container .unlocked').toggle(20);
    }, function () {
        $('.ps-lock-container .locked').toggle(20);
        $('.ps-lock-container .unlocked').toggle(20);
    });

    $('.t-lock-container').hover(function () {
        $('.t-lock-container .locked').toggle(20);
        $('.t-lock-container .unlocked').toggle(20);
    }, function () {
        $('.t-lock-container .locked').toggle(20);
        $('.t-lock-container .unlocked').toggle(20);
    });

    $('.f-lock-container').hover(function () {
        $('.f-lock-container .locked').toggle(20);
        $('.f-lock-container .unlocked').toggle(20);
    }, function () {
        $('.f-lock-container .locked').toggle(20);
        $('.f-lock-container .unlocked').toggle(20);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('.navbar').css('background', '#1860F0');
        }
        if ($(this).scrollTop() < 60) {
            $('.navbar').css({ 'background': 'transparent' });
        }
    });

    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function () {
                window.location.hash = hash;
            });
        }
    });
});

$('.articles-slider').owlCarousel({
    dots: true,
    loop: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});
