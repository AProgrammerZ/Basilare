$(document).ready(function(){

// Side bar. From w3schools (mostly) (https://www.w3schools.com/howto/howto_js_sidenav.asp)
  // Set the width of the sidebar (to make it look like its sliding out)
  $("#open_icon").click(function () {
    document.getElementById("mySidenav").style.width = "18.5em";
    document.getElementById("mySidenav").style.boxShadow = "1px 1px 10px 2px grey";
  })

  // Set the width of the sidebar to 0 (to make it look like its closing)
  $(".closebtn").click(function () {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.boxShadow = "none";
  })
    
// Smooth scrolling. From w3schools (https://www.w3schools.com/howto/howto_css_smooth_scroll.asp)
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
    } // End if
  });

//Vh on mobile fix. Learned from css-tricks (https://css-tricks.com/the-trick-to-viewport-units-on-mobile/):
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
});