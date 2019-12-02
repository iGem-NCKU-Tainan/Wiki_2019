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
        $(".down").fadeIn()
    };
    
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
}); 
/*
var rebuildFullpage=function(){
    $('#fullpage').fullpage({
        scrollOverflow: true,
        navigation: true,
        navigationPosition: 'right'
    });
}
*/
//snake js start from here
/*  按鍵的設定  */
const key_left=37
const key_up=38
const key_right=39
const key_down=40

var width=1000
var height=400

var canvas=document.getElementById('snake')
var ctx=canvas.getContext('2d')

var curr_player={}
    // set the position of wrappers
    $('.center-adjust').css('padding-top', $('nav').height());
    $(window).resize(function () {
        $('.center-adjust').css('padding-top', $('nav').height());
    });

document.body.classList.toggle('has-focus', document.hasFocus())
//detect the user, when press widow, on-focus
window.onfocus = () => {
    document.body.classList.add('has-focus')
}
window.onblur = () => {
    document.body.classList.remove('has-focus')
}


$(document).ready(function(){
    document.getElementById('recordScore').innerHTML = localStorage.getItem("highScore")
})

function gameStart(){
    document.getElementById('snakeStory').style.display="none"
    document.getElementById('snakeButton2').style.display="none"
    //testing to destroy fullpage then restore
    //$.fn.fullpage.destroy('all')
    $("html").addClass("noscroll")
    new beforeGame
}

function gameRecord(){
    document.getElementById('snakeForm').style.display="none"
    new beforeGame
}

class beforeGame{
    constructor(){
        this.starting()
        this.counting()
    }
    starting(){
        //OMG, O
        this.adding({x:40,y:40,})
        this.adding({x:40,y:80,})
        this.adding({x:40,y:120,})
        this.adding({x:40,y:160,})
        this.adding({x:40,y:200,})
        this.adding({x:40,y:240,})
        this.adding({x:40,y:280,})
        this.adding({x:40,y:320,})
        this.adding({x:80,y:40,})
        this.adding({x:120,y:40,})
        this.adding({x:160,y:40,})
        this.adding({x:200,y:40,})
        this.adding({x:240,y:40,})
        this.adding({x:240,y:80,})
        this.adding({x:240,y:120,})
        this.adding({x:240,y:160,})
        this.adding({x:240,y:200,})
        this.adding({x:240,y:240,})
        this.adding({x:240,y:280,})
        this.adding({x:240,y:320,})
        this.adding({x:200,y:320,})
        this.adding({x:160,y:320,})
        this.adding({x:120,y:320,})
        this.adding({x:80,y:320,})
        //OMG, M
        this.adding({x:320,y:40,})
        this.adding({x:360,y:40,})
        this.adding({x:400,y:40,})
        this.adding({x:440,y:40,})
        this.adding({x:480,y:40,})
        this.adding({x:520,y:40,})
        this.adding({x:560,y:40,})
        this.adding({x:600,y:40,})
        this.adding({x:640,y:40,})
        this.adding({x:320,y:80,})
        this.adding({x:320,y:120,})
        this.adding({x:320,y:160,})
        this.adding({x:320,y:200,})
        this.adding({x:320,y:240,})
        this.adding({x:320,y:280,})
        this.adding({x:320,y:320,})
        this.adding({x:480,y:80,})
        this.adding({x:480,y:120,})
        this.adding({x:480,y:160,})
        this.adding({x:480,y:200,})
        this.adding({x:480,y:240,})
        this.adding({x:480,y:280,})
        this.adding({x:480,y:320,})
        this.adding({x:640,y:80,})
        this.adding({x:640,y:120,})
        this.adding({x:640,y:160,})
        this.adding({x:640,y:200,})
        this.adding({x:640,y:240,})
        this.adding({x:640,y:280,})
        this.adding({x:640,y:320,})
        //OMG, G
        this.adding({x:720,y:40,})
        this.adding({x:760,y:40,})
        this.adding({x:800,y:40,})
        this.adding({x:840,y:40,})
        this.adding({x:880,y:40,})
        this.adding({x:920,y:40,})
        this.adding({x:720,y:80,})
        this.adding({x:720,y:120,})
        this.adding({x:720,y:160,})
        this.adding({x:720,y:200,})
        this.adding({x:720,y:240,})
        this.adding({x:720,y:280,})
        this.adding({x:720,y:320,})
        this.adding({x:760,y:320,})
        this.adding({x:800,y:320,})
        this.adding({x:840,y:320,})
        this.adding({x:880,y:320,})
        this.adding({x:920,y:320,})
        this.adding({x:920,y:280,})
        this.adding({x:920,y:240,})
        this.adding({x:920,y:200,})
        this.adding({x:800,y:200,})
        this.adding({x:840,y:200,})
        this.adding({x:880,y:200,})
    }
    
    adding({x,y,width=40,height=40,color='#AAAAAA'}){
        ctx.fillStyle = color
        ctx.fillRect(x, y, width, height)
        ctx.lineWidth = 1
        ctx.strokeStyle='#FFFFFF'
        ctx.strokeRect(x, y, width, height)
    }
    
