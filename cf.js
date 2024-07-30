const header = document.querySelector(".problem-statement .header .title");
var time = "00:00:00";
setInterval(function () {
  hour = Number(time.substr(0, 2));
  min = Number(time.substr(3, 2));
  sec = Number(time.substr(5, 2));

  sec = sec + 1;
  if (sec == "60") {
    min = min + 1;
    sec = "00";
  }
  if (min == "60") {
    hour = hour + 1;
    min = "00";
  }
  time = hour + ":" + min + ":" + sec;
  console.log(hour, min, sec);
}, 1000);
