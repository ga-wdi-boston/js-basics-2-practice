'use strict';

// Code here.

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  //names of all stops on all subway lines
  const subway = {
    'Red' :['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    'Green' :['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    'Orange' :['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing',
                'Chinatown', 'Back Bay', 'Forest Hills'],
  };
  //variables
  let startS = 0;
  let startPK = 0;
  let startToPark = 0;
  let endS = 0;
  let endPK = 0;
  let endToPark = 0;
  let totalStations = 0;

  //get number of stops from start to park street
  for (let i = 0; i < subway[startLine].length; i++) {
   if (subway[startLine][i] === startStation){
     startS = i;
   }
   if (subway[startLine][i] === 'Park Street'){
     startPK = i;
   }
  }
  startToPark = startPK - startS;
  if (startToPark < 0){
    startToPark = startToPark * -1;
  }

  //get number of stops from end to park street
  for (let i = 0; i < subway[endLine].length; i++) {
   if (subway[endLine][i] === endStation){
     endS = i;
   }
   if (subway[endLine][i] === 'Park Street'){
     endPK = i;
   }
  }
  endToPark = endPK - endS;
  if (endToPark < 0){
    endToPark = endToPark * -1;
  }

  //add startToPark and endToPark to get total stopsBetweenStations
  totalStations = startToPark + endToPark;
  return totalStations;
};
//let x = stopsBetweenStations('red','Central','orange','Chinatown');
//console.log(x);


module.exports = {
  stopsBetweenStations,
  stretch: false,
};
