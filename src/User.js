class User {
  constructor(userDetails) {
    this.id = null || userDetails.id ;
    this.name = null || userDetails.name ;
    this.address = null || userDetails.address ;
    this.email = null || userDetails.email ;
    this.strideLength = null || userDetails.strideLength ;
    this.dailyStepGoal = null || userDetails.dailyStepGoal ;
    this.friends = null || userDetails.friends ;
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