let totalTimeInSeconds = 0;
let resetValue = 0;
let isRunning = false;
let intervalId = null;
const value = document.getElementById("Value");
const value20 = document.getElementById("Value20");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const StartTimer = document.getElementById("StartTimer");
const setTime = document.getElementById("setTime");
const printValue = document.getElementById("printValue");
function updateDisplay() {
  if (totalTimeInSeconds > -1) {
    console.log(totalTimeInSeconds);
    const hours = Math.floor(totalTimeInSeconds / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const seconds = totalTimeInSeconds % 60;
    value20.innerText = `${padWithZero(hours)}:${padWithZero(
      minutes
    )}:${padWithZero(seconds)}`;
    printValue.innerText = `${padWithZero(hours)}:${padWithZero(
      minutes
    )}:${padWithZero(seconds)}`;
  }
}

function padWithZero(number) {
  return number.toString().padStart(2, "0");
}

increase.addEventListener("click", function (e) {
  totalTimeInSeconds += 1;
  updateDisplay();
});

setTime.addEventListener("click", function () {
  const parts = value20.value.split(":");
  if (parts.length === 3) {
    // Additional checks to ensure that each part is a valid number
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    const seconds = parseInt(parts[2], 10);

    if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
      totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
      resetValue = totalTimeInSeconds;
      updateDisplay();
    } else {
      console.log(
        "Please enter valid numbers for hours, minutes, and seconds."
      );
    }
  } else {
    console.log("Please enter the time in HH:MM:SS format.");
  }
});

decrease.addEventListener("click", function (e) {
  totalTimeInSeconds -= 1;
  updateDisplay();
});

reset.addEventListener("click", function (e) {
  totalTimeInSeconds = resetValue;
  isRunning = true;
  updateDisplay();
});
StartTimer.addEventListener("click", function (e) {
  if (isRunning) {
    clearInterval(intervalId);
    intervalId = null;
    isRunning = false;
    StartTimer.innerText = "Start";
  } else {
    if (totalTimeInSeconds > 0) {
      intervalId = setInterval(() => {
        if (totalTimeInSeconds > 0) {
          totalTimeInSeconds -= 1;
          updateDisplay(); // Update the display with the new counter value
        } else {
          clearInterval(intervalId);
          intervalId = null;
          isRunning = false;
          StartTimer.innerText = "Start Timer";
          alert("Time's up!"); // Optional: Notify the user that the timer has ended
        }
      }, 1000);
      isRunning = true; // Update the running state
      StartTimer.innerText = "Stop";
      console.log(totalTimeInSeconds);
    }
  }
});