    counting(){
        let countingNum=3
        
        this.countingInterval=setInterval(()=>{
            countingNum=countingNum-1
            //OMG, O change color
            if(countingNum===2){
                this.addingRed({x:40,y:40,})
                this.addingRed({x:40,y:80,})
                this.addingRed({x:40,y:120,})
                this.addingRed({x:40,y:160,})
                this.addingRed({x:40,y:200,})
                this.addingRed({x:40,y:240,})
                this.addingRed({x:40,y:280,})
                this.addingRed({x:40,y:320,})
                this.addingRed({x:80,y:40,})
                this.addingRed({x:120,y:40,})
                this.addingRed({x:160,y:40,})
                this.addingRed({x:200,y:40,})
                this.addingRed({x:240,y:40,})
                this.addingRed({x:240,y:80,})
                this.addingRed({x:240,y:120,})
                this.addingRed({x:240,y:160,})
                this.addingRed({x:240,y:200,})
                this.addingRed({x:240,y:240,})
                this.addingRed({x:240,y:280,})
                this.addingRed({x:240,y:320,})
                this.addingRed({x:200,y:320,})
                this.addingRed({x:160,y:320,})
                this.addingRed({x:120,y:320,})
                this.addingRed({x:80,y:320,})
            }
            //OMG, M change color
            if(countingNum===1){
                this.addingRed({x:320,y:40,})
                this.addingRed({x:360,y:40,})
                this.addingRed({x:400,y:40,})
                this.addingRed({x:440,y:40,})
                this.addingRed({x:480,y:40,})
                this.addingRed({x:520,y:40,})
                this.addingRed({x:560,y:40,})
                this.addingRed({x:600,y:40,})
                this.addingRed({x:640,y:40,})
                this.addingRed({x:320,y:80,})
                this.addingRed({x:320,y:120,})
                this.addingRed({x:320,y:160,})
                this.addingRed({x:320,y:200,})
                this.addingRed({x:320,y:240,})
                this.addingRed({x:320,y:280,})
                this.addingRed({x:320,y:320,})
                this.addingRed({x:480,y:80,})
                this.addingRed({x:480,y:120,})
                this.addingRed({x:480,y:160,})
                this.addingRed({x:480,y:200,})
                this.addingRed({x:480,y:240,})
                this.addingRed({x:480,y:280,})
                this.addingRed({x:480,y:320,})
                this.addingRed({x:640,y:80,})
                this.addingRed({x:640,y:120,})
                this.addingRed({x:640,y:160,})
                this.addingRed({x:640,y:200,})
                this.addingRed({x:640,y:240,})
                this.addingRed({x:640,y:280,})
                this.addingRed({x:640,y:320,})
            }
            //OMG, G change color
            if(countingNum===0){
                this.addingRed({x:720,y:40,})
                this.addingRed({x:760,y:40,})
                this.addingRed({x:800,y:40,})
                this.addingRed({x:840,y:40,})
                this.addingRed({x:880,y:40,})
                this.addingRed({x:920,y:40,})
                this.addingRed({x:720,y:80,})
                this.addingRed({x:720,y:120,})
                this.addingRed({x:720,y:160,})
                this.addingRed({x:720,y:200,})
                this.addingRed({x:720,y:240,})
                this.addingRed({x:720,y:280,})
                this.addingRed({x:720,y:320,})
                this.addingRed({x:760,y:320,})
                this.addingRed({x:800,y:320,})
                this.addingRed({x:840,y:320,})
                this.addingRed({x:880,y:320,})
                this.addingRed({x:920,y:320,})
                this.addingRed({x:920,y:280,})
                this.addingRed({x:920,y:240,})
                this.addingRed({x:920,y:200,})
                this.addingRed({x:800,y:200,})
                this.addingRed({x:840,y:200,})
                this.addingRed({x:880,y:200,})
            }
            if(countingNum===-1){
                new game
            }
        },1000)
    }
    addingRed({x,y,width=40,height=40,color='red'}){
        ctx.fillStyle = color
        ctx.fillRect(x, y, width, height)
        ctx.lineWidth = 1
        ctx.strokeStyle='#FFFFFF'
        ctx.strokeRect(x, y, width, height)
    }
}
class game{
    constructor(){
        /*蛇的部分*/
        this.x=40
        this.y=40
        this.speed=100  
        this.scale=40
        this.tail=[]
        this.length=3
        this.moveX=1   /*向上為正*/
        this.moveY=0    /*向下為正*/
        
        /*食物部分*/
        this.foodX=Math.floor(Math.random()*width/this.scale)*this.scale
        this.foodY=Math.floor(Math.random()*height/this.scale)*this.scale
        
        /*函式部分*/
        this.setup()
        this.snakeBody() /*蛇運作的部分*/
        this.keyPress()  /*鍵盤感應*/
    }
    setup(){
        if(localStorage.highScore==undefined){
            localStorage.highScore=0
        }
        else{ 
            document.querySelector("#recordScore").innerHTML=localStorage.getItem("highScore")
        }
    }
    /*蛇身的部分，用array做推進，遊戲運作的核心*/
    snakeBody(){
        this.gameInterval=setInterval(()=>{
            this.accelerate()
            this.update()
            this.tail.push({
                x:this.x,
                y:this.y
            })
            
            if(this.tail.length>this.length){
                this.tail.shift()
            }
            this.drawSnake()
            this.addFood()
            
        },this.speed)
    }
    
