'use strict';

var desktop = document.querySelector('#desktop');

var cioran = document.querySelector('#cioran');
var phone = document.querySelector('#phone');
var macbook = document.querySelector('#macbook');

var cioranhov = document.querySelector('#cioranhov');
var phonehov = document.querySelector('#phonehov');
var macbookhov = document.querySelector('#macbookhov');

var cioranclose = document.querySelector('#cioranclose');
var phoneclose = document.querySelector('#phoneclose');
var macbookclose = document.querySelector('#macbookclose');

var cioranpic = document.querySelector('#cioranpic');
var phonepic = document.querySelector('#phonepic');
var macbookpic = document.querySelector('#macbookpic');

var cioranpic2 = document.querySelector('#cioranpic2');
var phonepic2 = document.querySelector('#phonepic2');
var macbookpic2 = document.querySelector('#macbookpic2');


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
  cioranpic2.src='images/balmx.svg';
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
