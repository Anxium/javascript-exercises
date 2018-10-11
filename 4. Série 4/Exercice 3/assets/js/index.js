const texte = document.getElementById('texte');

let changeColor = (index, color) => {
    let coul =  document.getElementsByClassName('color')[index];

    coul.addEventListener('click', function() {
        texte.style.color = `${color}`;
    });
};

changeColor(0, 'green');
changeColor(1, 'red');
changeColor(2, 'blue');