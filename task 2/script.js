const windowInnerWidth = window.innerWidth;

console.log(windowInnerWidth);

let css_style = document.getElementById('css_style');

if(windowInnerWidth >= 320){
	css_style.href = "style-320.css";
	document.getElementById('last-img1').style.display = 'block';
	document.getElementById('last-img2').style.display = 'block';
	document.getElementById('nav-buttons').style.display = 'none';
}
if(windowInnerWidth >= 768){
	css_style.href = "style-768.css";
	document.getElementById('last-img1').style.display = 'none';
	document.getElementById('last-img2').style.display = 'none';
	document.getElementById('nav-buttons').style.display = 'flex';
}
if(windowInnerWidth >= 1024){
	css_style.href = "style-1024.css";
	document.getElementById('last-img1').style.display = 'block';
	document.getElementById('last-img2').style.display = 'block';
	document.getElementById('nav-buttons').style.display = 'flex';
}
if(windowInnerWidth >= 1920){
	css_style.href = "style-1920.css";
	document.getElementById('last-img1').style.display = 'block';
	document.getElementById('last-img2').style.display = 'block';
	document.getElementById('nav-buttons').style.display = 'flex';
}

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

let sliderButtonRight = document.getElementById('slider-right');
let sliderButtonLeft = document.getElementById('slider-left');

let sliderImg = document.querySelectorAll('.slider-img');


sliderButtonLeft.onclick = function(){
	sliderImg[0].style.display = 'none';
	sliderImg[1].style.display = 'none';
	sliderImg[2].style.display = 'block';
	sliderImg[3].style.display = 'block';
}
sliderButtonRight.onclick = function(){
	sliderImg[0].style.display = 'block';
	sliderImg[1].style.display = 'block';
	sliderImg[2].style.display = 'none';
	sliderImg[3].style.display = 'none';
}