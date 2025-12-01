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

//nouveauté exo2

// - Partir du slogan déjà créé à l’exercice 1

// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)
let messageBienvenue = "Bienvenue chez" + " " + shopName;

// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})
let messageBienvenue2 = `Bienvenue chez ${shopName}`;

// - Calculer la longueur du slogan
let longueurSlogan = slogan.length;

// - Créer une version en majuscules du slogan
let sloganToutEnMajuscule = slogan.toUpperCase();

// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)
let slogan2emeVersion = slogan.replace("Ma boutique", "Mon magasin");

// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console
console.log(messageBienvenue + "\n" + messageBienvenue2 + "\n" + longueurSlogan + "\n" + sloganToutEnMajuscule + "\n" + slogan2emeVersion);
console.log(`${messageBienvenue} ${messageBienvenue2} ${longueurSlogan} ${sloganToutEnMajuscule} ${slogan2emeVersion}`);


//exo 3


// - Créer une variable contenant un prix HT d’exemple
let HT = 499;

// - Créer une variable contenant le taux de TVA
//   (par exemple 0.2 pour 20%)
let TVA = 0.2;

// - Calculer le prix TTC à partir du prix HT et de la TVA
//   (indice : utiliser une addition et une multiplication)
let TTC = HT + (HT * TVA);

// - Afficher le prix HT et le prix TTC dans la console
console.log(HT, TTC);

// - Créer une variable pour compter le nombre de ventes
//   (commencer à 0)
let sale= 0;
// - Simuler une nouvelle vente en augmentant ce compteur
//   (indice : utiliser l’opérateur pour ajouter 1)
sale++;
// - Afficher la nouvelle valeur du compteur dans la console

console.log(sale);
