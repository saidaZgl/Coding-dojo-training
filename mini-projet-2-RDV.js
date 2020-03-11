// Bug à résoudre si la durée est de 25 min => Problème d'affichage à la sortie = 15h65

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

// ETAPE 2 : Est-ce que la fin du RDV est avant la fin de la journée ?
if (finRdvHeures < finJourneeHeures) {
  console.log("RDV OK");
} else {
  console.log("RDV impossible");
}

// ETAPE 3: Affichage de l'heure de fin de RDV
console.log("Le RDV se terminera à" + finRdvHeures + "h" + finRdvMinutes);
