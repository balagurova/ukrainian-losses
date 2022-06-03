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
}

function draw() {
  background(255,0,0)
}