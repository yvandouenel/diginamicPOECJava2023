function makeBankAccount() {
  // this one is private
  // en fait balance est considérée comme privée car on n'a pas d'autre moyen d'y accéder ou de la modifier qu'en passant par les fonctions getter et setter
  let balance = 0;

  // a "getter", made public via the returned object below
  function getBalance() {
    // On a accès à la variable balance parce que l'on se trouve dans
    // un contexte ou un scope de niveau supérieur de celui dans lequel
    // balance a été déclaré
    // Test si l'utilisateur a le droit de récupérer cette valeur
    return balance;
  }

  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    // On va vérifier que la valeur passée est correcte
    // On va vérifier que l'utilisateur a bien le droit de modifier le montant
    balance = amount;
  }

  return {
    // ...
    getBalance,
    setBalance,
  };
}

const account = makeBankAccount();
console.log(`account`, account);
// Le mécanisme de closure va me permettre d'accéder à balance via le contexte global mais uniquement en faisant appel aux fonctions getBalance et setBalance qui sont elles issues d'un contexte supérieur au scope auquel appartient balance
account.setBalance(100);
console.log(`balance : `, account.getBalance());
