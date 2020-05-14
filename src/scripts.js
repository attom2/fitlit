const userId = Math.floor(Math.random() * Math.floor(userData.length)) + 1
const userCard = document.querySelector('.user-card');
const userGreeting = document.querySelector('.user-greeting');
const todaysHydrationDiv = document.querySelector('.todays-hydration-card');
const weeklyHydrationDiv = document.querySelector('.weekly-hydration-card');

window.onload = function() {
  makeUser();
}
function makeUser() {
  const user1 = new User(userData[userId])
  displayGreeting(user1);
  displayUserInfo(user1);
  displayUserHydration(user1,'2019/09/22');
}
function displayGreeting(user) {
  userGreeting.innerText = `Hello ${user.returnFirstName()}`;
}
function displayUserInfo(userDetails) {
  userCard.innerText = `
  ID : ${userDetails.id}
  Name : ${userDetails.name}
  Address : ${userDetails.address}
  Email : ${userDetails.email}
  Stride Length : ${userDetails.strideLength}
  Daily Step Goal :${userDetails.dailyStepGoal}
  Friends :${userDetails.friends}
  `
}
function instantiateHydrationData() {
  const hydration = new Hydration(hydrationData);
  return hydration;
}
function displayUserHydration(user, today) {
  const hydration = instantiateHydrationData();
  let dailyWaterConsumption = hydration.singleDayTotal(user.id, today);
  let weeklyWaterConsumption = JSON.stringify(hydration.weeklyAmounts(user.id, today));
  todaysHydrationDiv.innerText =`${dailyWaterConsumption} ounces of water consumed today`;
  weeklyHydrationDiv.innerText =`${weeklyWaterConsumption.replace(/[{}"]/gi, ' ')}`;

}


//var userRep = new UserRepository(userData);
