'use strict';

let mbtaLines = {
  Red : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green : ['Government Center','Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes','Kenmore'],
  Orange : ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

//Doesn't work but hopefully can follow the logic
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  if (startLine === endLine) {
    return Math.abs(mbtaLines.Red.indexOf('startStation') - mbtaLines.Red.indexOf('startStation'));
  } else {
      let startPosToPark = Math.abs(mbtaLines.startLine.indexOf(startStation) - mbtaLines.startStation.indexOf('Park Street'));
      let endPosToPark =  Math.abs(mbtaLines.endLine.indexOf(endStation) - mbtaLines.endStation.indexOf('Park Street'));

      return startPosToPark + endPosToPark;
  }
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
