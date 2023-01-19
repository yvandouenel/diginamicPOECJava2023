let h1 = document.getElementById("h1");
console.log(h1);

// De quelle class est issu h1
console.log("type de h1", typeof h1);
//h1.hidden = true;
h1.innerText = "On met ce que l'on veut";

// Affichages des attributs
console.log(h1.attributes);
/* while (h1) {
  console.log("class de h1", h1.constructor.name);
  // Remonte la chaîne des prototypes
  h1 = Object.getPrototypeOf(h1);
} */

// Création d'un élément du DOM
const span = document.createElement("span");
// Ajout d'un texte dans l'élément créé
span.innerText = " complément du titre dans un span";
// ajout de l'élément crée en tant que enfant de h1
h1.appendChild(span);

const first_li = document.querySelector("ul > li");
first_li.hidden = true;

const lis = document.querySelectorAll("ul > li");
lis.forEach((li) => {
  li.innerText += " ... test";
});
