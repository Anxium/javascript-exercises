function blbl() {
    const number1 = document.getElementById("premier_nombre").value;
    const number2 = document.getElementById("deuxieme_nombre").value;

    const response = number1 % number2;

    alert('La réponse est : ' + response);
}