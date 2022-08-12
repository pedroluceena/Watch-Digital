const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const watch = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if ( hr < 10) hr = '0' + hr;

    if ( min < 10) hr = '0' + min;

    if ( s < 10) hr = '0' + s;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;
})

// const $html = document.querySelector('html');
//const $checkbox = document.querySelector('#switch')

//$checkbox.addEventListener('change', function() {
 //   $html.classList.toggle('dark-mode')
//})