'use strict';

// Code here.
const mbtaLines = {
  Red : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
  'Porter', 'Davis', 'Alewife'],
  Green : ['Kenmore', 'Hynes', 'Copley', 'Arlington', 'Boylston',
  'Park Street', 'Government Center'],
  Orange : ['Forest Hills', 'Back Bay', 'Chinatown', 'Downtown Crossing',
  'State', 'Park Street', 'Haymarket', 'North Station']
};

let stopsBetweenHub = function(property, value) {
  return property.indexOf(value) - property.indexOf('Park Street');
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
