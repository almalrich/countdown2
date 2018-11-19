var heures=0;
var minutes=1;
var sec=5;

document.getElementById("secon").innerHTML=sec;
function ana (){
    sec--;
    document.getElementById("secon").innerHTML=sec;
        if(sec<1){
            sec=60;
        }


document.getElementById("minute").innerText=minutes;
        minutes--;
        if(minutes<1){
            minutes=60;
        }




    setTimeout(ana,1000);
}
setTimeout(ana,1000);


