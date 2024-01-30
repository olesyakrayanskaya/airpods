'use strict';

const openCartBtn = document.querySelector('.header__btn');
const modal = document.getElementById('cart');
const modalClose = document.getElementById('close');

openCartBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

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
  document
    .getElementById('side-green')
    .classList.add('composition__img_active');
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
  document
    .getElementById('side-silver')
    .classList.add('composition__img_active');
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
  document
    .getElementById('side-black')
    .classList.add('composition__img_active');
  caseAirpods.forEach((img) => img.classList.remove('case__img_active'));
  document.getElementById('case-black').classList.add('case__img_active');
});

const cartProdBtnPink = document.getElementById('modal-pink');
const cartProdBtnGreen = document.getElementById('modal-green');
const cartProdBtnBlue = document.getElementById('modal-blue');
const cartProdBtnSilver = document.getElementById('modal-silver');
const cartProdBtnBlack = document.getElementById('modal-black');

const cartProdPink = document.getElementById('prod-pink');
const cartProdGreen = document.getElementById('prod-green');
const cartProdBlue = document.getElementById('prod-blue');
const cartProdSilver = document.getElementById('prod-silver');
const cartProdBlack = document.getElementById('prod-black');
let productCount = 0;
let productPrice;

const cartProdDel = document.querySelectorAll('.product__del');

cartProdDel.forEach((del) =>
  del.addEventListener('click', () => {
    del.closest('.modal__product').style.display = 'none';
  })
);

const cartProdDecrement = document.querySelectorAll('.product__btn_decrement');
const cartProdIncrement = document.querySelectorAll('.product__btn_increment');

cartProdDecrement.forEach((b) => {
  productCount = +b.closest('.product__action').querySelector('.product__count')
    .innerHTML;
  productPrice = parseInt(
    b.closest('.modal__product').querySelector('.product__price').innerHTML
  );
  b.addEventListener('click', () => {
    if (productCount > 0) {
      productCount -= 1;
    }
    b.closest('.product__action').querySelector('.product__count').innerHTML =
      productCount;
    if (productCount == 0) {
      b.closest('.modal__product').style.display = 'none';
      b
        .closest('.product__action')
        .querySelector('.product__count').innerHTML = 1;
    }
  });
});

cartProdIncrement.forEach((b) => {
  productCount = +b.closest('.product__action').querySelector('.product__count')
    .innerHTML;
  productPrice = parseInt(
    b.closest('.modal__product').querySelector('.product__price').innerHTML
  );
  b.addEventListener('click', () => {
    productCount += 1;
    b.closest('.product__action').querySelector('.product__count').innerHTML =
      productCount;
  });
});

cartProdBtnPink.addEventListener('click', () => {
  cartProdPink.style.display = 'flex';
});
cartProdBtnGreen.addEventListener('click', () => {
  cartProdGreen.style.display = 'flex';
});
cartProdBtnBlue.addEventListener('click', () => {
  cartProdBlue.style.display = 'flex';
});
cartProdBtnSilver.addEventListener('click', () => {
  cartProdSilver.style.display = 'flex';
});
cartProdBtnBlack.addEventListener('click', () => {
  cartProdBlack.style.display = 'flex';
});
