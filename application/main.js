var i = 0;
var pause = true;

window.onload = function() {
    numerator = document.getElementById("numerator");
}

function start() {
    if (pause === true) {
        pause = false;
        loop();
    }
}

function stop() {
    pause = true;
    inHTML();
}

function reset() {
    pause = true;
    i = 0;
    inHTML();
}

function loop() {
    if (pause === false) {
        i++;
        inHTML();
        setTimeout(loop, 1000);
    } else if (pause === true) {

    } else {
        alert("Error...");
    }
}

function inHTML() {
    numerator.innerHTML = i;
}