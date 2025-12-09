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

let examplePriceTTC = examplePriceHT + (examplePriceHT * 0.2);

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

function calculatePriceTTC(priceHT) {
  const TVA = 0.2;
  let priceTTC = priceHT + priceHT * TVA;
  return priceTTC;
}

function formatPrice(price) {
  let roundedPrice = price.toFixed(2);
  return roundedPrice;
}



let priceHT = 500;
console.log("Prix HT : " + priceHT);
let priceTTC = calculatePriceTTC(priceHT);
console.log(`Prix TTC : ${priceTTC}`);
console.log("Prix arrondi : " + formatPrice(priceTTC));





















// exo 5
// - Créer des variables pour :
//   nom du produit (featuredProductName), prix HT (featuredProductPriceHT), description (featuredProductDescription), image (featuredProductImage)
// let featuredProductName = "blah";
// let featuredProductPriceHT = 5;
// let featuredProductDescription = "blah blah blah description";
// let featuredProductImage = "pngtree-skincare-product-with-pastel-color-png-image_6451151.png";
// - Récupérer la section HTML où afficher le produit
//   (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)
let productList = document.getElementById("product-list");

// - Définir une fonction (createFeaturedProductCard()) qui :
//     • crée un conteneur pour la carte  
//       (indice : il existe une méthode du DOM pour créer un élément HTML)
//     • crée une image :
//         - lui donner la source de l'image
//       (indice : pensez aux propriétés des balises <img>)
//     • crée un titre et lui mettre le nom du produit  
//       (indice : une propriété permet d’écrire du texte dans un élément)
//     • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent
//       (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)
//     • formate ce prix TTC avec la fonction prévue pour ça
//     • crée un paragraphe pour afficher le prix TTC
//     • crée un autre paragraphe pour la description
//     • assemble tous les éléments dans le conteneur
//       (indice : pensez à une méthode qui ajoute un enfant dans un élément)
//     • retourne ce conteneur

// function createFeaturedProductCard()
// {
//   let cardContainer = document.createElement("article"); // should be an "article" instead

//   let image = document.createElement("img"); // don't forget to use variables
//   image.src = featuredProductImage; 

//   let nomProduit = document.createElement("h2");
//   nomProduit.textContent = featuredProductName;

//   //prix
//   // let prix = 15;
//   let prixTTC = calculatePriceTTC(featuredProductPriceHT);

//   // prixTTC = formatPrice(prixTTC);
//   let priceFormat = formatPrice(prixTTC);

//   let prixTTC_texte = document.createElement("p");
//   prixTTC_texte.textContent = priceFormat;

//   let productDescription = document.createElement("p");
//   productDescription.textContent=featuredProductDescription;


//   //ajouts d'enfants au cardContainer
//   cardContainer.appendChild(image);
//   cardContainer.appendChild(nomProduit);
//   cardContainer.appendChild(prixTTC_texte);
//   cardContainer.appendChild(productDescription);
//   // don't forget about the description !!!
//   return cardContainer;
// }




// - Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
//   (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)
// let productsSection = document.getElementsByClassName("products-section"); // this returns a list.. also you already fetched it earlier
// productsSection.innerHTML.remove(); // ??? .innerHTML
// - Appeler la fonction pour créer la carte
// - Ajouter le résultat dans la section prévue
productList.innerHTML = "";
// console.log(createFeaturedProductCard());
// const card = createFeaturedProductCard();
// productList.appendChild(card);
//   (indice : même méthode que pour assembler les éléments dans la carte)

// exo 6
// let productNames = ["Luffy", "Mario", "Luigi"];
// let productPricesHT = [99,30,37];
// console.log("Longueur du tableau : " + productNames.length);

// function displayProductsInConsole(){
//   for(let i = 0 ; i < productNames.length ; i++)
//   {
//     let prixTTC_produit = calculatePriceTTC(productPricesHT[i]);
//     prixTTC_produit = formatPrice(prixTTC_produit);
//     console.log(`Produit ${i} : ${productNames[i]} - ${prixTTC_produit} TTC`);
//   }
// }


// exo 7

let products = [
  {
    id: "1",
    name: "Tony",
    priceHT: 185,
    description: "C'est un produit qui va vous aider dans le code, Tony coûte seulement 15 euros !",
    image: "https://marketplace.canva.com/6ZPMc/MAEwbs6ZPMc/1/tl/canva-cute-fluffy-kitten-MAEwbs6ZPMc.png"
  },
  {
    id: "2",
    name: "Ilyes",
    priceHT: 325,
    description: "C'est un bon joueur Brawhalla",
    image: "https://marketplace.canva.com/6ZPMc/MAEwbs6ZPMc/1/tl/canva-cute-fluffy-kitten-MAEwbs6ZPMc.png"
  },

  {
    id: "2",
    name: "Ilyes",
    priceHT: 325,
    description: "C'est un bon joueur Brawhalla",
    image: "https://marketplace.canva.com/6ZPMc/MAEwbs6ZPMc/1/tl/canva-cute-fluffy-kitten-MAEwbs6ZPMc.png"
  },

  {
    id: "2",
    name: "Ilyes",
    priceHT: 325,
    description: "C'est un bon joueur Brawhalla",
    image: "https://marketplace.canva.com/6ZPMc/MAEwbs6ZPMc/1/tl/canva-cute-fluffy-kitten-MAEwbs6ZPMc.png"
  }
];



function displayProductsInPage() {
  let prixTotal = document.getElementById("cart-total-aside") // prix total

  prixTotal.innerHTML = "";
  let nombreArticles = document.getElementById("cart-count-aside");
  productList.style.display = "flex";
  prixTotal.innerHTML = "";
  let prixTotalNumber = 0;
  let nbArticle = 0;
  for (let e of products) // tous les articles
  {
    nbArticle++;
    nombreArticles.innerHTML = `${nbArticle}`;

    let products = document.createElement("div");
    let name = document.createElement("h2");

    let priceHT_objet = document.createElement("p");

    priceHT_objet.textContent = e.priceHT + "€";
    let image = document.createElement("img");
    image.src = e.image;

    let descriptionProduit = document.createElement("p");
    descriptionProduit.textContent = e.description;

    // prix total
    console.log("avant" + e.priceHT);
    prixTotalNumber += e.priceHT;
    let prixTotalFloat = prixTotalNumber.toFixed(2);

    console.log("Prix total number : " + prixTotalNumber);
    console.log(e.priceHT);
    prixTotal.textContent = `${prixTotalFloat} €`;
    console.log(prixTotal);

    name.textContent = e.name;
    image.style.width = "200px";
    products.style.border = "solid white 5px"
    products.style.width = "250px"; // largeur du style de chaque card

    console.log(e.name);
    products.appendChild(name);
    products.appendChild(descriptionProduit);

    products.appendChild(image);

    products.appendChild(priceHT_objet);
    productList.appendChild(products);

  }
}

displayProductsInPage();

let product = {
  id: "2",
  name: "Ilyes",
  priceHT: 325,
  description: "C'est un bon joueur Brawhalla",
  image: "https://marketplace.canva.com/6ZPMc/MAEwbs6ZPMc/1/tl/canva-cute-fluffy-kitten-MAEwbs6ZPMc.png"
}

let addToCartButton = document.getElementById("addToCartButton");
addToCartButton.addEventListener("click", function () {
  console.log("bouton cliqué");

  products.push(product);
  displayProductsInPage();
});