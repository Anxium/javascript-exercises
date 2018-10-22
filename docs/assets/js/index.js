let nbCookie = document.getElementById('nbCookie'); // nb de cookies (affichage)
let btn = document.getElementById('clicker'); // Cliqueur (btn)
let multiplier = document.getElementById('multiplier'); // Multiplicateur (btn)
let autoclic = document.getElementById('autoclic'); // Autoclicker (btn)
let bonus = document.getElementById('bonus'); // Bonus (btn)
let score = 0;
let multiplicateur = 1;
let priceMultiplier = 50;
let priceAutoclic = 500;
let priceBonus = 5000;
let timeLeft = 30;
let flag = false;
let bought = false;

let clicBonus = () => {
    if (score >= priceBonus) {
        score -= priceBonus;
        nbCookie.innerHTML = score;
        bonus.setAttribute('disabled', '');
        bonus.innerHTML = `${timeLeft}s restantes`;
        flag = true;
        let countdown = () => {
            if (timeLeft <= 0) {
                clearInterval(timee)
                timeLeft = 30;
                bonus.innerHTML = `Clic*2 pendant 30s - Prix 5000`
                flag = false;
            } else {
                timeLeft--;
                bonus.innerHTML = `${timeLeft}s restantes`;
            }
        }
        let timee = setInterval(countdown, 1000);
    } else {
        alert(`Tu n'as pas assez de score! Il te manque ${priceBonus-score} points.`)
    }
}
bonus.addEventListener('click', clicBonus);

let autoClick = () => {
    if (score >= priceAutoclic) {
        setInterval(augmenterScore, 1000);
        score -= priceAutoclic;
        nbCookie.innerHTML = score;
        autoclic.innerHTML = `Autoclick - Déja acquis`;
        autoclic.setAttribute('disabled', '');
        bought = true;
    } else {
        alert(`Tu n'as pas assez de score! Il te manque ${priceAutoclic-score} points.`)
    }
}
autoclic.addEventListener('click', autoClick);

let augmenterMultiplicateur = () => {
    if (score >= priceMultiplier) {
        multiplicateur++;
        score -= priceMultiplier;
        priceMultiplier += priceMultiplier;
        nbCookie.innerHTML = score;
        multiplier.innerHTML = `Multiplicateur x${multiplicateur+1} - Prix ${priceMultiplier}`
        multiplier.setAttribute('disabled', '');
    } else {
        alert(`Tu n'as pas assez de score! Il te manque ${priceMultiplier-score} points.`)
    }
}
multiplier.addEventListener('click', augmenterMultiplicateur);

let augmenterScore = () => {
    if (flag==true) {
        score+=multiplicateur*2;
    } else {
        score+=multiplicateur;
    }
    nbCookie.innerHTML = score;
}
btn.addEventListener('click', augmenterScore);

let verif = () => {
    if (score>=priceMultiplier) {
        multiplier.removeAttribute('disabled', '');
    } else {
        multiplier.setAttribute('disabled', '');
    }

    if (score>=priceAutoclic && bought==false) {
        autoclic.removeAttribute('disabled', '');
    }

    if (score>=priceBonus && flag==false) {
        bonus.removeAttribute('disabled', '');
    } else {
        bonus.setAttribute('disabled', '');
    }
}
setInterval(verif, 100);