var datbtn = document.getElementById("button"),
datdiv = document.getElementById("div");
thedate = new Date(),
month = thedate.getMonth(),
day = thedate.getDate(),
year = thedate.getFullYear();
span = document.querySelectorAll("span");
const resultElement = document.getElementById("result");

function calc() {
    var date = new Date(),
    hours = date.getHours(),
    minute = date.getMinutes(),
    seconds = date.getSeconds();

    var dat = window.input.value,
    arr = dat.split("-"),
    arr0 = parseInt(arr[2]),  // Day
    arr1 = parseInt(arr[1]),  // Month
    arr2 = parseInt(arr[0]),  // Year
    userday = day - arr0,
    usermonth = month + 1 - arr1, // Adding 1 because month is 0-indexed
    useryear = year - arr2;

    // Check if birthdate is in the future
    var inputDate = new Date(arr2, arr1 - 1, arr0); // Months are 0-indexed
    if (inputDate > new Date()) {
        resultElement.textContent = "Error: Birth date cannot be in the future!";
        return;
    }

    if (userday < 0) {
        userday += 30;
        usermonth -= 1;
    }

    if (usermonth < 0) {
        usermonth += 12;
        useryear -= 1;
    }

    // Add leading zeros for formatting
    hours = (hours < 10) ? "0" + hours : hours;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    userday = (userday < 10) ? "0" + userday : userday;
    usermonth = (usermonth < 10) ? "0" + usermonth : usermonth;
    useryear = (useryear < 10) ? "0" + useryear : useryear;

    // Update the result
    if (useryear >= 18) {
        resultElement.textContent = "You're getting old, Buddy!";
    } else {
        resultElement.textContent = "You are still young!";
    }

    // Display the values
    span[0].textContent = useryear;
    span[1].textContent = usermonth;
    span[2].textContent = userday;
    span[3].textContent = hours;
    span[4].textContent = minute;
    span[5].textContent = seconds;

    dat.input.value = '';
    resultElement.value = '';
    setInterval(calc, 1000); // Update the time every second
}
