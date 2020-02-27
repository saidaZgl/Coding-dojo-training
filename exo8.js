/*
Une centrale téléphonique a besoin d'une application permettant le traitement de données brutes provenant de ces relais aux 4 coins du pays.

Ces données brutes ressemblent à ceci : `BOR675847583748sjt567654;Bordeaux Vendredi`.

L'application devra extraire certaines informations contenues dans ce texte puis les formater.

Elle devra extraire :
- Le préfixe de la ville (toujours les 3 premières lettres) `PPP`
- Le nom de la ville `<ville>`
- Le jour de la semaine `<jour>`

Ces données devront être formatées ainsi :

`PPP : <ville> <jour>`

Créez une fonction qui recevra en entrée une ligne de données brutes et retournera les données formatées correctement.

## Exemples
- Pour `BOR675847583748sjt567654;Bordeaux Vendredi`, ça doit renvoyer `BOR : Bordeaux Vendredi`
- Pour `TOU576746573fhdg4737dh4;Toulouse Mardi`, ça doit renvoyer `TOU : Toulouse Mardi`
*/

//function exercice2(donneesBrutes) {
// BOR675847583748sjt567654;Bordeaux Vendredi
//   const decoupeDonnees = donneesBrutes.split(";");
//   const prefixe = decoupeDonnees[0].slice(0, 3);
//   const partieDroite = decoupeDonnees[1].split(" ");
//   const ville = partieDroite[0];
//   const jour = partieDroite[1];
//   return `${prefixe} : ${ville} ${jour}`;
// }

/* FACTORISATION Version + lisible */
function exercice2(donneesBrutes) {
  let [prefixe, ville, jour] = donneesBrutes.split(/[; ]/);
  prefixe = prefixe.slice(0, 3);
  return `${prefixe} : ${ville} ${jour}`;
}

/* MAP */
function exercice2(donneesBrutes) {
  const [prefixe, ville, jour] = donneesBrutes
    .split(/[; ]/)
    .map((donnee, index) => (index === 0 ? donnee.slice(0, 3) : donnee));
  return `${prefixe} : ${ville} ${jour}`;
}
