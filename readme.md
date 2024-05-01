# Travail pratique 1 - JavaScript

## Syntaxe de base et affichage

### Objectifs

Le but de ce travail pratique est de vous familiariser avec la syntaxe de base du JavaScript et de vous faire
pratiquer l'affichage de contenu dans une page web.
Les trois travaux de la session sont liés. Vous allez travailler sur le même projet pour les trois travaux. Vous allez
créer un site web d'un produit ou un service de votre choix. Vous allez ajouter de l'interactivité à votre site web à
chaque travail.
Dans ce travail, vous allez afficher une liste de produits que vous pourrez trier et vous allez ajouter de
l'interactivité pour afficher le détail d'un produit.
Vous devez respecter la maquette en fil de fer fournie mais vous pouvez remplacer par le contenu de votre choix
(texte, images, etc.). Bien que le style ne soit pas évalué, votre CSS doit être valide et respecter les bonnes
pratiques en terme de lisibilité et de hiérarchie.
Vous devez montrer l'avancement du projet à au moins une reprise. Je dois voir le code pour m'assurer que vous
êtes sur la bonne voie.

### Tâches à réaliser

**Générer la navigation dynamiquement**

    - Vous devez créer un tableau contenant les liens de la navigation. Chaque lien doit contenir le texte à
afficher et le nom de la page correspondante. Vous devez utiliser un objet pour chaque lien.

    - Vous devez générer les onglets de la navigation dynamiquement à partir du tableau. Les liens doivent être fonctionnels et mener à la page correspondante.

    - Au chargement de la page, le lien de la page courante doit être mis en évidence (ex: souligné, gras, couleur différente, etc.). L'objet Document contient l'information nécessaire pour faire cela. Faites une recherche et indiquez en commentaire la ressource que vous avez utilisée.


Mettez le code pour la navigation dans un fichier séparé que vous pourrez ajouter à chaque page. Ce n'est le plus optimal pour un site concret mais nous allons optimiser cela à la fin de la session.

La balise nav doit être donc être vide dans le HTML. Vous devez générer le contenu de la balise nav à partir du
JavaScript.

**Afficher la liste de produits**

- Vous devez afficher une liste d'éléments HTML à partir d'un tableau d'objets contenant les données des produits. (Maximum 5 produits)

- Vous devez utiliser un objet pour chaque produit. Chaque objet doit contenir au moins 3 propriétés (ex:
nom, prix, description, etc.). Ajoutez un id unique à chaque élément de la liste. Vous allez en avoir besoin
pour la suite.

- Vous devez créer vous-même un tableau pour regrouper les objets. Vous pouvez utiliser des données fictives.

- Utilisez des images à partir de banques libres de droit comme Unsplash ou Pexels.

- Renommez-vos images : `nom-du-produit.jpg` ou `nom-du-produit.webp` pour faciliter la
programmation.

- Vous devez générer le lien vers les images en concaténant le chemin vers le dossier assets/img/ avec le nom du produit et l'extension nécessaire.

- Lorsque vous générez le contenu de la liste, passez le id à l'élément HTML qui aura un événement de clic.
Vous allez en avoir besoin pour la suite.

**Afficher le détail d'un produit**

- Au clic d'une vignette de la liste, vous devez afficher le détail dans la section aside.
- Utilisez une fonction pour réaliser cette tâche.
- L'objet cliqué doit être mis en évidence (ex: souligné, gras, couleur différente, etc.).

**Trier la liste de produits**

- Vous devez permettre de trier et filtrer les éléments de la liste en cliquant sur des boutons. Vous devez
pouvoir filtrer d'au moins trois façons (ex: alphabétique a-z, alphabetique z-a, par prix croissant, etc.)

- Utilisez une seule fonction pour réaliser cette tâche.

- N'utilisez pas de champs de formulaire pour cet exercice comme les boites à cocher ou les menus défilants
