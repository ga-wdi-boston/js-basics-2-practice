'use strict'

const orangeLine = [
 {stopName: 'north station', stopsFromPark: 2},
 {stopName: 'hay market', stopsFromPark: 1},
 {stopName: 'park street', stopsFromPark: 0},
 {stopName: 'state', stopsFromPark: 1},
 {stopName: 'downtown crossing', stopsFromPark: 2},
 {stopName: 'china town', stopsFromPark: 3},
 {stopName: 'back bay', stopsFromPark: 4},
 {stopName: 'forest hills', stopsFromPark: 5}
]
const greenLine = [
 {stopName: 'gov center', stopsFromPark: 1},
 {stopName: 'park street', stopsFromPark: 0},
 {stopName: 'boylston', stopsFromPark: 1},
 {stopName: 'arlington', stopsFromPark: 2},
 {stopName: 'copley', stopsFromPark: 3},
 {stopName: 'hynes', stopsFromPark: 4},
 {stopName: 'kenmore', stopsFromPark: 5}
]
const redLine = [
 {stopName: 'south station', stopsFromPark: 1},
 {stopName: 'park street', stopsFromPark: 0},
 {stopName: 'kendall', stopsFromPark: 1},
 {stopName: 'central', stopsFromPark: 2},
 {stopName: 'harvard', stopsFromPark: 3},
 {stopName: 'porter', stopsFromPark: 4},
 {stopName: 'davis', stopsFromPark: 5},
 {stopName: 'alewife', stopsFromPark: 6}
]

function calcNumStops (startingLine, startingStop, endingLine, endingStop) {
  let a = startingStop
  let b = endingStop
  const startNum = startingLine.indexOf(a)
  const endNum = endingLine.indexOf(b)
  if (startingLine !== endingLine) {
    return startingStop.stopsFromPark + endingStop.stopsFromPark
  } else if (startingLine === endingLine) {
    if (startNum < endNum) {
      return endNum - startNum
    } else if (startNum > endNum) {
        return startNum - endNum
    } else if (startNum === endNum) {
        return 0
    }
  }
}

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
