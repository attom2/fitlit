class Hydration {
  constructor(data) {
    if (typeof data === "object") {
      this.data = data;
    } else {
      this.data = null;
    }

  }
  dailyAverage(id) {
    let days = this.data.filter(day => day.userID === id);
    let totalOunces = days.reduce((acc, currentValue) => {
      return acc + currentValue.numOunces
    }, 0)
    return days.length ? Math.floor(totalOunces/days.length) : null;
  }
  singleDayTotal(id, date) {
    let entries = this.data.filter(day => day.date === date && day.userID === id);
    let totalOunces = entries.reduce((acc, currentValue) => {
      return acc + currentValue.numOunces;
    }, 0)
    return entries.length ? totalOunces : null;
  }
  weeklyAmounts(id, today) {
    let entries = this.data.filter(day => day.userID === id);
    let todaysIndex = entries.map(entry => entry.date).indexOf(today) + 1
    let weekdays = {}
    if (entries.length) {
      for (let i = 7; i > 0; i--) {
        weekdays[`Day ${8 - i}`] = entries[todaysIndex - i].numOunces;
      }
      return weekdays;
    }
    return null;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
