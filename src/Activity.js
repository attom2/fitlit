
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
  returnMinutesActiveOnADate(id, date) {
    let userInfo = this.data.find(user => user.userID === id && user.date === date);
    return userInfo ? userInfo.minutesActive : null;
  }

}

if(typeof module !== 'undefined') {
  module.exports = Activity;
}
