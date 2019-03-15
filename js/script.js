//Variables
var nav = document.getElementById('nav'),
navH;

window.onload = () => {
	navH = nav.offsetHeight
	console.log(navH);
}

// ScrollSpy
var section = document.querySelectorAll('section'),
sections = [],
scrollPosition;
section.forEach((e, i) => {
	sections[e.id] = e.offsetTop;
});

//Document Scroll
document.onscroll = () => {
	scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	for (let i in sections) {
		if (sections[i] <= scrollPosition + navH) {
			document.querySelector('.active').classList.remove('active');
			document.querySelector('a[class*=' + i + ']').classList.add('active');
		}
	}

	// Cambiar color
	if(scrollPosition > navH){
		nav.classList.add('bg-blue');
	}else{
		nav.classList.remove('bg-blue');
	}
};

