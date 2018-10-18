let btn = document.getElementById('clicker');
let main = document.getElementById('main');
let more = document.getElementById('affichage');
let score = 0;

btn.addEventListener('click', function() {
    score++
    more.innerHTML = score;
})