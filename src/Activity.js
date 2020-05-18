
class Activity {
  constructor(data, userData) {
    typeof data === 'object'? this.data = data : this.data = null;
    typeof userData === 'object'? this.userData = userData : this.userData = null;
  }

  returnMilesWalkedOnADate(id, date) {
    let userInfo = this.data.filter(user => user.userID === id && user.date === date);
    let strideLength = this.userData.find(user => user.id === id).strideLength
    let milesWalked = (userInfo[0].numSteps * strideLength)/5280;
    return Math.round(milesWalked * 100)/100;
  }
}

if(typeof module !== 'undefined') {
  module.exports = Activity;
}
