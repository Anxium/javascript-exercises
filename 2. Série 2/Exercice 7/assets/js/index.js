function faireChoix() {

    const reponse = prompt('Choisissez un chiffre entre 1, 2 ou 3.');

    switch (reponse) {
        case '1':
            alert('Merci!')
        break;
        case '2':
            alert('Bonjour!')
        break;
        case '3':
            alert('Au revoir')
        break;
        default:
            alert('Pardon, que voulez-vous ?');
        break;
    }
}