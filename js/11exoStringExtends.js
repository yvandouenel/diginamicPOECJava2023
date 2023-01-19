class CustomString extends String {
  split(string) {
    const finalString = super.split(string);

    console.log(`Après le premier split : `, finalString);

    for (const finalStringKey in finalString) {
      if (finalStringKey < finalString.length - 1) {
        finalString[finalStringKey] = finalString[finalStringKey] + string;
        console.log(`La valeur a chaque étape : `, finalString);
      }
    }

    console.log(`Le tableau modifier : `, finalString);
    return [super.split(string), finalString];
  }
}
const customString = new customString("hello world");

console.log(`Retour ma méthode split`, customString.split("o"));
