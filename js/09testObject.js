/**
 * Fonction constructeur de Bike
 * @param {String} color
 * @param {Number} speed
 * @returns Object (instance de Bike)
 */
function Bike(color, speed) {
  // Déclaration des propriété de l'objet courant représenté
  // par this
  this.color = color;
  this.speed = speed;
}
// Déclaration des méthodes dans le prototype de Bike
Bike.prototype.ride = function (distance) {
  console.log(`Je roule avec mon vélo ${this.color} pendant ${distance}Km.`);
};

// Création d'une instance de la fonction constructeur
// Bike et assignation par référence à la variable b1
const b1 = new Bike("noir", 6); // Arguments
console.log(`b1 : `, b1);
// Appel d'une méthode depuis une instance
b1.ride(10);

// Création d'une instance de la fonction constructeur
const b2 = new Bike("bleu", 16); // Arguments
console.log(`b2 : `, b2);
// Appel d'une méthode depuis une instance
b2.ride(20);

console.log(b1.constructor.name);
console.log(Object.getPrototypeOf(b1).constructor.name);

let object = new Bike("yellow", 20);
while (object) {
  console.log(`objet hérite du prototype de : `, object.constructor.name);
  object = Object.getPrototypeOf(object);
}
