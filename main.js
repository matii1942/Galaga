const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const fondoimg = new Image(fondoimg);
fondoimg.src = 'img/fondo.png';
const player = new Image(player);
player.src = 'img/player.png';
const enemy = new Image(enemy); 
enemy.src = 'img/enemy.png';

window.onload = function() {
   canvas.width = 600;
   canvas.height = 600;
   canvas.style.width = '600px';

   ctx.drawImage(fondoimg, 0, 0, 200, 200);

   bucle_principal();

};

function bucle_principal () {
   
    window.requestAnimationFrame(bucle_principal);
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.drawImage(fondoimg, 0, 0, 600, 600);
}