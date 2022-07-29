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
console.log(imagesArray[1])

// Init un index
let i = 1;

// Déclenche une fonction toutes les 15 secondes qui changera l'image
setInterval(changeImage, 15000);

function changeImage() {

    image.style.backgroundImage = `url(./assets/images/${imagesArray[i]}.jpg)`;
    i++;

    if (i == imagesArray.length) {
        i = 0;
    }

}