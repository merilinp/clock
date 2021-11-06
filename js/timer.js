
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

// TIMER

var countdownTimer;

//Vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Var to hold timer status
let staatus = "stopped";

//Timer
function timer(endTime) {

    var now = new Date();

    //Finding time difference
    if (endTime.getTime() - now.getTime() > 0) {

        var difference = endTime - now;

        var hh = Math.floor(difference / 3600000);
        var mm = Math.floor((difference % 3600000) / 60000);
        var ss = Math.round(((difference % 3600000) % 60000) / (1000));

        //If seconds/minutes/hours are only one digit, add a leading 0 to the value
        if (ss < 10) {
            displaySeconds = "0" + ss.toString();
        }
        else {
            displaySeconds = ss;
        }

        if (mm < 10) {
            displayMinutes = "0" + mm.toString();
        }
        else {
            displayMinutes = mm;
        }

        if (hh < 10) {
            displayHours = "0" + hh.toString();
        }
        else {
            displayHours = hh;
        }

        //Display updated time values to user
        document.getElementById("hour").value = displayHours;
        document.getElementById("minute").value = displayMinutes;
        document.getElementById("second").value = displaySeconds;


    } else {
        document.getElementById("hour").value = "00";
        document.getElementById("minute").value = "00";
        document.getElementById("second").value = "00";
        // document.getElementById("message").innerHTML = "Timer expired";
        document.getElementById("startStop").innerHTML = "start";
        clearInterval(countdownTimer);
    }
}

function startStop() {

    if (staatus === "stopped") {

        var startTime = new Date();

        var h = parseInt(document.getElementById("hour").value, 0);
        var m = parseInt(document.getElementById("minute").value, 0);
        var s = parseInt(document.getElementById("second").value, 0);

        //Check if entered numbers are positive
        if (h > 0 || m > 0 || s > 0) {

            var endTime = new Date(startTime.getTime() + (s * 1000 + m * 60000 + h * 3600000));

            //Call timer function
            countdownTimer = setInterval(function () {
                timer(endTime);
            }, 1000);
            
        }
        else {
            //ERROR 
            alert("Something went wrong! Check the entered numbers.");
        }

        document.getElementById("startStop").innerHTML = "stop";
        staatus = "started";

    }
    else {

        window.clearInterval(countdownTimer);
        document.getElementById("startStop").innerHTML = "resume";
        staatus = "stopped";

    }

}

//Function to reset the timer
function reset() {
    window.clearInterval(countdownTimer);
    document.getElementById("hour").value = "00";
    document.getElementById("minute").value = "00";
    document.getElementById("second").value = "00";
    document.getElementById("startStop").innerHTML = "start";
    staatus = "stopped";
}
