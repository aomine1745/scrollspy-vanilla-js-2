//Variables
var nav = document.getElementById('nav'),
navH;

// ScrollSpy
var section = document.querySelectorAll('section');
sections = [];
section.forEach((e, i) => {
	sections[e.id] = e.offsetTop;
});

//Document Scroll
document.onscroll = () => {
	navH = nav.offsetHeight;
	var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
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

