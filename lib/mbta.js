'use strict';

let intersectionStation = "Park Street";

let mbta = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

const calculateStops = (startLine, startStation, endLine, endStation) => {
    return Math.abs(
              mbta[startLine].indexOf(startStation) -
              mbta[endLine].indexOf(endStation));
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  let numberOfStops = 0;

  if (startLine === endLine) {
    return calculateStops(startLine, startStation,endLine,endStation);
  }
  else {

    numberOfStops =
      calculateStops(startLine,startStation,startLine,intersectionStation) +
      calculateStops(endLine,intersectionStation,endLine,endStation);
  }

  return numberOfStops;

};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
