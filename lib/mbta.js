'use strict';

// All 3 subway lines intersect at Park Street, but there are no other intersection points.
let redline = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife' ];
let greenline = [ 'Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore' ];
let orangeline = [ 'North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills' ];

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

	if (startLine == endLine) {

      if (startLine == redline) {
        let indexStartStation = redline.indexOf(startStation);
        let indexEndStation = redline.indexOf(endStation);
        let howManyStops = indexEndStation - indexStartStation;
        let positiveResult = Math.abs(howManyStops);
        console.log(positiveResult);

      }
      else if (startLine == greenline) {
        let indexStartStation = greenline.indexOf(startStation);
        let indexEndStation = greenline.indexOf(endStation);
        let howManyStops = indexEndStation - indexStartStation;
        let positiveResult = Math.abs(howManyStops);
        console.log(positiveResult);

      }
      else if (startLine == orangeline) {
        let indexStartStation = orangeline.indexOf(startStation);
        let indexEndStation = orangeline.indexOf(endStation);
        let howManyStops = indexEndStation - indexStartStation;
        let positiveResult = Math.abs(howManyStops);
        console.log(positiveResult);
      }
      }

   else if (startLine !== endLine) {
   console.log("You changed lines");
   			if (startLine == redline && endLine == greenline) {
        	console.log("You changed from redline to greenline");
        	let indexStartStation = redline.indexOf(startStation);
          let indexChangeStation = redline.indexOf('Park Street');
          let howManyStopsToChangeStation = indexChangeStation - indexStartStation;
          let howManyStopsToChangeStationPositive = Math.abs(howManyStopsToChangeStation);
          console.log("You need: " + howManyStopsToChangeStation + " station/stations to get to Park Street.");
          let indexEndStation = greenline.indexOf(endStation);
          let howManyStopsFromChangeStation = indexChangeStation - indexEndStation;
          let howManyStopsFromChangeStationPositive = Math.abs(howManyStopsFromChangeStation);
          console.log("And you need: " + howManyStopsFromChangeStationPositive + " station/stations to get to your final Destination.");
          let howManyStops = howManyStopsToChangeStationPositive + howManyStopsFromChangeStationPositive;
          console.log("In total you will have to stop: " + howManyStops + "times. Have a good trip.");
        }
        else if (startLine == redline && endLine == orangeline) {
        console.log('you changed from red to organge');
        }
   }

};


stopsBetweenStations(redline, 'South Station', greenline, 'Kenmore');
module.exports = {
  stopsBetweenStations,
  stretch: false,
};
