const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep.js')
let sleepData;
let sleep;

describe('Sleep', () => {
  beforeEach(() => {
    sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 9.9,
        "sleepQuality" : 3.3
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 5.7,
        "sleepQuality" : 2.1
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 8,
        "sleepQuality" : 4.1
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 6.6,
        "sleepQuality" : 3.6
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 9.8,
        "sleepQuality" : 4.5
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 3.3,
        "sleepQuality" : 1
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 7.7,
        "sleepQuality" : 2.5
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "hoursSlept": 5.8,
        "sleepQuality" : 3.2
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 6.5,
        "sleepQuality" : 3.1
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "hoursSlept": 1.2,
        "sleepQuality" : 0.3
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 7.7,
        "sleepQuality" : 4.5
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "hoursSlept": 5.3,
        "sleepQuality" : 5
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "hoursSlept": 8,
        "sleepQuality" : 4.3
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "hoursSlept": 5.4,
        "sleepQuality" : 3.9
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "hoursSlept": 6.3,
        "sleepQuality" : 4.3
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "hoursSlept": 8.1,
        "sleepQuality" : 5.3
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 7.4,
        "sleepQuality" : 5
      }
    ]
    sleep = new Sleep(sleepData);
  });
  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });
  it('should hold all sleep data', () => {
    expect(sleep.data).to.eql(sleepData);
  });
  it('should return null if not passed any data', () => {
    const sadSleep = new Sleep();
    expect(sadSleep.data).to.eql(null);
  });
  it('should return null if pass data other than an array of obj', () => {
    let sadSleep2 = new Sleep('garbage');
    let sadSleep3 = new Sleep(324);
    expect(sadSleep2.data).to.eql(null);
    expect(sadSleep3.data).to.eql(null);
  });
});