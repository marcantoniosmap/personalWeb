(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    $('#nav-icon').removeClass('open');
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
    $('#nav-icon').removeClass('open');
  });


  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 0
  });

 $(document).ready(function(){
    $('#nav-icon').click(function(){
      if ($('#navbarResponsive').hasClass('show','collapsing')){
        $(this).removeClass('open');
      }
      else{
        $(this).addClass('open');

      }
      });
  });

 var parallax=document.getElementById("masthead-main");

  window.addEventListener("scroll",function(){
    var offset = window.pageYOffset;
    parallax.style.backgroundPositionY=offset*0.7+ "px";
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
      $(".dropdown").removeClass("show");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  // navbarCollapse();
  // Collapse the navbar when page is scrolled
  // $(window).scroll(navbarCollapse);


  // Magnific popup calls


})(jQuery); // End of use strict

$(document).ready(function(){
  $(".dropdown, .btn-group").hover(function(){
      var dropdownMenu = $(this).children(".dropdown-menu");
      if(dropdownMenu.is(":visible")){
          dropdownMenu.parent().toggleClass("open");
      }
  });
}); 


$('#image-gallery').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [{
      breakpoint: 768,
      settings: {
          slidesToShow: 3
      }
  },
  {
    breakpoint: 576,
    settings: {
        slidesToShow: 2
    }
}]
});