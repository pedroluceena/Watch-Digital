
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Logic Watch
const watch = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    hours.textContent = String(hr).padStart(2, '0');
    minutes.textContent = String(min).padStart(2, '0');
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