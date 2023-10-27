function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("#D4EFDF");

   
    drawCreature(100, 400, "grey");
    drawCreature(250, 100, "green");
    drawCreature(400, 20, "blue");
    drawCreature(550, 10, "white");
    drawCreature(700, 340, "red");

    drawCreature(100, 400, "grey");
    drawCreature(250, 100, "green");
    drawCreature(400, 20, "blue");
    drawCreature(550, 10, "white");
    drawCreature(700, 340, "red");

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}


function drawCreature(x, y, color){
    fill(color) ;
    circle(x, y, 80);
    fill("black");
    circle(x,y,50);
    fill("white");
    circle(x-20, y-20, 40);

    fill(color) ;
    circle(x+120, y, 80);
    fill("black");
    circle(x+120,y,50);
    fill("white");
    circle(x+140, y-20, 40);

    fill("tan");
    circle(x,y)
}