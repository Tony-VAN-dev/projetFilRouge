// // - Créer une variable pour le nom de la boutique
// let shopName = "L'Atelier Punchline";
// // - Créer une variable pour la ville (city)
// let city = "Tony City";
// // - Créer une variable booléenne pour savoir si la boutique est ouverte (isOpen)
// let isOpen = true;
// // - Créer une variable pour le nombre de produits (productCount)
// let productCount = 0;
// // - Créer une variable pour le slogan (slogan)
// let slogan = "Ma boutique, c'est pas juste du commerce. C'est un théâtre où chacun écrit son rôle.";
// // - Afficher un message de bienvenue dans la console
// //   (indice : concaténer texte + variables)

// console.log("Bienvenue chez" + " " + shopName);

// // - Afficher le slogan dans la console
// console.log(slogan);
// // - Selon la variable qui indique si la boutique est ouverte :
// //   - afficher dans la console un message “ouverte”
// //   - ou un message “fermée”
// //   (indice : utiliser une condition simple avec if / else)
// if(isOpen == true)
// {
//     console.log("Ouverte");
// } else{
//     console.log("Fermée");
// }

// //nouveauté exo2

// // - Partir du slogan déjà créé à l’exercice 1

// // - Créer un premier message de bienvenue en collant du texte et des variables
// //   (indice : utiliser l’opérateur pour concaténer des chaînes)
// let messageBienvenue = "Bienvenue chez" + " " + shopName;

// // - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
// //   qui permet d’injecter des variables dans une chaîne
// //   (indice : pensez au gabarit de chaîne avec ${...})
// let messageBienvenue2 = `Bienvenue chez ${shopName}`;

// // - Calculer la longueur du slogan
// let longueurSlogan = slogan.length;

// // - Créer une version en majuscules du slogan
// let sloganToutEnMajuscule = slogan.toUpperCase();

// // - Créer une version du slogan où un mot est remplacé par un autre
// //   (indice : il existe une méthode pour remplacer une partie d’un texte)
// let slogan2emeVersion = slogan.replace("Ma boutique", "Mon magasin");

// // - Afficher les deux messages, la longueur, la version majuscule
// //   et la version modifiée dans la console
// console.log(messageBienvenue + "\n" + messageBienvenue2 + "\n" + longueurSlogan + "\n" + sloganToutEnMajuscule + "\n" + slogan2emeVersion);
// console.log(`${messageBienvenue} ${messageBienvenue2} ${longueurSlogan} ${sloganToutEnMajuscule} ${slogan2emeVersion}`);


// //exo 3


// // - Créer une variable contenant un prix HT d’exemple
// let HT = 49900000;

// // - Créer une variable contenant le taux de TVA
// //   (par exemple 0.2 pour 20%)
// let TVA = 0.2;

// // - Calculer le prix TTC à partir du prix HT et de la TVA
// //   (indice : utiliser une addition et une multiplication)
// let TTC = HT + (HT * TVA);

// // - Afficher le prix HT et le prix TTC dans la console
// console.log(HT, TTC);

// // - Créer une variable pour compter le nombre de ventes
// //   (commencer à 0)
// let sale= 0;
// // - Simuler une nouvelle vente en augmentant ce compteur
// //   (indice : utiliser l’opérateur pour ajouter 1)
// sale++;
// // - Afficher la nouvelle valeur du compteur dans la console

// console.log(sale);


/////////////////////////////////////////////////////////////////////////









/*************************************************
 * EXERCICE 3 - Nombres, calculs & TVA
 * Notions : opérations mathématiques, incrémentation
 *************************************************/

/* --- Correction Exercice 1 & 2 --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent =
    "Bienvenue dans " + shopName + " à " + city + " 👋";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

/* --- Nouveautés Exercice 3 --- */

// Prix d'exemple et TVA


let examplePriceHT = 20;

let examplePriceTTC = examplePriceHT + (examplePriceHT * TVA);

console.log("Prix HT exemple :", examplePriceHT);
console.log("Prix TTC exemple :", examplePriceTTC);

// Compteur de ventes
let salesCount = 0;
salesCount++;
salesCount++;

console.log("Nombre de ventes :", salesCount);



/* --- Rendu visuel Exo 3 --- */

const cartTotalHeader = document.getElementById("cart-total");
const cartTotalAside = document.getElementById("cart-total-aside");

if (cartTotalHeader) {
  cartTotalHeader.textContent = examplePriceTTC.toFixed(2) + " €";
}
if (cartTotalAside) {
  cartTotalAside.textContent = examplePriceTTC.toFixed(2) + " €";
}

const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
  cartMessageElement.textContent =
    "Exemple de prix TTC affiché dans le panier (exercice 3).";
}

console.log("Exercice 3 chargé ✅");

// Exo 4

function calculatePriceTTC(priceHT)
{
    const TVA = 0.2;
    let priceTTC = priceHT + priceHT * TVA;
    return priceTTC;
}

function formatPrice(price){
    let roundedPrice = price.toFixed(2);
    return roundedPrice;
}



let priceHT = 500;
console.log("Prix HT : " + priceHT);
let priceTTC = calculatePriceTTC(priceHT);
console.log(`Prix TTC : ${priceTTC}`);
console.log("Prix arrondi : " + formatPrice(priceTTC));