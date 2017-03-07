//const EST_DIFF = 12.00
//Date Objects
var dateObj = new Date();

if(current_minutes>=10) {
 var current_minutes = dateObj.getMinutes();
}
else {
    var current_minutes = "0" + dateObj.getMinutes();
}

if(current_seconds >= 10) {
   var current_seconds = dateObj.getSeconds(); 
}
else {
    var current_seconds = "0" + dateObj.getSeconds();
}
var current_hours   = dateObj.getHours();


var current_time_formatted = current_hours + ":" + current_minutes + ":" + current_seconds;
document.write(current_time_formatted);