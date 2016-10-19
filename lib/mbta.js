'use strict';

// Code here.

//const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

const ask =require('../lib/ask.js');

let stationOn =ask('At what station will you start? ');
if (stationOn === 'Government','Park','Boylston','Arlington','Copley','Hynes',
'Kenmore') {
  console.log("You're on the greenLine");
}
/*let greenLine = ['Government','Park','Boylston','Arlington','Copley','Hynes',
'Kenmore'];
let stationOnNum = greenLine.indexOf(stationOn);

let stationOff = ask('At what station will you end? ');
let stationOffNum = greenLine.indexOf(stationOff);

let numOfStops = ();
for (let i = stationOnNum; i < greenLine.length; i +=);
let x = (stationOffNum - stationOnNum);
console.log('Your trip has' + x + 'stops! ');
 };
};

};*/

/*module.exports = {
  stopsBetweenStations,
  stretch: false,
};*/
