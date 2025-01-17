//==== VARIABLES
const liensMenu = [
    {
      url: "index.html",
      texte: "Accueil",
    },
    {
      url: "apropos.html",
      texte: "A propos",
    },
    {
      url: "contact.html",
      texte: "Contact",
    },
  ];

  //==== ELEMENTS HTML

  const listeLiensHTML = document.querySelector(".menujs");
  
  //==== FONCTIONS

  function init() {
    liensMenu.forEach(function (lien) {
      injecterLienHTML(lien);
    });
  }

function injecterLienHTML(tableauLiens) {
    listeLiensHTML.innerHTML = "";
    for (let i = 0; i < liensMenu.length; i++) {
        const lien = liensMenu[i];
        const url = lien.url;
        const texte = lien.texte;
        const menu = `
          <li>
              <a href="${url}">${texte}</a>
          </li>
      `;
      listeLiensHTML.insertAdjacentHTML("beforeend",menu);
}
}


  //==== EXECUTION CODE
init();