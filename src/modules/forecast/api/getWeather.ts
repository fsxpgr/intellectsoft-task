import { randomInteger } from "src/common/utils/randomInteger.ts";
import { formatTo24HourTime } from "src/modules/forecast/utils/formatTo24HourTime.ts";

const timesOfDay = ["06:00", "13:00", "18:00", "23:00"];

export type SkyTypes = "clear" | "rainy" | "windy" | "cloudy";

function getRandomSky(): SkyTypes {
  return ["clear", "rainy", "windy", "stormy", "cloudy"][
    randomInteger(0, 4)
  ] as SkyTypes;
}

interface WeatherResponse {
  date: string;
  forecast: {
    time: string;
    temperature: number;
    wind: number;
    sky: SkyTypes;
  }[];
}

export function getWeather(): Promise<WeatherResponse[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve([
        {
          date: "Today",
          forecast: timesOfDay
            .filter((timeOfDay) => timeOfDay > formatTo24HourTime(new Date()))
            .map((timeOfDay) => ({
              time: timeOfDay,
              temperature: randomInteger(15, 25),
              wind: randomInteger(0, 10),
              sky: getRandomSky(),
            })),
        },
        {
          date: "Tomorrow",
          forecast: timesOfDay.map((timeOfDay) => ({
            time: timeOfDay,
            temperature: randomInteger(15, 25),
            wind: randomInteger(0, 10),
            sky: getRandomSky(),
          })),
        },
      ]);
    }, 2000);
  });
}
