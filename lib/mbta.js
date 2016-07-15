 'use strict';

// Code here.

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

const mbta = {
Red : [ 'South Station',
            'Park Street',
            'Kendall',
            'Central',
            'Harvard',
            'Porter',
            'Davis',
            'Alewife' ],

Green : [ 'Government Center',
              'Park Street',
              'Boylston',
              'Arlington',
              'Copley',
              'Hynes',
              'Kenmore' ],

Orange : [ 'North Station',
               'Haymarket',
               'Park Street',
               'State',
               'Downtown Crossing',
               'Chinatown',
               'Back Bay',
               'Forest Hills' ]
};
let sameLineCount;
   if (startLine === endLine){

   sameLineCount = Math.abs(mbta[endLine].indexOf(endStation) - mbta[startLine].indexOf(startStation));

        return sameLineCount;

 } else {

   let lineCountToPark;
   let lineCountFromPark;

lineCountToPark = (Math.abs(mbta[startLine].indexOf('Park Street') - mbta[startLine].indexOf(startStation)));
lineCountFromPark = (Math.abs(mbta[endLine].indexOf('Park Street') - mbta[endLine].indexOf(endStation)));


   let countLines = lineCountFromPark + lineCountToPark;

        return countLines;
 }

  };




module.exports = {
  stopsBetweenStations,
  stretch: false,
};
