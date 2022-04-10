class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    getCelsius() {
        if (this.celsius >= -273) {
            return this.celsius;
        } else {
            return `${this.celsius}<sup>o</sup>C is too low. Limit of C degree is -273<sup>o</sup>C<br>`;
        }
    }

    setCelsius(celsius) {
        this.celsius = celsius;
    }

    getFahrenheit() {
        if (this.celsius >= -273) {
            return this.celsius * 1.8 + 32;
        } else return "";
    }

    getKenvin() {
        if (this.celsius >= -273) {
            return (this.celsius + 273.15).toFixed(2);
        } else return "";
    }
}