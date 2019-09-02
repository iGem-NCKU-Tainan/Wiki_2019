$(document).ready(function() {
    // set the position of main
    $('.main').css('margin-top', $('nav').height());
    $(window).resize(function () {
        $('.main').css('margin-top', $('nav').height());
   });
});
