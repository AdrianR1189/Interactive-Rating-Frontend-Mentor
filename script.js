/* eslint-disable no-console */

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const subBtn = document.querySelector('.submitBtn');
const mainHide = document.querySelector('.hide');
const showContainer = document.querySelector('.showContainer');
const showArticle = document.querySelector('.showArticle');
const showP = document.querySelector('.showP');
const showHeader = document.querySelector('.showHeader');
const showRating = document.querySelector('.showRating');

let userInput = '';

btn1.addEventListener('click', () => {
  userInput = '1';
  console.log(userInput);
  return userInput;
});

btn2.addEventListener('click', () => {
  userInput = '2';
  console.log(userInput);

  return userInput;
});

btn3.addEventListener('click', () => {
  userInput = '3';
  console.log(userInput);

  return userInput;
});

btn4.addEventListener('click', () => {
  userInput = '4';
  console.log(userInput);

  return userInput;
});

btn5.addEventListener('click', () => {
  userInput = '5';
  console.log(userInput);

  return userInput;
});

// function btnFunction() {
//   textContent.style.visibility = 'hidden';
//   starCircle.style.visibility = 'hidden';
//   numberBtnContainer.style.visibility = 'hidden';
//   submitBtnContainer.style.visibility = 'hidden';
// }
function btnFunction() {
  mainHide.style.display = 'none';
  showContainer.style.display = 'flex';
  showArticle.style.display = 'flex';
  showP.style.display = 'block';
  showHeader.style.display = 'block';
  showRating.style.display = 'flex';
  showRating.innerHTML = `You selected ${userInput} out of 5`;
}
subBtn.addEventListener('click', btnFunction);
