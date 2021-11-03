
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

