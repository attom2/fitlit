class Activity {
  constructor(data) {
    typeof data === 'object'? this.data = data : this.data = null;
  }

  returnMilesWalkedOnADate(id, date) {
    let userInfo = this.data.filter(user => user.id === id && user.date === date);
    let milesWalked = userInfo.numSteps 
    
  }
}
/*
For a specific day (specified by a date), return the miles a user 
has walked based on their number of steps (use their strideLength 
to help calculate this)
*/

if(typeof module !== 'undefined') {
  module.exports = Activity;
}
