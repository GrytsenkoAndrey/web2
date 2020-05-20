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

    // for show and hide
    var areaId = $(this).attr('id') + 'area';
    $('#' + areaId).toggleClass('hidden');

    $('.panel').width(($(window).width() / 2) - 10);
});

$('.panel').height($(window).height() - $('header').height() - 20);
$('.panel').width(($(window).width() / 2) - 10);

$('textarea').on('change keyup paste', function () {
    $('iframe').contents().find('html').html($('#htmlarea').val());
});