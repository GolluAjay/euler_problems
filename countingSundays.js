const daysInMonth = {
    "1":31,
    "2":28,
    "3":31,
    "4":30,
    "5":31,
    "6":30,
    "7":31,
    "8":31,
    "9":30,
    "10":31,
    "11":30,
    "12":31
  };
function countingSundays(firstYear, lastYear) {
    let day = firstDayOfTheYear(firstYear);
    let count = 0;

    for(let i=firstYear;i<lastYear;i++){
        let month = 1;

        if(isaleapyear(i)) daysInMonth[2] = 29;
        else daysInMonth[2] = 28;

        while(month<=12){
            if(day%7==0){
                count += 1;
            }

            day += daysInMonth[month];
            month++;
        }
    }
    return count;
  }

function firstDayOfTheYear(year){
    let day=0;
    for(let i=1900;i<year;i++){
        day += isaleapyear(i) ? 366 : 365;
    }
    return day;
}

function isaleapyear(n){
    if(n%4===0 && (n%100!==0 || n%400===0))
        return true;
    return false;
}

countingSundays(1995, 2000);