$(document).ready(function(){
    // Smooth Scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 50 // Adjust for navbar height
            }, 1000);
        }
    });

    // Basic Form Validation
    $("#contactForm").submit(function(event) {
        let isValid = true;
        $("#contactForm .form-control").each(function() {
            if ($(this).val() === "") {
                $(this).addClass("is-invalid");
                isValid = false;
            } else {
                $(this).removeClass("is-invalid");
            }
        });

        if (!isValid) {
            event.preventDefault();
        }
    });

    $("#contactForm .form-control").on("input", function() {
        if ($(this).hasClass("is-invalid")) {
            $(this).removeClass("is-invalid");
        }
    });
});

 // Highlight active navbar link on scroll (requires Bootstrap scrollspy)
$('body').scrollspy({ target: '#navbarNav', offset: 50 });