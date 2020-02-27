/*
Convertir une phrase donnée en son acronyme.

## Exemples
- Pour la phrase `JavaScript est vraiment top`, ça doit renvoyer `JEVT`
- Pour la phrase `toute une phrase en minuscule`, ça doit renvoyer `TUPEM`
- Pour la phrase `TU PEUX AUSSI TOUT ECRIRE EN MAJUSCULE`, ça doit renvoyer `TPATEEM`
- Pour la phrase `On PeUT AusSi MixEr LeS DEUx`, ça doit renvoyer `OPAMLD`
- Pour la phrase `Dépêche toi j'ai rendez-vous`, ça doit renvoyer `DTJR`
- Pour la phrase `Les "guillemets" vont faire planter ton code`, ça doit renvoyer `LGVFPTC`
*/

/* EN DÉTAILS */
function exercice0(phrase) {
  let mots = phrase.split(" ");
  let acronyme = "";
  for (let i = 0; i < mots.length; i++) {
    let mot = mots[i];
    let position = 0;
    let caractereCourant = mot[position];
    while (!caractereCourant.match(/[a-z]/i)) {
      position++;
      caractereCourant = mot[position];
    }
    let lettreMajuscule = caractereCourant.toUpperCase();
    acronyme += lettreMajuscule;
  }
  return acronyme;
}

/* EN FACTORISANT  */
function exercice0(phrase) {
  let acronyme = "";
  phrase.split(" ").forEach(mot => {
    let position = 0;
    let caractereCourant = mot[position];
    while (!caractereCourant.match(/[a-z]/i)) {
      caractereCourant = mot[++position];
    }

    acronyme += caractereCourant.toUpperCase();
  });
  return acronyme;
}
