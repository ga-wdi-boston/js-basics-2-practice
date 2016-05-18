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
        let howManyStops = Math.abs(indexEndStation) - Math.abs(indexStartStation);
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
   console.log("You have changes lines");
   			if (startLine == redline && endLine == greenline) {
        	let indexStartStation = redline.indexOf(startStation);
          let indexChangeStation = redline.indexOf('Park Street');
          let howManyStopsToChangeStation = indexChangeStation - indexStartStation;
          let indexEndStation = greenline.indexOf(endStation);
          let howManyStopsFromChangeStation = indexChangeStation - indexEndStation;
          let howManyStops = howManyStopsToChangeStation + howManyStopsFromChangeStation;
          console.log(howManyStops);
        }
   }

};

stopsBetweenStations(greenline, 'Government Center', greenline, 'Park Street');

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
