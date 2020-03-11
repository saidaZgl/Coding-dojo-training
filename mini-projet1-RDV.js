/* VALIDER UN RDV 
Objectif : 
Déterminer si un RDV se termine avant la fin de la journée
Début du RDV : 15h40
Fin de journée : 16h30
Durée du RDV (min) : variable 

Sortie attendue :
- Si la fin du RDV est avant 16h30, afficher "RDV OK"
- Si la fin du RDV est après 16h30, afficher "RDV impossible"
- Afficher "Le RDV se termine à HHhMM"
*/

/* Exemple 1 : durée 15 min
1) Fin du RDV ?
15h40 + 15 min = 15h55
let debutRdvHeures = 15;
let debutRdvMinutes = 40;

Fin de journée : 16h3O
let finJourneeHeures = 16;
let finJourneeMinutes = 30;

2) Comparer 15h55 à 16h30
=> Avant : "RDV OK"
=> Après : "RDV impossible"

3) "Le RDV se termine à 15h55"
*/

/* Algo 1
Comment gérer un horaire ?
15h55 :
let finRdvHeures = 15;
let finRdvMinutes = 55;

Fin du RDV ?
15h40 + 15 min ?
finRdvHeures = debutRdvHeures(15h)
finRdvMinutes(40 + 15 = 55) = debutRdvMinutes + duree

4) Comparer 15h55 à 16h30 (avant ou après ?)
15h < 16h VRAI, avant, "RDV OK"
si(finRdvHeures < finJourneeHeures) {
    afficher("RDV OK");
} sinon {
    afficher("RDV impossible");
}

5) "Le RDV se terminera à 15h55"
afficher("Le RDV se terminera à" + finRdvHeures + "h" + finRdvMinutes)
*/

// Début du RDV : 15h40
let debutRdvHeures = 15;
let debutRdvMinutes = 40;

// Fin de journée : 16h30
let finJourneeHeures = 16;
let finJourneeMinutes = 30;

// Durée du RDV : 15 minutes
let duree = 15;

// ETAPE 1 :Calcul de la fin du RDV
let finRdvHeures = debutRdvHeures;
let finRdvMinutes = debutRdvMinutes + duree;

// ETAPE 2 : Est-ce que la fin du RDV est avant la fin de la journée ?
if (finRdvHeures < finJourneeHeures) {
  console.log("RDV OK");
} else {
  console.log("RDV impossible");
}
