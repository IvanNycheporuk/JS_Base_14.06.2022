$(document).ready(function(){

    // $('#parallaxHere').parallax({imageSrc: 'test.jpg'});
    $('#parallaxHere').parallax({imageSrc: 'parallax.example.jpg'});
    
    // slick slider goes below
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 500,
        appendArrows: $('.slider'),
        dots: true,
        draggable: false,
        infinite: false
        // navigation-slider
    }); 
  });

  // modal 
  
var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// back to top

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnBackToTop.style.display = "block";
  } else {
    btnBackToTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()};

var btnBackToTop = document.getElementById('backToTopBtn');
btnBackToTop.onclick = function() {topFunction()};