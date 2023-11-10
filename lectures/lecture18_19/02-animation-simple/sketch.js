let x = 100;
let y = 500;
let w = 1300;
let h = 700;
let width = 150;
let speed = 10;
let speed2 = 40;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
function draw() {
    //goal: make ball go diagonal and up:

    x += speed;
    y -= 2;

    w -= speed2;
    h -= 2;

    if(w < 0){
        w = canvasWidth;
    }
    clear();
    fill("hotpink");
    circle(x, y, width);

    fill("teal");
    circle(w, h, width);
    drawGrid(canvasWidth, canvasHeight);

}
