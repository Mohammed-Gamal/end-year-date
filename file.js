let dateNow = new Date(); // current date
let FYFirst = dateNow.getFullYear(); // current year

if (dateNow.getMonth() < 9) {
  FYFirst -= 1;
}

let FYLast = FYFirst + 1;

let endYear = new Date(`31 Dec ${FYLast} 23:59:59`).getTime();

setInterval(() => {
  dateNow = new Date().getTime();
  let dateDiff = endYear - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days;

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours;

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML = minutes;

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML = seconds;
}, 1000);

document
  .querySelector(".end-date")
  .append(`${new Date(`31 Dec ${FYLast} 23:59:59`)}`);

document.querySelector(".curr-year").innerHTML = FYLast;
