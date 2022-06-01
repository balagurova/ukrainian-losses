//This example demonstrates how to export your canvas as a vectorised SVG file.
//By using the SVG renderer, every frame of your sketch is actually rendered as SVG paths in stead of pixels on the canvas.
//Make sure you include the svg script in index.html
//P5 SVG library by Zeno Zeng: https://github.com/zenozeng/p5.js-svg
var scribble = new Scribble();  

function setup(){
    //Create canvas, use SVG renderer
    //Set the canvas size to the image ratio you want to export
    createCanvas(500,500,SVG);
    
    fill(255);
    stroke(0);
    noLoop()
}




function draw(){
    drawSmallBird()

}

function keyPressed(){
    //if s is pressed, save file
    if(key == "s") save("myCanvas.svg"); //give file name with the file type SVG
}


function drawSmallBird() {
    // translate(birdX,birdY)
    background(0);
    stroke(255)
    strokeWeight(1.5)
    scribble.roughness = 1;
    scribble.scribbleLine(50,50,50+10,50+10)
    scribble.scribbleLine(50+10,50+10,50+20,50)
    scribble.scribbleLine(50,100,50+20,100)
    
    scribble.scribbleLine(50,150,50+5,150+5)
    scribble.scribbleLine(50+5,150+5,50+10,150)

    scribble.scribbleLine(50+5,155,50+5,155+10)

    scribble.scribbleLine(50,155,50+5,155+5)
    scribble.scribbleLine(50+5,155+5,50+10,155)
    
    
    
   

   
  }
  