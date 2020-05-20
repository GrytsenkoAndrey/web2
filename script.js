/**
 * Created by APG on 20.05.2020.
 */

function updateOutput()
{
    $('iframe').contents().find('html').html("<html><head><style>" + $('#cssarea').val() + "</style></head><body>" + $('#htmlarea').val() + "</body></html>");
    document.getElementById('outarea').contentWindow.eval($('#jsarea').val());

}

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
    // number of area
    var numberOfActive = 4 - $('.hidden').length;
    $('.panel').width(($(window).width() / numberOfActive) - 10);
});

$('.panel').height($(window).height() - $('header').height() - 20);
$('.panel').width(($(window).width() / 2) - 10);

updateOutput();

$('textarea').on('change keyup paste', function () {
    // html to the output
    updateOutput();
    // javascript
});