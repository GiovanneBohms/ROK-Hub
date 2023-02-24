const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const cellSize = 12;
let cores = '';

desenhaPlataforma()
function desenhaPlataforma(){
canvas.width = 396;
canvas.height = 396;

for (let x = 0; x <= canvas.width; x += cellSize) {
  ctx.moveTo(x, 0);
  ctx.lineTo(x, canvas.height);
}
for (let y = 0; y <= canvas.height; y += cellSize) {
  ctx.moveTo(0, y);
  ctx.lineTo(canvas.width, y);
}
ctx.lineWidth = 0.5
ctx.strokeStyle = 'gray';
ctx.stroke();
}


let seletorDeCores = document.getElementById('colorSelector')
seletorDeCores.addEventListener('change', (evento) =>{

cores = evento.target.value 
})

