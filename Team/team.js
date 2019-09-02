$( document ).ready(function() {
    $("#breadtext").html('<a href="https://2019.igem.org/Team:NCKU_Tainan/">Home</a> > <a>Team</a>')
  /* Only if the device is desktop, there are hover effect */ 
  if($(window).width()>992) {
    $(".photo-wrapper div").hover(function(){
          $(this).children("img").toggleClass("d-none")
      },function(){
          $(this).children("img").toggleClass("d-none")
      });
  }
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
    
    // set the position of carousel
    $('.carousel').css('margin-top', $('nav').height());
    $(window).resize(function () {
        $('.carousel').css('margin-top', $('nav').height());
   });

});

function closeDimmer() {
    $(".dimmer").addClass("d-none");
    $("body").removeClass("blurring");    
}
