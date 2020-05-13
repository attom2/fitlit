const userId = Math.floor(Math.random() * Math.floor(userData.length)) + 1
const userCard = document.querySelector('.user-card');
const userGreeting = document.querySelector('.user-greeting');

window.onload = function() {
  makeUser();
}
function makeUser() {
  const user1 = new User(userData[userId])
  displayGreeting(user1);
  displayUserInfo(user1);
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

//var userRep = new UserRepository(userData);
