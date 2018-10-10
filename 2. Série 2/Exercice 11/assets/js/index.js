function calculMoyenne() {
    let i = 0 // Nombre de valeur entrée
    let y = 0 // Somme total
    let a = prompt('Insérez un nombre entier');

    do {
        if (Number.isInteger(Number(a))) {
            y += Number(a)
            i++
        } else {
            alert('Mauvaise entrée.');
        }

        a = prompt('Insérez un nombre entier');
    } while(a>=0);

    if (a<0) {
        let x = y/i
        alert('Le nombre de valeurs entrée est de : ' + i + '\nLa moyenne des valeurs est de : ' + x)
    }
}