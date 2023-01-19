// Objet littéral : syntaxe très proche du json
const jc = {
  lastname: "Dusse",
  firstname: "Jean-Claude",
  introduceMySelf: function () {
    console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom);
  },
};
console.log(`prénom de jc`, jc["firstname"]);
// Parcours de l'objet
for (let key in jc) {
  console.log(`key and value : ${key} ${jc[key]}`);
}
