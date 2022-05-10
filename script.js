// =============== canvas code =================
const canvas = document.getElementById(`canvas1`);
const context = canvas.getContext(`2d`) /*paintbrush center*/ 

const canvas2 = document.getElementById(`canvas2`);
const context2 = canvas2.getContext(`2d`)/* */ 

const canvas3 = document.getElementById(`canvas3`);
const context3 = canvas3.getContext(`2d`) /* */ 

let player1 = document.querySelector(".player")



// center road rock scale
canvas.width = 600;
canvas.height = 600;

canvas2.width = 600;
canvas2.height = 600;

canvas3.width = 600;
canvas3.height = 600;

// global scope
let gameSpeed= 1;
let score = 0;
let gameFrame = 0;
// const square = context.fillRect(200,200,100,100)
// (x, y, width, height)

const storage = {} 

// ========== old game controls (ex: arrow < > keys)============================

/* ===============================================

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

===================================================*/

// =====================old Car/Player ======================
// Classes are bits of code that encompass multiple objects, methods and allow manipulation for its member variables and functions.

// storage needed here
class Player {
    constructor(){
    // this.x = canvas.width;
    // this.y = canvas.height;
    // this.radius = 25;
    // this.spriteWidth =82;
    // this.spriteHeight =144;
    // this.distance;
    }
    update(){ 
        // const distanceX = this.x -
    }
    draw(){

    }
}
const player = new Player();

// =========== Rocks / Obstacles  and Collisions =============
const rockArray = [];
const rockArray2 = [];
const rockArray3 = [];


const rockImage = new Image();
rockImage.src = 'Rock-sprite1.png';

