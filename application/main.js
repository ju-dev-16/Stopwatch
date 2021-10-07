function start(action = true) {
    var timer = document.getElementById('numerator');
    var i = 0;

    if (action == true) {
        var time = setInterval(function interval() {
            timer.innerHTML = i;
            i++;
        }, 1000);
    } else if (action == false) {
        timer.innerHTML = 0;
        clearInterval(time)
    } else {
        alert("Fehler aufgetreten!")
    }
}

function reset() {
    start(false)
}