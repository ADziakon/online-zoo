let menuBtn = document.querySelector('.menu');
let menu = document.querySelector('.nav-header');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    
});
