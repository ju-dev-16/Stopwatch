setInterval(function start() {
    var timer = document.getElementById('numerator');
    var i = 0;

    while (i < Infinity) {
        timer.innerHTML = i;
        i++;
    }
}, 1000);