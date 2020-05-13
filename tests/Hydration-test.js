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
        "date": "2019/07/16",
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
    expect(hydration.dailyAverage(1)).to.equal(42)
    expect(hydration.dailyAverage(2)).to.equal(82)
    expect(hydration.dailyAverage(3)).to.equal(94)
    
  })

  it('should return total number of ounces of fluid consumed on a given day', () => {

    /*
    For a user, how many fluid ounces 
    they consumed for a specific day 
    (identified by a date)
    */
  })

  it('should return the number of ounces consumed each day over the course of a week', () => {
    
    /*
    For a user, how many fluid ounces of water 
    consumed each day over the course of a week 
    (7 days) - 
    return the amount for each day
    */
  })
});
