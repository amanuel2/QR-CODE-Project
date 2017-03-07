//Date Objects
var dateObj = new Date();


var current_month = dateObj.getUTCMonth() + 1; //months from 1-12
var current_date = dateObj.getUTCDate();
var current_year = dateObj.getUTCFullYear();



var current_date_formatted = current_month + "/" + current_date + "/" + current_year;
document.write(current_date_formatted);