// Selecting the elements with the classes "hrs", "min", and "sec"
const hrs = document.querySelector(".hrs");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

// Setting up an interval to update the clock every second
setInterval(() => {
  // Creating a new Date object to get the current date and time
  let currentDate = new Date();

  // Updating the hours element with the current hours
  hrs.innerHTML =
    (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
  // Updating the minutes element with the current minutes
  min.innerHTML =
    (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
  // Updating the seconds element with the current seconds
  sec.innerHTML =
    (currentDate.getSeconds() < 10 ? "0" : "") + currentDate.getSeconds();
}, 1000); // The interval is set to 1000 milliseconds (1 second)
