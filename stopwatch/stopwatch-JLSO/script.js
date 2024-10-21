let timer;
let running = false;
let startTime = 0;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

startStopBtn.addEventListener('click', () => {
    if (!running) {
        startStopBtn.textContent = 'Stop';
        startStopBtn.classList.remove('start');
        startStopBtn.classList.add('stop');
        startTimer();
    } else {
        startStopBtn.textContent = 'Resume';
        startStopBtn.classList.remove('stop');
        startStopBtn.classList.add('start');
        stopTimer();
    }
});

resetBtn.addEventListener('click', () => {
    resetTimer();
    startStopBtn.textContent = 'Start';
    startStopBtn.classList.remove('stop');
    startStopBtn.classList.add('start');
});

function startTimer() {
    running = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 10);
}

function stopTimer() {
    running = false;
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    display.textContent = '00:00:00.000';
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);

    const hours = String(time.getUTCHours()).padStart(2, '0');
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(time.getUTCMilliseconds()).padStart(3, '0');

    display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}