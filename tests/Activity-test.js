const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity.js')
const User = require('../src/User.js')
let activityData;
let userData;
let activity;
let user5;
let user8
describe('Activity', () => {
  beforeEach(() => {
    activityData = [{
      "userID": 5,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 5,
      "date": "2019/06/16",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 5,
      "date": "2019/06/17",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    },
    {
      "userID": 5,
      "date": "2019/06/18",
      "numSteps": 3486,
      "minutesActive": 114,
      "flightsOfStairs": 32
    },
    {
      "userID": 5,
      "date": "2019/06/19",
      "numSteps": 11374,
      "minutesActive": 213,
      "flightsOfStairs": 13
    },
    {
      "userID": 5,
      "date": "2019/06/20",
      "numSteps": 14810,
      "minutesActive": 287,
      "flightsOfStairs": 18
    },
    {
      "userID": 5,
      "date": "2019/06/21",
      "numSteps": 2634,
      "minutesActive": 107,
      "flightsOfStairs": 5
    },
    {
      "userID": 5,
      "date": "2019/06/22",
      "numSteps": 10333,
      "minutesActive": 114,
      "flightsOfStairs": 31
    }, {
      "userID": 8,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 8,
      "date": "2019/06/16",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 8,
      "date": "2019/06/17",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    },
    {
      "userID": 8,
      "date": "2019/06/18",
      "numSteps": 3486,
      "minutesActive": 114,
      "flightsOfStairs": 32
    },
    {
      "userID": 8,
      "date": "2019/06/19",
      "numSteps": 11374,
      "minutesActive": 213,
      "flightsOfStairs": 13
    },
    {
      "userID": 8,
      "date": "2019/06/20",
      "numSteps": 14810,
      "minutesActive": 287,
      "flightsOfStairs": 18
    },
    {
      "userID": 8,
      "date": "2019/06/21",
      "numSteps": 2634,
      "minutesActive": 107,
      "flightsOfStairs": 5
    },
    {
      "userID": 8,
      "date": "2019/06/22",
      "numSteps": 10333,
      "minutesActive": 114,
      "flightsOfStairs": 31
    },
    ];
    userData = [
      {
        "id": 5,
        "name": "Erick Schaden",
        "address": "514 Mayert Walk, Jordaneside SC 55023-6523",
        "email": "Vanessa_Gerhold@gmail.com",
        "strideLength": 3.1,
        "dailyStepGoal": 8000,
        "friends": [
          13,
          44,
          49,
          33,
          10
        ]
      },{
        "id": 8,
        "name": "Laney Abshire",
        "address": "86416 Koch Inlet, North Kaciefurt MA 80635",
        "email": "Janice_Nitzsche2@yahoo.com",
        "strideLength": 2.8,
        "dailyStepGoal": 2000,
        "friends": [
          11,
          41,
          23,
          49
        ]
      },

    ];
   
    user5 = new User(userData[0])
    user8 = new User(userData[1])
    activity = new Activity(activityData, userData, )
  });
  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });
  it('should store activity data', () => {
    expect(activity.data).to.eql(activityData);
  });
  it('should store user data', () => {
    expect(activity.userData).to.eql(userData);
  });
  it('should return null if pass data other than an array of obj', () => {
    let sadActivity2 = new Activity('garbage');
    let sadActivity3 = new Activity(324);
    expect(sadActivity2.data).to.eql(null);
    expect(sadActivity3.data).to.eql(null);
  });
  it('should return null if pass user data other than an array of obj', () => {
    let sadActivity2 = new Activity('garbage');
    let sadActivity3 = new Activity(324);
    expect(sadActivity2.userData).to.eql(null);
    expect(sadActivity3.userData).to.eql(null);
  });
  it('should return miles walked for on a specific day for a user', () => {
    expect(activity.returnMilesWalkedOnADate(5,"2019/06/21")).to.equal(1.55);
    expect(activity.returnMilesWalkedOnADate(8,"2019/06/21")).to.equal(1.4);
    expect(activity.returnMilesWalkedOnADate(5,"2019/06/20")).to.equal(8.7);
    expect(activity.returnMilesWalkedOnADate(8,"2019/06/20")).to.equal(7.85);
  });
})
