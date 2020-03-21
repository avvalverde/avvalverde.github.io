// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWjClCPD5SLMYXQb6us2LCHf_VC2CR_ts",
  authDomain: "des157final.firebaseapp.com",
  databaseURL: "https://des157final.firebaseio.com",
  projectId: "des157final",
  storageBucket: "des157final.appspot.com",
  messagingSenderId: "839858739536",
  appId: "1:839858739536:web:feadd9e6a6bde456a8f455"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


(function(){
  'use strict';

const desktop = document.querySelector('#desktop');

const crenshaw = document.querySelector('#crenshaw');
const hooks = document.querySelector('#hooks');
const steinem = document.querySelector('#steinem');
const lorde = document.querySelector('#lorde');

const crenshawhov = document.querySelector('#crenshawhov');
const hookshov = document.querySelector('#hookshov');
const steinemhov = document.querySelector('#steinemhov');
const lordehov = document.querySelector('#lordehov');

const crenshawclose = document.querySelector('#crenshawclose');
const hooksclose = document.querySelector('#hooksclose');
const steinemclose = document.querySelector('#steinemclose');
const lordeclose = document.querySelector('#lordeclose');

const crenshawpic = document.querySelector('#crenshawpic');
const hookspic = document.querySelector('#hookspic');
const steinempic = document.querySelector('#steinempic');
const lordepic = document.querySelector('#lordepic');

const crenshawpic2 = document.querySelector('#crenshawpic2');
const hookspic2 = document.querySelector('#hookspic2');
const steinempic2 = document.querySelector('#steinempic2');
const lordepic2 = document.querySelector('#lordepic2');


//img hover for buttons

crenshaw.addEventListener('mouseover',function(){
  crenshawpic.src='https://today.uri.edu/wp-content/uploads/2016/09/Crenshaw4.jpg';
})

crenshaw.addEventListener('mouseout',function(){
  crenshawpic.src='https://today.uri.edu/wp-content/uploads/2016/09/Crenshaw4.jpg';
})

hooks.addEventListener('mouseover',function(){
  hookspic.src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz4Q7JCIkTBRCtZrqsgvzvTveXhOUcRTOcrcy2mkeu800tfJ4h';
})

hooks.addEventListener('mouseout',function(){
  hookspic.src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz4Q7JCIkTBRCtZrqsgvzvTveXhOUcRTOcrcy2mkeu800tfJ4h';
})

steinem.addEventListener('mouseover',function(){
  steinempic.src='https://1hx5ll3ickiy2waa471l3o2x-wpengine.netdna-ssl.com/wp-content/uploads/2013/04/www.thecatholicthing.org_images_i-had-an-abortion-gloria-steinem-illuminati-pyramid-ms-magazine-freemason-300x300.jpg';
})

steinem.addEventListener('mouseout',function(){
  steinempic.src='https://1hx5ll3ickiy2waa471l3o2x-wpengine.netdna-ssl.com/wp-content/uploads/2013/04/www.thecatholicthing.org_images_i-had-an-abortion-gloria-steinem-illuminati-pyramid-ms-magazine-freemason-300x300.jpg';
})

lorde.addEventListener('mouseover',function(){
  lordepic.src='images/audrelorde.jpeg';
})

lorde.addEventListener('mouseout',function(){
  lordepic.src='images/audrelorde.jpeg';
})

//overlay behavior

crenshaw.addEventListener('click',function(){
  crenshawhov.style.left='50%';
  desktop.style.marginLeft='125%';
})

hooks.addEventListener('click',function(){
  hookshov.style.left='50%';
  desktop.style.marginLeft='125%';
})

steinem.addEventListener('click',function(){
  steinemhov.style.left='50%';
  desktop.style.marginLeft='125%';
})

lorde.addEventListener('click',function(){
  lordehov.style.left='50%';
  desktop.style.marginLeft='125%';
})

//desktop close behavior

crenshawclose.addEventListener('click',function(){
  crenshawhov.style.left='-50%';
  desktop.style.marginLeft='25%';
})

hooksclose.addEventListener('click',function(){
  hookshov.style.left='-50%';
  desktop.style.marginLeft='25%';
})

steinemclose.addEventListener('click',function(){
  steinemhov.style.left='-50%';
  desktop.style.marginLeft='25%';
})

lordeclose.addEventListener('click',function(){
  lordehov.style.left='-50%';
  desktop.style.marginLeft='25%';
})



//img hover for overlays

crenshawpic2.addEventListener('mouseover',function(){
  crenshawpic2.src='https://today.uri.edu/wp-content/uploads/2016/09/Crenshaw4.jpg';
})

crenshawpic2.addEventListener('mouseout',function(){
  crenshawpic2.src='https://today.uri.edu/wp-content/uploads/2016/09/Crenshaw4.jpg';
})

hookspic2.addEventListener('mouseover',function(){
  hookspic2.src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz4Q7JCIkTBRCtZrqsgvzvTveXhOUcRTOcrcy2mkeu800tfJ4h';
})

hookspic2.addEventListener('mouseout',function(){
  hookspic2.src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz4Q7JCIkTBRCtZrqsgvzvTveXhOUcRTOcrcy2mkeu800tfJ4h';
})

steinempic2.addEventListener('mouseover',function(){
  steinempic2.src='https://1hx5ll3ickiy2waa471l3o2x-wpengine.netdna-ssl.com/wp-content/uploads/2013/04/www.thecatholicthing.org_images_i-had-an-abortion-gloria-steinem-illuminati-pyramid-ms-magazine-freemason-300x300.jpg';
})

steinempic2.addEventListener('mouseout',function(){
  steinempic2.src='https://1hx5ll3ickiy2waa471l3o2x-wpengine.netdna-ssl.com/wp-content/uploads/2013/04/www.thecatholicthing.org_images_i-had-an-abortion-gloria-steinem-illuminati-pyramid-ms-magazine-freemason-300x300.jpg';
})

lordepic2.addEventListener('mouseover',function(){
  lordepic2.src='images/audrelorde.jpeg';
})

lordepic2.addEventListener('mouseout',function(){
  lordepic2.src='images/audrelorde.jpeg';
})

//navigation bar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();

// reference messages collection

var messagesRef = firebase.database().ref('messages');

// listen for form submit

document.getElementById('newContact').addEventListener('submit',submitForm);

// submit form
function submitForm(e){
    e.preventDefault();

// get values
var name = getInputVal('name');
var email = getInputVal('email');
var message = getInputVal('message');

// save message
saveMessage(name, email, message);

// show alert
document.querySelector('.alert').style.display = "block";

// alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = "none";
},3000);
}


// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}


}());
