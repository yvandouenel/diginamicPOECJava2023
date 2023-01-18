// Appel de la fonction avec un argument
logLastname("Dylan");
/**
 * Affiche dans la console le nom
 * @param {String} name
 */
function logLastname(name) {
  // définition de la fonction avec un paramètre
  // Affiche la valeur du paramètre name dans la console
  //console.log(name);
}

/**
 * Renvoie un chaîne de caratères qui concatène les paramètres avec d'autres chaines de caractères
 * @param {String} firstname
 * @param {String} lastname
 * @returns {String}
 */
function introducePerson(firstname, lastname) {
  return `Bonjour, je m'appelle ${firstname} ${lastname}`;
}
// Quand on assigne l'appel d'une fonction, on assigne en fait le RETOUR de la fonction. presentation est de type "String"
const presentation = introducePerson("Bob", "Dylan");

// Quand on assigne le nom d'une fonction à une variable, on assigne une référence à la fonction. On peut dire ici que presentation_bis est un alias de introducePerson
// presentation est de type "function"
const presentation_bis = introducePerson;

console.log(presentation);
console.log(presentation_bis);
