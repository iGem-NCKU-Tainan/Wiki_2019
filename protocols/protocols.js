$(document).ready(function() {
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top - 100;
        console.log(position);
        $("body, html").animate({
            scrollTop: position
        }, 200);
    });
});


$(".mb-0").click(function(){
    $(this).children("span:first").toggle("");

})

