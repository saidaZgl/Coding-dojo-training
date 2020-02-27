/*
La conjecture de Syracuse ou le problème 3x + 1 peut être résumé comme ceci :

Prenez un nombre entier positif `n`. Si `n` est pair, divisez-le par 2 pour obtenir `n / 2`. Si `n` est impair, multipliez-le par 3 et ajoutez 1 pour obtenir `n * 3 + 1`.

Répétez ce processus indéfiniment. La conjecture établit que peu importe le nombre avec lequel vous commencez, vous finirez toujours par atteindre 1.

Étant donné un nombre `n`, retournez le nombre d'étapes nécessaires pour atteindre 1.

## Exemples

On commence avec `n = 12`, les étapes seraient les suivantes :

0. 12
1. 6
2. 3
3. 10
4. 5
5. 16
6. 8
7. 4
8. 2
9. 1

On atteint 1 en 9 étapes. Donc pour `n = 12`, la fonction doit retourner `9`.
*/

function exercice3(n) {
  let etapes = 0;
  while (n !== 1) {
    if (nombreEstPair(n)) {
      n /= 2;
    } else {
      n = n * 3 + 1;
    }
    etapes += 1; //etapes++
  }
  return etapes;
}

function nombreEstPair(nombre) {
  return nombre % 2 === 0;
}
