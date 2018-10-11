const btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function(){
    let mdp = document.getElementById('motdepasse');
    let conf = document.getElementById('confirmation');
    let mdpValue = document.getElementById('motdepasse').value;
    let confirmValue = document.getElementById('confirmation').value;

    if (mdpValue === confirmValue) {
        mdp.style.border = ('3px solid green')
        conf.style.border = ('3px solid green')
    } else {
        mdp.style.border = ('3px solid red')
        conf.style.border = ('3px solid red')
    }
});