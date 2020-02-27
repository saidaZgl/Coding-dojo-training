/*
Une anagramme est un mot que l'on peut former en changeant de place les lettres d'un autre mot. Par exemple une anagramme de `gare` est `rage`.

Étant donné un mot et un tableau d'anagrammes possibles, sélectionnez les réponses correctes et renvoyez-les sous la forme d'un tableau.

## Exemples
- Pour le mot `rage` et le tableau `['amour','code','source']`, ça doit renvoyer un tableau vide `[]`
- Pour le mot `rage` et le tableau `['amour','haine','gare']`, ça doit renvoyer le tableau `['gare']`
- Pour le mot `rame` et le tableau `['bateau', 'amer', 'canards', 'mare']`, ça doit renvoyer le tableau `['amer', 'mare']`
- Pour le mot `tappe` et le tableau `['patte']`, ça doit renvoyer un tableau vide `[]`
*/

function exercice1(mot, liste) {
  // rage
  // ['amour', 'haine', 'gare']
  let anagrammes = [];
  for (let word of liste) {
    if (mot.length != word.length) {
      continue;
    }
    // rage gare
    // aegr aegr
    let lettresMot = formaterMot(mot);
    let lettresWord = formaterMot(word);
    if (lettresMot === lettresWord) {
      anagrammes.push(word);
    }
  }
  return anagrammes;
}

function formaterMot(mot) {
  return mot
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
