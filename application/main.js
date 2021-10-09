var action = false;
var sec_action = false;
var i;

window.onload = function() {
    numerator = document.getElementById("numerator");
}

function start() {
    i = 0;
    action = false;
    setInterval(loop, 1000);
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
        clearInterval(loop);
    } else {
        console.log("Error");
    }
}