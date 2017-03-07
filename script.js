//Date Objects
var dateObj = new Date();
var current_month = dateObj.getUTCMonth() + 1; //months from 1-12
var current_date = dateObj.getUTCDate();
var current_year = dateObj.getUTCFullYear();

var current_hours   = dateObj.getHours();
var current_minutes = dateObj.getMinutes();
var current_seconds = dateObj.getSeconds();


var current_date_formatted = current_date + "/" + current_month + "/" + current_year;
var current_time_formatted = current_hours + ":" + current_minutes + ":" + current_seconds;

document.write(current_date_formatted);
document.write("<br>");
document.write(current_time_formatted);
document.write("<br>");
document.write(current_month + " " + current_date + ", " + current_year + " " + current_hours + ":" + (current_minutes + 15) +  ":" + "00");



//wot do foq?
//Just for a test (don't judge)
// Set the date we're counting down to
var countDownDate = new Date(current_month + " " + current_date + ", " + current_year + " " + current_hours + ":" + (current_minutes + 15) +  ":" + "00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);