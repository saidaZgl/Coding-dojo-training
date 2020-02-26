/*# Exercice 2

Étant donné un prénom `prenom`, la fonction doit renvoyer `Un pour <prenom>, un pour moi.`.

Si aucun prénom n'est donné, la fonction doit renvoyer `Un pour toi, un pour moi.`.

## Exemples
- Pour le prénom `Tom`, la fonction doit renvoyer `Un pour Tom, un pour moi.`
- Pour le prénom `Alice`, la fonction doit renvoyer `Un pour Alice, un pour moi.`
- Si aucun prénom n'est fourni, la fonction doit renvoyer `Un pour toi, un pour moi.`
*/

/* Cas 1 */
function exercice2(prenom) {
  if (prenom === "Tom") {
    return "Un pour Tom, un pour moi.";
  }
  if (prenom === "Alice") {
    return "Un pour Alice, un pour moi.";
  }
  if (prenom === undefined) {
    return "Un pour toi, un pour moi.";
  }
}

/* Cas 2 */
function exercice2(prenom) {
  if (prenom === undefined) {
    prenom = "toi";
  }
  return `Un pour ${prenom}, un pour moi.`;
}

/* Cas avec ES6 */
function exercice2(prenom = "toi") {
  return `Un pour ${prenom}, un pour moi.`;
}
