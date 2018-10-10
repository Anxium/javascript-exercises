function somme() {
    let b = 0

    for (i=0; i<3; i++) {
        let a = prompt('Veuillez insérer un chiffre')
        
        b+=Number(a)
    }

    alert(b)
}