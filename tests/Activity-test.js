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
      "MinsActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 5,
      "date": "2019/06/16",
      "numSteps": 4294,
      "MinsActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 5,
      "date": "2019/06/17",
      "numSteps": 7402,
      "MinsActive": 116,
      "flightsOfStairs": 33
    },
    {
      "userID": 5,
      "date": "2019/06/18",
      "numSteps": 3486,
      "MinsActive": 114,
      "flightsOfStairs": 32
    },
    {
      "userID": 5,
      "date": "2019/06/19",
      "numSteps": 11374,
      "MinsActive": 213,
      "flightsOfStairs": 13
    },
    {
      "userID": 5,
      "date": "2019/06/20",
      "numSteps": 14810,
      "MinsActive": 287,
      "flightsOfStairs": 18
    },
    {
      "userID": 5,
      "date": "2019/06/21",
      "numSteps": 2634,
      "MinsActive": 107,
      "flightsOfStairs": 5
    },
    {
      "userID": 5,
      "date": "2019/06/22",
      "numSteps": 10333,
      "MinsActive": 114,
      "flightsOfStairs": 31
    }, {
      "userID": 8,
      "date": "2019/06/15",
      "numSteps": 100,
      "MinsActive": 15,
      "flightsOfStairs": 2
    },
    {
      "userID": 8,
      "date": "2019/06/16",
      "numSteps": 1202,
      "MinsActive": 43,
      "flightsOfStairs": 4
    },
    {
      "userID": 8,
      "date": "2019/06/17",
      "numSteps": 1234,
      "MinsActive": 32,
      "flightsOfStairs": 45
    },
    {
      "userID": 8,
      "date": "2019/06/18",
      "numSteps": 432,
      "MinsActive": 33,
      "flightsOfStairs": 12
    },
    {
      "userID": 8,
      "date": "2019/06/19",
      "numSteps": 234,
      "MinsActive": 12,
      "flightsOfStairs": 3
    },
    {
      "userID": 8,
      "date": "2019/06/20",
      "numSteps": 304,
      "MinsActive": 90,
      "flightsOfStairs": 2
    },
    {
      "userID": 8,
      "date": "2019/06/21",
      "numSteps": 321,
      "MinsActive": 23,
      "flightsOfStairs": 6
    },
    {
      "userID": 8,
      "date": "2019/06/22",
      "numSteps": 344,
      "MinsActive": 21,
      "flightsOfStairs": 3
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
    expect(activity.returnMilesWalkedOnADate(8,"2019/06/21")).to.equal(.17);
    expect(activity.returnMilesWalkedOnADate(5,"2019/06/20")).to.equal(8.7);
    expect(activity.returnMilesWalkedOnADate(8,"2019/06/20")).to.equal(.16);
  });
  it('should return miles walked for on a specific day for a user', () => {
    expect(activity.returnMilesWalkedOnADate(1.1, "2019/06/19")).to.equal(null)
    expect(activity.returnMilesWalkedOnADate([], "2019/06/20")).to.equal(null)
    expect(activity.returnMilesWalkedOnADate(1, "2019/06/40")).to.equal(null)
    expect(activity.returnMilesWalkedOnADate(2, 3)).to.equal(null)
    expect(activity.returnMilesWalkedOnADate("2019/06/20", 2)).to.equal(null)
    expect(activity.returnMilesWalkedOnADate()).to.equal(null)
  });
  it('should return Mins active on a specific day for a user', () => {
    expect(activity.returnMinsActiveOnADate(5,"2019/06/21")).to.equal(107);
    expect(activity.returnMinsActiveOnADate(8,"2019/06/21")).to.equal(23);
    expect(activity.returnMinsActiveOnADate(5,"2019/06/20")).to.equal(287);
    expect(activity.returnMinsActiveOnADate(8,"2019/06/20")).to.equal(90);
  });
  it('should return null if passed incorrect arguments', () => {
    expect(activity.returnMinsActiveOnADate(1.1, "2019/06/19")).to.equal(null)
    expect(activity.returnMinsActiveOnADate([], "2019/06/20")).to.equal(null)
    expect(activity.returnMinsActiveOnADate(1, "2019/06/40")).to.equal(null)
    expect(activity.returnMinsActiveOnADate(2, 3)).to.equal(null)
    expect(activity.returnMinsActiveOnADate("2019/06/20", 2)).to.equal(null)
    expect(activity.returnMinsActiveOnADate()).to.equal(null)
  });
  it('should return average Mins active for 7 days for a user', () => {
    expect(activity.returnAvgMinsActiveForAWeek(5,"2019/06/22")).to.equal(155.57);
    expect(activity.returnAvgMinsActiveForAWeek(8,"2019/06/22")).to.equal(36.29);
  });
  it('should return null if passed incorrect arguments', () => {
    expect(activity.returnAvgMinsActiveForAWeek(1.1, "2019/06/19")).to.equal(null)
    expect(activity.returnAvgMinsActiveForAWeek([], "2019/06/20")).to.equal(null)
    expect(activity.returnAvgMinsActiveForAWeek(1, "2019/06/40")).to.equal(null)
    expect(activity.returnAvgMinsActiveForAWeek(2, 3)).to.equal(null)
    expect(activity.returnAvgMinsActiveForAWeek("2019/06/20", 2)).to.equal(null)
    expect(activity.returnAvgMinsActiveForAWeek()).to.equal(null)
  });
  it('should return if a user met their step goal', () => {
    expect(activity.returnIfUserMetStepGoal(5,"2019/06/22")).to.equal(true);
    expect(activity.returnIfUserMetStepGoal(8,"2019/06/22")).to.equal(false);
  });
  
  it('should return null if passed incorrect arguments', () => {
    expect(activity.returnIfUserMetStepGoal(1.1, "2019/06/19")).to.equal(null)
    expect(activity.returnIfUserMetStepGoal([], "2019/06/20")).to.equal(null)
    expect(activity.returnIfUserMetStepGoal(1, "2019/06/40")).to.equal(null)
    expect(activity.returnIfUserMetStepGoal(2, 3)).to.equal(null)
    expect(activity.returnIfUserMetStepGoal("2019/06/20", 2)).to.equal(null)
    expect(activity.returnIfUserMetStepGoal()).to.equal(null)
  });
  it('should find all days where they exceeded their step goal', () => {
    expect(activity.findAllDaysAboveStepGoal(5)).to.eql([ '2019/06/19', '2019/06/20', '2019/06/22' ])
    expect(activity.findAllDaysAboveStepGoal(8)).to.eql(null)
  })
  it('should accept only valid user id', () => {
    expect(activity.findAllDaysAboveStepGoal(1.1)).to.equal(null)
    expect(activity.findAllDaysAboveStepGoal([])).to.equal(null)
    expect(activity.findAllDaysAboveStepGoal(1)).to.equal(null)
    expect(activity.findAllDaysAboveStepGoal(2)).to.equal(null)
    expect(activity.findAllDaysAboveStepGoal("2019/06/20")).to.equal(null)
    expect(activity.findAllDaysAboveStepGoal()).to.equal(null)
  })
  it('should find all time stair climbing record', () => {
    expect(activity.returnStairClimbingTotal(5)).to.equal(158)
    expect(activity.returnStairClimbingTotal(8)).to.equal(77)
  })
  it('should accept only valid user id', () => {
    expect(activity.returnStairClimbingTotal(1.1)).to.equal(null)
    expect(activity.returnStairClimbingTotal([])).to.equal(null)
    expect(activity.returnStairClimbingTotal(1)).to.equal(null)
    expect(activity.returnStairClimbingTotal(2)).to.equal(null)
    expect(activity.returnStairClimbingTotal("2019/06/20")).to.equal(null)
    expect(activity.returnStairClimbingTotal()).to.equal(null)
  })
  it('should return average of all users for: stairs climbed, steps taken, minutes active for a specific date', () => {
    expect(activity.returnUsersAverageStairsStepsMins("2019/06/20")).to.eql(
      { 
        date: "2019/06/20",
        numSteps: 7557, 
        flightsOfStairs: 10, 
        MinsActive: 188.5 
    })
    expect(activity.returnUsersAverageStairsStepsMins("2019/06/22")).to.eql(
      { 
        date: "2019/06/22",
        numSteps: 5338.5, 
        flightsOfStairs: 17, 
        MinsActive: 67.5 
    })
    expect(activity.returnUsersAverageStairsStepsMins("2019/06/15")).to.eql(
      { 
        date: "2019/06/15",
        numSteps: 1838.5, 
        flightsOfStairs: 9, 
        MinsActive: 77.5 
    })
  })
  it('should accept only valid date', () => {
    expect(activity.returnUsersAverageStairsStepsMins(1.1)).to.equal(null)
    expect(activity.returnUsersAverageStairsStepsMins([])).to.equal(null)
    expect(activity.returnUsersAverageStairsStepsMins(1)).to.equal(null)
    expect(activity.returnUsersAverageStairsStepsMins(2)).to.equal(null)
    expect(activity.returnUsersAverageStairsStepsMins()).to.equal(null)
  })
  it('should calculate total feet climbed for all time', () => {
    expect(activity.returnTotalFeetClimbed(5)).to.equal(1896)
    expect(activity.returnTotalFeetClimbed(8)).to.equal(924)
  })
  it('should accept only valid user id', () => {
    expect(activity.returnTotalFeetClimbed(1.1)).to.equal(null)
    expect(activity.returnTotalFeetClimbed([])).to.equal(null)
    expect(activity.returnTotalFeetClimbed(1)).to.equal(null)
    expect(activity.returnTotalFeetClimbed(2)).to.equal(null)
    expect(activity.returnTotalFeetClimbed("2019/06/20")).to.equal(null)
    expect(activity.returnTotalFeetClimbed()).to.equal(null)
  })
})
