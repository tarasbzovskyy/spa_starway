var anime = require('animejs');
var flexslider = require('flexslider');

var move = anime({
	targets:'h1',
	translateX: '400',
	duration:'2000',
	delay:1000,
	offset:-500
});

$(".slider").flexslider({
	selector: ".tabs > .tab",
	direction: "vertical",
	mousewheel: true,
	animationSpeed: 600,
	touch: true,
	keyboard: true
});
