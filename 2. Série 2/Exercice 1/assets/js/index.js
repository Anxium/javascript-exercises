function surfRectangle() {
    const largeur = prompt('Veuillez indiquer la largeur du rectangle (en cm) :');
    const longueur = prompt('Veuillez indiquer la longueur du rectangle (en cm) :');

    const resultat = largeur*longueur

    alert('La surface de votre rectangle fait ' + resultat + 'cm²')
}

function periRectangle() {
    const largeur = prompt('Veuillez indiquer la largeur du rectangle (en cm) :');
    const longueur = prompt('Veuillez indiquer la longueur du rectangle (en cm) :');

    const resultat = (Number(largeur)+Number(longueur))*2

    alert('Le périmètre de votre rectangle est de ' + resultat + 'cm')
}