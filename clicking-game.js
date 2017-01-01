jQuery(function ($) {

    var $button = $('#button');
    var $score = $('#score');
    var game, score = 0;
    $button.click(function () {
        if (!game) {
            $button
                .removeClass('btn-success')
                .addClass('btn-danger')
                .html('Click!!!');
            $score.html('Score: 0');
            game = true;
        } else {
            score++;
            $score.html('Score: ' + score);
        }
        return false;
    });

});

