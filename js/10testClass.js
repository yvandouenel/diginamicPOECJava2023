class Bike {
  constructor(color, speed) {
    // Déclaration des propriété de l'objet courant représenté
    // par this
    this.color = color;
    this.speed = speed;
  }
  ride(distance) {
    console.log(`Je roule avec mon vélo ${this.color} pendant ${distance}Km.`);
  }
  brake() {
    console.log(`Je freine avec mon vélo ${this.color}.`);
  }
}
const b1 = new Bike("Canon", 6);
b1.brake();

class EBike extends Bike {
  // Surcharge du constructeur
  constructor(color, speed, engine_power) {
    super(color, speed);
    this.engine_power = engine_power;
  }
  // Déclaration d'une nouvelle méthode spécifique à EBike
  // et à toutes les classes filles si elles exitent
  plugin() {
    console.log(`Je charge mon vélo`);
  }
  // Redéfinition ou surcharge si j'appelle super
  ride(distance) {
    super.ride(distance);
    console.log(
      `Je roule à l'électricité avec mon vélo ${this.color} pendant ${distance}Km.`
    );
  }
}
const eb1 = new EBike("Btween", 12, "36W");
eb1.plugin();
eb1.ride(50);
eb1.brake();
console.log(`b1`, b1);
console.log(`eb1`, eb1);
