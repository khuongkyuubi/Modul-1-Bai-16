class Date {
    // month;
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay() {
        return this.day;
    }

    setDay(day) {
        this.day = day;
    }

    getMonth() {
        return this.month;
    }

    setMonth(month) {
        this.month = month;
    }

    getYear() {
        return this.year;
    }

    setYear(year) {
        this.year = year;
    }
}

let date = new Date(20,10,1997);
console.log(date.getDay());
date.setDay(30);

