'use strict'

// Code here.
//Crete the objecs and arrays
let mbta = {}

mbta.greenLine = ['Government Center', 'Haymarket', 'Park Street', 'Boylston', 'Arlington',
      'Copley', 'Hynes', 'Kenmore']
mbta.redLine = ['South Station', 'Park Street', 'Kendall', 'Central',
      'Harvard', 'Porter', 'Davis', 'Alewife']
mbta.orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State',
      'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
//test MBTA value
mbta

const testAssumeEqualLines = function(startLine, startStation, endLine, endStation){

  let strtNum = mbta[startLine].indexOf(startStation)

  let endNum = mbta[endLine].indexOf(endStation)

      console.log(strtNum)
        console.log(endNum)
              console.log(startLine)
                console.log(startStation)
                      console.log(endLine)
                        console.log(endStation)
  // for(i = strtNum; i === endNum; i++){
  //   tripArray = []
  //   tripArray.push(mbta[startLine].[i]);
  }

  console.log(tripArray)

}

testAssumeEqualLines('greenLine','Arlington' ,'greenLine' , 'Boylston')
testAssumeEqualLines('redLine','Davis' ,'redLine' , 'Alewife')
testAssumeEqualLines('orangeLine','Chinatown' ,'orangeLine' , 'State')


mbta['greenLine'].indexOf('Park Street')

const stopsBetweenStations = function(startLine, startStation, endLine, endStation){
  if(mbta[startLine] === 'redLine'|| mbta[startLine] === 'redLine'){
    let startToPark = Math.abs(mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Park Street'))
    let parkToEnd =  Math.abs(mbta[startLine].indexOf('Park Street') - mbta[startLine].indexOf(endStation))
    let numberOfStops = startToPark + parkToEnd
    console.log('Start to Patk ' + startToPark)
    console.log('End to Park ' + parkToEnd)
    console.log('Number of stops ' + numberOfStops)
    finalStops = numberOfStops
  } else if (mbta[startLine] === mbta[endLine]) {
    testAssumeEqualStations(startLine, startStation, endLine, endStation)
  } else {
    let startToHay = Math.abs(mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Haymarket'))
    let HayToEnd =  Math.abs(mbta[startLine].indexOf('Haymarket') - mbta[startLine].indexOf(endStation))
    let numberOfStops = startToHay + HayToEnd
    console.log('Start to Hay ' + startToHay)
    console.log('End to Hay ' + HayToEnd)
    console.log('Number of Hay ' + numberOfStops)
    finalStops = numberOfStops
  }
}

stopsBetweenStations('greenLine','greenLine' , 'Arlington' ,'Boylston')
finalStops
stopsBetweenStations('greenLine','redLine' , 'Arlington' ,'Kendall')
finalStops
stopsBetweenStations('greenLine','orangeLine' , 'Arlington' ,'Forest Hills')
finalStops

module.exports = {
  stopsBetweenStations,
  stretch: false
}

//Solution with no if/else to test if state/end line are teh same:

/*
const stopsBetweenStations = function(startLine, endLine, startStation, endStation) {
  let startToPark = Math.abs(mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Park Street'))
  let parkToEnd =  Math.abs(mbta[startLine].indexOf('Park Street') - mbta[startLine].indexOf(endStation))
  let numberOfStops = startToPark + parkToEnd
  console.log('Start to Patk ' + startToPark)
  console.log('End to Park ' + parkToEnd)
  console.log('Number of stops ' + numberOfStops)
}
stopsBetweenStations('greenLine','greenLine' , 'Arlington' ,'Boylston')
stopsBetweenStations('greenLine','redLine' , 'Arlington' ,'Kendall')
//Solution that relied on an if else to test start/end line.  This is what I
// intially pseduo coded but then relixed the ELSE functiond would work
// for the IF scenerio as well
/*
const stopsBetweenStations = function(startLine, endLine, startStation, endStation) {
  if(startLine === endLine){
    let beginingOfTrip = mbta[startLine].indexOf(startStation)
    let endOfTrip = mbta[endLine].indexOf(endStation)
    let numberOfStops = Math.abs(endOfTrip - beginingOfTrip)
    console.log('Number of stops ' + numberOfStops)
  } else{
    let startToPark = Math.abs(mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Park Street'))
    let parkToEnd =  Math.abs(mbta[startLine].indexOf('Park Street') - mbta[startLine].indexOf(endStation))
    let numberOfStops = startToPark + parkToEnd
    console.log('Start to Patk ' + startToPark)
    console.log('End to Park ' + parkToEnd)
    console.log('Number of stops ' + numberOfStops)
  }
}
stopsBetweenStations('greenLine','greenLine' , 'Arlington' ,'Boylston')
stopsBetweenStations('greenLine','redLine' , 'Arlington' ,'Kendall')

/*
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
//if statment to test if starting and ending lines are the same//

//BAD Solution using crappy control flow logic... tossed it out

//This function will be used to find the SWITCH station. Key to calculating
//total stops withthe addition of Haymarket.  I think there must be a better way
// to do this but... if it works. Bonus points scored!
//first I need to creat a new variable called switchStation
//the most important TRUTH test is if the function wrorks traveling from
let switchStation = ''

const isSwitchHayMarket = function(startLine, startStation, endLine, endStation){
  if (mbta[startLine] === 'greenLine'){
    if (mbta[startLine].indexOf(startStation) > 3){
      console.log('Greater than three')
      let switchStation = 'Park Street'
    } else {
      console.log('Greater than three')
      let switchStation = 'Haymarket'
  }
  }

}
const findSwitchStation= function(startLine, startStation, endLine, endStation){
  if(mbta[startLine] === 'redLine'|| mbta[startLine] === 'redLine'){
    switchStation = 'Park Street'
  } else if (mbta[startLine] === mbta[endLine]) {
    switchStation = 'Park Street'
  } else if (mbta[startLine] === 'greenLine'){
      mbta[startLine].indexOf(startStation)
  }
}

}
module.exports = {
  stopsBetweenStations,
  stretch: false
}
