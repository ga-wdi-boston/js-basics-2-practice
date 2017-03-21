'use strict'

/* I spent a while going over the basics of functions, arrays, indexOf etc..

I have an idea of the overall Code Outline:

Functions for stopsOnRedLine, GreenLine and OrangeLine.

An if statement for line changes,
saying if there endLine does not equal startLine,
then use indexOf('Parkstreet')
*/

const r = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'];



const stopsOnRedLine = (startStation, endStation) => {
  r.indexOf('endStation') - r.indexOf('startStation');
};

stopsOnRedLine('South Station', 'Kendall'); //got stuck trying to get this to work.




const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
