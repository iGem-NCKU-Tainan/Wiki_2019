$( document ).ready(function() {
    $("a[href='#presentation']").click(function(e){
        e.preventDefault();
        console.log("in")
        $("video.present").removeClass("d-none");
        $(".dimmer").removeClass("d-none");
        $("body").addClass("blurring");
    });
    $("a[href='#poster']").click(function(e){
        e.preventDefault();
        console.log("in")
        $("img.poster").removeClass("d-none");
        $(".dimmer").removeClass("d-none");
        $("body").addClass("blurring");
    });
    $(".dimmer").click(function(){
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
    if($("video.present").hasClass("d-none")) {
        $("img.poster").addClass("d-none");
        console.log("poster d-none")
    }else{
        $("video.present").addClass("d-none");
        console.log("present d-none")
    }
}