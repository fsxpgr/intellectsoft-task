import "./DailyForecast.css";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "src/modules/forecast/api/getWeather.ts";
import { ForecastCard } from "src/modules/forecast/components/ForecastCard/ForecastCard.tsx";
import { Typography } from "@mui/material";
interface Props {
  city: string;
}
export function DailyForecast({ city }: Props) {
  const { isPending, error, data } = useQuery({
    queryKey: [city],
    queryFn: getWeather,
  });

  if (!city) {
    return (
      <Typography sx={{ fontSize: 30 }} fontWeight={600} align={"center"}>
        Please select a city
      </Typography>
    );
  }

  if (isPending)
    return (
      <Typography sx={{ fontSize: 30 }} fontWeight={600} align={"center"}>
        Loading weather for {city}...
      </Typography>
    );

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Typography sx={{ fontSize: 30 }} fontWeight={600} gutterBottom>
        Two days forecast for: {city}
      </Typography>
      {data?.map((dayForecast) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{ fontSize: 24 }}
            fontWeight={600}
            gutterBottom
            align={"center"}
          >
            {dayForecast.date}
          </Typography>
          <div className={"weather-card-container"}>
            {dayForecast.forecast.map((it) => (
              <ForecastCard
                sky={it.sky}
                temperature={it.temperature}
                wind={it.wind}
                time={it.time}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
