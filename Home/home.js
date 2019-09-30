// with error 
$(".bread").removeClass('d-lg-block'); 
$(window).on("load", function(){
    // Handler when all assets (including images) are loaded
    $('#fullpage').fullpage({
        scrollOverflow: true,
        navigation: true,
		navigationPosition: 'right'
	});

    $("a.down").click(function(e){
        try {
            e.preventDefault();
            fullpage_api.moveSectionDown();
        } catch(exp) {
            console.log(exp)
        }
    });

    const logoVideo = document.querySelector("#Logo-video");
    /* control logo video play */
    // by hover
    /*$("#Logo-video").hover(function(){
        logoVideo.play();
    },function(){
    })
    */
    // after 2 sec autoplay
    window.setTimeout(playVideo, 2000);
    function playVideo(){
        logoVideo.play()
    }

    // Display arrow down icon when video ended
    logoVideo.onended = function() {
        $(".down img").fadeIn()
      };

    $("a.down").hover(function(){
        $(this).removeClass("bounce")
    },function(){
        $(this).addClass("bounce")
    })
    // set the position of wrappers
    $('.center-adjust').css('padding-top', $('nav').height());
    $(window).resize(function () {
        $('.center-adjust').css('padding-top', $('nav').height());
    });


  }); 
  