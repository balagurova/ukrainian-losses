let birdX, birdY;
let total, injured, lossesQuantity;
let injuredArray;
let lineQuantity;
let refugees;
let date;
let rndL;
let scribble;
let bubbleData = [];
let data = [];
let url;
let dt;
let x = 0;
let y = 10;
let s = 2;
let rndHW, rndH;
let w;
let numberOfLeaves, numberOfWheat;
let remainder;


function preload() {
  // scribble = new Scribble(); 
  url ='https://data.unhcr.org/population/get/timeseries?widget_id=314852&sv_id=54&population_group=5460&frequency=day&fromDate=1900-01-01';
  data = loadJSON(url);
  table = loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vQIdedbZz0ehRC0b4fsWiP14R7MdtU1mpmwAkuXUPElSah2AWCURKGALFDuHjvyJUL8vzZAt3R1B5qg/pub?', 'csv', 'header');
}

function loadData() {
  bubbleData = data.data.timeseries;
  bubble = bubbleData[[bubbleData.length - 1]];
  refugees = Intl.NumberFormat().format(bubble['individuals'])
  lineQuantity = bubble['individuals'] / 1000;
  lossesArray = table.getColumn('Civilian casualities(OHCHR) - Killed');
  total = parseFloat(lossesArray.slice(-1))
  injuredArray = table.getColumn('Civilian casualities(OHCHR) - Injured');
  injured = parseFloat(injuredArray.slice(-1))
}

function setup() {
  createCanvas(500, 500).parent("canvasID");
  loadData();

  if (window.innerWidth < 800) {
    createCanvas(window.innerWidth * 0.91, lineQuantity).parent("#canvasID");
  } else {
    createCanvas(window.innerWidth / 2, lineQuantity).parent("#canvasID");
  }

  noLoop();
  colorMode(HSL, 360, 100, 100);
  document.getElementById("refugees").innerHTML = refugees;
  document.getElementById("injuredN").innerHTML = Intl.NumberFormat().format(injured);
  document.getElementById("total").innerHTML = Intl.NumberFormat().format(total);

  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  dt = new Date(Date.parse(table.getColumn('Date').slice(-1)))
  dt = dt.toLocaleDateString('en-UK', options)
  document.getElementById("date").innerHTML = dt;
}

function draw() {
  background(205, 97, 65)
  
  for (let i = 0; i < lineQuantity; i++) {
    x = 0;
    y = 0 + s;
    stroke(205, 97, random(45, 65))
    line(0, i, width, i)
    s += 1;
  }

  for (let i = 0; i < total; i++) {
    
    let d = 0
    birdX = random(20, width - 20) + d;
    birdY = random(20, height -370) + d;
    drawSmallBird()
    d += 100;
  }

  drawWheat()
  drawRemainder()

}


function drawSmallBird() {
  stroke(255)

  if(width > 800){
    strokeWeight(1.5)
  }
  else{
    strokeWeight(1.3)
  }
  
  scribble.roughness = 1;
  birdSize = random(2, 6);
  scribble.scribbleLine(birdX, birdY, birdX + birdSize, birdY + birdSize)
  scribble.scribbleLine(birdX + birdSize, birdY + birdSize, birdX + birdSize * 2, birdY)
}



function drawWheat() {

  if(width > 800){
    strokeWeight(1.5)
  }
  else{
    strokeWeight(1.3)
  }
  
  numOfLeaves = 30;
  remainder = injured % numOfLeaves;
  numOfWheat = (injured - remainder) / numOfLeaves / 2;



  for (i = 0; i < numOfWheat; i++) {
    stroke(58, 98, 52)
    
    if(width > 800){
      rndH = random(20, 250);
      w = 20;
    }
    else{
      rndH = random(20, 250);
      w = 10;
    }
    
    
    

    
    scribble.roughness = 0.6;
    scribble.scribbleLine(w, height, w, height - rndH  - 5)



    push()
    translate(w, height - rndH)

    for (j = 0; j < numOfLeaves; j++) {
      rndL = random(9,14)*(-1)*width*0.001;
      

      if(width > 800){
        translate(0, -4)
      }
      else{
        translate(0, -3)
      }
        
     
      scribble.scribbleLine(0, 0, -rndL, rndL)
      scribble.scribbleLine(0, 0, rndL, rndL)
    }
    pop()
    // rndHW = random(20, width - 20)
   
    if(width > 800){
      translate(width / numOfWheat - 0.5, 0)

    }
    else{
      translate(width / numOfWheat - 0.25, 0)

    }
    
    // w+=10;


  }
}

function drawRemainder() {

  stroke(58, 98, 48)
  //remainder

  if (remainder > 0) {
    scribble.scribbleLine(w, height, w, height - rndH - 5)
    translate(w, height - rndH)
    for (l = 0; l < remainder / 2; l++) {
      rndL = random(9,14)*(-1);
      translate(0, -4*width*0.0015)
      scribble.scribbleLine(0, 0, -rndL, rndL)
      scribble.scribbleLine(0, 0, rndL, rndL)
    }

  }
}

const btnVisibility = () => {
  console.log(window.scrollY);
  if (window.scrollY > 6200) {
    document.getElementById("footer").style.visibility = "hidden";
  } else {
    document.getElementById("footer").style.visibility = "visible";
  }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});
