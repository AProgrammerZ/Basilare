$(document).ready(function(){

// Mostly learned from: https://stackoverflow.com/questions/23315031/how-to-create-a-hidden-navbar-with-bootstrap-that-shows-after-you-scroll

  $(function () {
    $(window).scroll(function () {
    // set distance user needs to scroll before we fadeIn navbar
    if ($(this).scrollTop() > 100) {
    document.getElementById("my_navbar").style.backgroundColor="#e67300";
    document.getElementById("my_navbar").style.color="white";
    document.getElementById("my_navbar").style.boxShadow="1px 1px 10px 1px grey";
      } else {
    document.getElementById("my_navbar").style.backgroundColor="#e6e6e6";
    document.getElementById("my_navbar").style.color="#404040";
    document.getElementById("my_navbar").style.boxShadow="none";
      }
    });
  });
});