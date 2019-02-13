// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

var dlElt = document.createElement('dl');

mots.forEach(function (mot) {
    dlElt.innerHTML += "<dt><strong>" + mot.terme + "</strong></dt>";
    dlElt.innerHTML += "<dd>" + mot.definition + "</dd>";
});

document.getElementById('contenu').appendChild(dlElt);
