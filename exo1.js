/*
L'objectif de cet exercice est de créer une fonction permettant de renvoyer le **mot** correspondant au chiffre passé en argument.

Les valeurs d'entrées sont les chiffres de `0` à `2` inclu.

## Exemples
- Pour le chiffre `0`, la fonction doit renvoyer `zéro`
- Pour le chiffre `1`, la fonction doit renvoyer `un`
- Pour le chiffre `2`, la fonction doit renvoyer `deux`
*/

/* Cas 1 */
function exercice1(chiffre) {
  if (chiffre === 0) {
    return "zéro";
  }
  if (chiffre === 1) {
    return "un";
  }
  if (chiffre === 2) {
    return "deux";
  }
}

/* Cas 2 */
function exercice1(chiffre) {
  switch (chiffre) {
    case 0:
      return "zéro";
    case 1:
      return "un";
    case 2:
      return "deux";
  }
}

/* Cas 3 */
function exercice1(chiffre) {
  let tableau = ["zéro", "un", "deux"];
  return tableau[chiffre];
}

/* Factorisation Cas 3 */
function exercice1(chiffre) {
  return ["zéro", "un", "deux"][chiffre];
}
