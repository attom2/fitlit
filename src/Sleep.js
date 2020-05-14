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
    let filteredData = this.data.filter(day => day.userID === id);
    let userDetails = filteredData.find(element => element.date === date)
    return userDetails ? userDetails.sleepQuality : null;
  }
  sleepQualityForAWeek(id, date) {
    let filteredData = this.data.filter(day => day.userID === id);
    let dates = filteredData.map(element => element.date);
    let index = dates.indexOf(date) + 1;
    let weekSleepQuality = [];
    if(index){
      for(let i = 7; i > 0; i--){
        weekSleepQuality.push(filteredData[index - i].sleepQuality);
      }
      return weekSleepQuality;
    }
    return null;
  }
  sleepHoursForAWeek(id, date) {
    let filteredData = this.data.filter(day => day.userID === id);
    let dates = filteredData.map(element => element.date);
    let index = dates.indexOf(date) + 1;
    let weekSleepQuality = [];
    if(index){
      for(let i = 7; i > 0; i--){
        weekSleepQuality.push(filteredData[index - i].hoursSlept);
      }
      return weekSleepQuality;
    }
    return null;
  }

}
if(typeof module !== 'undefined') {
  module.exports = Sleep;
}
