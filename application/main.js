var timer;
var action = false;
var action_2 = false;
var i;

window.onload = function() {
    numerator = document.getElementById("numerator");
}

function start() {
    i = 0;

    setInterval(loop, 1000);
}

function stop() {
    action_2 = true;
    setTimeout(check, 1000);
}

function reset() {
    action = true;
}

function loop() {
    if (action === false) {
        numerator.innerHTML = i;
        i++
    } else if (action === true) {
        numerator.innerHTML = 0;
        i = 0;
        clearInterval(loop);
    } else {
        console.log("Error")
    }
}

function check() {
    if (action_2 === false) {
        numerator.innerHTML = i;
        i++
    } else if (action_2 === true) {
        clearInterval(loop);
        i = i;
        numerator.innerHTML = i;
    } else {
        console.log("Error")
    }
}