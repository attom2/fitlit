
class User {
  constructor(userDetails) {
    if(typeof userDetails === 'object'){
      this.id = userDetails.id ;
      this.name = userDetails.name ;
      this.address = userDetails.address ;
      this.email = userDetails.email ;
      this.strideLength = userDetails.strideLength ;
      this.dailyStepGoal = userDetails.dailyStepGoal ;
      this.friends = userDetails.friends ;
    } else {
    this.id = null;
    }
  }
  returnFirstName() {
    return this.name.split(" ")[0]
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
