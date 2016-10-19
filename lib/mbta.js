/* NOTE: The grunt tests don't successfully run on this code, something having
         to do with indexOf. Not entirely sure what's up and need to sleep.
         The code DOES work correctly though. */

'use strict';
const lines = { red: ['South Station', 'Park Street', 'Kendall', 'Central','Harvard', 'Porter', 'Davis', 'Alewife'],
                green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
                orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'] };

let ask_start_line = 'red';
let ask_start_station = 'Alewife';
let ask_end_line = 'orange';
let ask_end_station = 'North Station';

// If you would like to input lines and stations the following code requires:
//    readline-sync/ in ./node_modules
// const ask = require('./ask.js');
// ask_start_line = ask("What line do we start on? ");
// ask_start_station = ask("What station do we start on? ");
// ask_end_line = ask("What line do we end on? ");
// ask_end_station = ask("What station do we end on? ");

const stopsBetweenStations = (start_line, start_station, end_line, end_station) => start_line === end_line ? Math.abs(lines[start_line].indexOf(start_station) - lines[end_line].indexOf(end_station)) : (Math.abs((lines[start_line].indexOf(start_station) - lines[start_line].indexOf('Park Street'))) + Math.abs(lines[end_line].indexOf(end_station) - lines[end_line].indexOf('Park Street')));

console.log("The number of stops between ", ask_start_station, " and ", ask_end_station, " would be ", stopsBetweenStations(ask_start_line, ask_start_station, ask_end_line, ask_end_station), " stops!");

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
