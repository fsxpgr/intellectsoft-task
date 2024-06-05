import { useState } from "react";
import userLogo from "src/assets/man-user.svg";
import { useStore } from "src/store/store.ts";
import "./Forecast.css";
import { countries } from "countries-list";
import { Autocomplete, TextField } from "@mui/material";
import { DailyForecast } from "../components/DailyForecast/DailyForecast.tsx";

const euCapitals = Object.values(countries)
  .filter((country) => country.continent === "EU")
  .map((country) => country.capital);

export function Forecast() {
  const [city, setCity] = useState("");
  const email = useStore((state) => state.email);

  return (
    <div className={"forecast-page"}>
      <div className={"header"}>
        <div className={"user-info"}>
          <img src={userLogo} className="user-pic" alt="User logo" />
          <span>{email}</span>
        </div>
      </div>
      <Autocomplete
        style={{
          background: "rgba(255,255,255,0.9)",
          padding: 10,
          marginBottom: 20,
        }}
        disablePortal
        options={euCapitals}
        sx={{ width: 300 }}
        onChange={(_e, value) => {
          if (value && euCapitals.includes(value)) {
            setCity(value);
          }
        }}
        renderInput={(params) => <TextField {...params} label="City" />}
      />

      <DailyForecast city={city} />
    </div>
  );
}
