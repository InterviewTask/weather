export interface Weather {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current: Current;
	hourly: Hourly[];
	daily: Daily[];
}
export interface IWeather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Current {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: IWeather[];
}


export interface Hourly {
	dt: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: IWeather[];
	pop: number;
}

export interface Temp {
	day: number;
	min: number;
	max: number;
	night: number;
	eve: number;
	morn: number;
}

export interface Feels_like {
	day: number;
	night: number;
	eve: number;
	morn: number;
}


export interface Daily {
	dt: number;
	sunrise: number;
	sunset: number;
	moonrise: number;
	moonset: number;
	moon_phase: number;
	temp: Temp;
	feels_like: Feels_like;
	pressure: number;
	humidity: number;
	dew_point: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: IWeather[];
	clouds: number;
	pop: number;
	rain: number;
	uvi: number;
}

