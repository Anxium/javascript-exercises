const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

ctx.beginPath();
ctx.moveTo(50,550);
ctx.lineTo(50,50);
ctx.lineTo(520,50);
ctx.lineTo(520, 350);
ctx.lineTo(80, 350);
ctx.lineTo(80, 550);
ctx.lineTo(65, 560);
ctx.closePath();
ctx.stroke();
ctx.fill();