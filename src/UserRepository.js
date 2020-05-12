class UserRepository {
  constructor(data) {
    this.data = data || null;
    this.users = [];
  }
  filterUsersData(id) {
    return typeof id === "number" ? this.data.find(userData => userData.id === id) : null;
  }
  averageStepGoal() {
    let sumStepGoal = this.data.reduce((acc, currentValue) => {
      return ((acc + currentValue.dailyStepGoal))
    }, 0)
    return Math.floor(sumStepGoal / this.data.length)
  }
}
module.exports = UserRepository;
