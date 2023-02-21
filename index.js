// Code your solution in this file!
function distanceFromHqInBlocks(street){
    const distanceInBlocks = Math.abs(street - 42)
    return distanceInBlocks
}

function distanceFromHqInFeet(street){
    const distanceInFeet = distanceFromHqInBlocks(street)*264
    return distanceInFeet
}

function distanceTravelledInFeet(start,destination){
    const blocks = Math.abs(destination - start)
    return blocks*264
}

function calculatesFarePrice(start,destination){
    const feetTravelled = distanceTravelledInFeet(start,destination)
    if (feetTravelled>0 && feetTravelled<= 400){
        let fare = 0;
        return fare
    }
    if (feetTravelled > 2500) {
        return "cannot travel that far"}
    if (feetTravelled <= 2000 &&  feetTravelled > 400){
        let fare = (feetTravelled-400)*.02
        return fare
    }
    if ( feetTravelled <2500 && feetTravelled > 400){
      let fare = 25
      return fare
    }
  
}