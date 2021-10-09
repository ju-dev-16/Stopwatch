var time;
var i;
var action = false;

window.onload = function() {
    numerator = document.getElementById("numerator");
}

function start() {
    i = 0;
    action = false;
    time = setInterval(loop, 1000);
}

function stop() {
    clearInterval(time);
    i = numerator.innerHTML;
}

function reset() {
    action = true;
}

function loop() {
    if (action === false) {
        numerator.innerHTML = i;
        i++;
    } else if (action === true) {
        i = 0;
        numerator.innerHTML = 0;
        clearInterval(time);
    } else {
        console.log("Error");
    }
}