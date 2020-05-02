// timerId is going to be used to stop or pause the timer
let timerObj = {
    minutes: 0,
    seconds: 0,
    timerId: 0
}

function soundAlarm(){
    let amount  = 3; // the amount of times that the alarm plays
    let audio = new Audio("assets/Timer_Sound_Effect.mp3"); //variable with the audio file that we want to use.

    function playSound(){
        audio.pause();
        audio.currentTime = 0;
        audio.play();

    }

    for(let i = 0; i < amount; i++){
        setTimeout(PlaySound, 1200 * i);
    }
}


function updateValue(key, value){

    if(value <0){
        value = 0;
        console.log("Positive Numbers Only");
    } 

    if(key == "seconds"){
        if(value <10){
            value= "" + value;
        }
    }

    $("#" + key).html(value || 0);
    timerObj[key] = value;

}

//self calling function, we declare the function and we call it at the same time
(function detectChanges(key){
    console.log("Detect changes");

    let input = "#" + key + "input";
    $(input).change(function(){ // We want to call update value
        updateValue(key);
    });

    
})();







