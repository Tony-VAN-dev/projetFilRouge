// - Créer une variable pour le nom de la boutique
let shopName = "L'Atelier Punchline";
// - Créer une variable pour la ville (city)
let city = "Tony City";
// - Créer une variable booléenne pour savoir si la boutique est ouverte (isOpen)
let isOpen = true;
// - Créer une variable pour le nombre de produits (productCount)
let productCount = 0;
// - Créer une variable pour le slogan (slogan)
let slogan = "Ma boutique, c'est pas juste du commerce. C'est un théâtre où chacun écrit son rôle.";
// - Afficher un message de bienvenue dans la console
//   (indice : concaténer texte + variables)

console.log("Bienvenue chez" + " " + shopName);

// - Afficher le slogan dans la console
console.log(slogan);
// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”
//   (indice : utiliser une condition simple avec if / else)
if(isOpen == true)
{
    console.log("Ouverte");
} else{
    console.log("Fermée");
}