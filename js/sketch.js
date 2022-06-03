let birdX, birdY;
let total, injured, lossesQuantity;
let lineQuantity;
let refugees;
let date;
let rndL;
let scribble;
let bubbleData = [];


function preload() {
  scribble = new Scribble(); 
  let url =
    'https://data.unhcr.org/population/get/timeseries?widget_id=294518&sv_id=54&population_group=5460&frequency=day&fromDate=1900-01-01';
  data = loadJSON(url);
  table = loadTable('https://proxy.hxlstandard.org/data.csv?tagger-match-all=on&tagger-01-header=total+population%28flash+appeal%29&tagger-01-tag=%23population%2Btotal&tagger-02-header=people+affected%28flash+appeal%29&tagger-02-tag=%23affected%2Btotal&tagger-03-header=people+affected+-+idps&tagger-03-tag=%23affected%2Bidps&tagger-04-header=people+in+need%28flash+appeal%29&tagger-04-tag=%23affected%2Bpin&tagger-05-header=pin+-+idps&tagger-05-tag=%23affected%2Bpin%2Bidps&tagger-06-header=people+targeted%28flash+appeal%29&tagger-06-tag=%23affected%2Bpin%2Bidps&tagger-07-header=people+targeted+-+idps&tagger-07-tag=%23targeted%2Bidps&tagger-11-header=refugees%28unhcr%29&tagger-11-tag=%23affected%2Brefugees&tagger-12-header=civilian+casualities%28unhcr%29+-+killed&tagger-12-tag=%23affected%2Bkilled&tagger-13-header=civilian+casualities%28unhcr%29+-+injured&tagger-13-tag=%23affected%2Binjured&tagger-14-header=date&tagger-14-tag=%23date&tagger-16-header=ukraine+flash+appeal+2022+-+required+%28us%24m%29&tagger-16-tag=%23value%2Bfunding%2Bflash%2Brequired%2Busd&tagger-17-header=ukraine+flash+appeal+2022+-+funded+%28us%24m%29&tagger-17-tag=%23value%2Bfunding%2Bflash%2Bfunded%2Busd&tagger-18-header=ukraine+flash+appeal+2022+-+%25+coverage&tagger-18-tag=%23value%2Bfunding%2Bflash%2Bpct&tagger-19-header=ukraine+humanitarian+response+plan+2022+-+required+%28us%24m%29&tagger-19-tag=%23value%2Bfunding%2Bhrp%2Brequired%2Busd&tagger-20-header=ukraine+humanitarian+response+plan+2022+-+funded+%28us%24m%29&tagger-20-tag=%23value%2Bfunding%2Bhrp%2Bfunded%2Busd&tagger-21-header=ukraine+humanitarian+response+plan+2022+-+%25+coverage&tagger-21-tag=%23value%2Bfunding%2Bhrp%2Bpct&tagger-22-header=ukraine+regional+refugee+response+plan+2022+-+required+%28us%24m%29&tagger-22-tag=%23value%2Bfunding%2Brrrp%2Brequired%2Busd&tagger-23-header=ukraine+regional+refugee+response+plan+2022+-+funded+%28us%24m%29&tagger-23-tag=%23value%2Bfunding%2Brrrp%2Bfunded%2Busd&tagger-24-header=ukraine+regional+refugee+response+plan+2022+-+%25+coverage&tagger-24-tag=%23value%2Bfunding%2Brrrp%2Bpct&tagger-25-header=cerf+-+contributions+%28us%24m%29&tagger-25-tag=%23value%2Bcerf%2Bcontributions&tagger-26-header=cerf+-+allocations+%28us%24m%29&tagger-26-tag=%23value%2Bcerf%2Ballocations&tagger-27-header=ukraine+humanitarian+fund+-+contributions+%28us%24m%29&tagger-27-tag=%23value%2Bfunding%2Buhf%2Bcontributions&tagger-28-header=ukraine+humanitarian+fund+-+allocations+%28us%24m%29&tagger-28-tag=%23value%2Bfunding%2Buhf%2Ballocations&url=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2Fe%2F2PACX-1vQIdedbZz0ehRC0b4fsWiP14R7MdtU1mpmwAkuXUPElSah2AWCURKGALFDuHjvyJUL8vzZAt3R1B5qg%2Fpub%3Foutput%3Dcsv&header-row=2&dest=data_view://docs.google.com/spreadsheets/d/e/2PACX-1vQIdedbZz0ehRC0b4fsWiP14R7MdtU1mpmwAkuXUPElSah2AWCURKGALFDuHjvyJUL8vzZAt3R1B5qg/pub?', 'csv', 'header');
}

function loadData() {
  let bubbleData = data.data.timeseries;
  let bubble = bubbleData[[bubbleData.length - 1]];
  refugees = Intl.NumberFormat().format(bubble['individuals'])
  lineQuantity = bubble['individuals'] / 1000;
  lossesArray = table.getColumn('Civilian casualities(OHCHR) - Killed');
  total = parseFloat(lossesArray.slice(-1))
  injuredArray = table.getColumn('Civilian casualities(OHCHR) - Injured');
  injured = parseFloat(injuredArray.slice(-1))
}

function setup() {
  createCanvas(500, 500).parent("canvasID");
}

function draw() {
  background(0)
}