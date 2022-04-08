// @ts-ignore
class Date {
    private day : number;
    private month : number;
    private year : number;
// Date(day,month, year )
    public constructor(day : number, month: number, year: number ) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public getDay() : number {
        return this.day;
    }


}

