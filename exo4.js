/*
L'objectif de cet exercice est de créer une fonction qui traduit un nombre en chiffres Romains.

Par exemple pour `nombre = 12`, la fonction doit renvoyer `XII`.

> On utilisera les lettres `i`, `v`, `x`, `l`, `c`, `d`, `m` en majuscule pour construire les chiffres Romains.

Voici les règles de construction d'un chiffre Romain :
- Les nombres `1`, `2` et `3` s'écrivent respectivement `I`, `II` et `III`
- Le nombre `5` s'écrit `V`
- Le nombre `10` s'écrit `X`
- Le nombre `50` s'écrit `L`
- Le nombre `100` s'écrit `C`
- Le nombre `500` s'écrit `D`
- Le nombre `1000` s'écrit `M`
- Lorsqu'on écrit deux lettres de suite, si la valeur numérique de la première est supérieure à la valeur numérique de la seconde, on ajoute leurs valeurs numériques. Par exemple le nombre `6` s'écrit `VI`. On fait l'addition `V` (5) + `I` (1) = 6.
- Lorsqu'on écrit deux lettres de suite, si la valeur numérique de la première est inférieure à la valeur numérique de la seconde, on soustrait la valeur de la première à la seconde. Par exemple le nombre `4` s'écrit `IV`. On fait la soustraction `V` (5) - `I` (1) = 4.
- Les soustractions de valeurs sont limitées à 2 lettres uniquement. Par exemple on ne peut **pas** écrire `8` en faisant `IIX`. On doit utiliser l'addition des lettres comme ceci `VIII`.
- Par conséquent, les dix premiers nombres s'écrivent `I`, `II`, `III`, `IV`, `V`, `VI`, `VII`, `VIII`, `IX`, `X`. Les nombres plus grands suivent le même modèle.
- On peut associer autant de symboles qu'on veut pour écrire de plus grands nombres, par exemple :
  - `36` s'écrit `XXXVI`
  - `42` s'écrit `XLII`
  - `2448` s'écrit `MMCDXLVIII`.

## Exemples
- `1` => `I` 
- `2` => `II` 
- `3` => `III` 
- `4` => `IV` 
- `5` => `V` 
- `6` => `VI` 
- `9` => `IX` 
- `27` => `XXVII` 
- `48` => `XLVIII` 
- `59` => `LIX` 
- `93` => `XCIII`
- `99` => `XCIX` 
- `141` => `CXLI` 
- `163` => `CLXIII` 
- `369` => `CCCLXIX` 
- `402` => `CDII` 
- `575` => `DLXXV` 
- `911` => `CMXI`
- `999` => `CMXCIX` 
- `1024` => `MXXIV` 
- `2751` => `MMDCCLI` 
- `3000` => `MMM`
*/

function exercice4(nombre) {
  // Cas particuliers : 4, 9, 40, 90

  //**** Détail d'algo Humain 😊******
  // 27
  // XXVII
  // 27 - X (10) = 17
  // 17 - X (10) = 7
  // 7 - V (5) = 2
  // 2 - I (1) = 1
  // 1 - I (1) = 0

  //**** Détail Construction avec boucle while *****
  //let chiffresRomains = "";

  //   while (nombre >= 1000) {
  //     chiffresRomains += "M";
  //     nombre -= 1000;
  //   }

  //   while (nombre >= 900) {
  //     chiffresRomains += "CM";
  //     nombre -= 900;
  //   }

  //   while (nombre >= 500) {
  //     chiffresRomains += "D";
  //     nombre -= 500;
  //   }

  //   while (nombre >= 400) {
  //     chiffresRomains += "CD";
  //     nombre -= 400;
  //   }

  //   while (nombre >= 100) {
  //     chiffresRomains += "C";
  //     nombre -= 100;
  //   }

  //   while (nombre >= 90) {
  //     chiffresRomains += "XC";
  //     nombre -= 90;
  //   }

  //   while (nombre >= 50) {
  //     chiffresRomains += "L";
  //     nombre -= 50;
  //   }

  //   while (nombre >= 40) {
  //     chiffresRomains += "XL";
  //     nombre -= 40;
  //   }

  //   while (nombre >= 10) {
  //     chiffresRomains += "X";
  //     nombre -= 10;
  //   }

  //   while (nombre >= 9) {
  //     chiffresRomains += "IX";
  //     nombre -= 9;
  //   }

  //   while (nombre >= 5) {
  //     chiffresRomains += "V";
  //     nombre -= 5;
  //   }

  //   while (nombre >= 4) {
  //     chiffresRomains += "IV";
  //     nombre -= 4;
  //   }

  //   while (nombre >= 1) {
  //     chiffresRomains += "I";
  //     nombre -= 1;
  //   }

  //******** Création function extraireChiffreRomain ****
  let chiffresRomains = "";

  const correspondances = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  function extraireChiffreRomain([valeurLettre, lettres]) {
    while (nombre >= valeurLettre) {
      chiffresRomains += lettres;
      nombre -= valeurLettre;
    }
  }

  correspondances.forEach(extraireChiffreRomain);

  return chiffresRomains;
}
