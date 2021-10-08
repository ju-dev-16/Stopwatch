var i = 0;
var timer = document.getElementById('numerator');
var time = setInterval(function interval() {
    timer.innerHTML = i;
    i++;
}, 1000);

function start(action = true) {
    if (action == true) {
        interval();
    } else if (action == false) {
        timer.innerHTML = 0;
    } else {
        alert("Error...");
    }
}

function reset() {
    clearInterval(time);
}