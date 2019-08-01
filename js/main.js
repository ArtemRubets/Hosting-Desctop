$(document).ready(function() {
	$('.slick').slick({
	    autoplay: true,
	 	autoplaySpeed: 10000
	  });

	  $('.slider-wrap').slick({
	  	infinite: true,
	  	slidesToShow: 4,
	  	slidesToScroll: 3,
	  	dots: true,
	  	autoplay: true,
	 	autoplaySpeed: 10000
	  });
});
  
