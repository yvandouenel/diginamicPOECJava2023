//import ...
var i = 78;
/**
 * La fonction anonyme immédiate perte d'isoler le code et d'éviter les
 * collisions de noms de variable
 */
(function () {
  var i = 12;
  console.log(`i dans la fonction anonyme : `, i); // 12
})(); // Appel immédiat de la fonction anonyme

console.log(`i dans le scope global : `, i); // 78
