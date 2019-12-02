// with error 
$(".bread").removeClass('d-lg-block'); 
$(window).on("load", function(){
    // Handler when all assets (including images) are loaded
    $('#fullpage').fullpage({
        keyboardScrolling: true,
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
    var timer = window.setInterval(seeVideo, 1000);
    /*function playVideo(){
        logoVideo.onprogress = function(){
            console.log(logoVideo.buffered.end(0));
            if(100*(logoVideo.buffered.end(0)/logoVideo.duration)>90){
                $("#loading").remove();
                setTimeout(function(){ logoVideo.play(); }, 50);
                clearInterval(timer);
            }
        }
    }*/
    function seeVideo(){
        logoVideo.onprogress = function(){
            if (logoVideo.readyState === 4){
                console.log(logoVideo.buffered.end(0))
                if(100*(logoVideo.buffered.end(0)/logoVideo.duration)>90){
                    $("#loading").remove();
                    setTimeout(function(){ logoVideo.play(); }, 50);
                    clearInterval(timer);
                }
            }
        }
    }
    // Display arrow down icon when video ended
    logoVideo.onended = function() {
        console.log("video ended")
        $(".down img").removeClass("d-lg-none");
      };
    //description link
    $("a.des-link").hover(function(){
        $(this).children("img").attr("src","https://2019.igem.org/wiki/images/a/a5/T--NCKU_Tainan--Home_open.png");
    },function(){
        $(this).children("img").attr("src","https://2019.igem.org/wiki/images/f/fb/T--NCKU_Tainan--Home_close.png");
    });
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
