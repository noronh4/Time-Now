const hand_hr = document.querySelector('.hand.hour');
const hand_min = document.querySelector('.hand.minute');
const hand_sec = document.querySelector('.hand.second');



function tick() {
    const d = new Date();
    // Seconds
    let seconds = d.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    hand_sec.style.transform = `translateY(-50%) rotate(${secondsDegrees}deg)`;
    // Minutes
    let minutes = d.getMinutes();
    const minDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    hand_min.style.transform = `translateY(-50%) rotate(${minDegrees}deg)`;
    // Hours
    let hour = d.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
    hand_hr.style.transform = `translateY(-50%) rotate(${hourDegrees}deg)`;

    
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    document.getElementById('timenow').textContent = `${hour}:${minutes}:${seconds}`;

}
tick();
setInterval(tick, 1000);

function data() {
    let date = new Date();
    
    let getTime = date.getTime();
    let dateTime = Date(getTime);
    //let patt = /\w{3}\s\w{3}\s\d*\s\d+/gm;
    console.log(getTime);
    let patt = /\w{3}\s\w{3}\s\d*\s\d+/gm;
    
    let result = dateTime.split(patt);
    let result2 = patt.exec(dateTime);
    let result3 = 
    console.log(result);
    console.log(result2);
    //let result = patt.exec(j);
    //return result;
}

data();