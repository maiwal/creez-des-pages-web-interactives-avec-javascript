/*function clic() {
    console.log("Clic !");
}*/

// var boutonElt = document.getElementById("bouton");

// Ajout d'un gestionnaire pour l'événement click
// boutonElt.addEventListener("click", clic);

// Suppression du gestionnaire pour l'événement click
// boutonElt.removeEventListener("click", clic);

// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement
/*document.getElementById("bouton").addEventListener("click", function (e) {
    alert("Evènement : " + e.type + ", texte de la cible : " + e.target.textContent);
});*/

// Gestion de l'appui sur une touche du clavier produisant un caractère
/*document.addEventListener("keypress", function (e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});*/

// Affiche des informations sur un événement clavier
/*function infosClavier(e) {
    console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
}*/

// Gestion de l'appui et du relâchement d'une touche du clavier
/*
document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);*/

// Gestion du clic sur le document
/*document.addEventListener("click", function (e) {
    console.log("Gestionnaire document");
});*/
// Gestion du clic sur le paragraphe
/*document.getElementById("para").addEventListener("click", function (e) {
    console.log("Gestionnaire paragraphe");
});*/
// Gestion du clic sur le bouton
/*document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
    e.stopPropagation(); // Arrêt de la propagation de l'événement
});*/

// Gestion du clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
    console.log("Continuez plutôt à lire le cours ;)");
    e.preventDefault(); // Annulation de la navigation vers la cible du lien
});
