
const chai = require('chai');
const expect = chai.expect;
// const data = require('../data/activity')
// const activityData = data.activityData;
const UserRepository = require('../src/UserRepository');
let userRepository;
let userData;

describe('UserRepo', () => {
  beforeEach( () => {
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
    userRepository = new UserRepository(userData);
  });
  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });
  it('should take in a parameter to take in user data', () => {
    expect(userRepository.data).to.eql(userData)
  });
  it('should return undefined if not passed a parameter', () => {
    const sadUserRepo = new UserRepository();
    expect(sadUserRepo.data).to.eql(null);
  });
  it('should only take in an array of objects', () => {
    expect(userRepository.data[0]).to.be.an('object');
    expect(userRepository.data).to.be.an('array');
  })
  it('should hold user objects', () => {
    expect(userRepository.users).to.eql([]);
  })
  it('given a user’s ID, should return users data', () => {
    expect(userRepository.filterUsersData(2)).to.eql({
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
      });
  });
  it('filterUsersData should return null if not given an argument', () => {
    expect(userRepository.filterUsersData()).to.eql(null);
  });
  it('filterUsersData should return null if passed in anything except a number', () => {
    expect(userRepository.filterUsersData('Sad')).to.eql(null);
    expect(userRepository.filterUsersData([])).to.eql(null);
    expect(userRepository.filterUsersData({})).to.eql(null);
  });
  it('should have a method averageStepGoal', () => {
    expect(userRepository.averageStepGoal).to.be.a('function');
  });
  it('averageStepGoal should return the average step goal of all users', () => {
    const result = 6666;
    expect(userRepository.averageStepGoal()).to.eql(result);
  });
  //input : id
  //find all data related to user id
  //output : user data
  //
  // it('should', () => {});
  // it('should', () => {});

});
