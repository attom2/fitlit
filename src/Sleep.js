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
}
if(typeof module !== 'undefined') {
  module.exports = Sleep;
}