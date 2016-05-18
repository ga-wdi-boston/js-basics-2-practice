'use strict';

// Code here.

let mbta = {
  red : [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife'
  ],
  green : [
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore'],
  orange : [
    'North Station',
    'Haymarket',
    'Park Street',
    'State',
    'Downtown Crossing',
    'Chinatown',
    'Back Bay',
    'Forest Hills'],
  };

findIndex = function (startLine, stop) {
    return mbta[startLine].indexOf(stop);
  };

let startStationIndex = findIndex(startStation);
let endStationIndex = findIndex(endStation);
let parkStreetIndex = findIndex('Park Street');

let parkStreetTrip = function (startLine, startStation, parkStreet, endLine, endStation) {
  return startLine.slice(startStationIndex, parkStreetIndex)+
  endLine.slice(parkStreetIndex, endStationIndex);
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  if (startLine === endLine) {
    return parkStreetTrip.length;
  } else {
    return (startLine.slice(startStationIndex, endStationIndex)).length;
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
