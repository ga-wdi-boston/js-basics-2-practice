// 'use strict';

 // Data structure: lines object holds 3 arrays with stops as strings
 const lines = {   red:  ['South Station', 'Park Street', 'Kendall',
                         'Central', 'Harvad', 'Porter', 'Davis', 'Alewife'],
                 green:  ['Government Center', 'Park Street', 'Boylston',
                         'Arlington', 'Copley', 'Hynes', ,'Kenmore'],
                orange:  ['North Station', 'Haymarket', 'Park Street',
                         'State', 'Downtown Crossing', 'Chinatown',
                         'Back Bay', 'Forest Hills']
 };


const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  //test for just one train line
  Math.abs(lines[endLine.indexOf(endStation)] - lines[endLine.indexOf(startStation)]);

};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
