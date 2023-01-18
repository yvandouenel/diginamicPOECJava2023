// Syntaxe historique avec le mot clé function
function introducePerson(firstname, lastname) {
  return `Bonjour, je m'appelle ${firstname} ${lastname}`;
}
console.log(introducePerson("Bob", "Dylan"));

// fonction fléchée =>. Ici le nom de la variable devient le nom de la fonction
const introducePersonArrow = (firstname, lastname) =>
  `Bonjour, je m'appelle ${firstname} ${lastname}`;
console.log(introducePersonArrow("Bob", "Dylan"));
