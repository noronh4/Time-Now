const hand_hr = document.querySelector('.hand.hour');
const hand_min = document.querySelector('.hand.minute');
const hand_sec = document.querySelector('.hand.second');

const days = {
    'Sun': 'Domingo',
    'Mon': 'Segunda-feira',
    'Tue': 'Terca-feira',
    'Wed': 'Quarta-feira',
    'Thu': 'Quinta-feira',
    'Fri': 'Sexta-feira',
    'Sat': 'Sabado',
};

const months = {
    'Jun': 'Janeiro',
    'Feb': 'Fevereiro',
    'Mar': 'Marco',
    'Apr': 'Abril',
    'May': 'Maio',
    'Jun': 'Junho',
    'Jul': 'Julho',
    'Aug': 'Agosto',
    'Sep': 'Setembro',
    'Oct': 'Outubro',
    'Nov': 'Novembro',
    'Dec': 'Dezembro'

};



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

    
    if (hour < 10) {
        hour = `0${hour}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    document.getElementById('timeNow').textContent = `${hour}:${minutes}:${seconds}`;

}

tick();
setInterval(tick, 1000);



function data() {
    let date = new Date();
    
    let getTime = date.getTime();
    let dateTime = Date(getTime);
    
    
    let patt = /\w{3}\s\w{3}\s\d*\s\d+/gm;
    
    
    let objRegex = patt.exec(dateTime);
    let resultString = objRegex[0];
    let result = resultString.split(' ');
    
    // manipular a string de result fora da funcao, atraves do 'return'
    return result;
}
let x = data();
console.log(x);

const keyDays = [x[0]];
const keyMonths = [x[1]];


keyDays.forEach(elements => {
    let writtingDay = days[keyDays];
    //coloquei um 'forEach' dentro de outro pra conseguir adicionar os dois valores (writtingDay e writtingMonth) ao html
    keyMonths.forEach(element => {
        let writtingMonth = months[keyMonths];
        document.getElementById('writtenDate').textContent = `${writtingDay}, ${x[2]} de ${writtingMonth} de ${x[3]}`;
    });
});