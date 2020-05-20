/**
 * Created by APG on 20.05.2020.
 */

$('.toggleButton').hover(function () {
    $(this).addClass('hlButton');
}, function () {
    $(this).removeClass('hlButton');
});

$('.toggleButton').click(function() {
    $(this).toggleClass('active');
    $(this).removeClass('hlButton');
});

$('textarea').height($(window).height() - $('header').height() - $('header').padding());