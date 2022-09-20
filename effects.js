$(document).ready(function() {

    let inViewportResume = false;
    let inViewportQuote = false;
    let inViewportMap = false;

    window.addEventListener('scroll', function() {
        let elementResume = document.querySelector('.a-container');
        let positionResume = elementResume.getBoundingClientRect();

        let elementQuote = document.querySelector('.quote-view');
        let positionQuote = elementQuote.getBoundingClientRect();

        let elementMap = document.querySelector('.map-view');
        let positionMap = elementMap.getBoundingClientRect();
        
        // checking for partial visibility
        if((positionResume.top-100) < window.innerHeight && positionResume.bottom >= 0) {
            if (!inViewportResume) $('.card-container').show().animate({'margin-right': '40px'});
            inViewportResume = true;
        } else {
            inViewportResume = false;
            $('.card-container').hide().css('margin-right', '20px');
        }

        if((positionQuote.top) < window.innerHeight && positionQuote.bottom >= 0) {
            if (!inViewportQuote) $('#quote-container').fadeIn("slow");
            inViewportQuote = true;
        } else {
            inViewportQuote = false;
            $('#quote-container').hide();
        }

        
        if((positionMap.top) < window.innerHeight && positionMap.bottom >= 0) {
            if (!inViewportMap) $('.world-map').fadeIn("slow");
            inViewportMap = true;
        } else {
            inViewportMap = false;
            $('.world-map').hide();
        }
    });

    $('#hamburger-container').on('click', function(e) {
        e.stopPropagation(); 
        $('#contact').show();
        $('#contact').animate({'margin-left': '90%'});
    });

    document.addEventListener('mousemove', (event) => {
        let x = event.clientX;
        let y =  event.clientY;
        if ((x >= 0 && x <= 1212) && (y >= 361 && y <= 731)) {
            $(".main-view").css("background-position-y", "-0.1em");
            $(".main-view").css("background-position-x", "0.05em");
        } else {
            $(".main-view").css("background-position-y", "0");
            $(".main-view").css("background-position-x", "0");
        }
    });
    
    $('.education').hover(function() {
        $('#esi-description').show();
    }, function() {
        $('#esi-description').hide();
    });

    $('#belgium').on('click', function(e) {
        e.stopPropagation(); 
        $('#belgium-description').show();
    });

    $('#reunion').on('click', function(e) {
        e.stopPropagation(); 
        $('#reunion-description').show();
    });

    $('body').on('click', function() {
        $('#contact').animate({'margin-left': '0'}).delay(1).hide(0);
        $('#belgium-description').hide();
        $('#reunion-description').hide();
    });
})