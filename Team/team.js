$( document ).ready(function() {
   $(".photo-wrapper div").hover(function(){
        $(this).children("img").toggleClass("d-none")
    },function(){
        $(this).children("img").toggleClass("d-none")
    });

    $(".photo-wrapper div").click(function(){
        var intro = $(this).children(".intro").html();
        var src = $(this).children("img.hover").attr("src");
        $(".dimmer").removeClass("d-none");
        $("body").addClass("blurring");
        $(".dimmer img").attr("src", src);
        $(".dimmer .intro").html(intro);
    });

    $(".dimmer").click(function(){
        closeDimmer();
    });
    $("#dimmer-close").click(function(){
        closeDimmer();
    });
    $(".card").click(function(){
        event.stopPropagation();
    });
    $(document).keydown(function(e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
           closeDimmer(); 
        }
    });
    

});

function closeDimmer() {
    $(".dimmer").addClass("d-none");
    $("body").removeClass("blurring");    
}