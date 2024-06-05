import { Card, CardContent, Typography } from "@mui/material";
import cloudIcon from "src/assets/wi-cloud.svg";
import sunnyIcon from "src/assets/wi-day-sunny.svg";
import rainIcon from "src/assets/wi-rain.svg";
import thunderstormIcon from "src/assets/wi-thunderstorm.svg";
import windyIcon from "src/assets/wi-windy.svg";

import "./ForecastCard.css";
import { SkyTypes } from "src/modules/forecast/api/getWeather.ts";

const iconsMap = {
  clear: sunnyIcon,
  rainy: rainIcon,
  windy: windyIcon,
  stormy: thunderstormIcon,
  cloudy: cloudIcon,
} as const;

interface Props {
  sky: SkyTypes;
  temperature: number;
  wind: number;
  time: string;
}
export function ForecastCard({ sky, temperature, wind, time }: Props) {
  return (
    <Card className={"card-wrapper"}>
      <CardContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: 24 }}
            fontWeight={600}
            color="text.primary"
            gutterBottom
            align={"center"}
          >
            {time}
          </Typography>
          <img
            src={iconsMap[sky] || ""}
            className="weather-pic"
            alt="Weather pic"
          />
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {sky}
          </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {temperature}&#176; C
          </Typography>

          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {wind} km/h
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
