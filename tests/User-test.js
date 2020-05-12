const chai = require('chai');
const expect = chai.expect;
const activityData = require('../data/activity.js');
const User = require('../src/User');
let userData;
let user1;

describe('User', () => {
  beforeEach(() => {
    userData = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }]
      user1 = new User(userData[0]);
  })
  it('should be a function', () => {
    // Setup
    // Execution
    // Assertion
    expect(User).to.be.a('function');
  });

  it('should take in userData object', () => {
    expect(user1).to.eql(userData[0])
  });
  it('should equal null if not passed any data', () => {
    let sadUser = new User();
    console.log(sadUser)
    expect(sadUser.id).to.equal(null);
    expect(sadUser.name).to.equal(null);
    expect(sadUser.address).to.equal(null);
    expect(sadUser.email).to.equal(null);
    expect(sadUser.strideLength).to.equal(null);
    expect(sadUser.dailyStepGoal).to.equal(null);
    expect(sadUser.friends).to.equal(null);
  });
  // it('should', () => {});
  // it('should', () => {});
  
});