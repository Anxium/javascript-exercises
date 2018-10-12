const c = document.getElementById('canvas');
const ctx = c.getContext('2d'); //Initialisation du canvas en 2D

const body = new Image(); // Canon
body.src = 'assets/img/body.png'
const head = new Image(); // Projectile
head.src = 'assets/img/head.png'
const cible = new Image(); // Cible
cible.src = 'assets/img/cible.jpg'

let dy = -4;  //"Vitesse" du projectile


const bodyHeight = 280; // Hauteur du canon
const bodyWidth = 160; // Largeur du canon
let bodyX = canvas.width/2;
let bodyY = canvas.height-(bodyHeight/2);

const headHeight = 80; //Hauteur du projectile
const headWidth = 64; //Largeur du projectile
let x = canvas.width/2; //Position de départ sur l'axe X
let y = canvas.height-bodyHeight; //Position de départ sur l'axe Y

let leftPressed = false;
let rightPressed = false;
let spacePressed = false;

let drawHead = () => {
    ctx.drawImage(head,x,y,headWidth,headHeight);
}

let drawBody = () => {
    ctx.drawImage(body,bodyX,bodyY,bodyWidth,bodyHeight);
}

let draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBody();
    if(rightPressed && bodyX < canvas.width-bodyWidth) {
        bodyX += 7;
    }
    else if(leftPressed && bodyX > 0) {
        bodyX -= 7;
    }

    drawHead();
    if(spacePressed) {
        y += dy; // Fait avancer le projectile dans l'axe Y | Same as y = y + dy
    }
    
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    } else if(e.keyCode == 37) {
        leftPressed = true;
    }

    if(e.keyCode == 32) {
        spacePressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    } else if(e.keyCode == 37) {
        leftPressed = false;
    }
    
    if(e.keyCode == 32) {
        spacePressed = false;
    }
}

setInterval(draw, 10);