export {};

declare global {
  interface Window {
    setWeatherTemp: (temp: number) => void;
  }
}

window.setWeatherTemp = function(temp: number) {
  const weatherInfo = getWeatherInfo(temp, 0, 0);
  const weatherPill = document.querySelector('[data-testable="weather-pill"]');
  const textElement = weatherPill?.querySelector('.weather-pill-text');
  const iconElement = weatherPill?.querySelector('.weather-pill-icon img') as HTMLImageElement;
  
  if (weatherPill && textElement && iconElement) {
    weatherPill.className = `weather-pill weather-${weatherInfo.type}`;
    textElement.textContent = weatherInfo.text;
    iconElement.src = `/src/assets/icons/weather/${weatherInfo.icon}.svg`;
    console.log(`Weather updated for ${temp}°F:`, weatherInfo);
  }
};

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