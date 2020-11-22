// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    var dayName;
    var weekend = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    var d = new Date(dateString);
    const day1 = d.getDay();
    dayName = weekend[day1];
    return dayName;
 }