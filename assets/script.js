const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const arrowLeft = document.querySelector(".arrow_left") // !Récuperation de la fléche de gauche avec querySelector //
console.log(arrowLeft)

const arrowRight = document.querySelector(".arrow_right") // !Récuperation de la fléche de droite avec querySelector //
console.log(arrowRight)

let bannerImg = document.querySelector(".banner-img") // Récuperation des images//
let Images = "assets/images/slideshow/"


let dots = document.querySelector(".dots") // Points du carrousel//


createDots()
dotsUpdate(0)

 
function createDots() {
	for (let quantityDots = 0; quantityDots <= slides.length - 1; quantityDots++) {
		let dot = document.createElement("div"); //Fonction de création des points du carrousel//
		dots.appendChild(dot).classList.add("dot");
	}
}

let i = 0 //point index 0//


arrowRight.addEventListener("click", () => {
	if (i >= slides.length - 1) {          //Flèche droite//
		i = 0
	} else {
		i++
	}
	sliderUpdate(i)
	dotsUpdate(i)
})


arrowLeft.addEventListener("click", () => {
	if (i <= 0) {    //Flèche gauche//
		i = slides.length - 1
	} else {
		i--
	}
	sliderUpdate(i)
	dotsUpdate(i)
})


function sliderUpdate (index) {
	let bannerImg = document.querySelector(".banner-img");
	bannerImg.src = Images + slides[index].image;      // Fonction mettant à jour les images et le texte du carrousel//
	
	let texte = document.getElementById("banner-tagLine");
	texte.innerHTML = slides[index].tagLine;
}




function dotsUpdate (index) {
	let dot = document.querySelectorAll(".dot");  // Fonction permettant de modifier l'apparence du point sélectionné//

	for (let compteur = 0; compteur < dot.length; compteur++) {
		dot[compteur].classList.remove("dot_selected")
	}

	dot[index].classList.add("dot_selected")
}



