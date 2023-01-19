const fruits = ["Cerise", "Banane"];
//const fruits = new Array("Cerise", "Banane");
console.log(`fruits `, fruits);
console.log(`Taille du tableau fruits : `, fruits.length);

fruits.push("Poire");
console.log(`fruits `, fruits);

console.log(`Valeur du premier élément du tableau fruits`, fruits[0]);
console.log(
  `Valeur du dernier élément du tableau fruits`,
  fruits[fruits.length - 1]
);

// Parcours du tableau
fruits.forEach((fruit, index) => {
  console.log(`valeur correspondant à l'index ${index} : `, fruit);
});

const shop_list = ["lait", "beurre", "salade"];
// Créer une nouveau tableau qui encapsule chaque élement du tableau entre les balises <li></li>. Ex :"lait" =>  "<li>lait</li>" Utilisez pour cela la méthode map. Vérifiez si cette méthode est pure ou impure

const people = [
  { name: "Dylan", age: 78 },
  { name: "Souchon", age: 62 },
  { name: "Prince", age: 17 },
];
// Créer un nouveau tableau qui ne comprend que des personnes de plus de 50 ans : utiliser pour cela la méthode filter
