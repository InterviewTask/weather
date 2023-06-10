import { createReducer, on } from '@ngrx/store';

import * as weatherActions from './weather.actions';
import { WeatherState } from '.';



export const weatherFeatureKey = 'weather';


export const initialState: WeatherState = {

    "lat": 6.7819,
    "lon": -10.7035,
    "timezone": "Africa/Monrovia",
    "timezone_offset": 0,
    "current": {
        "dt": 1686406631,
        "sunrise": 1686378425,
        "sunset": 1686423450,
        "temp": 29.97,
        "feels_like": 34.04,
        "pressure": 1012,
        "humidity": 66,
        "dew_point": 22.92,
        "uvi": 6.58,
        "clouds": 85,
        "visibility": 10000,
        "wind_speed": 3.42,
        "wind_deg": 225,
        "wind_gust": 4.25,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ]
    },
    "hourly": [
        {
            "dt": 1686405600,
            "temp": 29.97,
            "feels_like": 34.04,
            "pressure": 1012,
            "humidity": 66,
            "dew_point": 22.92,
            "uvi": 6.58,
            "clouds": 85,
            "visibility": 10000,
            "wind_speed": 3.42,
            "wind_deg": 225,
            "wind_gust": 4.25,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.86
        },
        {
            "dt": 1686409200,
            "temp": 29.73,
            "feels_like": 33.94,
            "pressure": 1012,
            "humidity": 68,
            "dew_point": 23.19,
            "uvi": 4.79,
            "clouds": 85,
            "visibility": 10000,
            "wind_speed": 3.31,
            "wind_deg": 228,
            "wind_gust": 4.6,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.97,

        },
        {
            "dt": 1686412800,
            "temp": 28.95,
            "feels_like": 33.18,
            "pressure": 1012,
            "humidity": 73,
            "dew_point": 23.62,
            "uvi": 4.01,
            "clouds": 83,
            "visibility": 9112,
            "wind_speed": 2.99,
            "wind_deg": 229,
            "wind_gust": 5.01,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686416400,
            "temp": 28.12,
            "feels_like": 32.08,
            "pressure": 1012,
            "humidity": 78,
            "dew_point": 23.92,
            "uvi": 1.66,
            "clouds": 77,
            "visibility": 10000,
            "wind_speed": 2.62,
            "wind_deg": 223,
            "wind_gust": 5.09,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686420000,
            "temp": 26.57,
            "feels_like": 26.57,
            "pressure": 1012,
            "humidity": 86,
            "dew_point": 24.03,
            "uvi": 0.4,
            "clouds": 69,
            "visibility": 10000,
            "wind_speed": 2.12,
            "wind_deg": 218,
            "wind_gust": 4.91,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686423600,
            "temp": 24.16,
            "feels_like": 25.11,
            "pressure": 1013,
            "humidity": 95,
            "dew_point": 23.34,
            "uvi": 0,
            "clouds": 18,
            "visibility": 10000,
            "wind_speed": 1.38,
            "wind_deg": 216,
            "wind_gust": 2.38,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686427200,
            "temp": 23.72,
            "feels_like": 24.65,
            "pressure": 1014,
            "humidity": 96,
            "dew_point": 23.09,
            "uvi": 0,
            "clouds": 24,
            "visibility": 10000,
            "wind_speed": 0.96,
            "wind_deg": 194,
            "wind_gust": 1.18,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686430800,
            "temp": 23.64,
            "feels_like": 24.59,
            "pressure": 1014,
            "humidity": 97,
            "dew_point": 23.06,
            "uvi": 0,
            "clouds": 50,
            "visibility": 10000,
            "wind_speed": 1.31,
            "wind_deg": 234,
            "wind_gust": 3.19,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0.8
        },
        {
            "dt": 1686434400,
            "temp": 23.35,
            "feels_like": 24.27,
            "pressure": 1015,
            "humidity": 97,
            "dew_point": 22.85,
            "uvi": 0,
            "clouds": 62,
            "visibility": 10000,
            "wind_speed": 0.15,
            "wind_deg": 281,
            "wind_gust": 0.2,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686438000,
            "temp": 23.21,
            "feels_like": 24.15,
            "pressure": 1015,
            "humidity": 98,
            "dew_point": 22.85,
            "uvi": 0,
            "clouds": 70,
            "visibility": 10000,
            "wind_speed": 1.1,
            "wind_deg": 234,
            "wind_gust": 1.94,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686441600,
            "temp": 23.17,
            "feels_like": 24.1,
            "pressure": 1015,
            "humidity": 98,
            "dew_point": 22.87,
            "uvi": 0,
            "clouds": 75,
            "visibility": 10000,
            "wind_speed": 1.04,
            "wind_deg": 223,
            "wind_gust": 1.78,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.8
        },
        {
            "dt": 1686445200,
            "temp": 22.86,
            "feels_like": 23.76,
            "pressure": 1014,
            "humidity": 98,
            "dew_point": 22.6,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 0.93,
            "wind_deg": 259,
            "wind_gust": 2.39,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.82,

        },
        {
            "dt": 1686448800,
            "temp": 23,
            "feels_like": 23.91,
            "pressure": 1013,
            "humidity": 98,
            "dew_point": 22.72,
            "uvi": 0,
            "clouds": 96,
            "visibility": 10000,
            "wind_speed": 1.28,
            "wind_deg": 245,
            "wind_gust": 3.75,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.78,

        },
        {
            "dt": 1686452400,
            "temp": 23.08,
            "feels_like": 24,
            "pressure": 1013,
            "humidity": 98,
            "dew_point": 22.74,
            "uvi": 0,
            "clouds": 97,
            "visibility": 10000,
            "wind_speed": 0.92,
            "wind_deg": 291,
            "wind_gust": 2.86,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.82,

        },
        {
            "dt": 1686456000,
            "temp": 22.97,
            "feels_like": 23.88,
            "pressure": 1013,
            "humidity": 98,
            "dew_point": 22.68,
            "uvi": 0,
            "clouds": 97,
            "visibility": 10000,
            "wind_speed": 0.34,
            "wind_deg": 358,
            "wind_gust": 0.43,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.85,

        },
        {
            "dt": 1686459600,
            "temp": 23.1,
            "feels_like": 24.02,
            "pressure": 1013,
            "humidity": 98,
            "dew_point": 22.67,
            "uvi": 0,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 0.38,
            "wind_deg": 187,
            "wind_gust": 0.51,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.93,

        },
        {
            "dt": 1686463200,
            "temp": 23.07,
            "feels_like": 23.97,
            "pressure": 1014,
            "humidity": 97,
            "dew_point": 22.69,
            "uvi": 0,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 0.77,
            "wind_deg": 167,
            "wind_gust": 0.89,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.89
        },
        {
            "dt": 1686466800,
            "temp": 23.24,
            "feels_like": 24.15,
            "pressure": 1014,
            "humidity": 97,
            "dew_point": 22.74,
            "uvi": 0.15,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 1.31,
            "wind_deg": 180,
            "wind_gust": 3.14,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.1
        },
        {
            "dt": 1686470400,
            "temp": 24.49,
            "feels_like": 25.42,
            "pressure": 1014,
            "humidity": 93,
            "dew_point": 23.27,
            "uvi": 0.96,
            "clouds": 99,
            "visibility": 10000,
            "wind_speed": 1.71,
            "wind_deg": 174,
            "wind_gust": 4.55,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.1
        },
        {
            "dt": 1686474000,
            "temp": 26.09,
            "feels_like": 26.09,
            "pressure": 1015,
            "humidity": 85,
            "dew_point": 23.39,
            "uvi": 2.93,
            "clouds": 96,
            "visibility": 10000,
            "wind_speed": 2.25,
            "wind_deg": 199,
            "wind_gust": 5.03,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.06
        },
        {
            "dt": 1686477600,
            "temp": 27.66,
            "feels_like": 30.87,
            "pressure": 1015,
            "humidity": 77,
            "dew_point": 23.2,
            "uvi": 4.7,
            "clouds": 84,
            "visibility": 10000,
            "wind_speed": 2.68,
            "wind_deg": 208,
            "wind_gust": 4.37,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.2,

        },
        {
            "dt": 1686481200,
            "temp": 27.9,
            "feels_like": 31.14,
            "pressure": 1015,
            "humidity": 75,
            "dew_point": 23.07,
            "uvi": 7.14,
            "clouds": 86,
            "visibility": 10000,
            "wind_speed": 2.77,
            "wind_deg": 204,
            "wind_gust": 4.25,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.28,

        },
        {
            "dt": 1686484800,
            "temp": 28.41,
            "feels_like": 31.95,
            "pressure": 1015,
            "humidity": 73,
            "dew_point": 23.19,
            "uvi": 8.83,
            "clouds": 87,
            "visibility": 10000,
            "wind_speed": 3.02,
            "wind_deg": 207,
            "wind_gust": 3.98,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.78,

        },
        {
            "dt": 1686488400,
            "temp": 28.51,
            "feels_like": 32.34,
            "pressure": 1014,
            "humidity": 74,
            "dew_point": 23.49,
            "uvi": 9.97,
            "clouds": 57,
            "visibility": 10000,
            "wind_speed": 2.96,
            "wind_deg": 221,
            "wind_gust": 4.07,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.98,

        },
        {
            "dt": 1686492000,
            "temp": 27.81,
            "feels_like": 31.49,
            "pressure": 1013,
            "humidity": 79,
            "dew_point": 23.94,
            "uvi": 8.76,
            "clouds": 65,
            "visibility": 6055,
            "wind_speed": 3.23,
            "wind_deg": 224,
            "wind_gust": 4.82,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686495600,
            "temp": 27.06,
            "feels_like": 30.17,
            "pressure": 1012,
            "humidity": 83,
            "dew_point": 24.05,
            "uvi": 6.39,
            "clouds": 70,
            "visibility": 6634,
            "wind_speed": 3.04,
            "wind_deg": 224,
            "wind_gust": 4.67,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686499200,
            "temp": 25.99,
            "feels_like": 25.99,
            "pressure": 1012,
            "humidity": 88,
            "dew_point": 23.74,
            "uvi": 2.69,
            "clouds": 77,
            "visibility": 6076,
            "wind_speed": 2.43,
            "wind_deg": 212,
            "wind_gust": 4.23,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686502800,
            "temp": 25.25,
            "feels_like": 26.21,
            "pressure": 1012,
            "humidity": 91,
            "dew_point": 23.8,
            "uvi": 1.11,
            "clouds": 81,
            "visibility": 10000,
            "wind_speed": 2.24,
            "wind_deg": 212,
            "wind_gust": 4.98,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686506400,
            "temp": 24.31,
            "feels_like": 25.28,
            "pressure": 1013,
            "humidity": 95,
            "dew_point": 23.43,
            "uvi": 0.26,
            "clouds": 85,
            "visibility": 10000,
            "wind_speed": 1.47,
            "wind_deg": 212,
            "wind_gust": 4.48,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686510000,
            "temp": 23.72,
            "feels_like": 24.65,
            "pressure": 1013,
            "humidity": 96,
            "dew_point": 22.96,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.57,
            "wind_deg": 208,
            "wind_gust": 4.53,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.99,

        },
        {
            "dt": 1686513600,
            "temp": 23.47,
            "feels_like": 24.41,
            "pressure": 1014,
            "humidity": 97,
            "dew_point": 22.9,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 0.85,
            "wind_deg": 172,
            "wind_gust": 1.8,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.99,

        },
        {
            "dt": 1686517200,
            "temp": 23.43,
            "feels_like": 24.36,
            "pressure": 1014,
            "humidity": 97,
            "dew_point": 22.89,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.3,
            "wind_deg": 204,
            "wind_gust": 4.39,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.99,

        },
        {
            "dt": 1686520800,
            "temp": 23.31,
            "feels_like": 24.23,
            "pressure": 1015,
            "humidity": 97,
            "dew_point": 22.87,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 0.71,
            "wind_deg": 184,
            "wind_gust": 1.37,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686524400,
            "temp": 22.99,
            "feels_like": 23.9,
            "pressure": 1015,
            "humidity": 98,
            "dew_point": 22.74,
            "uvi": 0,
            "clouds": 100,
            "visibility": 6460,
            "wind_speed": 0.86,
            "wind_deg": 117,
            "wind_gust": 1.06,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686528000,
            "temp": 22.69,
            "feels_like": 23.6,
            "pressure": 1015,
            "humidity": 99,
            "dew_point": 22.51,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 0.72,
            "wind_deg": 143,
            "wind_gust": 0.95,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686531600,
            "temp": 22.57,
            "feels_like": 23.47,
            "pressure": 1014,
            "humidity": 99,
            "dew_point": 22.35,
            "uvi": 0,
            "clouds": 81,
            "visibility": 10000,
            "wind_speed": 0.73,
            "wind_deg": 150,
            "wind_gust": 0.83,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686535200,
            "temp": 22.53,
            "feels_like": 23.4,
            "pressure": 1014,
            "humidity": 98,
            "dew_point": 22.37,
            "uvi": 0,
            "clouds": 89,
            "visibility": 10000,
            "wind_speed": 0.66,
            "wind_deg": 179,
            "wind_gust": 0.79,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686538800,
            "temp": 22.47,
            "feels_like": 23.33,
            "pressure": 1013,
            "humidity": 98,
            "dew_point": 22.28,
            "uvi": 0,
            "clouds": 92,
            "visibility": 10000,
            "wind_speed": 0.4,
            "wind_deg": 113,
            "wind_gust": 0.52,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686542400,
            "temp": 22.41,
            "feels_like": 23.27,
            "pressure": 1013,
            "humidity": 98,
            "dew_point": 22.21,
            "uvi": 0,
            "clouds": 94,
            "visibility": 10000,
            "wind_speed": 0.3,
            "wind_deg": 61,
            "wind_gust": 0.26,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686546000,
            "temp": 22.6,
            "feels_like": 23.47,
            "pressure": 1013,
            "humidity": 98,
            "dew_point": 22.21,
            "uvi": 0,
            "clouds": 95,
            "visibility": 7742,
            "wind_speed": 0.56,
            "wind_deg": 50,
            "wind_gust": 0.6,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686549600,
            "temp": 22.49,
            "feels_like": 23.35,
            "pressure": 1014,
            "humidity": 98,
            "dew_point": 22.27,
            "uvi": 0,
            "clouds": 96,
            "visibility": 5345,
            "wind_speed": 0.94,
            "wind_deg": 25,
            "wind_gust": 1.07,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,

        },
        {
            "dt": 1686553200,
            "temp": 22.6,
            "feels_like": 23.47,
            "pressure": 1014,
            "humidity": 98,
            "dew_point": 22.43,
            "uvi": 0.03,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 0.82,
            "wind_deg": 63,
            "wind_gust": 1.2,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.95,

        },
        {
            "dt": 1686556800,
            "temp": 22.8,
            "feels_like": 23.69,
            "pressure": 1014,
            "humidity": 98,
            "dew_point": 22.45,
            "uvi": 0.17,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.07,
            "wind_deg": 106,
            "wind_gust": 1.83,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.95,

        },
        {
            "dt": 1686560400,
            "temp": 23.08,
            "feels_like": 23.98,
            "pressure": 1015,
            "humidity": 97,
            "dew_point": 22.64,
            "uvi": 0.5,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.01,
            "wind_deg": 102,
            "wind_gust": 2.29,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.97,

        },
        {
            "dt": 1686564000,
            "temp": 23.49,
            "feels_like": 24.4,
            "pressure": 1015,
            "humidity": 96,
            "dew_point": 22.94,
            "uvi": 3.82,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.02,
            "wind_deg": 121,
            "wind_gust": 2.37,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.97,

        },
        {
            "dt": 1686567600,
            "temp": 24.23,
            "feels_like": 25.14,
            "pressure": 1016,
            "humidity": 93,
            "dew_point": 23.09,
            "uvi": 5.8,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 0.97,
            "wind_deg": 108,
            "wind_gust": 2.16,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.97,

        },
        {
            "dt": 1686571200,
            "temp": 24.45,
            "feels_like": 25.38,
            "pressure": 1015,
            "humidity": 93,
            "dew_point": 23.27,
            "uvi": 7.17,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 0.98,
            "wind_deg": 157,
            "wind_gust": 2.46,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.99,

        },
        {
            "dt": 1686574800,
            "temp": 24.81,
            "feels_like": 25.75,
            "pressure": 1014,
            "humidity": 92,
            "dew_point": 23.34,
            "uvi": 6.71,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.9,
            "wind_deg": 171,
            "wind_gust": 4.37,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.8,

        }
    ],
    "daily": [
        {
            "dt": 1686398400,
            "sunrise": 1686378425,
            "sunset": 1686423450,
            "moonrise": 1686356580,
            "moonset": 1686400560,
            "moon_phase": 0.75,
            "temp": {
                "day": 29.94,
                "min": 22.84,
                "max": 29.97,
                "night": 23.21,
                "eve": 26.57,
                "morn": 22.84
            },
            "feels_like": {
                "day": 34.2,
                "night": 24.15,
                "eve": 26.57,
                "morn": 23.74
            },
            "pressure": 1013,
            "humidity": 67,
            "dew_point": 23.14,
            "wind_speed": 3.42,
            "wind_deg": 225,
            "wind_gust": 5.09,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 77,
            "pop": 1,
            "rain": 6.94,
            "uvi": 10.09
        },
        {
            "dt": 1686484800,
            "sunrise": 1686464834,
            "sunset": 1686509864,
            "moonrise": 1686445740,
            "moonset": 1686490020,
            "moon_phase": 0.77,
            "temp": {
                "day": 28.41,
                "min": 22.86,
                "max": 28.51,
                "night": 22.99,
                "eve": 24.31,
                "morn": 23.07
            },
            "feels_like": {
                "day": 31.95,
                "night": 23.9,
                "eve": 25.28,
                "morn": 23.97
            },
            "pressure": 1015,
            "humidity": 73,
            "dew_point": 23.19,
            "wind_speed": 3.23,
            "wind_deg": 224,
            "wind_gust": 5.03,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 87,
            "pop": 1,
            "rain": 18.64,
            "uvi": 9.97
        },
        {
            "dt": 1686571200,
            "sunrise": 1686551243,
            "sunset": 1686596278,
            "moonrise": 1686534720,
            "moonset": 1686579360,
            "moon_phase": 0.81,
            "temp": {
                "day": 24.45,
                "min": 22.41,
                "max": 25.94,
                "night": 22.96,
                "eve": 23.95,
                "morn": 22.49
            },
            "feels_like": {
                "day": 25.38,
                "night": 23.87,
                "eve": 24.91,
                "morn": 23.35
            },
            "pressure": 1015,
            "humidity": 93,
            "dew_point": 23.27,
            "wind_speed": 2.54,
            "wind_deg": 170,
            "wind_gust": 5.63,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 20.7,
            "uvi": 7.17
        },
        {
            "dt": 1686657600,
            "sunrise": 1686637653,
            "sunset": 1686682692,
            "moonrise": 1686623700,
            "moonset": 1686668760,
            "moon_phase": 0.84,
            "temp": {
                "day": 29.85,
                "min": 21.76,
                "max": 29.85,
                "night": 23.27,
                "eve": 25.66,
                "morn": 21.76
            },
            "feels_like": {
                "day": 33.35,
                "night": 24.19,
                "eve": 26.63,
                "morn": 22.58
            },
            "pressure": 1014,
            "humidity": 64,
            "dew_point": 22.52,
            "wind_speed": 2.67,
            "wind_deg": 191,
            "wind_gust": 5.4,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 59,
            "pop": 0.97,
            "rain": 6.95,
            "uvi": 10.73
        },
        {
            "dt": 1686744000,
            "sunrise": 1686724063,
            "sunset": 1686769106,
            "moonrise": 1686712680,
            "moonset": 1686758160,
            "moon_phase": 0.88,
            "temp": {
                "day": 28.92,
                "min": 22.37,
                "max": 28.92,
                "night": 23.37,
                "eve": 25.21,
                "morn": 22.37
            },
            "feels_like": {
                "day": 32.74,
                "night": 24.3,
                "eve": 26.16,
                "morn": 23.22
            },
            "pressure": 1014,
            "humidity": 71,
            "dew_point": 23.22,
            "wind_speed": 2.79,
            "wind_deg": 213,
            "wind_gust": 4.48,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 97,
            "pop": 0.97,
            "rain": 8.06,
            "uvi": 11.42
        },
        {
            "dt": 1686830400,
            "sunrise": 1686810473,
            "sunset": 1686855520,
            "moonrise": 1686801780,
            "moonset": 1686847620,
            "moon_phase": 0.91,
            "temp": {
                "day": 27.67,
                "min": 22.37,
                "max": 27.67,
                "night": 23.39,
                "eve": 24.91,
                "morn": 22.37
            },
            "feels_like": {
                "day": 31.29,
                "night": 24.32,
                "eve": 25.88,
                "morn": 23.25
            },
            "pressure": 1015,
            "humidity": 80,
            "dew_point": 23.81,
            "wind_speed": 2.59,
            "wind_deg": 201,
            "wind_gust": 6.83,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 90,
            "pop": 0.94,
            "rain": 13.04,
            "uvi": 12
        },
        {
            "dt": 1686916800,
            "sunrise": 1686896884,
            "sunset": 1686941933,
            "moonrise": 1686891060,
            "moonset": 1686937260,
            "moon_phase": 0.95,
            "temp": {
                "day": 26.91,
                "min": 22.71,
                "max": 26.91,
                "night": 23.33,
                "eve": 25.17,
                "morn": 22.97
            },
            "feels_like": {
                "day": 29.9,
                "night": 24.2,
                "eve": 26.09,
                "morn": 23.86
            },
            "pressure": 1015,
            "humidity": 84,
            "dew_point": 23.96,
            "wind_speed": 2.74,
            "wind_deg": 178,
            "wind_gust": 5.79,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 94,
            "pop": 1,
            "rain": 16.2,
            "uvi": 12
        },
        {
            "dt": 1687003200,
            "sunrise": 1686983295,
            "sunset": 1687028347,
            "moonrise": 1686980520,
            "moonset": 1687026900,
            "moon_phase": 0.98,
            "temp": {
                "day": 27.3,
                "min": 22.38,
                "max": 27.3,
                "night": 23.49,
                "eve": 24.84,
                "morn": 22.38
            },
            "feels_like": {
                "day": 30.53,
                "night": 24.35,
                "eve": 25.76,
                "morn": 23.18
            },
            "pressure": 1015,
            "humidity": 81,
            "dew_point": 23.85,
            "wind_speed": 1.95,
            "wind_deg": 210,
            "wind_gust": 5.79,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 69,
            "pop": 0.99,
            "rain": 12.58,
            "uvi": 12
        }
    ]

};

export const reducer = createReducer(
  initialState,

  on(weatherActions.loadCityWeatherSuccess,(state,data)=>({
    ...state,
    ...data.payload
  })),
);