class rock {
    constructor(){
        // this.x =Math.random() * (max - min + 1) * canvas.width;
        this.x = Math.random() * canvas.width/2 +100;
        // this.x = 310;
        this.y = canvas.height - 700;
        // this.speed = Math.random() * 2 + 1;
        this.speed = 2;

        this.radius = 25;
        this.distance = 1;

        this.sound = Math.random() <=0.5 ? 'sound1':'sound2'
    }
    update(){
        /* update test*/
        
        this.y += this.speed;
        const distanceX = this.x -Car1.X;
        const distanceY = this.y -Car1.Y
        this.distance =Math.sqrt(distanceX * distanceX + distanceY * distanceY);
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
    if(gameFrame %70 === 0){
        rockArray.push(new rock());
        // console.log(rockArray.length);
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
// ==================Moving  BG Images=================
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

// ====================================== lanes2===============================
class Player2 {
    constructor(){
    }
    update(){ 
    }
    draw(){
    }
}
const player2 = new Player2();


class rock2 {
    constructor(){
        // this.x =Math.random() * (max - min + 1) * canvas.width;
        this.x = Math.random() * canvas2.width/2 +100;
        // this.x = 310;
        this.y = canvas2.height - 700;
        // this.speed = Math.random() * 2 + 1;
        this.speed = 2;
        
        this.radius = 25;
        this.distance;
        
        this.sound = Math.random() <=0.5 ? 'sound1':'sound2'
    }
    update(){
        this.y += this.speed;
    }
    draw(){
        // context.fillStyle = "teal";
        context2.beginPath();
        context2.arc(this.x, this.y, this.radius,0,Math.PI * 2);
        // context.fill();
        context2.closePath();
        // context.stroke();
        context2.drawImage(rockImage,this.x-35, this.y-47.01, this.radius * 3,this.radius*3);
    }
}

function workingRocks2(){
    if(gameFrame %70 === 0){
        rockArray2.push(new rock2());
        // console.log(rockArray2.length);
    }
    for(let i = 0; i < rockArray2.length; i++){
        rockArray2[i].update();
        rockArray2[i].draw();
        if(rockArray2[i].y > 700){
            rockArray2.splice(i, 1);
        }
        if(rockArray2[i].distance > rockArray2[i].radius + player2.radius){
            console.log(`Rock hit`)
            // i.e ^ collision
        }
    }
    
}
const road2 = new Image();
road2.src = 'RoadL.png';
const bg2 = {
    y1:0,
    y2:canvas2.height,
    x:0,
    width:canvas2.width,
    height:canvas2.height
 }
 function workingBG2(){
     bg2.y1--; /*rolling y-axis img 1 */
     if(bg2.y1 < -bg2.height)bg2.y1 = bg2.height; 
 // we can change -- into -=gameSpeed; to edit speed
     bg2.y2--; /*rolling y-axis img 2 */
     if(bg2.y2 < -bg2.height)bg2.y2 = bg2.height; 
 
     context2.drawImage(road2,bg2.x,bg2.y1,bg2.width,bg2.height)
     context2.drawImage(road2,bg2.x,bg2.y2,bg2.width,bg2.height)
    }

// ====================================== lanes2===============================

// ====================================== lanes3===============================
class Player3 {
    constructor(){
    }
    update(){ 
    }
    draw(){
    }
}
const player3 = new Player3();


class rock3 {
    constructor(){
        // this.x =Math.random() * (max - min + 1) * canvas.width;
        this.x = Math.random() * canvas3.width/2 +100;
        // this.x = 310;
        this.y = canvas3.height - 700;
        // this.speed = Math.random() * 2 + 1;
        this.speed = 2;
        
        this.radius = 25;
        this.distance;
        
        this.sound = Math.random() <=0.5 ? 'sound1':'sound2'
    }
    update(){
        this.y += this.speed;
    }
    draw(){
        // context.fillStyle = "teal";
        context3.beginPath();
        context3.arc(this.x, this.y, this.radius,0,Math.PI * 2);
        // context.fill();
        context3.closePath();
        // context.stroke();
        context3.drawImage(rockImage,this.x-35, this.y-47.01, this.radius * 3,this.radius*3);
    }
}

function workingRocks3(){
    if(gameFrame %70 === 0){
        rockArray3.push(new rock3());
        // console.log(rockArray3.length);
    }
    for(let i = 0; i < rockArray3.length; i++){
        rockArray3[i].update();
        rockArray3[i].draw();
        if(rockArray3[i].y > 700){
            rockArray3.splice(i, 1);
        }
        if(rockArray3[i].distance > rockArray3[i].radius + player3.radius){
            console.log(`Rock hit`)
            // i.e ^ collision
        }
    }
    
}
const road3 = new Image();
road3.src = 'RoadR.png';
const bg3 = {
    y1:0,
    y2:canvas3.height,
    x:0,
    width:canvas3.width,
    height:canvas3.height
 }
 function workingBG3(){
     bg3.y1--; /*rolling y-axis img 1 */
     if(bg3.y1 < -bg3.height)bg3.y1 = bg3.height; 
 // we can change -- into -=gameSpeed; to edit speed
     bg3.y2--; /*rolling y-axis img 3 */
     if(bg3.y2 < -bg3.height)bg3.y2 = bg3.height; 
 
     context3.drawImage(road3,bg3.x,bg3.y1,bg3.width,bg3.height)
     context3.drawImage(road3,bg3.x,bg3.y2,bg3.width,bg3.height)
    }
    // ================================== lanes3============================
    
    
    // =========================== new player ===============================
    let positionX = 200;
    let positionY = 460;

    let Car1 = {
        X:positionX,
        Y:positionY,
        width: 50,
        height: 20,
          // context.fillStyle = "teal";
          // context.fill();
    }
    // context.fillRect(Car1.X,Car1.Y,82,144)

// if(rock.radius < Car1 + Car1.width){
    // console.log("hit")
// }

// function getHit(){
// for(let i = 0;i >rockArray.length; i++){  
// if (rockArray[i].x > Car1.X + Car1.width ||
//         rockArray[i].x + rockArray[i].radius < Car1.X||
//         rockArray[i].y > Car1.Y + Car1.height ||
//         rockArray[i].y + rockArray[i].radius < Car1.Y
//     ){
//         console.log("gg")
//     }else{
//         console.log("safe")
//     }
// }
// }

let testrock ={X:-100,Y:400, width:200, height:250}
// x plus width is right

function getCollision()
{
// console.log('hello') 
for(let i = 0;i < rockArray.length; i++){
    // console.log('test')
if(Car1.X > rockArray[i].x + rockArray[i].radius ||
    Car1.X + Car1.width < rockArray[i].x -  rockArray[i].radius ||
    Car1.Y >  rockArray[i].y +  rockArray[i].radius ||
    Car1.Y + Car1.height <  rockArray[i].y -  rockArray[i].radius
    ){
        // console.log("no hit")
     return true  
    }else {
        return false
    }
    
}

}

    let img = new Image();
    
    img.src = 'Car-sprite1.png';
    
    img.onload = function() {
      window.requestAnimationFrame(gameLoop);
    };
    
    let canvasZ = document.querySelector('#canvas1');
    let ctx = canvasZ.getContext('2d');
    
    // picture specifc perameters px
    const SCALE = 1;
    const WIDTH = 82;
    const HEIGHT = 144;
    const SCALED_WIDTH = SCALE * WIDTH;
    const SCALED_HEIGHT = SCALE * HEIGHT;


    // relative picture size
    function drawFrame(ctx,frameX, frameY, canvasZX, canvasZY) {
      ctx.drawImage(img,frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT, canvasZX, canvasZY, SCALED_WIDTH, SCALED_HEIGHT);

    }
    // 82,144
    
    const CYCLE_LOOP = [0, 1, 0, 2];
    let currentLoopIndex = 0;
    let frameCount = 0;
    let currentDirection = 0;
    let keyPresses = {};
    
    // movement keys
    window.addEventListener('keydown', keyDownListener);
    function keyDownListener(event) {
        keyPresses[event.key] = true;
    }
    
    window.addEventListener('keyup', keyUpListener);
    function keyUpListener(event) {
        keyPresses[event.key] = false;
    }
    
    const MOVEMENT_SPEED = 5;
    // starting position
   
    
    function gameLoop() {
    // movement keys
      if (keyPresses.a) {
        positionX -= MOVEMENT_SPEED;

        Car1.X = positionX; /*connect car to img*/

      } else if (keyPresses.d) {
        positionX += MOVEMENT_SPEED;

        Car1.X = positionX; /*connect car to img*/
      }
    //   starting position per canvas slide
      drawFrame(ctx,0, 0, positionX, positionY);
      drawFrame(context2,0, 0, positionX+600, positionY);
      drawFrame(context3,0, 0, positionX-600, positionY);
    }
       // update false request animation frame

    // ======================== new player ===============================
 



// =========  animate =============== order matters!!!
function animate(){
    // player.update();
    // player.draw();
    workingBG();
    workingBG2()
    workingBG3()
    workingRocks();
    workingRocks2();
    workingRocks3();
    context2.fillText('Score:       ' +gameFrame/100+ score,10,10);
    context2.fillStyle = "black";
    gameFrame++;
    // context.fillRect(testrock.X,testrock.Y,testrock.width,testrock.height)
    getCollision()
    // context.fillRect(Car1.X,Car1.Y,82,144)
    if(getCollision()){
        requestAnimationFrame(animate);}

    window.requestAnimationFrame(gameLoop)
}
animate();



