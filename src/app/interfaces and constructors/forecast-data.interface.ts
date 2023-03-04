import { HourlyForecast } from './hourly-forecast.interface';

export interface ForecastData{
    city: {
        coord: {
            lat: number,
            lon: number,
        },
        country: string,
        id: number,
        name: string,
        population: number,
        timezone: number,
    }
    cnt: number,
    cod: string,
    list: HourlyForecast[]
}