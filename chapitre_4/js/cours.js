var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";
pElt.style.fontWeight = "bold";
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color); // Affiche "red"
console.log(paragraphesElts[1].style.color); // Affiche "green"
console.log(paragraphesElts[2].style.color); // N'affiche rien

var styleContenu = getComputedStyle(document.getElementById("para"));
