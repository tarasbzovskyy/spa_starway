var anime = require('animejs');
var swiper = require('swiper/dist/js/swiper.min.js');

var move = anime({
	targets:'h1',
	translateX: '400',
	duration:'2000',
	delay:1000,
	offset:-500
});
window.onload = function () {
	console.log(1);
	//initialize swiper when document ready
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		direction: 'vertical',
		loop: true
	})
};