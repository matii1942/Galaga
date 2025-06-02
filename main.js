const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const fondoimg = new Image(fondoimg);
fondoimg.src = 'img/fondo.png';
const player = new Image(player);
player.src = 'img/player.png';
const enemy = new Image(enemy); 
enemy.src = 'img/enemy.png';

window.onload = function() {
   canvas.width = 800
   canvas.height = 600;
   canvas.style.width = '800px';

   ctx.drawImage(fondoimg, 100, 100);

};

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        playerY -= 10;
    } else if (event.key === 'ArrowDown') {
        playerY += 10;
    } else if (event.key === 'ArrowLeft') {
        playerX -= 10;
    } else if (event.key === 'ArrowRight') {
        playerX += 10;
    }
});