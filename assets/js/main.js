//==== VARIABLES

const livres = [
    {
      isbn:9782070453603,
      titre: "Just Kids",
      auteur: "Patti Smith",
      prix: 18.25,
      description:"Lorem ipsum",
    },
    {
      isbn:9782764816318,
      titre: "Qimmik",
      auteur: "Michel Jean",
      prix: 20,
      description:"Lorem ipsum",
  },
  {
    isbn:9782764813447,
    titre: "Kukum",
    auteur: "Michel Jean",
    prix: 32,
    description:"Lorem ipsum",
},
{
  isbn:9782290391174,
  titre: "La Femme de ménage",
  auteur: "Freida Mcfadden",
  prix: 20,
  description:"Lorem ipsum",
},
{
  isbn:9782384924080,
  titre: "Brésil 11 éd.",
  auteur: "Collectif",
  prix: 49.95,
  description:"Lorem ipsum",
},
{
  isbn:9782755637083,
  titre: "Jamais plus",
  auteur: "Colleen Hoover",
  prix: 12.95,
  description:"Lorem ipsum",
},
{
  isbn:9782714499806,
  titre: "Obsolète",
  auteur: "Colleen Hoover",
  prix: 12.95,
  auteur: "Sophie Loubière",
  prix: 34.95,
  description:"Auteur de huit romans, de nouvelles policières (notamment Les petits polars parus en version numérique chez 12/21) et d'un livre pour la jeunesse, Sophie Loubière s'est fait un nom dans le milieu de l'édition grâce à une émission littéraire unique en son genre (Parking de nuit, France Inter) et à ses chroniques à France Info (Info polar). Après L'Enfant aux Cailloux (Prix de la ville de Mauves-sur-Loire et Prix Lion d'or en 2012) Sophie Loubière nous invite dans son dernier roman Black Coffee à une exploration inédite de la mythique route 66 à travers l'histoire envoûtante d'une Française perdue dans l'immensité américaine...",
},
{
  isbn:9781039006942,
  titre: "The Afterpains",
  auteur: "Anna Julia Stainsby",
  prix: 20,
  description:"Gorgeous and compelling, The Afterpains is a heartbreaking portrait of two families trying to cope with grief, isolation, and living far from one’s homeland—told in the voices of four distinct narrators.",
},
];

//==== ELEMENTS HTML
const listeLivresHTML = document.querySelector(".liste-livres");
const livreSelection = document.querySelector(".livre-vedette");
const boutonTriAlphaCroissant = document.querySelector(".alpha.croissant");
const boutonTriAlphaDecroissant = document.querySelector(".alpha.decroissant");
const boutonFiltrePrix = document.querySelector(".filtre.prix");
const imageVedetteHTML = document.querySelector(".cover-vedette");
const titreVedetteHTML = document.querySelector(".titre");
const auteurVedetteHTML = document.querySelector(".auteur");
const prixVedetteHTML = document.querySelector(".prix-vedette");
const descriptionVedetteHTML = document.querySelector(".description");
const isbnVedetteHTML = document.querySelector(".isbn-vedette");



//==== FUNCTIONS

function init() {

  boutonFiltrePrix.addEventListener("click", function (evenement) {
    let tableauPrix = filtrerPrixMax(livres, 20);
    let tableauTrie = trierAlphabetiqueCroissant(tableauPrix);
    afficherLivres(tableauTrie);
  });

    boutonTriAlphaCroissant.addEventListener("click", function (evenement) {
    let tableauTrie = trierAlphabetiqueCroissant(livres);
    afficherLivres(tableauTrie);
  });

  boutonTriAlphaDecroissant.addEventListener("click", function (evenement) {
    let tableauTrie = trierAlphabetiqueDecroissant(livres);
    afficherLivres(tableauTrie);
  });

  afficherLivres(livres);
}

function afficherLivres(tableauLivres) {
  //On vide la liste avant d'afficher
  listeLivresHTML.innerHTML = "";

  //Boucler dans la liste
  for (let i = 0; i < tableauLivres.length; i++) {
    const livre = tableauLivres[i];
    //Récupérer le info de chaque livre
    const isbn = livre.isbn;
    const titre = livre.titre;
    const auteur = livre.auteur;
    const prix = livre.prix;
    //Afficher dans la console
    const template = `
      <div class="livre" id="${isbn}">
        <img src="assets/img/livres/${isbn}.jpeg">
        <h3>${titre}</h3>
        <h6>${auteur}</h6>
        <h4>$${prix}</h4>
      </div> 
      `;

    listeLivresHTML.insertAdjacentHTML("beforeend", template);
    const dernierElement = listeLivresHTML.lastElementChild;
    dernierElement.addEventListener("click", onClicBoite);
  }
}


function onClicBoite(evenement) {
  const declencheur = evenement.currentTarget;
  console.log(declencheur);
  const id = declencheur.id;
  const livreClic = trouverLivre(id);
  // On cherche tous les éléments avec la classe livre
  const livres = document.querySelectorAll(".livre")
  livres.forEach(function(element){
    element.style.backgroundColor="";
  })
  //Pour chaque on enlève le style.
  declencheur.style.backgroundColor = "beige";
  //rechercher dans la liste l'élément avec le id
  const objet = trouverLivre(id);
  const isbnVedette = objet.isbn;
  const titreVedette = objet.titre;
  const auteurVedette = objet.auteur;
  const prixVedette = objet.prix;
  const descriptionVedette = objet.description;

  //Afficher dans la zone, les valeurs de l,objet trouvé
  imageVedetteHTML.src=`assets/img/livres/${isbnVedette}.jpeg`;
  titreVedetteHTML.textContent=titreVedette;
  auteurVedetteHTML.textContent=auteurVedette;
  prixVedetteHTML.textContent="$"+prixVedette;
  descriptionVedetteHTML.textContent=descriptionVedette;
  //affichage du livre vedette
  

}


function trouverLivre(isbn) {
  let livreTrouve;
  livres.forEach(function (element) {
    if (element.isbn === parseInt(isbn)) {
      livreTrouve = element;
    }
  });

  return livreTrouve;
}

function trierAlphabetiqueCroissant(tableau) {
  const clone = [...tableau]; //on coupe la référence avec le tableau original

  clone.sort(function (livreA, livreB) {

    if (livreA.titre < livreB.titre) {
      return -1;
    } else if (livreA.titre > livreB.titre) {
      return 1;
    } else {
      return 0;
    }
  });

  return clone;
}

function trierAlphabetiqueDecroissant(tableau) {
  const clone = [...tableau]; //on coupe la référence avec le tableau original

  clone.sort(function (livreA, livreB) {

    if (livreB.titre < livreA.titre) {
      return -1;
    } else if (livreB.titre > livreA.titre) {
      return 1;
    } else {
      return 0;
    }
  });

  return clone;
}

function filtrerPrixMax(tableau, prixMax = 20) {
  const tableauFiltre = [];

  tableau.forEach(function (element, index) {
    if (element.prix <= prixMax) {
      tableauFiltre.push(element);
    }
  });

  return tableauFiltre;
}




//==== EXECUTION DU CODE
init();