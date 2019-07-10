$(document).ready(function() {
  //sets timer variable
  /*var timer;
  
  // when the button and button menu are hovered
  $('.dropdown, .dropdown-menu').hover(function() {
    // Clears the time on hover to prevent a que or waiting for the delay to finish from a previous hover event
    clearTimeout(timer);
    // Add the class .open and show the menu
    //$('.dropdown').addClass('open');
    $(this).find('.dropdown-menu').show();
    
  }, function() {
    
    // Sets the timer variable to run the timeout delay
    timer = setTimeout(function() {
      // remove the class .open and hide the submenu
      //$('.dropdown').removeClass("open");
      $(this).find('.dropdown-menu').hide();
    }, 500);
    
  });*/

  /*
  $('.navbar-nav > li.dropdown').hover(function () {
    $('ul.dropdown-menu', this).stop(true, true).slideDown('fast');
    $(this).addClass('open');
  }, function () {
    $('ul.dropdown-menu', this).stop(true, true).slideUp('fast');
    $(this).removeClass('open');
  });
  */
  $('.dropdown').mouseover(function() {
    $(this).children('.dropdown-menu').show();
    console.log($(this).children('.dropdown-menu'));
  });

  $('.dropdown').mouseout(function() {
    $dropdown = $(this);
    t = setTimeout(function() {
      $dropdown.children('.dropdown-menu').hide();
      console.log($dropdown.children('.dropdown-menu'));
      $(this).children('.dropdown-menu').css("background-color","red")
      console.log("mouseout");
    }, 1000);

    $('.dropdown-menu').on('mouseenter', function() {
      $(this).show();
      console.log("mousesent");
      clearTimeout(t);
    }).on('mouseleave', function() {
      $(this).hide();
    })
  });
  //scroll spy
  $('body').scrollspy({
    target: '.sidenav'
    });
});