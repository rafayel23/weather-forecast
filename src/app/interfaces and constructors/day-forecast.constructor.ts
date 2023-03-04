

export interface Details {
    time: number,
    temp: number,
    icon: string,
    state: string,
}

/* --- custom constructor to organize server response --- */
export class DayForecast{
    constructor(
        public day: number,
        public month: number,
        public weekday: number,
        public minTemp: number,
        public maxTemp: number,
        public state: string,
        public icon: string,
        public details: Details[]
    ){
        this.day = day;
        this.month = month;
        this.weekday = weekday;
        this.minTemp = Math.round(minTemp - 273.15);
        this.maxTemp = Math.round(maxTemp - 273.15);
        this.state = state;
        this.icon = `https://openweathermap.org/img/w/${icon}.png`
        this.details = details;
        this.details.forEach(detail => {
            detail.icon = `https://openweathermap.org/img/w/${detail.icon}.png`;
            detail.temp = Math.round(detail.temp - 273.15);
        })
    }
}