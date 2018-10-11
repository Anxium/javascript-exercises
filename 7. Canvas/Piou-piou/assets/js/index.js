const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

const body = new Image();
body.src = 'assets/img/body.png'
const head = new Image();
head.src = 'assets/img/head.png'
const cible = new Image();
cible.src = 'assets/img/cible.jpg'

let x = canvas.width/2;
let y = canvas.height-30;
const dy = -4;

let drawHead = () => {
    ctx.drawImage(head,x,y,80,100);
}

let draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHead();
    y += dy;
}
setInterval(draw, 10);