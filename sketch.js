let player;
let enemies = [];
const enemyCount = 20;
const attackRange = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  player = {
    x: width / 2,
    y: height / 2,
    size: 70,
    speed: 12
  };


  for (let i = 0; i < enemyCount; i++) {
    enemies.push({
      x: random(width),
      y: random(height),
      size: 50,
      speedX: random(-3, 3),
      speedY: random(-3, 3)
    });
  }
}

function draw() {
  background(255, 208, 0);
Player();
 


  for (let i = enemies.length - 1; i >= 0; i--) {
    Enemy(enemies[i]);
  
  }
}
function Player() {
  if (keyIsDown(87) && player.y > 0) 
  {
    player.y -= player.speed;
  }// W
  if (keyIsDown(83) && player.y < height - player.size) 
  {
    player.y += player.speed;
  }// S
  if (keyIsDown(65) && player.x > 0)
  {
    player.x -= player.speed;
  }// A
  if (keyIsDown(68) && player.x < width - player.size) 
  {
    player.x += player.speed;
  }// D
  push();
   fill(255, 179, 0);
  rect(player.x, player.y, player.size, player.size*1.1);
  pop();
  push();
   fill(0);
  rect(player.x, player.y+50, player.size, player.size/4);
  pop();
}


function Enemy(enemy) {
  enemy.x += enemy.speedX;
  enemy.y += enemy.speedY;


  if (enemy.x < 0 || enemy.x > width) enemy.speedX *= -1;
  if (enemy.y < 0 || enemy.y > height) enemy.speedY *= -1;
    fill(0);
  rect(enemy.x, enemy.y, enemy.size, enemy.size);
}

