// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
var aElt = document.createElement('a');

journaux.forEach(function (element) {
    aElt.href = element;
    aElt.textContent = element;
    document.getElementById('contenu').appendChild(aElt);
    document.getElementById('contenu').innerHTML += "<br/>";
});