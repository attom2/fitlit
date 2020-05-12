
const chai = require('chai');
const expect = chai.expect;
// const data = require('../data/activity')
// const activityData = data.activityData;
const UserRepository = require('../src/UserRepository');
let userRepository;
let activityData;

describe('UserRepo', () => {
  beforeEach( () => {
    userRepository = new UserRepository(activityData);
    activityData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      }]
  });
  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });
  it('should take in a parameter to take in user data', () => {
    expect(userRepository.data).to.eql(activityData)
  });
  it('should return undefined if not passed a parameter', () => {
    const sadUserRepo= new UserRepository();
    expect(sadUserRepo.data).to.eql(null);
  });
  it('should only take in an array of objects', () => {
    expect(userRepository.data[0]).to.be.an('object');
    expect(userRepository.data).to.be.an('array');
  })
  it('should hold user objects', () => {
    expect(userRepository.users).to.eql([]);
  })
  // it('should', () => {});
  // it('should', () => {});

});
