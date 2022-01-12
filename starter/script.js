'use strict';

document.querySelector('#score--0').textContent = '0';
document.querySelector('#score--1').textContent = '0';
document.querySelector('.dice').classList.add('hidden');
//variables
const arr = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];
let activePlayer = 0;
let playerscore = document.getElementById(
  `current--${activePlayer}`
).textContent;
let totalscore = document.getElementById(`score--${activePlayer}`).textContent;
const img = document.querySelector('.dice');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currscore0 = document.querySelector('#current--0');
const currscore1 = document.querySelector('#current--1');
const newgamebtn = document.querySelector('.btn--new');
const playerhover = document.querySelector('.player--active');
const btnroll = document.querySelector('.btn--roll');
const currscore = document
  .querySelector('.player--active')
  .querySelector('.current')
  .querySelector('.current-score');
const holdbtn = document.querySelector('.btn--hold');
const rulesbtn = document.querySelector('.btn--rule');
const overlay = document.querySelector('.overlay');

//functions that will be used for the buttons
function arraydice(num) {
  return Math.trunc(Math.random() * num) + 1;
}

const f = function () {
  score0.textContent = '0';
  score1.textContent = '0';
  currscore0.textContent = '0';
  currscore1.textContent = '0';
  activePlayer = '0';
  document.querySelector('.dice').classList.add('hidden');
  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
};

const f2 = function () {
  document.querySelector('.dice').classList.remove('hidden');
  let numdice = arraydice(6);
  document.getElementById(`current--${activePlayer}`).textContent = numdice;
  document.getElementById(`score--${activePlayer}`).textContent =
    Number(document.getElementById(`score--${activePlayer}`).textContent) +
    numdice;
  img.src = arr[numdice - 1];
  if (numdice == 1) {
    document.getElementById(`score--${activePlayer}`).textContent = '0';
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    f3();
  }
};

const f3 = function () {
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
};

const f4 = function () {
  document.querySelector('.rules').classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const f5 = function () {
  document.querySelector('.rules').classList.add('hidden');
  overlay.classList.add('hidden');
};
//button click action
newgamebtn.addEventListener('click', f);
btnroll.addEventListener('click', f2);
holdbtn.addEventListener('click', f3);
rulesbtn.addEventListener('click', f4);
overlay.addEventListener('click', f5);
