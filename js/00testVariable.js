// Déclaration et assignation dans un bloc de code
// Quand on déclare une variable avec le mot clé let, on dit que la variable
// est "block scope"
// Quand on déclare une variable avec le mot clé var, on dit que la variable
// est "function scope" et donc s'il n'y a pas de fonction, la variable est globale
// Typage dynamique
let i;
console.log(`i : `, i);
console.log(`type de i : `, typeof i);

// Réassignation
i = "Hello World";
console.log(`i : `, i);
console.log(`type de i : `, typeof i);

const j = { name: "Toto" };
console.log(`j : `, j);
j.name = "Bob";
console.log(`j : `, j);
// Attention, on ne peut pas réassigner une constante
j = { name: "Toto" };
