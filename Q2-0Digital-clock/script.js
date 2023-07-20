// script.js

function updateTime() {
    const hourElement = document.getElementById("hour");
    const minuteElement = document.getElementById("minute");
    const secondElement = document.getElementById("second");
    const currentTime = new Date();
  
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    const formattedHour = `${formatTime(hours)}`  
    const formattedMinute =  `${formatTime(minutes)}`  
    const formattedsecond = `${formatTime(seconds)}`;
    hourElement.textContent = formattedHour;
    minuteElement.textContent = formattedMinute;
    secondElement.textContent = formattedsecond;
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  // Initial update
  updateTime();
  