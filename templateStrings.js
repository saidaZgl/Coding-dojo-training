// EXERCICE 1
/* Développer une fonction formaterAdresse(prenom, nom, adresse, codePostal, ville) qui devra retourner l'adresse s/forme d'une chaine de caractères :
===[ Destinataire ]===
Tom REDOCEMIA
21 rue du bloc d'instructions
1337 POINT-VIRGULE
*/

function merci(prenom, nomSociete) {
  return `C'est ${prenom} qui m'a permis d'entrer dans ${nomSociete}`;
}

// EXERCICE 2
/* Ecrire une fonction convertirEnSemaines(nombreDeJours) qui retourne 
le nombre de semaines équivalent à un nombre de jours donné sans utiliser de variable. 
Utiliser une expression directement dans une template string pour y arriver.

Par exemple pour l'appel de fonction convertirEnSemaines(35), elle devra retourner :
35 jours sont équivalents à 5 semaines
*/

function formaterAdresse(prenom, nom, adresse, codePostal, ville) {
  return `===[ Destinataire ]===
  ${prenom} ${nom}
  ${adresse}
  ${codePostal} ${ville}`;
}

// EXERCICE 3
/* Ecrire une fonction templateString() qui renvoie, toujours en utilisant une template string, ceci :
Les template strings sont délimitées par des backticks ``.
Pour créer un espace réservé on utilise ${}.
*/
function templateString() {
  return `Les template strings sont délimitées par des backticks \`\`.
  Pour créer un espace réservé on utilise \${}.`;
}

// EXERCICE 4
/* Résoudre le problème de conversion des jours en semaines qui ne tombe pas "pile" sans utiliser l'opérateur modulo mais en utilisant une boucle while.

Écrire une fonction convertirEnSemainesEtJours(nombreDeJours) qui devra retourner, pour l'appel de fonction convertirEnSemainesEtJours(19) le texte suivant :
19 jours, c'est équivalent à 2 semaines et 5 jours

Petite difficulté supplémentaire, vous devrez gérez les pluriels des mots semaine(s) et jour(s) (jour apparaît 2 fois dans la phrase) comme ceci :
0 jour, c'est équivalent à 0 semaine et 0 jour
1 jour, c'est équivalent à 0 semaine et 1 jour
3 jours, c'est équivalent à 0 semaine et 3 jours
7 jours, c'est équivalent à 1 semaine et 0 jour
8 jours, c'est équivalent à 1 semaine et 1 jour
9 jours, c'est équivalent à 1 semaine et 2 jours
19 jours, c'est équivalent à 2 semaines et 5 jours

On mettra un 's' à la fin des mots semaine et jour lorsque la valeur précédante est strictement supérieure à 1
*/

function convertirEnSemainesEtJours(nombreDeJours) {
  let nombreDeSemaines = 0;
  let nombreDeJoursRestants = nombreDeJours;

  while (nombreDeJoursRestants >= 7) {
    nombreDeJoursRestants = nombreDeJoursRestants - 7;
    nombreDeSemaines = nombreDeSemaines + 1;
  }

  // Gestion des singuliers et pluriels
  let plurielNombreDeJours = "";
  if (nombreDeJours > 1) {
    plurielNombreDeJours = "s";
  }

  let plurielJoursRestants = "";
  if (nombreDeJoursRestants > 1) {
    plurielJoursRestants = "s";
  }

  let plurielNombreDeSemaines = "";
  if (nombreDeSemaines > 1) {
    plurielNombreDeSemaines = "s";
  }

  return `${nombreDeJours} jour${plurielNombreDeJours}, c'est équivalent à ${nombreDeSemaines} semaine${plurielNombreDeSemaines} et ${nombreDeJoursRestants} jour${plurielJoursRestants}`;
}

// Exercice 5
// 1. Décommentez le code de Tom ci-dessous pour pouvoir utiliser sa fonction formaterNumeroClient
// 2. Rédigez une fonction retournerReference(numeroClient) qui retourne la template string
// permettant de répondre à l'énoncé

// EXERCICE 6
/* Présentation du numéro client sur la lettre de marketing, ajouter le statut du client (si c'est un client standard ou premium).

Pour rappel, les clients premium ont un numéro de client supérieur ou égal à 5000 et strictement inférieur à 7000. Leur numéro doit être affiché sous la forme PR5132 au lieu de 425132 (pour le client numéro 5132 par exemple).

Afficher le type de compte client entre parenthèses comme ça :

N° de client : PR5842 (premium)
N° de client : 421864 (standard)

Récupérer le code qui contient la fonction formaterNumeroClient(numeroClient) qui renvoie le numéro client formaté PRXXXX ou 42XXXX en fonction du numeroClient donné.

En vous appuyant sur cette fonction, rédigez une nouvelle fonction retournerReference(numeroClient) qui renvoie la référence client avec le type de compte entre parenthèses à partir d'un numéro de client donné.

Par exemple pour l'appel de fonction retournerReference(1864), elle doit retourner :

N° de client : 421864 (standard)

Exploiter la fonction pour retourner, grâce à une template string, la référence formatée d'un client.
*/

function formaterNumeroClient(numero) {
  if (numero >= 5000 && numero < 7000) {
    // On peut retourner tout de suite la valeur en utilisant le mot-clé return
    return "PR" + numero;
  } else {
    let prefixe = "42";
    if (numero < 1000) {
      prefixe = prefixe + "0";
    }
    if (numero < 100) {
      prefixe = prefixe + "0";
    }
    if (numero < 10) {
      prefixe = prefixe + "0";
    }
    return prefixe + numero;
  }
}

// Déclarez votre fonction retournerReference(numeroClient) ci-dessous
function retournerReference(numeroClient) {
  let typeCompte = "standard";
  if (numeroClient >= 5000 && numeroClient < 7000) {
    typeCompte = "premium";
  }
  return `N° de client : ${formaterNumeroClient(numeroClient)} (${typeCompte})`;
}
