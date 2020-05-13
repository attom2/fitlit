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
module.exports = User;
/*
- A User represents a single user
- It should have a parameter to take in a
  userData object
- Each user holds on to the user properties
  from the data file
- Should have a method to:
- - Return a user’s first name only
*/
