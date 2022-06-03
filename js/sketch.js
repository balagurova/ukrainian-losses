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


function preload() {
  scribble = new Scribble(); 
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
    scribble.scribbleLine(0, i, width, i)
    s += 1;
    // bubbles.push(new Bubble(x, y, lineQuantity, label));
  }


}