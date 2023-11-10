function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    noFill()
    let y = 0;
    let w = 50;
    let x = 0;
    while (y <= 600) {
        console.log("y=",y,"y*2=", 2 * y, "x=",x);

        //circle that goes horizontally:
        fill("red");
        circle(x,200,w);
        x += 5;

        //circles that goes vertically:
        fill("orange");
        circle(100,y*2,w);
        fill("yellow");
        circle(300,x,100);
        fill("green");
        circle(500,y,w);
        fill("blue");
        circle(800,y*2,w);
        fill("purple");
        circle(900,y*5,w*8);

        y += 5;
        w += 1;

    }



    drawGrid(canvasWidth, canvasHeight);
}
