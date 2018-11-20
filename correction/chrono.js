var sec;

var minutes = 0;

var heures = 0;

var x;


function ana() {
    if (heures == 0 && minutes == 0 && sec == 0) {
        /*  clearTimeout(x);*/
        alert('fini');


    }
    sec--;

    if (sec < 0) {
        minutes = minutes - 1;
        sec = 59;
    }

    if (minutes < 0) {
        if (heures > 0) {
            minutes = 59;
            heures = heures - 1;
        }
        else {
            minutes = 0;
        }

    }


    document.getElementById("secon").innerHTML = sec;
    document.getElementById("minut").innerHTML = minutes;
    document.getElementById("heure").innerHTML = heures;


    x = setTimeout(ana, 1000);
}

document.getElementById("tempfinal").addEventListener("click", function () {
    heures = document.getElementById("heur").value;
    minutes = document.getElementById("minu").value;
    sec = document.getElementById("second").value;
    ana();
});

document.getElementById("res").addEventListener("click", function () {
    clearTimeout(x);
    sec = 0;
    minutes = 0;
    heures = 0;
});

document.getElementById("rest").addEventListener("click", function () {
    sec = 0;
    document.getElementById("secon").innerHTML = sec;
    minutes = 0;
    document.getElementById("minut").innerHTML = minutes;
    heures = 0;
    document.getElementById("heur").innerHTML = heures;


});