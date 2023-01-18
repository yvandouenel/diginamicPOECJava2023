// SetTimeout permet d'exécuter une fonction après un temps donné en millisecondes
/* const timeoutid = window.setTimeout(() => {
  console.log(`J'écris dans la console`);
}, 3000); // non bloquant
console.log(`timeoutid : `, timeoutid); */

/* function logConsoleNum(i) {
  setTimeout(() => {
    console.log("i : ", i);
    if (i < 10) logConsoleNum(i + 1); // Appel récursif
  }, 1000);
}
logConsoleNum(1); */

function logConsoleNum(i) {
  i++;
  setTimeout(() => {
    console.log("i : ", i);
  }, 1000 * i);
  if (i < 10) {
    logConsoleNum(i);
  }
}
logConsoleNum(0);
