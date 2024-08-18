const stopwatch = document.getElementById("timer");
const starts = document.getElementById("btn_start");

var timeoutId = null;
var ms = 0;
var sec = 0;
var min = 0;

function start(flag) {
    if (flag) {
        starts.disabled = true;
    }

    document.body.style.background = `linear-gradient(45deg, #30A357, #75E39A`;
 
    timeoutId = setTimeout(function() {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
 
        ms++;
 
        if (ms == 100) {
            sec = sec + 1;
            ms = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
 
        stopwatch.innerHTML = min + ':' + sec + ':' + ms;
 
        // calling start() function recursivly to continue stopwatch
        start();
 
    }, 10); // 10 milliseconds delay
}
 
function pause() {
    clearTimeout(timeoutId);
    starts.disabled = false;
    if (stopwatch.innerText != '00:00:00') {
        document.body.style.background = `linear-gradient(45deg, #FFAC2F, #FFF278`;
    }   
}
 
function reset() {
    document.body.style.background = `linear-gradient(45deg, #454545, #E9E9E9`;
    ms = 0;
    sec = 0;
    min = 0;
    clearTimeout(timeoutId);
    stopwatch.innerHTML = '00:00:00';
    starts.disabled = false;
}