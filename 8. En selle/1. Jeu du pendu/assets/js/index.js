const word = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
let guessWord = ['_', '_', '_', '_', '_', '_', '_'];
let flag = 0;
let essais = 1;
let l = prompt('Entrez une lettre afin de deviner le mot.').toUpperCase();

let guessLetter = () => {
    flag = 0;
    essais++
    for(let i=0; i<word.length; i++){
        if (l == word[i]) {
            guessWord.splice(i, 1, l);
            if(flag==0){
                l = prompt(`Mot deviné jusqu'à maintenant : ${guessWord} \nBien joué! Essaye avec une autre lettre :`).toUpperCase();
            }
            flag = 1;
        }
    }

    if(flag == 0) {
        l = prompt(`Mot deviné jusqu'à maintenant : ${guessWord} \nPas de chance! Retentez avec une autre lettre :`).toUpperCase();
    } 

    if (guessWord.toString() == word.toString()) {
        alert(`Bravo! Vous avez trouvé le mot ${guessWord} en ${essais} coups!`);
    } else {
        guessLetter()
    }
}

guessLetter();