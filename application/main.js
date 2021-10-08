var numerator = document.getElementById("numerator");
var i = 0;

function interval() {
    numerator.innerHTML = i;
    i++;
}

function startInterval() {
    const time = setInterval(interval, 1000);
    return time
}

function start(action = true) {
    if (action == true) {
        startInterval();
    } else {
        alert("Error...");
    }
}

function reset() {
    clearInterval(startInterval);
    numerator.innerHTML = 0;
}