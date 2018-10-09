function jourDeLaSemaine() {
    let date = new Date().getDay();

    switch (date) {
        case 1:
            alert('Nous sommes Lundi')
        break;
        case 2:
            alert('Nous sommes Mardi.')
        break;
        case 3:
            alert('Nous sommes Mercredi.')
        break;
        case 4:
            alert('Nous sommes Jeudi')
        break;
        case 5: 
            alert('Nous sommes Vendredi')
        break;
        case 6: 
            alert('Nous sommes Samedi')
        break;
        case 7:
            alert('Nous sommes Dimanche')
        break;
        default:
            alert('Erreur')
    }
}