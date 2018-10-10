function conversionTemperature() {
    let q = prompt('Sélectionnez la valeur de conversion :' + '\n' + '\n0. Fin du programme' + '\n1. De Celsius vers Fahreineit' + '\n2. De Celsius vers Kelvin' + '\n3. De Fahreineit vers Celsius' + '\n4. De Fahreineit vers Kelvin' + '\n5. De Kelvin vers Celsius' + '\n6. De Kelvin vers Fahreineit')

    if (q == '0') {
        alert('Fin du programme. Bonne journée.')
    } else {
        let t = prompt('Temperature a convertir')
        switch (q) {
            case '1' :
                r = (Number(t)*9/5)+32
            break;
            case '2':
                r = Number(t)+273.15
            break;
            case '3':
                r = (Number(t)-32)/(9/5)
            break;
            case '4':
                r = ((Number(t)-32)*(5/9))+273.15
            break;
            case '5':
                r = Number(t)-273,15
            break;
            case '6':
                r = (Number(t)*9/5)-459.67
            break;
        }
        alert(r)
    }
}