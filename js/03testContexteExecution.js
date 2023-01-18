/* Les scopes sont créés dès qu'apparaissent des accolades ou des 
blocs de code  */
let i = 1;
function a() {
  console.log(`l : `, l);
  let j = 2;
  b();
  function b() {
    {
      // Dans ce bloc de code, je suis tout en haut de la pile des scopes
      // et j'ai donc accès à tous les scopes inférieurs
      let k = 3;
      console.log("k : ", k);
      console.log(`i : `, i);
      //b(); // Attention boucle infinie - fonction récursive
    }
    let l = 4;
    console.log("l : ", l);
  }
}
a(); // appel de la fonction a

/* Le contexte est donc tout ce qui n'est pas dans des accolades
Contexte global :
 - i 
 - a
Contexte de la fonction a
 - j
 - b 
Contexte de b
 - l
Contexte du bloc de code compris dans la fonction b
 - k
*/
