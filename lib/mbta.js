'use strict';

// Code here.

var stopsBetweenStations = function stopsBetweenStations(startLine, startStation, endLine, endStation) {

    let subway = {"Red": ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
                "Green": ["Haymarket", "Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
                "Orange": ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
            };
    let start = subway[startLine].indexOf(startStation);
    let end = subway[endLine].indexOf(endStation);
    let parkstart = subway[startLine].indexOf("Park Street");
    let parkend = subway[endLine].indexOf("Park Street");
    let haymarketStart = subway[startLine].indexOf("Haymarket");
    let haymarketEnd = subway[endLine].indexOf("Haymarket");

    if (((startLine === "Green") && (endLine === "Orange"))
        || ((startLine === "Orange") && (endLine === "Green"))) {
        let totalParkStop = Math.abs(start - parkstart) + Math.abs(end - parkend);
        let totalHayStop = Math.abs(start - haymarketStart) + Math.abs(end - haymarketEnd);
        console.log("total park stop: " + totalParkStop);
        console.log("total haymarket stop: " + totalHayStop);

        if (totalParkStop < totalHayStop){
            console.log(totalParkStop);
            return totalParkStop;
        }
        else {
            console.log(totalHayStop);
            return totalHayStop;
        }
    }
    else if (subway[startLine] !== subway[endLine]){
        let totalStop = Math.abs(start - parkstart) + Math.abs(end - parkend);
        console.log("different line: " + totalStop);
        return totalStop;
    }

    else {
        let totalStop = Math.abs(start-end);
        console.log("same line: " + totalStop);
        return totalStop;
    }

};



module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false,
};
