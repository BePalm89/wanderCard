export const API = {
  COUNTRY_BY_NAME: "https://restcountries.com/v3.1/name",
  COUNTRY_PHOTO: "https://api.unsplash.com/search/photos",
  WEATHER_BY_CITY: `https://api.openweathermap.org/data/2.5/weather?appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}&units=metric&q=`,
  WIKIPEDIA_BY_COUNTRY: "https://en.wikipedia.org/api/rest_v1/page/summary",
  MEAL_DB_BY_COUNTRY: "https://www.themealdb.com/api/json/v1/1/filter.php?a=",
};
