let x = 100;
let y = 200;
let width = 50;
let fillColor = "white";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill(fillColor);
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    // redraw circle:
    if(ev.code === "ArrowUp"){
        y = y - 10;
    } else if(ev.code === "ArrowDown"){
        y = y + 3;
    }
    if(ev.code === "Space"){
        width = width - 10;  
    } else if (ev.code === "Escape"){
        width = width + 3;
    }else if(ev.code === "KeyR"){
        fillColor="grey";
    }  else if (ev.code === "KeyB"){
        fillColor="pink";
    }

    clear();
    fill(fillColor);
    // circle(x, y, width);
    drawCreature(x, y, fillColor, width)
    drawGrid(canvasWidth, canvasHeight);
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

// Add event listener on keydown
document.addEventListener("keydown", moveController);
