'use strict';

const pinkAirpods = document.getElementById('pink');
const greenAirpods = document.getElementById('green');
const silverAirpods = document.getElementById('silver');
const blueAirpods = document.getElementById('blue');
const blackAirpods = document.getElementById('black');
const hero = document.querySelector('.hero');
const heroContainer = document.querySelector('.hero__container');
const heroImg = document.querySelectorAll('.hero__img');
const colorsItem = document.querySelectorAll('.colors__item');
const sideAirpods = document.querySelectorAll('.composition__img');
const caseAirpods = document.querySelectorAll('.case__img');

greenAirpods.addEventListener('click', () => {
  heroImg.forEach((img) => img.classList.remove('hero__img_active'));
  document.getElementById('green-img').classList.add('hero__img_active');
  hero.removeAttribute('class');
  hero.setAttribute('class', 'hero hero_green');
  heroContainer.removeAttribute('class');
  heroContainer.setAttribute('class', 'hero__container hero__container_green');
  colorsItem.forEach((item) => item.classList.remove('colors__item_active'));
  greenAirpods.classList.add('colors__item_active');
  sideAirpods.forEach((img) => img.classList.remove('composition__img_active'));
  document.getElementById('side-green').classList.add('composition__img_active');
  caseAirpods.forEach((img) => img.classList.remove('case__img_active'));
  document.getElementById('case-green').classList.add('case__img_active');
});

pinkAirpods.addEventListener('click', () => {
  heroImg.forEach((img) => img.classList.remove('hero__img_active'));
  document.getElementById('pink-img').classList.add('hero__img_active');
  hero.removeAttribute('class');
  hero.setAttribute('class', 'hero hero_pink');
  heroContainer.removeAttribute('class');
  heroContainer.setAttribute('class', 'hero__container hero__container_pink');
  colorsItem.forEach((item) => item.classList.remove('colors__item_active'));
  pinkAirpods.classList.add('colors__item_active');
  sideAirpods.forEach((img) => img.classList.remove('composition__img_active'));
  document.getElementById('side-pink').classList.add('composition__img_active');
  caseAirpods.forEach((img) => img.classList.remove('case__img_active'));
  document.getElementById('case-pink').classList.add('case__img_active');
});

blueAirpods.addEventListener('click', () => {
  heroImg.forEach((img) => img.classList.remove('hero__img_active'));
  document.getElementById('blue-img').classList.add('hero__img_active');
  hero.removeAttribute('class');
  hero.setAttribute('class', 'hero hero_blue');
  heroContainer.removeAttribute('class');
  heroContainer.setAttribute('class', 'hero__container hero__container_blue');
  colorsItem.forEach((item) => item.classList.remove('colors__item_active'));
  blueAirpods.classList.add('colors__item_active');
  sideAirpods.forEach((img) => img.classList.remove('composition__img_active'));
  document.getElementById('side-blue').classList.add('composition__img_active');
  caseAirpods.forEach((img) => img.classList.remove('case__img_active'));
  document.getElementById('case-blue').classList.add('case__img_active');
});

silverAirpods.addEventListener('click', () => {
  heroImg.forEach((img) => img.classList.remove('hero__img_active'));
  document.getElementById('silver-img').classList.add('hero__img_active');
  hero.removeAttribute('class');
  hero.setAttribute('class', 'hero hero_silver');
  heroContainer.removeAttribute('class');
  heroContainer.setAttribute('class', 'hero__container hero__container_silver');
  colorsItem.forEach((item) => item.classList.remove('colors__item_active'));
  silverAirpods.classList.add('colors__item_active');
  sideAirpods.forEach((img) => img.classList.remove('composition__img_active'));
  document.getElementById('side-silver').classList.add('composition__img_active');
  caseAirpods.forEach((img) => img.classList.remove('case__img_active'));
  document.getElementById('case-silver').classList.add('case__img_active');
});

blackAirpods.addEventListener('click', () => {
  heroImg.forEach((img) => img.classList.remove('hero__img_active'));
  document.getElementById('black-img').classList.add('hero__img_active');
  hero.removeAttribute('class');
  hero.setAttribute('class', 'hero hero_black');
  heroContainer.removeAttribute('class');
  heroContainer.setAttribute('class', 'hero__container hero__container_black');
  colorsItem.forEach((item) => item.classList.remove('colors__item_active'));
  blackAirpods.classList.add('colors__item_active');
  sideAirpods.forEach((img) => img.classList.remove('composition__img_active'));
  document.getElementById('side-black').classList.add('composition__img_active');
  caseAirpods.forEach((img) => img.classList.remove('case__img_active'));
  document.getElementById('case-black').classList.add('case__img_active');
});
