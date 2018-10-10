const btn  = document.getElementsByName('button')[0];


btn.addEventListener("click", function() {
    let nom = document.getElementById('nom')
    nom.setAttribute('value', ' ');
    let prenom = document.getElementById('prenom')
    prenom.setAttribute('value', ' ');
    let ville = document.getElementById('ville')
    ville.setAttribute('value', ' ');
});