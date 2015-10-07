'use strict';

// Code here.
var mbta = {


  //set Red Line array
'Red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter','David','Alewife'],
  //set Green Line array
'Green': ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  //set Orange Line array
'Orange': ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']



};

  var stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation) {



    if(startLine !== endLine){
      var firstLine = Math.abs(mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Park Street'));
      var secondLine = Math.abs(mbta[endLine].indexOf(endStation) - mbta[endLine].indexOf('Park Street'));
      return (firstLine + secondLine);
    }else{
      return Math.abs(mbta[startLine].indexOf(startStation) - mbta[endLine].indexOf(endStation));
    }
  };


module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
};
