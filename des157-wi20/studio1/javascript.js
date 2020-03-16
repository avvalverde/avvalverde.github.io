(function(){ 
    "use strict";

            //listen for form reset
            document.getElementById("reset").addEventListener("click", function(){
            document.getElementById('madlib').className = "invisible";
        });

             // listen for the submission of the form
            document.getElementById("myform").addEventListener("submit", function(event){
            // prevent the default behavior
            event.preventDefault();

            // get all the text fields from the form
            const formData = document.querySelectorAll("input[type=text]");
            // create an array to hold values from the form
            const words = [];

            //loop through the fields and add the words to the array, one at a time.
            for( let i=0; i<formData.length; i++){
                words.push(formData[i].value);    
            }
            //You can see the array in the console, if you want...
            console.log(words);

            //run a function to put the words into the madlib... Function below...
            //Pass the array of words the user typed into the function
            makeMadLib(words);

        });

        //This function takes an array input, then constructs the madlib, peppering
        //in the user's words where necessary.
        function makeMadLib(theWords){


            const madlib = `
            
            <h2>THE MODEL</h2>
            
            <p>She's a ${theWords[0]} and she's looking good<br<
            I'd like to ${theWords[1]} her home that's understood<br>
            She plays hard to get, she ${theWords[2]}s from time to time<br>
            It only takes a ${theWords[3]} to change her mind</p>

            <p>She's going out to nightclubs drinking just champagne<br>
            And she has been checking nearly all the men<br>
            She's playing her game and you can hear them say<br>
            She is looking good, for beauty we will pay</p>

            <p>She's posing for consumer products now and then<br>
            For every camera she gives the best she can<br>
            I saw her on the cover of a magazine<br>
            Now she's a big success, I want to meet her again</p>
            
            <p>Lyrics by ${theWords[4]}</p>`.toUpperCase();

            //Get the madlib container
            const mlContainer = document.getElementById('madlib');

            //Change the guts of the container to your madlib
            mlContainer.innerHTML = `<p>${madlib}</p>`;

            //change the class on the madlib container so you can see it.
            mlContainer.setAttribute("class", "visible");

            //animate madlib
        const el = document.getElementById("madlib");

function fadeIn(el, time) {
el.style.opacity = 0;

const last = +new Date();
let tick = function() {
el.style.opacity = +el.style.opacity + (new Date() - last) / time;
last = +new Date();

if (+el.style.opacity < 1) {
(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
}
};

tick();
}

fadeIn(el, 4000);


        }
}());
