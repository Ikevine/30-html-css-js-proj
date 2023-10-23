let start = document.getElementById('start');
let reset = document.getElementById('reset');
let stop = document.getElementById('stop');

let hour = 0;
let min = 0;
let sec = 0;
let count = 0;

start.addEventListener('click', function(){
    timer = true;
    stopWatch();
});

stop.addEventListener('click', function (){
    timer = false;
});


reset.addEventListener('click',function(){
    timer = false;
    hour = 0;
    sec = 0;
    min = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('mn').innerHTML = "00";
    document.getElementById('sc').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
})


function stopWatch(){
    if(timer){
        count++
        if(count == 100){
            sec++;
            count = 0;
        }
        if(sec == 60){
            min++;
            sec=0;
        }
        if(min = 60){
            hour++
            min=0;
            sec =0;
        }

    let hrstring = hour;
    let mnstring = min;
    let secstring = sec;
    let countstring = count;

    if(hour < 10){
        hrstring = "0"+hrstring;
    }
    if(min < 10){
        mnstring = "0"+mnstring;
    }
    if(sec < 10){
        secstring = "0"+secstring;
    }
    if(count < 10){
        countstring = "0"+countstring;
    }

    document.getElementById('hr').innerHTML = hrstring;
    document.getElementById('mn').innerHTML = mnstring;
    document.getElementById('sc').innerHTML = secstring;
    document.getElementById('count').innerHTML = countstring;
    setTimeout(stopWatch, 10)
    }

    
}