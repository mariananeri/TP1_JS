//==== VARIABLES

const livres = [
    {
        isbn:9782714499806,
        titre: "Obsolète",
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
];

//==== ELEMENTS HTML
const listeLivresHTML = document.querySelector(".liste-livres");
const livreSelection = document.querySelector(".livre-vedette");
const boutonTriAlphaCroissant = document.querySelector(".alpha.croissant");
const boutonTriAlphaDecroissant = document.querySelector(".alpha.decroissant");
const boutonFiltrePrix = document.querySelector(".filtre.prix");

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
      <div class="livre">
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
  declencheur.style.backgroundColor = "beige";
  const visbn = declencheur.isbn;
  const vtitre = declencheur.titre;
  const vauteur = declencheur.auteur;
  const vprix = declencheur.prix;
  const templateVedette = `
      <div class="vedette">
      <h1>Livre sélectionné</h1>
        <img src="assets/img/livres/${visbn}.jpeg"
        <h2>${vtitre}</h2>
        <p>${vauteur}</p>
        <p>$${vprix}</p>
      </div> 
      `;

  //affichage du livre vedette
  livreSelection.insertAdjacentHTML("beforeend", templateVedette);
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