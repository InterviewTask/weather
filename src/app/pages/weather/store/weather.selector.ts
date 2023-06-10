import { createSelector } from "@ngrx/store";
import { Weather } from "../models/weather.model";

const selectWeather = (state: any) => state.weather;

export const SelectedWeatherSelector = createSelector(
  selectWeather,
    (state: Weather) => state
);
