"use strict"
// 1 - PSEUDO CODE --------------------

// Objectif ---
// L’image en haut de page doit changer toutes les 15 secondes

// Solution --- 
// Changer l'url du background-image via une fonction
// Trouver le moyen de faire déclencher une fonction toutes les 15 secondes


// 2 - CODE --------------------

// Cibler la div pour changer le background image
let image = document.querySelector('.background-head');

// Créer un tableau d'url d'images
let imagesArray = ['background-head-1', 'background-head-2', 'background-head-3'];

// Init un index
let index = 1;

// Déclenche une fonction toutes les 15 secondes qui changera l'image
setInterval(changeImage, 15000);

function changeImage() {

    image.style.backgroundImage = `url(/assets/images/${imagesArray[index]}.jpg`;
    index++;

    if (index == imagesArray.length) {
        index = 1;
    }

}