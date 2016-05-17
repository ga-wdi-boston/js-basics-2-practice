'use strict';

// All 3 subway lines intersect at Park Street, but there are no other intersection points.
let redline = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife' ];
let greenline = [ 'Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore' ];
let orangeline = [ 'North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills' ];

const stopsBetweenStations = (startLine, startStation, endStation) => {

  if (startLine == redline) {
    let indexStartStation = redline.indexOf(startStation);
    let indexEndStation = redline.indexOf(endStation);
    let howManyStops = indexEndStation - indexStartStation;
    console.log(howManyStops);

  }
  else if (startLine == greenline) {
    let indexStartStation = greenline.indexOf(startStation);
    let indexEndStation = greenline.indexOf(endStation);
    let howManyStops = indexEndStation - indexStartStation;
    console.log(howManyStops);

  }
  else if (startLine == orangeline) {
    let indexStartStation = orangeline.indexOf(startStation);
    let indexEndStation = orangeline.indexOf(endStation);
    let howManyStops = indexEndStation - indexStartStation;
    console.log(howManyStops);

  }

};

stopsBetweenStations(greenline, 'Park Street', 'Hynes');

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
