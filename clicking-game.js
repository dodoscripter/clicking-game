jQuery(function ($) {

    var $button = $('#button');
    var $score = $('#score');
    var game, cheater, score = 0, last = 0;
    $button.click(function () {
        if (!game) {
            $button
                .removeClass('btn-success')
                .addClass('btn-danger')
                .html('Click!!!');
            $score.html('Score: 0');
            game = true;
        } else if (cheater) {
            $button
                .removeClass('btn-danger')
                .addClass('btn-danger')
                .html('Game Over')
                .attr({disabled:'disabled'});
            $score.html('Cheater!!!');
            score = 0;
            last = 0;
            // cheater = false;
            // game = false;
        } else {
            score++;
            $score.html('Score: ' + score);
        }
        return false;
    });

    setInterval(function () {
        if (score - last > 50) {
            cheater = true;
        }
        last = score;
    }, 1000);

});

