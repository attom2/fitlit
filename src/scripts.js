/* eslint-disable max-len */
/* eslint-disable no-undef */
const userId = Math.floor(Math.random() * Math.floor(userData.length));
const userCard = document.querySelector('.user-info');
const userGreeting = document.querySelector('.user-greeting');
const todaysHydrationSection = document.querySelector('.todays-hydration');
const weeklyHydrationSection = document.querySelector('.weekly-hydration');
const todaysSleepSection = document.querySelector('.todays-sleep');
const weeklySleepSection = document.querySelector('.weekly-sleep');
const trendSection = document.querySelector('.trend');
const friendsSection = document.querySelector('.friends');
const todaysActivitySection = document.querySelector('.todays-activity');
const averageActivitySection = document.querySelector('.average-activity');
const weeklyActivitySection = document.querySelector('.weekly-activity');
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
    weeklySleepSection.innerText = '';
    weeklyActivitySection.innerText = '';
    todaysActivitySection.innerText = '';
    trendSection.innerText = '';
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

  Name: ${userDetails.name}
  Address: ${userDetails.address}
  Email: ${userDetails.email}
  Stride Length: ${userDetails.strideLength}
  Daily Step Goal: ${userDetails.dailyStepGoal}
  `
  displayFriends(userDetails.friends)
}
function displayFriends(friends) {

  let userRepo = new UserRepository(userData);
  let friendsNames = friends.map(friend => userRepo.filterUsersData(friend).name).join('\n')
  console.log(friendsNames);
  friendsSection.innerText += `Your friends: \n \n ${friendsNames}`;

}

function displayUserHydration(userDetails, today, hydration) {
  let dailyWaterConsumption = hydration.singleDayTotal(userDetails.id, today);
  let averageWaterConsumption = hydration.dailyAverage(userDetails.id)
  let weeklyWaterConsumption = Object.values(hydration.weeklyAmounts(userDetails.id, today));
  todaysHydrationSection.innerText = `Water consumed ${today}: \n ${dailyWaterConsumption} ounces  
    \n Average water consumption a day: 
    ${averageWaterConsumption} ounces `;
  weeklyHydrationSection.innerText = `Water consumption for this week: \n \n`  
  for (let i = 0; i < weeklyWaterConsumption.length; i++) {
    weeklyHydrationSection.innerText +=  `Day ${i + 1}: ` +  weeklyWaterConsumption[i] + ' oz \n' ;
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

  todaysSleepSection.innerText = `You slept ${singleDaySleptHours} hours today with a sleep quality of ${singleDaySleepQuality}! Your sleep score is ${singleDaySleepScore}.`
  weeklySleepSection.innerText += `Your weekly Sleep stats: \n \n`
  for (let i = 0; i < 7; i++) {
    weeklySleepSection.innerText += `Day ${i + 1} : ${weeklySleptHours[i]} hours. ${weeklySleepQuality[i]} quality. \n`
  }
  weeklySleepSection.innerText += `Average all time : ${allTimeSleptHours} hours slept with ${allTimeSleepQuality} sleep quality`;
}
function displayUserActivity(userDetails, today, activity) {
  let singleDaySteps = activity.returnActivityData(userDetails.id, today).numSteps;
  let singleDayMinsActive = activity.returnMinsActiveOnADate(userDetails.id, today);
  let singleDayMilesWalked = activity.returnMilesWalkedOnADate(userDetails.id, today);
  let totalFeetClimbed = activity.returnTotalFeetClimbed(userDetails.id);
  let usersAverageStairsStepsMins = activity.returnUsersAverageStairsStepsMins(today)
  let setTrend = activity.returnIncreasingStepDays(userDetails.id);
  todaysActivitySection.innerText += `On ${today} you walked: 
  \n ${singleDaySteps} steps, \n ${singleDayMilesWalked} miles \n ${singleDayMinsActive} minutes active today.`
  averageActivitySection.innerText = `Averages between all users:

  ${usersAverageStairsStepsMins.numSteps} steps \n ${usersAverageStairsStepsMins.flightsOfStairs} flights of stairs \n ${usersAverageStairsStepsMins.MinsActive} minutes active`

  weeklyActivitySection.innerText += `You have climbed a total of ${totalFeetClimbed} feet since using this app`
  trendSection.innerText = 'Your steps trended upwards on: \n \n'
  for (let i = 0; i < setTrend.length; i++) {
    trendSection.innerText += setTrend[i] + '\n';
  }
}
function addSvg() {
  todaysHydrationSection.innerHTML += `<img src="../src/assets/drop.svg" class="hydration-svg" alt="blue water droplet with an outline">`
  weeklyActivitySection.innerHTML += `<img src="../src/assets/mountian.svg" class="mountian-svg" alt="black mountian with snowcapped peaks">`
  todaysSleepSection.innerHTML += `<img src="../src/assets/bed.svg" class="bed-svg" alt="bed with blue sheets">`
  todaysActivitySection.innerHTML += `<img src="../src/assets/foot.svg" class="foot-svg" alt="foot inside of a circle">`
  averageActivitySection.innerHTML += `<img src="../src/assets/foot.svg" class="foot-svg" alt="foot inside of a circle">`
}

