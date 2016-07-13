'use strict';

// Code here.

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  const Red=['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'];
  const Green=['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];
  const Orange=['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];
  const MBTA={Red,Green,Orange};
  if(startLine===endLine){
    return Math.abs(MBTA[startLine].indexOf(startStation)-MBTA[startLine].indexOf(endStation));
  }
  if(startLine!==endLine){
  return Math.abs(MBTA[startLine].indexOf(startStation)-MBTA[startLine].indexOf('Park Street'))+Math.abs(MBTA[endLine].indexOf(endStation)-MBTA[endLine].indexOf('Park Street'));
}
};
module.exports = {
  stopsBetweenStations,
  stretch: false,
};
