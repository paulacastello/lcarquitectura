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