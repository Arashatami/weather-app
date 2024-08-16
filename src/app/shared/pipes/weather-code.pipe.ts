import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherCode'
})
export class WeatherCodePipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0)
      return "Clear sky";
    else if (value === 1 || value === 2 || value === 3)
      return "clear";
    else if (value === 45 || value === 48)
      return "Fog";
    else if (value === 51 || value === 53 || value === 55)
      return "Drizzle";
    else if (value === 56 || value === 57)
      return "Freezing-Drizzle";
    else if (value === 61 || value === 63 || value === 65)
      return "Rain-Slight";
    else if (value === 66 || value === 67)
      return "Freezing";
    else if (value === 71 || value === 73 || value === 75)
      return "Snow-fall";
    else if (value === 77)
      return "Snow-grains";
    else if (value === 80 || value === 81 || value === 82)
      return "Rain-showers";
    else if (value === 85 || value === 86)
      return "Snow-showers";
    else if (value === 95)
      return "Thunderstorm-Slight";
    else if (value === 96 || value === 99)
      return "Thunderstorm-heavy";
    else
      return "";
  }

}
