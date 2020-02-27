/*
Un [nombre d'Armstrong](https://fr.wikipedia.org/wiki/Nombre_narcissique) est un nombre qui est égal à la somme de ses chiffres portés à la puissance du nombre de chiffres le composant.

On utilise le signe `^` pour indiquer une puissance. Par exemple `3^2` signifie 3 porté à la puissance 2. Cette valeur vaut donc `3*3 = 9`.

Par exemple, le nombre `153` est composé de `3` chiffres : `1`, `5` et `3`. On doit donc porter ces 3 chiffres à la puissance `3`, c'est-à-dire `1^3`, `5^3` et `3^3` et faire leur somme.

Au final on a `1^3 + 5^3 + 3^3 = 153`. On retrouve le nombre original `153` donc c'est un nombre d'Armstrong.

## Exemples
- 9 est un nombre d'Armstrong, car `9^1 = 9`
- 10 n'est **pas** un nombre d'Armstrong, car `1^2 + 0^2 = 1`
- 153 est un nombre d'Armstrong, car `1^3 + 5^3 + 3^3 = 153`
- 154 n'est **pas** un nombre d'Armstrong, car `1^3 + 5^3 + 4^3 = 190`
*/

function exercice3(nombre) {
  const nombreChaine = String(nombre);
  const nombreChiffres = nombreChaine.length;
  let somme = 0;
  const nombreTableau = nombreChaine.split("");
  nombreTableau.forEach(chiffre => {
    somme += chiffre ** nombreChiffres;
  });
  return nombre === somme;
}

/* REFACTORING */
function exercice3(nombre) {
  const nombreTableau = String(nombre).split("");
  const nombreChiffres = nombreTableau.length;
  const somme = nombreTableau.reduce(
    (resultat, chiffre) => resultat + chiffre ** nombreChiffres,
    0
  );
  return nombre === somme;
}
