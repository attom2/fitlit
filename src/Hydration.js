class Hydration {
  constructor(data) {
    if(typeof data === "object") {
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
    return Math.floor(totalOunces/days.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}