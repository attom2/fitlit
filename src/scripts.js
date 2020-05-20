/* eslint-disable max-len */
/* eslint-disable no-undef */
const userId = Math.floor(Math.random() * Math.floor(userData.length));
const userCard = document.querySelector('.user-info');
const userGreeting = document.querySelector('.user-greeting');
const todaysHydrationDiv = document.querySelector('.todays-hydration');
const weeklyHydrationDiv = document.querySelector('.weekly-hydration');
const todaysSleepDiv = document.querySelector('.todays-sleep');
const weeklySleepDiv = document.querySelector('.weekly-sleep');
const trendDiv = document.querySelector('.trend');
const todaysActivityDiv = document.querySelector('.todays-activity');
const weeklyActivityDiv = document.querySelector('.weekly-activity');
const dateSearchBtn = document.querySelector('.date-search-btn');
let calendar = document.querySelector('.calendar');



window.onload = function() {
  makeUser(); 
}



function makeUser() {
  
  const randomUser = new User(userData[userId]);
  const hydration = new Hydration(hydrationData);
  const sleep = new Sleep(sleepData);
  const activity = new Activity(activityData, userData)
  let date = '2019/09/22';
  displayGreeting(randomUser);
  displayUserInfo(randomUser);
  displayUserActivities(randomUser, hydration, sleep, activity, date);
  makeEventListener(randomUser, hydration, sleep, activity);
}
function makeEventListener(randomUser, hydration, sleep, activity) {
  dateSearchBtn.addEventListener('click', function() {
    weeklySleepDiv.innerText = '';
    weeklyActivityDiv.innerText = '';
    todaysActivityDiv.innerText = '';
    trendDiv.innerText = '';
    let correctedDate = calendar.value.replace(/-/g, '/');
    displayUserHydration(randomUser, correctedDate, hydration);
    displayUserSleep(randomUser, correctedDate, sleep);
    displayUserActivity(randomUser, correctedDate, activity);
  })
}
function displayUserActivities(randomUser, hydration, sleep, activity, date) {
  displayUserHydration(randomUser, date, hydration);
  displayUserSleep(randomUser, date, sleep);
  displayUserActivity(randomUser, date, activity);
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
  let weeklyWaterConsumption = Object.values(hydration.weeklyAmounts(userDetails.id, today));
 
  todaysHydrationDiv.innerText = `${dailyWaterConsumption} ounces of water consumed today \n Average water consumption ${averageWaterConsumption} ounces a day`;
  for (let i = 0; i < weeklyWaterConsumption.length; i++) {
    weeklyHydrationDiv.innerText +=  weeklyWaterConsumption[i];
  }

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
  for (let i = 0; i < 7; i++) {
    weeklySleepDiv.innerText += `Day ${i + 1} : ${weeklySleptHours[i]} hours. ${weeklySleepQuality[i]} quality. \n`
  }
  weeklySleepDiv.innerText += `Average all time : ${allTimeSleptHours} hours slept with ${allTimeSleepQuality} sleep quality`;
}
function displayUserActivity(userDetails, today, activity) {
  let singleDaySteps = activity.returnActivityData(userDetails.id, today).numSteps;
  let singleDayMinsActive = activity.returnMinsActiveOnADate(userDetails.id, today);
  let singleDayMilesWalked = activity.returnMilesWalkedOnADate(userDetails.id, today);
  let totalFeetClimbed = activity.returnTotalFeetClimbed(userDetails.id);
  let usersAverageStairsStepsMins = activity.returnUsersAverageStairsStepsMins(today);
  let setTrend = activity.returnIncreasingStepDays(userDetails.id);
  todaysActivityDiv.innerText += `You walked ${singleDaySteps} steps, \n ${singleDayMilesWalked} miles, \n and were active for ${singleDayMinsActive} minutes today. 
  \n  which compares to the averages of ${usersAverageStairsStepsMins.numSteps} number of steps, ${usersAverageStairsStepsMins.flightsOfStairs} flights of stairs, and ${usersAverageStairsStepsMins.MinsActive}`

  weeklyActivityDiv.innerText += `You have climbed a total of ${totalFeetClimbed} feet since using this app`
  trendDiv.innerText = 'You increased number of steps 3 days in a row on: \n'
  for (let i = 0; i < setTrend.length; i++) {
    trendDiv.innerText += setTrend[i] + '\n';
  }
}

