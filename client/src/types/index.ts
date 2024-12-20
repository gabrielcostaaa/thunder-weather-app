  export interface FormInputTipos {
    cep: string;
    localidade: string;
  }

  export interface WeatherData {
    city: string;
    time: string;
    clime: string;
    isDay: boolean;
    temperature: number;
    pressure: number;
    humidity: number;
    feelslike: number;
    windSpeed: number;
    precip: number;
    uv: number;
    cloudcover: number;
  }