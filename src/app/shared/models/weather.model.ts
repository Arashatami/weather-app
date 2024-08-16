export interface WeatherModel {
  temperature: 28.6,
  windspeed: 7.6,
  winddirection: 25,
  weathercode: 0,
  is_day: 1,
  time: "2023-06-04T15:00"
}

export interface WeatherResponseModel {
  current_weather: WeatherModel;
}