function testWhile() {
    do 
        texte = prompt('Insérez une phrase contenant un "p" :');
    while (texte.indexOf('p') == -1)

    alert(texte);
}