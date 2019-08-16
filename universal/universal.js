$(document).ready(function() {
    //scroll spy
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top - 100;
        console.log(position);
        $("body, html").animate({
            scrollTop: position
        }, 200);
    });

    $(document).ready(function() {
        $("#lightgallery").lightGallery(); 
    });

});