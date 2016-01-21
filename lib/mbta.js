'use strict';

//Assume good input. Your function need not check the validity of the line or stop.
//Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
//Subway lines are properties in an object literal (hashmap), while the values are an array of all the stops on each line.
//The key to the lab is to find the intersection of the lines at Park Street.
//Solve an easier problem first.
// Code here.
let subwayLines = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

var distanceToParkStreet = function distanceToParkStreet(line, station){
  var parkStreet = subwayLines[line].indexOf('Park Street');
  var start = subwayLines[line].indexOf(station);
  if(start>parkStreet){
    return start-parkStreet;
  } else {
    return parkStreet-start;
  }
};

var distanceFromParkStreet = function distanceToParkStreet(line, station){
  var parkStreet = subwayLines[line].indexOf('Park Street');
  var end = subwayLines[line].indexOf(station);
  if(end>parkStreet){
    return end-parkStreet;
  } else {
    return parkStreet-end;
  }
};

var stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation) {
  return distanceToParkStreet(startLine,startStation)+distanceFromParkStreet(endLine,endStation);
};

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false,
};
