const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 650,
    width: 500,
    speed: 8,
    color: 'hotpink'
};

const c2 = {
    x : 100,
    y: 200,
    widht: 500,
    speed: 15,
    color: 'teal'
}


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {


    // clear the canvas:
    clear();

    // move the car:
     c1.x -= c1.speed;
    
    if(c1.x < -500){
        c1.x = 1700;
    }

     c2.x += c2.speed;
    if(c2.x > 1700){
        c2.x = -500;
    }

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    
    // draw the grid (optional -- feel free to remove this line):
    // drawGrid(canvasWidth, canvasHeight);

    drawCar(c2.x, c2.y, c2.width, c2.color);

 }


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);

    strokeWeight(0);
    fill('teal');
    rect(c2.x - size/4, c2.y - (size/5 + size/7), size/2, size/7);
    rect(c2.x - size/2, c2.y - size/5, size, size/5);

    fill(wheelColor);
    circle(c2.x - size / 4, c2.y, size / 6);
    circle(c2.x + size / 4, c2.y, size / 6);
}
