
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

console.log(slides);

let arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener("click", () => {
	console.log("j'ai cliqué sur la flèche gauche");

})

let arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click", () => {
	console.log("j'ai cliqué sur la flèche droite");
})

//***Affichage des dots ///

let dots = document.querySelector(".dots");
let index = 0;
const arraySlides = 4;

function affichageDots() {
	for (let i = 0; i < arraySlides; i++) {
		let dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);

		if (i === index) {
			dot.classList.add("dot_selected");
		}
	}
}

affichageDots();

//**Changement d'image au click sur les flèches **//

let img = document.querySelector(".banner-img")
let p = document.querySelector("#banner p")
const cheminImage = './assets/images/slideshow/'

function clickDroit() {



	arrow_right.addEventListener("click", () => {
		index++;
		if (index < slides.length) {


			console.log(index);
			img.src = cheminImage + slides[index].image;
			p.innerHTML = slides[index].tagLine;
		}
		else {

			index = 0
			img.src = cheminImage + slides[index].image;
			p.innerHTML = slides[index].tagLine;
		}
	})

}



clickDroit();

function clickGauche() {



	arrow_left.addEventListener("click", () => {
		index--;
		if (index !== -1) {


			console.log(index);
			img.src = cheminImage + slides[index].image;
			p.innerHTML = slides[index].tagLine;
		}
		else {
			index = 3
			img.src = cheminImage + slides[index].image;
			p.innerHTML = slides[index].tagLine;
		}
	})

}



clickGauche();

