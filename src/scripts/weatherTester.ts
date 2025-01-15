/**
 * Weather testing utility for the WeatherPill component.
 * Allows manual testing of different weather conditions via browser console.
 * 
 * @example
 * ```js
 * // Test different weather conditions
 * setWeatherTemp(75)    // Set temperature to 75°F
 * setWeatherRain(0.5)   // Make it rain (any value > 0)
 * setWeatherSnow(1)     // Make it snow (any value > 0)
 * ```
 * 
 * Note: Rain and snow are mutually exclusive:
 * - Setting rain will clear snow
 * - Setting snow will clear rain
 */

export {};

declare global {
  interface Window {
    setWeatherTemp: (temp: number) => void;
    setWeatherRain: (amount: number) => void;
    setWeatherSnow: (amount: number) => void;
  }
}

// Keep track of current weather state
const currentWeather = {
  temp: 70,
  rain: 0,
  snow: 0
};

window.setWeatherTemp = function(temp: number) {
  currentWeather.temp = temp;
  updateWeather();
};

window.setWeatherRain = function(amount: number) {
  currentWeather.rain = amount;
  currentWeather.snow = 0; // Reset snow when it rains
  updateWeather();
};

window.setWeatherSnow = function(amount: number) {
  currentWeather.snow = amount;
  currentWeather.rain = 0; // Reset rain when it snows
  updateWeather();
};

function updateWeather() {
  const weatherInfo = getWeatherInfo(currentWeather.temp, currentWeather.rain, currentWeather.snow);
  const weatherPill = document.querySelector('[data-testable="hover-pill"]');
  const textElement = weatherPill?.querySelector('.hover-pill-text');
  const iconElement = weatherPill?.querySelector('.hover-pill-icon img') as HTMLImageElement;
  
  if (weatherPill && textElement && iconElement) {
    weatherPill.className = `hover-pill pill-weather-${weatherInfo.type}`;
    textElement.textContent = weatherInfo.text;
    iconElement.src = `/src/assets/icons/weather/${weatherInfo.icon}.svg`;
    console.log(`Weather updated:`, currentWeather, weatherInfo);
  }
}

type WeatherType = "cold" | "warm" | "hot" | "rain" | "snow";

const weatherStates = {
  default: { text: "lovely", type: "warm", icon: "RainbowCloud" },
  veryCold: { text: "very cold", type: "cold", icon: "Snowflake" },
  bitCold: { text: "a bit cold", type: "cold", icon: "Snowflake" },
  nice: { text: "nice and toasty", type: "warm", icon: "RainbowCloud" },
  warm: { text: "warm and sunny", type: "warm", icon: "Sun" },
  hot: { text: "very hot", type: "hot", icon: "Sun" },
  rain: { text: "raining and warm", type: "rain", icon: "CloudRain" },
  snow: { text: "snowing and cold", type: "snow", icon: "Snowflake" }
} as const;

function getWeatherInfo(temp: number, rain: number, snow: number) {
  if (rain > 0) return weatherStates.rain;
  if (snow > 0) return weatherStates.snow;
  if (temp <= 35) return weatherStates.veryCold;
  if (temp <= 50) return weatherStates.bitCold;
  if (temp <= 70) return weatherStates.nice;
  if (temp <= 90) return weatherStates.warm;
  return weatherStates.hot;
} 