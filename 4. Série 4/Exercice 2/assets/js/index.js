const texte =  document.getElementById('texte');
const a = document.getElementsByTagName('a')[0];
const b = document.getElementsByTagName('a')[1];

a.addEventListener('click' , function(){
    texte.style.display = ('block');
})

b.addEventListener('click' , function(){
    texte.style.display = ('none');
})