const tab = [-2,1,4]

function soustrait(x) {

    if (x >= 0) {
        const resultat = x-2
        return resultat
    } else {
        return 'Nombre négatif!'
    }
}

function affiche() {
    alert(soustrait(tab[0]));
    alert(soustrait(tab[tab.length-1]));
}