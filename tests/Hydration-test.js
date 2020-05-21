const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration.js')
let hydrationData;
let hydration;

describe('Hydration', () => {
  beforeEach(() => {
    hydrationData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 75
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 47
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 85
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 42
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 87
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 34
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numOunces": 94
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 32
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "numOunces": 71
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 30
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numOunces": 91
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 38
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "numOunces": 90
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numOunces": 33
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "numOunces": 81
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numOunces": 94
      }
    ]
    hydration = new Hydration(hydrationData)
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should hold all hydration data', () => {
    expect(hydration.data).to.eql(hydrationData)
  });

  it('should return null of not passed any data', () => {
    const sadHydration = new Hydration();
    expect(sadHydration.data).to.equal(null);
  })

  it('should return null if passed data other than array of obj', () => {
    let sadHydration2 = new Hydration('garbage');
    let sadHydration3 = new Hydration(324);
    expect(sadHydration2.data).to.eql(null);
    expect(sadHydration3.data).to.eql(null);
  })

  it('should calculate average daily fluid consumed over all time', () => {
    expect(hydration.dailyAverage(1)).to.equal(36)
    expect(hydration.dailyAverage(2)).to.equal(84)
    expect(hydration.dailyAverage(3)).to.equal(94)
  })
  it('return null if user id is not in the data set', () => {
    expect(hydration.dailyAverage(5)).to.equal(null)
    expect(hydration.dailyAverage()).to.equal(null)
    expect(hydration.dailyAverage('3')).to.equal(null)
    expect(hydration.dailyAverage({})).to.equal(null)
  })

  it('should return number of ounces on a given day', () => {
    expect(hydration.singleDayTotal(1, '2019/06/15')).to.equal(37)
    expect(hydration.singleDayTotal(1, '2019/06/16')).to.equal(47)
    expect(hydration.singleDayTotal(2, '2019/06/15')).to.equal(75)
    expect(hydration.singleDayTotal(2, '2019/06/16')).to.equal(85)
    /*
    For a user, how many fluid ounces
    they consumed for a specific day
    (identified by a date)
    */
  })
  it('return null if user id/date is not in the data set', () => {
    expect(hydration.singleDayTotal(5, '2019/06/15')).to.equal(null)
    expect(hydration.singleDayTotal('2019/06/15', 3)).to.equal(null)
    expect(hydration.singleDayTotal()).to.equal(null)
    expect(hydration.singleDayTotal('3')).to.equal(null)
    expect(hydration.singleDayTotal({})).to.equal(null)
  })



  it('should return ounces consumed each day over 7 days', () => {
    let user1Week = {
      'Day 1': 47,
      'Day 2': 42,
      'Day 3': 34,
      'Day 4': 32,
      'Day 5': 30,
      'Day 6': 38,
      'Day 7': 33
    }
    expect(hydration.weeklyAmounts(1, "2019/06/22")).to.eql(user1Week)
  })
  it('return null if user id/date is not in the data set', () => {
    expect(hydration.weeklyAmounts(5, '2019/06/15')).to.equal(null)
    expect(hydration.weeklyAmounts('2019/06/15', 3)).to.equal(null)
    expect(hydration.weeklyAmounts()).to.equal(null)
    expect(hydration.weeklyAmounts('3')).to.equal(null)
    expect(hydration.weeklyAmounts({})).to.equal(null)
  })


});
