const cardsArray = [{
    'name': 'ane',
    'img' : 'assets/img/anehihan.jpg',
}, {
    'name': 'chat',
    'img' : 'assets/img/chatminou.jpg',
}, {
    'name': 'chien',
    'img' : 'assets/img/chientoutou.jpg',
}, {
    'name': 'lama',
    'img' : 'assets/img/lamacrachat.jpg',
}, {
    'name': 'lapin',
    'img' : 'assets/img/lapinscrottes.jpg',
}, {
    'name': 'lionne',
    'img' : 'assets/img/lionnegraou.jpg',
}, {
    'name': 'ours',
    'img' : 'assets/img/oursbaby.jpg',
}]
let essais = document.getElementById('try');

// Récupère la section 'game' dans une constante
const game = document.getElementById('game');

// Crée une div avec une classe 'grid' (HTML)
const grid = document.createElement('section');
grid.className = 'grid';

// Ajoute 'grid'en tant qu'enfant dans 'game' (HTML)
game.appendChild(grid);

// Duplique le tableau d'image pour avoir deux fois la même image
let gameGrid = cardsArray.concat(cardsArray);

// Trie le tableau dans un ordre alétoire
gameGrid.sort(() => 0.5 - Math.random());

gameGrid.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;

    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${item.img})`;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

const match = () => {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.add('match');
    });
}

// Début du "code" pour le jeu
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;
let count = 0;
let delay = 1000;
let paire = 0;
let second = 0, minute = 0;
let timer = document.getElementById('timer');
let interval;
let mouvement = 0;

let startTimer = () => {
    if (mouvement < 1) {
        interval = setInterval(function(){
            timer.innerHTML = `Temps: ${minute} minute(s) ${second} secondes`;
            second++;
            if(second == 60){
                minute++;
                second=0;
            }
        },1000);
    }
}

// Fonction pour réinitialiser les paires après avoir trouvé une mauvaise
let resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
  
    let selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.remove('selected');
    });
};


// Fonction du jeu
grid.addEventListener('click', function (event) {
    let clicked = event.target;

    if (clicked.nodeName === 'SECTION' || clicked === previousTarget ||
    clicked.parentNode.classList.contains('match')) {
        return; 
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        if (firstGuess !== '' && secondGuess !== '') {
            mouvement++;
            essais.innerHTML = `Nombre d'essais: ${mouvement}`;
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
                setTimeout(bon, 600);
                setTimeout(termine, 1400);
                paire++;
            } else {
                setTimeout(resetGuesses, delay);
                setTimeout(mauvais, 600);
            }
        }
    }

    previousTarget = clicked;
    startTimer();
});

let mauvais = () => {
    alert('Mauvaise paire!')
}

let bon = () => {
    alert('Vous avez trouvé une paire!')
}

let termine = () => {
    if (paire == cardsArray.length) {
        alert(`Vous avez terminé la partie en ${minute} minute(s) et ${second} secondes, avec un total de ${mouvement} coups ! \n\nCliquez sur ok pour relancer la partie!`)
        location.reload();
    }
}