    /*讓蛇往前走 */
    drawSnake(){
        this.clear()
        for(let i=0;i<this.tail.length;i++){
            ctx.fillStyle='#620E15'
            ctx.fillRect(this.tail[i].x,this.tail[i].y,40,40)
            ctx.strokeStyle='#FFFFFF'
            ctx.strokeRect(this.tail[i].x,this.tail[i].y,40,40)
        }
    }
    /*清除畫面+搖晃*/
    clear(){
        ctx.clearRect(0,0,width,height)
    }
    /*主要遊戲運作偵測區，食物+死亡*/
    update(){
        this.x += (this.moveX*this.scale)
        this.y += (this.moveY*this.scale)
        
        this.scoreUpdate()
        this.checkDeath()
        
        if( this.x==this.foodX && this.y==this.foodY ){
            this.length=(this.length+1)
            this.foodeat()
        }
        
        if (this.checkDeath()){
            clearInterval(this.gameInterval)
            clearInterval(this.gameInterval2)
            this.clear()
            this.restart()
            this.checkRecord()
        }
        //for boundry, height0-40 , width-40
        if(this.x>960 || this.y>360 || this.x<0 || this.y<0 || this.x==this.tail.x){
            
            clearInterval(this.gameInterval)
            clearInterval(this.gameInterval2)
            this.clear()
            this.restart()
            this.checkRecord()
        }
    }
    /*加速器*/
    accelerate(){
        if(this.length>10){
            clearInterval(this.gameInterval)
            
            this.gameInterval2=setInterval(()=>{
                
                this.update()
                this.tail.push({
                    x:this.x,
                    y:this.y
                })
                
                if(this.tail.length>this.length){
                    this.tail.shift()
                }
                this.drawSnake()
                this.addFood()
            },this.speed-20)
            
        }
        
        if(this.length>18){
            clearInterval(this.gameInterval)
            clearInterval(this.gameInterval2)
            
            this.gameInterval3=setInterval(()=>{
                
                this.update()
                this.tail.push({
                    x:this.x,
                    y:this.y
                })
                
                if(this.tail.length>this.length){
                    this.tail.shift()
                }
                this.drawSnake()
                this.addFood()
            },this.speed-25)
        }
    }
    /*吃到自己死*/
    checkDeath(){
        return this.tail.filter((value)=>{
            return (this.x==value.x && this.y==value.y)
        }).length
    }
    
    /*吃了食物發生的事情*/
    foodeat(){
        this.foodX=Math.floor(Math.random()*width/this.scale)*this.scale
        this.foodY=Math.floor(Math.random()*height/this.scale)*this.scale
        this.addFood()
    }
    /*重新產生食物*/
    addFood(){
        ctx.fillStyle="#488099"
        ctx.fillRect(this.foodX,this.foodY,40,40)
    }
    /*retart + record to backend + shake the screen*/
    restart(){
        setTimeout(()=>{
            document.getElementById("snake").classList.add("canvasShake")
        },10)
        this.checkRecord()
        var length=this.length
        const form=document.forms['snakeForm']
        curr_player.name=form.elements.name.value
        curr_player.team=form.elements.team.value
        curr_player.score=(length-3)
        $("html").removeClass("noscroll")
        document.getElementById('snakeForm').style.display="block"
        document.getElementById("snake").classList.remove("canvasShake")
    }
    
    scoreUpdate(){
        $('#current').html(this.length-3)
    }
    
    checkRecord(){
        if ((this.length-3)>localStorage.highScore) {
            // Store
            localStorage.setItem("highScore", (this.length-3))
            // Retrieve
            document.getElementById('recordScore').innerHTML = localStorage.getItem("highScore")
        }
    }
    
    keyPress(){
        document.addEventListener("keydown",(event)=>this.onkeydown(event))
    }
    /*鍵盤控制*/
    onkeydown({keyCode}){
        switch(keyCode){
            case 37:  /*向左走*/
            case 65:
            case 100:
            if(this.moveX == 0){
                this.moveX=-1;
                this.moveY= 0;
            }
            break;
            case 38: /*向上*/
            case 87:
            case 104:
            if(this.moveY ==0){
                this.moveX=0;
                this.moveY=-1;
            }
            break;
            case 39: /*向右*/
            case 68:
            case 102:
            if(this.moveX ==0){
                this.moveX=1;
                this.moveY=0;
            }
            break;
            case 40: /*向下*/
            case 83:
            case 101:
            if(this.moveY ==0){
                this.moveX=0;
                this.moveY=1;
            }
            break;
        }
    }
}
  });
