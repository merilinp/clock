
// CLOCK

function refreshTime() {
    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let time = h + ":" + m;
    document.getElementById("clock").innerHTML = time;
}
setInterval(refreshTime, 1000);

// STOPWATCH

//Vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Var to hold setInterval() function
let interval = null;

//Var to hold stopwatch status
let staatus = "stopped";

//Stopwatch function (logic to determine when to increment next value)
function stopWatch() {

    seconds++;

    //Logic to determine when to increment next value
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("hour").innerHTML = displayHours;
    document.getElementById("minute").innerHTML = displayMinutes;
    document.getElementById("second").innerHTML = displaySeconds;
    
}

function startStop() {

    if (staatus === "stopped") {

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "stop";
        staatus = "started";
    }
    else {

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "resume";
        staatus = "stopped";

    }

}

//Function to reset the stopwatch
function reset() {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
    document.getElementById("startStop").innerHTML = "start";
    staatus = "stopped";
}