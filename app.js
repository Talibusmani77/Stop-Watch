let stop = document.getElementById("stop");
let start = document.getElementById("start");
let reset = document.getElementById("reset");

let time = document.getElementById("time");

let [sec, min, hr] = [0,0,0];
let timer = null;

function stopWatch(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++;
        if(min == 60){
            min = 0;
            hr++;
        }
    }

    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec< 10 ? "0" + sec : sec;

    time.innerHTML = h +" : "+ m +" : "+ s;
}

function startTimer(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
    console.log("start");
}

function stopTimer(){
    clearInterval(timer);
    console.log("stop");
}

function resetTimer(){
    clearInterval(timer);
    [sec, min, hr] = [0,0,0];
    time.innerHTML = "00 : 00 : 00";
    console.log("reset");
}