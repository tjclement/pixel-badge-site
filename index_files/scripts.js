$(document).ready(function(){

  // Main Navigation toggle
  $("#hamburger-icon").click(function() {
    $("#hamburger-icon").toggleClass("open");
    $(".nav-status").toggleClass("nav-active");
    $(".nav-mobile").slideToggle();
    $("#nav-escape").toggleClass("nav-active");
  });

  // Main Navigation escape
  $("#nav-escape").click(function() {
    $("#hamburger-icon").toggleClass("open");
    $(".nav-status").toggleClass("nav-active");
    $(".nav-mobile").slideToggle();
    $("#nav-escape").toggleClass("nav-active");
  });

});

// Main Navigation styling based on scroll position
$(window).scroll(function() {

  if ($(window).scrollTop() > 24 ){

    $('.nav-scroll').addClass('nav-scroll-action');

  } else {

    $('.nav-scroll').removeClass('nav-scroll-action');

  };
});

// Viewport visibility

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.animate-in-on-scroll, .slide-left-on-scroll, .slide-right-on-scroll');

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
