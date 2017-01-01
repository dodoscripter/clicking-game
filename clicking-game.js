jQuery(function ($) {

    var $button = $('#button');
    $button.click(function () {
        $button
            .removeClass('btn-success')
            .addClass('btn-danger')
            .html('Click!!!');
    });

});

