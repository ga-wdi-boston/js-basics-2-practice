'use strict';

/**let trainLines = {
  red: ['South Station', 'Park Street', 'Kendall', 'Central','Harvard','Porter', 'Davis', 'Alewife'],
  orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'],
  green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']
};**/

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  let red = ['South Station', 'Park Street', 'Kendall', 'Central','Harvard','Porter', 'Davis', 'Alewife'];
  let orange = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];
  let green = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];

  /**for (var i = 0; i < red.length; i++) {
    if (red[i] === startStation){
      startStation = startStation.indexOf(red[i]);
    } else if (orange[i] === startStation) {

    }
  }**/
startLine = (startLine === 'Red') ? startLine = red : (startLine === 'Green') ? startLine = green : startLine === 'Orange' ? startLine = orange : null;

endLine = (endLine === 'Red') ? endLine = red : (endLine === 'Green') ? endLine = green : endLine === 'Orange' ? endLine = orange : null;



  return (startLine === endLine) ? (Math.abs(startLine.indexOf(startStation) - endLine.indexOf(endStation))) : Math.abs(startLine.indexOf(startStation + 1) - endLine.indexOf(endStation)) ;
};





/**startLine = function(startStation) {
  for (let i = 0; i < trainLines.red.length; i++) {
    if (startStation === trainLines.red[i]){
      return trainLines.red;
    } else if (startStation === trainLines.orange[i]) {
      return trainLines.orange;
    } else if (startStation === trainLines.green[i]) {
      return trainLines.green;
    }
  }
};
endLine = function(endStation) {
  for (let i = 0; i < trainLines.red.length; i++) {
    if (endStation === trainLines.red[i]){
      return trainLines.red;
    } else if (endStation === trainLines.orange[i]) {
      return trainLines.orange;
    } else if (endStation === trainLines.green[i]) {
      return trainLines.green;
    }
  }
};

return (startLine[startStation] - endLine[endStation]);
};
};
**/

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
