'use strict';

const redline = ['South Station', 'Park Street', 'Kendall', 'Central',
'Harvard', 'Porter', 'Davis', 'Alewife'];

redline.indexOf('South Station', 'Park Street', 'Kendall', 'Central',
'Harvard', 'Porter', 'Davis', 'Alewife' );

console.log(redline.indexOf('South Station', 'Park Street', 'Kendall',
'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'));


const greenline = ['Government Center', 'Park Street', 'Boylston',
'Arlington', 'Copley', 'Hynes', 'Kenmore'];

greenline.indexOf('Government Center', 'Park Street', 'Boylston',
'Arlington', 'Copley', 'Hynes', 'Kenmore');

console.log(greenline.indexOf('Government Center', 'Park Street',
'Boylson', 'Arlington', 'Copley', 'Hynes', 'Kenmore'));


const orangeline = ['North Station', 'Haymarket', 'Park Street', 'State',
'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];

orangeline.indexOf('North Station', 'Haymarket', 'Park Street', 'State',
'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills');

console.log(orangeline.indexOf('North Station', 'Haymarket', 'Park Street',
'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'));




module.exports = {
  redline,
  greenline,
  orangeline,
};
