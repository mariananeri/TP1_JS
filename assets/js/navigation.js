// ===== Variables
const liensMenu = [
    "À propos",
    "Produits",
    "Contact",
  ];
  
  // ===== Éléments HTML
  const listeLiensHTML = document.querySelector(
    ".liens-menu ul"
  );
  
  // ===== Fonctions
  /**
   * Fonction appelée au chargement de la page
   */
  function init() {
    liensMenu.forEach(function (lien) {
      injecterLienHTML(lien);
    });
  }
  
  /**
   * Fonction qui formatte le href à partir du nom d'une page
   * @param {String} nomLien le nom de la page
   * @returns {String} L'url formattée
   */
  function genererHrefLien(nomLien) {
    let url = nomLien.trim(); //Nettoie les espaces superflus
    url = url.toLowerCase(); //Mets en minuscule
    url = url.replaceAll(" ", "-"); //Remplace les espaces
  
    //Divise les caractères accentués en deux caractères (accent et lettre) et retire l'accent avec une expression régulière
    url = url.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  
    url = `${url}.html`;
    return url;
  }
  
  /**
   * Fonction qui injecte du HTML dans la page
   * @param {String} nomLien Le nom de la page
   */
  function injecterLienHTML(nomLien) {
    // On formatte l'url avec notre fonction
    const href = genererHrefLien(nomLien);
  
    // Le html à injecter
    const template = `
          <li>
              <a href="${href}">${nomLien.trim()}</a>
          </li>
      `;
  
    // On ajoute sur la page
    listeLiensHTML.insertAdjacentHTML("beforeend", template);
  
 
  }
  

  
  // ===== Exécution du code
  init();
  
