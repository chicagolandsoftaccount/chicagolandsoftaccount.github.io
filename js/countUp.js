//I did not write the below function
//source of this function:
//https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

//why doesn't javascript have a built-in sleep function???


//increments until it hits the limit
function countUp(numId, lower, upper) {
    for (i = lower; i < upper; i++) {
        counceOnce(numId);
        sleep(100);
    }
}


function counceOnce(numId){
    var newValue = parseInt(document.getElementById(numId).innerHTML);
    newValue += 1;
    var myNewStr = newValue.toString();
    document.getElementById(numId).innerHTML = myNewStr;
    $(numId).hide().show(0);
}

//the above code has issues so I gave up on that




//I did not write the following function
//the source is from here:
//https://stackoverflow.com/questions/16994662/count-animation-from-number-a-to-b
function animateValue(id, start, end, duration) {
    // assumes integer values for start and end
    
    var obj = document.getElementById(id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
  
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}