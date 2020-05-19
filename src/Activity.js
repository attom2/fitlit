
class Activity {
  constructor(data, userData) {
    typeof data === 'object'? this.data = data : this.data = null;
    typeof userData === 'object'? this.userData = userData : this.userData = null;
  }

  returnMilesWalkedOnADate(id, date) {
    let userInfo = this.data.find(user => user.userID === id && user.date === date);
    if(!userInfo){
      return null;
    }
    let strideLength = this.userData.find(user => user.id === id).strideLength
    let milesWalked = (userInfo.numSteps * strideLength)/5280;
    return Math.round(milesWalked * 100)/100;
  }
  returnMinsActiveOnADate(id, date) {
    let userInfo = this.data.find(user => user.userID === id && user.date === date);
    return userInfo ? userInfo.MinsActive : null;
  }
  returnAvgMinsActiveForAWeek(id, date) {
    let userInfo = this.data.filter(user => user.userID === id)
    let dates = userInfo.map(user => user.date);
    let index = dates.indexOf(date) + 1;
    let weekMinsActive = [];
    if(index){
      for(let i = 7; i > 0; i--){
        weekMinsActive.push(userInfo[index - i].MinsActive);
      }
      let weekMinsActiveTotal = weekMinsActive.reduce((acc, currentValue) => {
        return acc + currentValue;
      }, 0);
      return Math.round(weekMinsActiveTotal / 7 * 100) / 100;
    }
    return null;
  }
  returnIfUserMetStepGoal(id, date) {
    let userInfo = this.data.find(user => user.userID === id && user.date === date);
    if(!userInfo){
      return null;
    }
    let stepGoal = this.userData.find(user => user.id === id).dailyStepGoal
    return userInfo.numSteps >= stepGoal
  }
  findAllDaysAboveStepGoal(id) {
    let stepResult = [];
    // let stepGoal = this.userData.find(user => user.id === id).dailyStepGoal;
    let userInfo = this.data.filter(user => user.userID === id);
    userInfo.forEach(day => {
      let isMet = this.returnIfUserMetStepGoal(day.userID, day.date);
      if(isMet) {
        stepResult.push(day.date);
      }
    })
    return (stepResult[0]) ? stepResult : null ;
  }
  returnStairClimbingTotal(id) {
    let userInfo = this.data.filter(user => user.userID === id);
    let totalStairsClimbed = userInfo.reduce((acc, day) =>
    acc + day.flightsOfStairs, 0)
    return totalStairsClimbed > 0 ? totalStairsClimbed : null;
  }
  returnUsersAverageStairsStepsMins(date) {
    let dateInfo = this.data.filter(day => day.date === date);
    if(!dateInfo.length){
      return null;
    }
    let numStepsTemp =  0;
    let stairsClimbedTemp = 0;
    let minsActiveTemp = 0;
    let totals = dateInfo.reduce((acc, currentValue) => {
      numStepsTemp += currentValue.numSteps
      stairsClimbedTemp += currentValue.flightsOfStairs
      minsActiveTemp += currentValue.MinsActive
      acc.numSteps = numStepsTemp;
      acc.flightsOfStairs = stairsClimbedTemp;
      acc.MinsActive = minsActiveTemp;
      return acc
    }, {})
    totals.date = date
    totals.numSteps = Math.round((totals.numSteps/ this.userData.length) * 100) / 100;
    totals.flightsOfStairs = Math.round((totals.flightsOfStairs/ this.userData.length)  * 100) / 100;
    totals.MinsActive = Math.round((totals.MinsActive/ this.userData.length)  * 100) / 100;
    return totals;
  }
  returnTotalFeetClimbed(id) {
    let userInfo = this.data.filter(user => user.userID === id);
    let totalFlights = userInfo.reduce((acc, currentValue) => acc + currentValue.flightsOfStairs, 0);
    return totalFlights * 12 || null;
  }
  returnIncreasingStepDays(id) {
    let userInfo = this.data.filter(user => user.userID === id);
    // console.log(userInfo)
    let datesIncreasing = [];
    for (let i = 3; i < userInfo.length; i++){
      if(userInfo[i].numSteps > userInfo[i-1].numSteps &&
        userInfo[i].numSteps > userInfo[i-2].numSteps &&
        userInfo[i].numSteps > userInfo[i-3].numSteps) {
          datesIncreasing.push(userInfo[i].date)
        };
    }
    return datesIncreasing;
  }

}

if(typeof module !== 'undefined') {
  module.exports = Activity;
}
