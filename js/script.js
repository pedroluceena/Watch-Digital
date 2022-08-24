// Variaveis 
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const audio = new Audio('../assets/sino.mp3');
audio.loop = true;
let alarmTime = null;

// Logic Watch
const watch = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    const hourFormatted = String(hr).padStart(2, '0');
    const minutesFormatted = String(min).padStart(2, '0');

    if (`${hourFormatted}:${minutesFormatted}` === alarmTime) {
        audio.play();
        alarmTime = null;
    }

    hours.textContent = hourFormatted;
    minutes.textContent = minutesFormatted;
    seconds.textContent = String(s).padStart(2, '0');
})


// Dark Mode
const toggleEl = document.querySelector('.toggle');
const childToogleEl = document.querySelector('.toggle div');

let isDark = false;

const handleDarkMode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

const hundleToggle = (e) => {
    handleDarkMode()
    const element = toggleEl;
    
    if(isDark) {
        element.style.justifyContent = 'flex-start'
        element.style.background = 'black'
        childToogleEl.style.background = 'white'
        isDark = false
    }else {
        element.style.justifyContent = 'flex-end'
        element.style.background = 'white'
        childToogleEl.style.background = 'black'
        isDark = true
    }
    
};

toggleEl.addEventListener('click', hundleToggle);
childToogleEl.addEventListener('click', hundleToggle);


//Alarm 

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if(alarmTime) {
        const [ hour, minute ] = alarmTime.split(":");
        const current = new Date();
        const timeToAlarm = new Date();
        timeToAlarm.setHours(hour);
        timeToAlarm.setMinutes(minute);
        if (hour < current.getHours().toString()) timeToAlarm.setDate(timeToAlarm.getDate() + 1);

        if (timeToAlarm > current) alert('Alarme Ativado');
    }
}

function clearAlarm() {
    audio.pause();
}

