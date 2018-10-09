const tab = [-2,1,4]

function additionne(x) {
    const resultat = x+2
    return resultat
}

function affiche() {
    alert(additionne(tab[0]));
    alert(additionne(tab[tab.length-1]));
}