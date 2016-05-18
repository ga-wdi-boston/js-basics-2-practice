'use strict';

//count stops from one subway line
var countStops = function (Stops, station1, station2) {
	let realStop = [];
      if (Stops.indexOf(station1) <= Stops.indexOf(station2)) {
      	realStop = Stops.slice(Stops.indexOf(station1),Stops.indexOf(station2));
      }else {
      	realStop = Stops.slice(Stops.indexOf(station2),Stops.indexOf(station1));
      }
      let stops = realStop.length;
      return stops;
};

//count stops from start station to end station, this may include counting stops from different subway lines;
var stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
	let subway = {
  		Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter','Davis', 'Alewife'],
  		Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  		Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
		};

  	if (startLine === endLine) {
    	return countStops(subway[startLine], startStation, endStation);
    }else {
      let numStop1 = countStops(subway[startLine], startStation, 'Park Street');
      let numStop2 = countStops(subway[endLine], 'Park Street', endStation);
      let numStops = numStop1 + numStop2;
      return numStops;
    }
};

console.log(stopsBetweenStations('Red','South Station','Orange', 'Back Bay'));



module.exports = {
  stopsBetweenStations,
  stretch: false,
};
