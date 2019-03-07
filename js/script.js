//Variables
const nav = document.getElementById('nav');

// ScrollSpy
var section = document.querySelectorAll('section'),
sections = [];
section.forEach((e, i) => {
	sections[e.id] = e.offsetTop;
});
document.onscroll = () => {
	var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	for (let i in sections) {
		if (sections[i] <= scrollPosition + nav.offsetHeight) {
			document.querySelector('.active').classList.remove('active');
			document.querySelector('a[class*=' + i + ']').classList.add('active');
		}
	}
	/*Cambiar color*/
	if(document.documentElement.scrollTop > nav.offsetHeight || document.body.scrollTop > nav.offsetHeight){
		nav.classList.add('bg-blue');
	}else{
		nav.classList.remove('bg-blue');
	}
};

