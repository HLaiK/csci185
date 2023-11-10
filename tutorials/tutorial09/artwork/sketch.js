const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#f4cccc", "#fce5cd", "#f2b989", "#e1bbfa", "#bbcdfa", '#bbcdfa'];


function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



function setup() {
createCanvas(canvasWidth, canvasHeight);

s = 50;

 for(let i = 0; i < 1000; i++){
     let x = randomInt(0, canvasWidth);
     let y = randomInt(0, canvasHeight);
     fill(310*x/width, 127, 255);
     heart(x+s/2, y+s/2,s/2)
     fill(random(colors));
 }
}
function draw(){
    
}
// credit to hearts : https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg // 
function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
  }