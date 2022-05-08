// =============== canvas code =================
const canvas = document.getElementById(`canvas1`);
const context = canvas.getContext(`2d`) /*paintbrush center*/ 

const canvas2 = document.getElementById(`canvas2`);
const context2 = canvas.getContext(`2d`)/* */ 

const canvas3 = document.getElementById(`canvas3`);
const context3 = canvas.getContext(`2d`) /* */ 

let player1 = document.querySelector(".player")

context2.fillStyle = "#FF0000";
context2.fillRect(0, 0, 50, 75);

// center road rock scale
canvas.width = 600;
canvas.height = 600;

// global scope
let gameSpeed= 1;
let score = 0;
let gameFrame = 0;
// const square = context.fillRect(200,200,100,100)
// (x, y, width, height)

const storage = {} 

// ========== game controls (ex: arrow < > keys)============================
let moveBy = 25
// load is mini-refresh
window.addEventListener(`load`,function(){
    player1.style.position = "absolute" 
    player1.style.left = 0
    player1.style.top = 0
})
// Move right
window.addEventListener(`keydown`,function(event){
    if(event.key === 'd'){
    player1.style.left = parseInt(player1.style.left) + moveBy + "px"
    }
    console.log(event.key)
})
// Move left
window.addEventListener(`keydown`,function(event){
    if(event.key === 'a'){
    player1.style.left = parseInt(player1.style.left) - moveBy + "px"
    }
})


// =====================Car/Player ======================
// Classes are bits of code that encompass multiple objects, methods and allow manipulation for its member variables and functions.

// playerImg.src = "Car-sprite.png";
// storage needed here
class Player {
    constructor(){
    }
    update(){ 
    }
    draw(){
    }
}
const player = new Player();

// =========== Rocks / Obstacles  and Collisions =============
const rockArray = [];
const rockImage = new Image();
rockImage.src = 'Rock-sprite1.png';

class rock {
    constructor(){
        // this.x =Math.random() * (max - min + 1) * canvas.width;
        this.x = Math.random() * canvas.width +100;
        // this.x = 310;
        this.y = canvas.height - 700;
        // this.speed = Math.random() * 2 + 1;
        this.speed = 1;

        this.radius = 25;
        this.distance;

        this.sound = Math.random() <=0.5 ? 'sound1':'sound2'
    }
    update(){
        this.y += this.speed;
    }
    draw(){
        // context.fillStyle = "teal";
        context.beginPath();
        context.arc(this.x, this.y, this.radius,0,Math.PI * 2);
        // context.fill();
        context.closePath();
        // context.stroke();
        context.drawImage(rockImage,this.x-35, this.y-47.01, this.radius * 3,this.radius*3);
    }
}
function workingRocks(){
    if(gameFrame %100 === 0){
        rockArray.push(new rock());
        console.log(rockArray.length);
    }
    for(let i = 0; i < rockArray.length; i++){
        rockArray[i].update();
        rockArray[i].draw();
            if(rockArray[i].y > 700){
                rockArray.splice(i, 1);
            }
            if(rockArray[i].distance > rockArray[i].radius + player.radius){
                console.log(`Rock hit`)
                // i.e ^ collision
            }
    }
   
}
// ==================Moving Images=================
const road = new Image();
road.src = 'Road2.png';
// bg=background
const bg = {
   y1:0,
   y2:canvas.height,
   x:0,
   width:canvas.width,
   height:canvas.height
}
function workingBG(){
    bg.y1--; /*rolling y-axis img 1 */
    if(bg.y1 < -bg.height)bg.y1 = bg.height; 
// we can change -- into -=gameSpeed; to edit speed
    bg.y2--; /*rolling y-axis img 2 */
    if(bg.y2 < -bg.height)bg.y2 = bg.height; 

    context.drawImage(road,bg.x,bg.y1,bg.width,bg.height)
    context.drawImage(road,bg.x,bg.y2,bg.width,bg.height)
}




// =========  animate =============== order matters!!!
function animate(){
    context.clearRect(0,0,canvas.width, canvas.height)
    player.update();
    player.draw();
    workingBG();
    context.fillText('Score: ' + score,100,250);
    context.fillStyle = "blue";
    workingRocks() ;
    gameFrame++;
    requestAnimationFrame(animate);
 
}
animate();















let img = new Image();
https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png Car-sprite1.png

img.src = 'Car-sprite1.png';

img.onload = function() {
  window.requestAnimationFrame(gameLoop);
};

let canvasZ = document.querySelector('canvas');
let ctx = canvasZ.getContext('2d');

const SCALE = 30;
const WIDTH = 16;
const HEIGHT = 18;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;

function drawFrame(frameX, frameY, canvasZX, canvasZY) {
  ctx.drawImage(img,
                frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                canvasZX, canvasZY, SCALED_WIDTH, SCALED_HEIGHT);
}


const CYCLE_LOOP = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 0;
let keyPresses = {};

// window.addEventListener('keydown', keyDownListener);
// function keyDownListener(event) {
//     keyPresses[event.key] = true;
// }

// window.addEventListener('keyup', keyUpListener);
// function keyUpListener(event) {
//     keyPresses[event.key] = false;
// }

const MOVEMENT_SPEED = 1;
// let positionX = 265;
// let positionY = 500;

let positionX = 10;
let positionY = -50;

function gameLoop() {
//   ctx.clearRect(0, 0, canvasZ.width, canvasZ.height);
  if (keyPresses.w) {
    positionY -= MOVEMENT_SPEED;
  } else if (keyPresses.s) {
    positionY += MOVEMENT_SPEED;
  }
  if (keyPresses.a) {
    positionX -= MOVEMENT_SPEED;
  } else if (keyPresses.d) {
    positionX += MOVEMENT_SPEED;
  }
  drawFrame(0, 0, positionX, positionY);
  window.requestAnimationFrame(gameLoop);
}