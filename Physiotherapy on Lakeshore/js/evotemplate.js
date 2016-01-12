//Scripts needed for carousel and scroll detect to work

//Carousel Init
$('.carousel').carousel({
	interval: 5000 //You can change the carousel changing speed
})
	
//WOW init 
new WOW().init();

//Circle Progress 
var div_top = $('#aboutus').offset().top;
var executed = false;
$(window).scroll(function(){
 if($(window).scrollTop() >= 1020 && executed==false){
  executed = true;
    $('#circle_one').circleProgress({
            size:180,
            value: 0.6,
            lineCap: 'round',
            fill: { color: '#09D33D' }
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.circle-txt').html(parseInt(60 * progress) + '<i>%</i>');
        });

        $('#circle_two').circleProgress({
          size:180,
            value: 0.5,
            lineCap: 'round',
            fill: { color: '#227FB0' }
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.circle-txt').html(parseInt(50 * progress) + '<i>%</i>');
        });

        $('#circle_three').circleProgress({
          size:180,
            value: 0.7,
            lineCap: 'round',
            fill: { color: '#f92525' }
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.circle-txt').html(parseInt(70 * progress) + '<i>%</i>');
        });

        $('#circle_four').circleProgress({
          size:180,
            value: 0.2,
            lineCap: 'round',
            fill: { color: '#f98034' }
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.circle-txt').html(parseInt(20 * progress) + '<i>%</i>');
        });
  }
});

//Navbar
$(window).scroll(function() {
	if($(this).scrollTop() > 100) {
		$('.navbar-fixed-top').addClass('navbar-inverse-solid');
	} else {
		$('.navbar-fixed-top').removeClass('navbar-inverse-solid');
	}
});