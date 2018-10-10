const nom  = document.getElementById('nom');


nom.addEventListener("keypress", function() {
    const entree = document.getElementById('nom').value;
    alert(`Vous avez précédemment entré ${entree}`)
});