$(window).on('load', function() {
    $('.click').on('click', function() {
        if ($('#nav-icon-collapse').hasClass('in')) {
            setTimeout(function() {
                $('#nav-icon-collapse').removeClass('in');
            }, 500);
        } else {
            setTimeout(function() {
                $('#nav-icon-collapse').addClass('in');
            }, 500);
        }
    });

});

// progress bar
$(window).on('load', function() {
    $(".skills-progress span").each(function() {
        var bottom_of_object =
            $(this).offset().top + $(this).outerHeight();
        var bottom_of_window =
            $(window).scrollTop() + $(window).height();
        var myVal = $(this).attr('data-value');
        if (bottom_of_window > bottom_of_object) {
            $(this).css({
                width: myVal
            });
        }
    });
});