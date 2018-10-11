/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    let i = texte.length
    return i
}
var remplaceECar = function (texte) {
    let i = texte.replace('e', ' ');
    return i;
}
var concatString = function (texte1, texte2) {
    let i = `${texte1}${texte2}`
    return i
}
var afficherCar5 = function (texte) {
    let i = texte.charAt(4);
    return i
}
var afficher9Car = function (texte) {
    let i = texte.substring(0,9);
    return i
}
var majusculeString = function (texte) {
    let i = texte.toUpperCase()
    return i
}
var minusculeString = function (texte) {
    let i = texte.toLowerCase()
    return i
}
var SupprEspaceString = function (texte) {
    let i = texte.trim()
    return i
}
var IsString = function (texte) {
    let i = typeof texte

    if ( i === 'string') {
        return true
    } else {
        return false
    }
}
var AfficherExtensionString = function (texte) {
    let a = texte.lastIndexOf('.');
    let b = texte.length

    let i = texte.substring(a+1, b)
    return i
}
var NombreEspaceString = function (texte) {
    let i = texte.split(' ').length-1
    return i
}
var InverseString = function (texte) {
    let i = texte.split('').reverse('').join('')
    return i
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    let i = Math.pow(x, y)
    return i
}
var valeurAbsolue = function (nombre) {
    let i = Math.abs(nombre)
    return i
}
var valeurAbsolueArray = function (array) {
let tableau = []

    for (num=0; num<array.length; num++) {
        let y = Math.abs(array[num])
        tableau.push(y)
    }

    return tableau
}
var sufaceCercle = function (rayon) {
    let calcul = Math.PI*Math.pow(rayon,2);
    let i = Math.round(calcul);
    return i;
}
var hypothenuse = function (ab, ac) {
    let i = Math.hypot(ab, ac);
    return i
}
var calculIMC = function (poids, taille) {
    let imc = poids/Math.pow(taille, 2);
    let i = imc.toFixed(2);

    return Number(i)
}
