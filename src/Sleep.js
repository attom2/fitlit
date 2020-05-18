class Sleep {
  constructor(data) {
    if(typeof data === 'object') {
      this.data = data;
    } else {
      this.data = null;
    }
  }
  averageHoursSleptPerDay(id) {
    let filteredData = this.data.filter(day => day.userID === id)
    let totalSleepHours = filteredData.reduce((acc, currentElement) => {
      return acc + currentElement.hoursSlept
    }, 0)
      return filteredData.length ? Math.floor(totalSleepHours/filteredData.length) : null;
  }
  averageSleepQualityPerDay(id) {
    let filteredData = this.data.filter(day => day.userID === id)
    let totalSleepQuality = filteredData.reduce((acc, currentElement) => {
      return acc + currentElement.sleepQuality
    }, 0)
      return filteredData.length ? Math.floor(totalSleepQuality/filteredData.length) : null;
  }
  hoursSleptOnADate(id, date) {
    let filteredData = this.data.filter(day => day.userID === id);
    let userDetails = filteredData.find(element => element.date === date)
    return userDetails ? userDetails.hoursSlept : null;
  }
  sleepQualityOnADate(id, date) {
    if(!this.data) {
      return null;
    }
    let filteredData = this.data.filter(day => day.userID === id);
    let userDetails = filteredData.find(element => element.date === date)
    return userDetails ? userDetails.sleepQuality : null;
  }
  sleepQualityForAWeek(id, date) {
    if(!this.data) {
      return null;
    }
    let filteredData = this.data.filter(day => day.userID === id);
    let dates = filteredData.map(element => element.date);
    let index = dates.indexOf(date) + 1;
    let weekSleepQualities = [];
    if(index){
      for(let i = 7; i > 0; i--){
        weekSleepQualities.push(filteredData[index - i].sleepQuality);
      }
      return weekSleepQualities;
    }
    return null;
  }
  sleepHoursForAWeek(id, date) {
    if(!this.data) {
      return null;
    }
    let filteredData = this.data.filter(day => day.userID === id);
    let dates = filteredData.map(element => element.date);
    let index = dates.indexOf(date) + 1;
    let weekSleepQualities = [];
    if(index){
      for(let i = 7; i > 0; i--){
        weekSleepQualities.push(filteredData[index - i].hoursSlept);
      }
      return weekSleepQualities;
    }
    return null;
  }

  sleepQualityForAllUsers() {
    let results = this.data ? Math.floor(this.data.reduce((acc, currentValue) => {
      return acc + currentValue.sleepQuality
    }, 0) / this.data.length) : null;
    return results;
  }
  qualityGreaterThanThree(date) {
    let results = [];
    const users = this.data.map(entry => entry.userID);
    const uniqUsers = [...new Set(users)];
    for(let i = 0; i < uniqUsers.length; i++){
      let weekSleepQualities = this.sleepQualityForAWeek(uniqUsers[i], date)
      if(!weekSleepQualities){
        continue;
      }
      let sumOfSleepQuality = weekSleepQualities.reduce((acc, currentValue) => {
        return acc + currentValue
      },0)
      if((sumOfSleepQuality / 7) > 3) {
        results.push(uniqUsers[i]);
      }
    }
    return results;
    //uniqUsers.forEach((user, i) => this.data.sleepQualityForAWeek(uniqUsers[i], date))
  }
  sleepScoreOnADate(id, date) {
    let filteredData = this.data.filter(day => day.userID === id);
    let userDetails = filteredData.find(element => element.date === date);
    let results = userDetails ? Math.floor(userDetails.sleepQuality * userDetails.hoursSlept) : null;
    return results;
  }
  findUserSleptTheMostOnADay(date) {
    let filteredData = this.data.filter(day => day.date === date);
    let sortedData = filteredData.sort((a,b) => a.hoursSlept - b.hoursSlept)
    if(!sortedData.length) {
      return null;
    }
    let mostSleptUsers = sortedData.filter((entry) => entry.hoursSlept === sortedData[sortedData.length - 1].hoursSlept).map(entry => entry.userID);

    return mostSleptUsers;
  }
}

if(typeof module !== 'undefined') {
  module.exports = Sleep;
}
