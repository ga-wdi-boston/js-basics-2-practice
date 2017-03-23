//Conor Jennings - MBTA Assignment
let redStops = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']
let greenStops = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']
let orangeStops = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
let totalNumberStops


const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {

	if (startLine === endLine) {
		changeTrains = false
	} else {
		changeTrains = true
	}


	//Didn't change trains:
	if (changeTrains === false)
	{

		if (startLine === 'red') {
			let beginStopNum = redStops.indexOf(startStation)
			let endStopNum = redStops.indexOf(endStation)
			totalNumberStops = Math.abs(beginStopNum - endStopNum) // use math abs function to account for trains going in different directions causing a neg value.
		}

		if (startLine === 'green') {
			let beginStopNum = greenStops.indexOf(startStation)
			let endStopNum = greenStops.indexOf(endStation)
			totalNumberStops = Math.abs(beginStopNum - endStopNum )
		}

			if (startLine === 'orange') {
			let beginStopNum = orangeStops.indexOf(startStation)
			let endStopNum = orangeStops.indexOf(endStation)
			totalNumberStops = Math.abs(beginStopNum - endStopNum)
		}

	}//change trains false


	//Changed train at park street:
	if (changeTrains === true)
	{

		//Start on a red line and change trains at park to either green or orange:
		if (startLine === 'red') {
			let beginStopNum = redStops.indexOf(startStation)
			let endStopNum = redStops.indexOf('Park Street') // always change at park
			let numberOfRedStops = Math.abs(beginStopNum - endStopNum )
			//console.log('numberOfRedStops:' + numberOfRedStops)

			if (endLine === 'green') {
				let beginStopNum = greenStops.indexOf('Park Street') // you begin second leg of journey at park street
				let endStopNum = greenStops.indexOf(endStation)
				let numberOfGreenStops =  Math.abs(endStopNum - beginStopNum) //reverse the order since number of train stops going from small index to large index.
				//console.log('numberOfGreenStops:' + numberOfGreenStops)
				totalNumberStops = numberOfRedStops + numberOfGreenStops
			} //end green

			if (endLine === 'orange') {
				let beginStopNum = orangeStops.indexOf('Park Street') // you begin second leg of journey at park street
				let endStopNum =  orangeStops.indexOf(endStation)
				let numberOfOrangeStops =  Math.abs(endStopNum - beginStopNum) //reverse the order since number of train stops going from small index to large index.
				//console.log('numberOfOrangeStops:' + numberOfOrangeStops)
				totalNumberStops =numberOfRedStops + numberOfOrangeStops
			} //end orange

		} // end of red line with train change


		//Start on a green line and change trains at park to orange or red:
		if (startLine === 'green') {
			let beginStopNum = greenStops.indexOf(startStation)
			let endStopNum = greenStops.indexOf('Park Street') // always change at park
			let numberOfGreenStops = beginStopNum - endStopNum
			//console.log('numberOfGreenStops:' + numberOfGreenStops)

			if (endLine === 'red') {
				let beginStopNum = redStops.indexOf('Park Street')
				let endStopNum = redStops.indexOf(endStation)
				let numberOfRedStops =  Math.abs(endStopNum - beginStopNum) //reverse the order since number of train stops going from small index to large index.
				//console.log('numberOfRedStops:' + numberOfRedStops)
				totalNumberStops = numberOfGreenStops + numberOfRedStops
			} //end green

			if (endLine === 'orange') {
				let beginStopNum = orangeStops.indexOf('Park Street')
				let endStopNum = orangeStops.indexOf(endStation)
				let numberOfOrangeStops =  Math.abs(endStopNum - beginStopNum )//reverse the order since number of train stops going from small index to large index.
				//console.log('numberOfOrangeStops:' + numberOfOrangeStops)
				totalNumberStops = numberOfGreenStops + numberOfOrangeStops
			} //end orange

		} // end of green line with train change


		//Start on a orange line and change trains at park to green or red:
		if (startLine === 'orange') {
			let beginStopNum = orangeStops.indexOf(startStation)
			let endStopNum = orangeStops.indexOf('Park Street') // always change at park
			let numberOfOrangeStops = beginStopNum - endStopNum

			if (endLine === 'red') {
				let beginStopNum = redStops.indexOf('Park Street')
				let endStopNum = redStops.indexOf(endStation)
				let numberOfRedStops =  Math.abs(endStopNum - beginStopNum) //reverse the order since number of train stops going from small index to large index.
				//console.log('numberOfRedStops:' + numberOfRedStops)
				totalNumberStops = numberOfOrangeStops + numberOfRedStops
			} //end green

			if (endLine === 'green') {
				let beginStopNum = greenStops.indexOf('Park Street')
				let endStopNum = greenStops.indexOf(endStation)
				let numberOfGreenStops =  Math.abs(endStopNum - beginStopNum )//reverse the order since number of train stops going from small index to large index.
				//console.log('numberOfOrangeStops:' + numberOfOrangeStops)
				totalNumberStops = numberOfOrangeStops + numberOfGreenStops
			} //end orange
		}

	}//change trains true

return totalNumberStops

} //end stopsBetweenStations function



//Call function for testing:
//SAME LINE:
//let numberOfStops = stopsBetweenStations('red', 'Porter', 'orange', 'Haymarket')
//let numberOfStops = stopsBetweenStations('green', 'Copley', 'green', 'Kenmore')
//let numberOfStops = stopsBetweenStations('orange', 'Haymarket', 'orange', 'Forest Hills' )

//DIFFERENT LINE:
//let numberOfStops = stopsBetweenStations('red', 'Porter', 'green', 'Kenmore')
//let numberOfStops = stopsBetweenStations('green', 'Copley', 'orange', 'Forest Hills')
//let numberOfStops = stopsBetweenStations('red', 'Porter', 'orange', 'North Station' )
//let numberOfStops = stopsBetweenStations('orange', 'Downtown Crossing', 'red', 'Davis' )
//console.log ('number of stops between stations: ' + totalNumberStops)
