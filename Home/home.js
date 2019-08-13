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
            alert('An error occurred and I need to write some code to handle this!');
            console.log(exp)
        }
        //moveTo('Project', 0);
    });

    const logoVideo = document.querySelector("#Logo-video");
    /* control logo video play */
    // by hover
    /*$("#Logo-video").hover(function(){
        logoVideo.play();
    },function(){
    })
    */
    // after 7 sec autoplay
    window.setTimeout(playVideo, 2000);
    function playVideo(){
        logoVideo.play()
    }

    // Display arrow down icon when video ended
    logoVideo.onended = function() {
        $(".down").fadeIn()
      };

    $("a.down").hover(function(){
        $(this).removeClass("bounce")
    },function(){
        $(this).addClass("bounce")
    })


  }); 
  