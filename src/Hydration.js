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
    return days.length ? Math.floor(totalOunces/days.length) : null; 
  }
  singleDayTotal(id, date) {
    let entries = this.data.filter(day => day.date === date && day.userID === id);
    let totalOunces = entries.reduce((acc, currentValue) => {
      return acc + currentValue.numOunces
    }, 0)
    return entries.length ? totalOunces : null;
  }
  weeklyAmounts(id, today) {
    
    for(let i = 0; i < 7; i++){
      console.log(this.singleDayTotal(id, today));
    }
  
    
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}