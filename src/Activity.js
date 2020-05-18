
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

}

if(typeof module !== 'undefined') {
  module.exports = Activity;
}
