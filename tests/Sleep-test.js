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
        "sleepQuality" : 10
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
        "sleepQuality" : 7.1
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
        "sleepQuality" : 20
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
  it('should calculate average hours slept per day for given user', () => {
    expect(sleep.averageHoursSleptPerDay(1)).to.equal(7);
    expect(sleep.averageHoursSleptPerDay(2)).to.equal(5);
  })
  it('should return null if not passed in user id', () => {
    expect(sleep.averageHoursSleptPerDay()).to.equal(null);
    expect(sleep.averageHoursSleptPerDay('trash')).to.equal(null);
    expect(sleep.averageHoursSleptPerDay(678)).to.equal(null);
    expect(sleep.averageHoursSleptPerDay({})).to.equal(null);
    expect(sleep.averageHoursSleptPerDay(2.1)).to.equal(null);
  })
  it('should calculate average sleep quality per day for given user', () => {
    expect(sleep.averageSleepQualityPerDay(1)).to.equal(6);
    expect(sleep.averageSleepQualityPerDay(2)).to.equal(3);
  });
  it('should return null if not passed in user id', () => {
    expect(sleep.averageSleepQualityPerDay()).to.equal(null);
    expect(sleep.averageSleepQualityPerDay('trash')).to.equal(null);
    expect(sleep.averageSleepQualityPerDay(678)).to.equal(null);
    expect(sleep.averageSleepQualityPerDay({})).to.equal(null);
    expect(sleep.averageSleepQualityPerDay(2.1)).to.equal(null);
  })
  it('should return hours slept on a given day', () => {
    expect(sleep.hoursSleptOnADate(1, "2019/06/19")).to.equal(6.5)
    expect(sleep.hoursSleptOnADate(1, "2019/06/20")).to.equal(7.7)
    expect(sleep.hoursSleptOnADate(1, "2019/06/21")).to.equal(8)
    expect(sleep.hoursSleptOnADate(2, "2019/06/19")).to.equal(1.2)
    expect(sleep.hoursSleptOnADate(2, "2019/06/20")).to.equal(5.3)
    expect(sleep.hoursSleptOnADate(2, "2019/06/21")).to.equal(5.4)
  })
  it('should only accept valid user id and date', () => {
    expect(sleep.hoursSleptOnADate(1.1, "2019/06/19")).to.equal(null)
    expect(sleep.hoursSleptOnADate([], "2019/06/20")).to.equal(null)
    expect(sleep.hoursSleptOnADate(1, "2019/06/40")).to.equal(null)
    expect(sleep.hoursSleptOnADate(2, 3)).to.equal(null)
    expect(sleep.hoursSleptOnADate("2019/06/20", 2)).to.equal(null)
    expect(sleep.hoursSleptOnADate()).to.equal(null)
  })
  it('should return hours slept on a given day', () => {
    expect(sleep.sleepQualityOnADate(1, "2019/06/15")).to.equal(10)
    expect(sleep.sleepQualityOnADate(1, "2019/06/16")).to.equal(7.1)
    expect(sleep.sleepQualityOnADate(1, "2019/06/17")).to.equal(20)
    expect(sleep.sleepQualityOnADate(2, "2019/06/19")).to.equal(0.3)
    expect(sleep.sleepQualityOnADate(2, "2019/06/20")).to.equal(5)
    expect(sleep.sleepQualityOnADate(2, "2019/06/21")).to.equal(3.9)
  })
  it('should only accept valid user id and date', () => {
    expect(sleep.sleepQualityOnADate(1.1, "2019/06/19")).to.equal(null)
    expect(sleep.sleepQualityOnADate([], "2019/06/20")).to.equal(null)
    expect(sleep.sleepQualityOnADate(1, "2019/06/40")).to.equal(null)
    expect(sleep.sleepQualityOnADate(2, 3)).to.equal(null)
    expect(sleep.sleepQualityOnADate("2019/06/20", 2)).to.equal(null)
    expect(sleep.sleepQualityOnADate()).to.equal(null)
  })
});