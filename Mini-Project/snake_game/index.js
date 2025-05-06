// Game Constants and variables
let direction = {x:0, y:0};
const foodsound = new Audio("food.mp3");
const gameOverSound = new Audio("gameover.mp3");
const movesound = new Audio("move.mp3");
const musicSound = new Audio("newaudio.mp3");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x:13, y:15}
]

// Game Functions
function main(currentTime){
    window.requestAnimationFrame(main);
    if((currentTime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = currentTime;
    gameEngine();
    console.log(currentTime);
}
function gameEngine(){
    //part 1 - updating the snake variable ,
    // part 2 - display the snake and food

}

//Main logic starts here
window.requestAnimationFrame(main);