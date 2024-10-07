
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
]

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

const dots = document.querySelector(".dots");
let index = 0;


function affichageDots() {
	for (let i = 0; i < arraySlides.lenght; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);

		if (i === index) {
			dot.classList.add("dot_selected");
		}
	}
}

affichageDots();