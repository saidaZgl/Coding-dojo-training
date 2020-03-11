// Bug à résoudre
//si la durée est de 25 min
//=> Problème d'affichage à la sortie, Retourne 15h65

/* Reprendre l'algo de base:
Début du RDV : 15h40
Fin de journée : 16h30
Durée du RDV (min) : variable

Exemple 2 : Durée 25 min
1) Fin du RDV ?
15h40 + 25 min = 16h05

2) Comparer 16h05 à 16h30
avant "RDV OK"
après "RDV impossible"

3) "Le RDV se termineraà 16h05"

Algo 2 :
Produire un code capable de fonctionner pour 15 et 25 min
15h40 + 25 min ?
finRdvHeures = debutRdvHeures
  (15)              (15)
finRdvMinutes = debutRdvMinutes + duree
  (65)              (40)            (25)

Ajout d'une étape pour cas particulier :
si(finRdvMinutes >= 60){
  finRdvHeures = finRdvHeures + 1;
  finRdvMinutes = finRdvMinutes - 60;
}

Comparaison 16h05 à 16h30
si(finRdvHeures < finJourneeHeures){
    (16)              (16)
  afficher("RDV OK");
} sinon {
  afficher("RDV impossible");
}
Pb => 16 n'est pas < 16 => afficher("RDV impossible");
Mais 16h05 est AVANT 16h30 donc RDV est possible, 
Correction du code en changeant la condition du if:
si(finRdvHeures < finJourneeHeures ||
    (16)              (16)
(finRdvHeures === finJourneeHeures
    (16)               (16)
&&finRdvMinutes < finJourneeMinutes)) {
    (5)                 (30)
  afficher("RDV OK");
} sinon {
  afficher("RDV impossible");
}

Vérifier ensuite avec 15 min 

*/

// Début du RDV : 15h40
let debutRdvHeures = 15;
let debutRdvMinutes = 40;

// Fin de journée : 16h30
let finJourneeHeures = 16;
let finJourneeMinutes = 30;

// Durée du RDV : 15 minutes
let duree = 25;

// ETAPE 1 :Calcul de la fin du RDV
let finRdvHeures = debutRdvHeures;
let finRdvMinutes = debutRdvMinutes + duree;

// ETAPE 1.1 : Gestion du cas particulier où les minutes sont >= 60
if (finRdvMinutes >= 60) {
  finRdvHeures = finRdvHeures + 1;
  finRdvMinutes = finRdvMinutes - 60;
}

// ETAPE 2 : Est-ce que la fin du RDV est avant la fin de la journée ?
if (
  finRdvHeures < finJourneeHeures ||
  (finRdvHeures === finJourneeHeures && finRdvMinutes < finJourneeMinutes)
) {
  console.log("RDV OK");
} else {
  console.log("RDV impossible");
}

// ETAPE 3: Affichage de l'heure de fin de RDV
if (finRdvMinutes < 10) {
  console.log("Le RDV se terminera à " + finRdvHeures + "h0" + finRdvMinutes);
} else {
  console.log("Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);
}
