// Exercice 0

/* Problème de la conversion de semaines qui ne tombe pas "pile".

Écrire une fonction convertirEnSemainesEtJours(nombreDeJours) qui devra retourner, pour l'appel de fonction convertirEnSemainesEtJours(19) le texte suivant :

19 jour(s), c'est équivalent à 2 semaine(s) et 5 jour(s)

On ne gérera pas les pluriels car ce n'est pas l'objectif ici, on indiquera simplement (s) à la fin des mots susceptibles de devoir prendre un 's'. 

Petite difficulté supplémentaire : utiliser une division pour calculer le nombre de semaines (et pas une boucle). Pour continuer sur l'exemple, vous devrez faire : (19 - 5) / 7 = 2 semaines
*/
function convertirEnSemainesEtJours(nombreDeJours) {
  let nombreJoursRestants = nombreDeJours % 7;
  let nombreDeSemaines = (nombreDeJours - nombreJoursRestants) / 7;
  return `${nombreDeJours} jour(s), c'est équivalent à ${nombreDeSemaines} semaine(s) et ${nombreJoursRestants} jour(s)`;
}

/*Exercice 1
On veut organiser une fête pour une future campagne marketing. On choisi une salle avec des tables rondes car c'est tendance.

On veut faire faire sur mesure des nappes avec un tissu qu'on choisira. Mais comme on est serré niveau budget, on souhaite choisir des tables un peu plus petites ou utiliser moins de tables pour avoir moins de tissu à acheter.

Pour l'aider dans nos calculs, on décide de rédiger une fonction calculPrixNappes(nombreDeTables, diametreTable, prixTissu) qui renvoie le prix total que coûtera le tissu à acheter pour habiller nombreDeTables tables ayant toute un même diamètre de diametreTable mètres avec un tissu coûtant prixTissu € le mètre carré.

Quelques simplifications :

On considère qu'il faut un carré de tissu de largeur de diametreTable pour faire une nappe. La surface du tissu pour une table est donc calculée avec la formule surface = diametreTable2. La valeur diametreTable2 est simplement diametreTable à la puissance 2 */
function calculPrixNappes(nombreDeTables, diametreTable, prixTissu) {
  let surface = diametreTable ** 2;
  let surfaceTotale = nombreDeTables * surface;
  let prix = surfaceTotale * prixTissu;
  return prix;
}

/*Exercice 2
 On connaît le vendeur de tissu et celui-ci nous propose un tarif dégressif : plus j'en achète, moins ça coûte cher ! Ajuster notre fonction pour prendre en compte ce tarif dégressif.
  
Créez une nouvelle fonction calculPrixNappesDegressif(nombreDeTables, diametreTable, prixTissu) qui prend en compte la nouvelle tarification expliquée ci-dessous. N'hésitez pas à copier-coller le contenu de la fonction précédente pour ne pas repartir de zéro.
  
À partir de 20 m2 achetés, on applique une réduction de 10%.
À partir de 30 m2 achetés, on applique une réduction de 20%.
À partir de 50 m2 achetés, on applique une réduction de 30%.
À partir de 100 m2 achetés, on applique une réduction de 50%.

Par exemple, supposons qu'on achète 30 m2 de tissu qui coûte 5 € le mètre carré, ça fait 30 * 5 = 150 €. On applique la réduction de 20%, ce qui fait 150 * (1 - 20 / 100) = 120 €.
  
Notre nouvelle fonction devra donc retourner la valeur 120.*/
function calculPrixNappesDegressif(nombreDeTables, diametreTable, prixTissu) {
  let surface = diametreTable ** 2;
  let surfaceTotale = nombreDeTables * surface;
  let prix = surfaceTotale * prixTissu;

  if (surfaceTotale >= 100) {
    return prix * (1 - 50 / 100);
  }
  if (surfaceTotale >= 50) {
    return prix * (1 - 30 / 100);
  }
  if (surfaceTotale >= 30) {
    return prix * (1 - 20 / 100);
  }
  if (surfaceTotale >= 20) {
    return prix * (1 - 10 / 100);
  }
  return prix;
}
