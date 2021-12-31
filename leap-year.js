function leapYear(year){
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        return true;
    } 
    else {
        return false;
    }
} 
var years = 20278;
var result = leapYear(years);
console.log(result)
