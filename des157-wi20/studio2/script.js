(function(){
  'use strict';

const desktop = document.querySelector('#desktop');

const cioran = document.querySelector('#cioran');
const phone = document.querySelector('#phone');
const macbook = document.querySelector('#macbook');

const cioranhov = document.querySelector('#cioranhov');
const phonehov = document.querySelector('#phonehov');
const macbookhov = document.querySelector('#macbookhov');

const cioranclose = document.querySelector('#cioranclose');
const phoneclose = document.querySelector('#phoneclose');
const macbookclose = document.querySelector('#macbookclose');

const cioranpic = document.querySelector('#cioranpic');
const phonepic = document.querySelector('#phonepic');
const macbookpic = document.querySelector('#macbookpic');

const cioranpic2 = document.querySelector('#cioranpic2');
const phonepic2 = document.querySelector('#phonepic2');
const macbookpic2 = document.querySelector('#macbookpic2');


//img hover for buttons

cioran.addEventListener('mouseover',function(){
  cioranpic.src='images/cioran.png';
})

cioran.addEventListener('mouseout',function(){
  cioranpic.src='images/cioran.png';
})

phone.addEventListener('mouseover',function(){
  phonepic.src='images/iphone.png';
})

phone.addEventListener('mouseout',function(){
  phonepic.src='images/iphone.png';
})

macbook.addEventListener('mouseover',function(){
  macbookpic.src='images/macbook.png';
})

macbook.addEventListener('mouseout',function(){
  macbookpic.src='images/macbook.png';
})

//overlay behavior

cioran.addEventListener('click',function(){
  cioranhov.style.left='50%';
  desktop.style.marginLeft='100%';
})

phone.addEventListener('click',function(){
  phonehov.style.left='50%';
  desktop.style.marginLeft='100%';
})

macbook.addEventListener('click',function(){
  macbookhov.style.left='50%';
  desktop.style.marginLeft='100%';
})

//desktop close behavior

cioranclose.addEventListener('click',function(){
  cioranhov.style.left='-50%';
  desktop.style.marginLeft='0';
})

phoneclose.addEventListener('click',function(){
  phonehov.style.left='-50%';
  desktop.style.marginLeft='0';
})

macbookclose.addEventListener('click',function(){
  macbookhov.style.left='-50%';
  desktop.style.marginLeft='0';
})

//img hover for overlays

cioranpic2.addEventListener('mouseover',function(){
  cioranpic2.src='images/cioran.png';
})

cioranpic2.addEventListener('mouseout',function(){
  cioranpic2.src='images/cioran.png';
})

phonepic2.addEventListener('mouseover',function(){
  phonepic2.src='images/iphone.png';
})

phonepic2.addEventListener('mouseout',function(){
  phonepic2.src='images/iphone.png';
})

macbookpic2.addEventListener('mouseover',function(){
  macbookpic2.src='images/macbook.png';
})

macbookpic2.addEventListener('mouseout',function(){
  macbookpic2.src='images/macbook.png';
})
}());
