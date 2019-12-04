$( document ).ready(function() {
    $("a[href='#presentation']").click(function(e){
        e.preventDefault();
        console.log("in")
        $(".dimmer").removeClass("d-none");
        $("body").addClass("blurring");
    });
    $(".dimmer").click(function(){
        closeDimmer();
    });
    /*
    $("button.dimmer-close").click(function(e){
        console.log("close")
        e.preventDefault();
        closeDimmer();
    });
    */
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