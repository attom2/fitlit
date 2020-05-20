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
const averageActivityDiv = document.querySelector('.average-activity');
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
  addSvg();
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
    addSvg()

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
  userCard.innerText += `
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
  todaysHydrationDiv.innerText = `Water consumed today: \n ${dailyWaterConsumption} ounces  
    \n Average water consumption a day: 
    ${averageWaterConsumption} ounces `;
  weeklyHydrationDiv.innerText = `This week you have consumed:`  
  for (let i = 0; i < weeklyWaterConsumption.length; i++) {
    weeklyHydrationDiv.innerText +=  `Water consumption for day ${i}: ` +  weeklyWaterConsumption[i] + '\n';
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
  weeklySleepDiv.innerText += `Your weekly Sleep stats: \n \n`
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
  let usersAverageStairsStepsMins = activity.returnUsersAverageStairsStepsMins(today)
  todaysActivityDiv.innerText += `You walked: 
  \n ${singleDaySteps} steps, \n ${singleDayMilesWalked} miles \n ${singleDayMinsActive} minutes active today.`
  averageActivityDiv.innerText += `Averages between all users:

  ${usersAverageStairsStepsMins.numSteps} steps \n ${usersAverageStairsStepsMins.flightsOfStairs} flights of stairs \n ${usersAverageStairsStepsMins.MinsActive} minutes active`

  weeklyActivityDiv.innerText += `You have climbed a total of ${totalFeetClimbed} feet since using this app`
  trendDiv.innerText = 'You increased number of steps 3 days in a row on: \n'
  for (let i = 0; i < setTrend.length; i++) {
    trendDiv.innerText += setTrend[i] + '\n';
  }
}
function addSvg() {
  todaysHydrationDiv.innerHTML += `<img src="../src/assets/drop.svg" class="hydration-svg" alt="blue water droplet with an outline">`
  weeklyActivityDiv.innerHTML += `<img src="../src/assets/mountian.svg" class="mountian-svg" alt="black mountian with snowcapped peaks">`
  todaysSleepDiv.innerHTML += `<img src="../src/assets/bed.svg" class="bed-svg" alt="bed with blue sheets">`
  todaysActivityDiv.innerHTML += `<img src="../src/assets/foot.svg" class="foot-svg" alt="foot inside of a circle">`
  averageActivityDiv.innerHTML += `<img src="../src/assets/foot.svg" class="foot-svg" alt="foot inside of a circle">`
}

