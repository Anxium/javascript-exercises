function calculIMC() {
    let poids = prompt('Quel poids faites-vous? (en Kg)');
    let taille = prompt('Quel taille faites-vous? (En M)');

    let imc = poids/Math.pow(taille, 2);
    let imcY = imc.toFixed(2);

    if (imcY < 16.5) {
        alert('Votre IMC est de : ' + imcY + '\nVous êtes en : dénutrion ou en famine.')
    } else if (imcY >= 16.5 && imcY < 18.5) {
        alert('Votre IMC est de : ' + imcY + '\nVous êtes en : maigreur.')
    } else if (imcY >= 18.5 && imcY < 25) {
        alert('Votre IMC est de : ' + imcY + '\nVous êtes en : corpulence normale.')
    } else if (imcY >= 25 && imcY < 30) {
        alert('Votre IMC est de : ' + imcY + '\nVous êtes en : surpoids.')
    } else if (imcY >= 30 && imcY < 35) {
        alert('Votre IMC est de : ' + imcY + '\nVous êtes en : obésité modérée.')
    } else if (imcY >= 35 && imcY < 40) {
        alert('Votre IMC est de : ' + imcY + '\nVous êtes en : obésité sévère.')
    } else if (imcY > 40) {
        alert('Votre IMC est de : ' + imcY + '\nVous êtes en : obésité morbide.')
    } else {
        alert('Erreur!')
    }
}