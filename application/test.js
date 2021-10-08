let numerator = document.getElementById("numerator");

const timer = setInterval(function interval() {
    var i = 0;

    numerator.innerHTML = i;
    i++;
}, 1000);

function start(action = true) {
    if (action == true) {
        return timer
    } else {
        console.log("Error!")
    }
}

function reset() {
    numerator.innerHTML = 0;
    clearInterval(timer)
}