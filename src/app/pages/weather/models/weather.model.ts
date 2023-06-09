export interface Weather {
	coord: Coord;
	weather: IWeather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	clouds: Cloud;
	dt: number;
	sys: Sy;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}
export interface Coord {
	lon: number;
	lat: number;
}

export interface IWeather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
	sea_level: number;
	grnd_level: number;
}

export interface Wind {
	speed: number;
	deg: number;
	gust: number;
}

export interface Cloud {
	all: number;
}

export interface Sy {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}

