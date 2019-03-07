//Variables
var nav = document.getElementById('nav');
navH = nav.offsetHeight;
console.log(navH);
// ScrollSpy
var section = document.querySelectorAll('section');
sections = [];
section.forEach((e, i) => {
	sections[e.id] = e.offsetTop;
});

//Document Scroll
document.onscroll = () => {
	var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	for (let i in sections) {
		if (sections[i] <= scrollPosition + navH) {
			document.querySelector('.active').classList.remove('active');
			document.querySelector('a[class*=' + i + ']').classList.add('active');
		}
	}
	// Cambiar color
	if(document.documentElement.scrollTop > navH || document.body.scrollTop > navH){
		nav.classList.add('bg-blue');
	}else{
		nav.classList.remove('bg-blue');
	}
};

