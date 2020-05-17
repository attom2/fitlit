const userId = Math.floor(Math.random() * Math.floor(userData.length));
const userCard = document.querySelector('.user-card');
const userGreeting = document.querySelector('.user-greeting');
const todaysHydrationDiv = document.querySelector('.todays-hydration-card');
const weeklyHydrationDiv = document.querySelector('.weekly-hydration-card');
const todaysSleepDiv = document.querySelector('.todays-sleep-card');
const weeklySleepDiv = document.querySelector('.weekly-sleep-card');

window.onload = function() {
  makeUser();
}
function makeUser() {
  const randomUser = new User(userData[userId]);
  const hydration = new Hydration(hydrationData);
  const sleep = new Sleep(sleepData);
  displayGreeting(randomUser);
  displayUserInfo(randomUser);
  displayUserHydration(randomUser,'2019/09/22', hydration);
  displayUserSleep(randomUser, '2019/09/22', sleep);
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

function displayUserHydration(userDetails, today, hydration) {
  let dailyWaterConsumption = hydration.singleDayTotal(userDetails.id, today);
  let averageWaterConsumption = hydration.dailyAverage(userDetails.id)
  let weeklyWaterConsumption = JSON.stringify(hydration.weeklyAmounts(userDetails.id, today));
  todaysHydrationDiv.innerText =`${dailyWaterConsumption} ounces of water consumed today \n Average water consumption ${averageWaterConsumption} ounces a day`;
  weeklyHydrationDiv.innerText =`${weeklyWaterConsumption.replace(/[{}"]/gi, ' ')}`;
}
function displayUserSleep(userDetails, today, sleep) {
   let singleDaySleptHours = sleep.hoursSleptOnADate(userDetails.id, today);
   let singleDaySleepQuality = sleep.sleepQualityOnADate(userDetails.id, today);
   let singleDaySleepScore = sleep.sleepScoreOnADate(userDetails.id, today);
   let weeklySleptHours = sleep.sleepHoursForAWeek(userDetails.id, today);
   let weeklySleepQuality = sleep.sleepQualityForAWeek(userDetails.id, today);
   let allTimeSleptHours = sleep.averageHoursSleptPerDay(userDetails.id);
   let allTimeSleepQuality = sleep.averageSleepQualityPerDay(userDetails.id);

   todaysSleepDiv.innerText = `You slept ${singleDaySleptHours} hours today with a sleep quality of ${singleDaySleepQuality}! Your sleep score is ${singleDaySleepScore}.`
   for(let i = 0; i < 7; i++){
     weeklySleepDiv.innerText += `Day ${i + 1} : ${weeklySleptHours[i]} hours. ${weeklySleepQuality[i]} quality. \n`
   }
    weeklySleepDiv.innerText += `Average all time : ${allTimeSleptHours} hours slept with ${allTimeSleepQuality} sleep quality`;
}
