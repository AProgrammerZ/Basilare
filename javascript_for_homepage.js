$(document).ready(function(){

// Nav bar fade in. Learned from: https://stackoverflow.com/questions/23315031/how-to-create-a-hidden-navbar-with-bootstrap-that-shows-after-you-scroll
  // hide .my_navbar first
  $("#my_navbar").hide();

  // fade in .navbar
  $(function () {
    $(window).scroll(function () {
    // set distance user needs to scroll before we fadeIn navbar
    if ($(this).scrollTop() > 100) {
      $('#my_navbar').fadeIn();
      } else {
        $('#my_navbar').fadeOut();
      }
    });
  });
});