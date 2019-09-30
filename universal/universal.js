$(document).ready(function() {
    // scroll spy
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top - 100;
        console.log(position);
        $("body, html").animate({
            scrollTop: position
        }, 200);
    });
    // 
    /*$("figure .nav-pills a[href^='#']").click(function(e) {
        e.preventDefault();
        console.log("e prevent");
    });
    $('figure .nav-tabs a').on('click', function (e) {
        e.preventDefault()
        $('figure .nav-tabs a').removeClass("active");
        $(this).tab('show')
      })
      */

});