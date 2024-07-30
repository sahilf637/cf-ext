const header = document.querySelector(".problem-statement .header");
const URL = window.location.href;
const timer = document.createElement("div");
var time = localStorage.getItem(URL);
if (!time) time = "00:00:00";
timer.textContent = time;
timer.className = "timerC";
header.appendChild(timer);
//console.log(header);
const add = (a) => {
  if (a[1] != "9") {
    a = a[0] + (parseInt(a[1]) + 1).toString();
  } else {
    a = (parseInt(a[0]) + 1).toString() + "0";
  }
  return a;
};
const Interval = () => {
  timeInterval = setInterval(function () {
    hour = time.substr(0, 2);
    min = time.substr(3, 2);
    sec = time.substr(6, 2);

    //console.log(hour, min, sec);
    sec = add(sec);
    if (sec == "60") {
      min = add(min);
      sec = "00";
    }
    if (min == "60") {
      hour = add(hour);
      min = "00";
    }
    time = hour + ":" + min + ":" + sec;
    document.querySelector(".problem-statement .header .timerC").textContent =
      time;
  }, 1000);
};
var timeInterval;
Interval();
window.onfocus = function () {
  Interval();
};

window.onblur = function () {
  clearInterval(timeInterval);
};

window.addEventListener("beforeunload", function (e) {
  localStorage.setItem(URL, time);
});
