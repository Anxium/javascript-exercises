let flag = 0;
let essais = 1;
let rep = prompt('Devinez le juste prix :');

let Alea = (nbMin, nbMax) => {
    return Math.floor(Math.random() * (nbMax-nbMin+1)+nbMin)
}

let nbAlea = Alea(20, 80);

let justeprix = (rep) => {
    if(rep == nbAlea) {
        alert(`Bravo! Vous avez trouvé le juste prix en ${essais} essais.`);
        flag = 1;
    } else {
        if(rep>nbAlea) {
            rep = prompt('C\'est plus petit! \nRetentez votre chance :')
        } else {
            rep = prompt('C\'est plus grand! \nRetentez votre chance :')
        }
        essais++
    }
    return rep
}

do {
    rep = justeprix(rep);
} while(flag != 1)