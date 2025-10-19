import "./CountryDetails.css";

import { Thermometer, Heart, Map, Cloud, Droplet, Wind } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Badge from "../../components/Badge/Badge.jsx";
import CardLayout from "../../components/CardLayout/CardLayout.jsx";
import Info from "../../components/Info/Info.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import Button from "../../components/Button/Button.jsx";
import FoodCard from "../../components/FoodCard/FoodCard.jsx";

import { API } from "../../api/endpoints.js";
import CountryBadge from "../../components/CountryBadge/CountryBadge.jsx";

const CountryDetails = () => {
  const [matched, setMatched] = useState(false);
  const [visited, setVisited] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countryInfo, setCountryInfo] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [quickFactInfo, setQuickFactInfo] = useState(null);
  const [foodInfo, setFoodInfo] = useState([]);

  const countryName = useParams().name;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `${API.COUNTRY_BY_NAME}/${countryName}`,
        );
        const country =
          countryName.toLowerCase() !== "china"
            ? response.data[0]
            : response.data[1];

        const countryData = JSON.parse(localStorage.getItem("countryData"));

        const countryInfoObject = {
          name: country.name.common,
          flag: country.flag,
          capital: country.capital[0],
          continent: country.region,
          languages: country.languages ? Object.values(country.languages) : [],
          currency: country.currencies
            ? Object.keys(country.currencies)[0]
            : null,
          code: country.cca2,
          demonyms: country.demonyms["eng"].m,
          photo: countryData.photo,
        };

        setCountryInfo(countryInfoObject);

        const weatherResponse = await axios.get(
          `${API.WEATHER_BY_CITY}${countryInfoObject.capital},${countryInfoObject.code}`,
        );

        const weatherInfoObject = {
          temperature: weatherResponse.data.main.temp,
          condition: weatherResponse.data.weather[0].description,
          humidity: weatherResponse.data.main.humidity,
          windSpeed: weatherResponse.data.wind.speed,
        };

        setWeatherInfo(weatherInfoObject);

        const quickFactResponse = await axios.get(
          `${API.WIKIPEDIA_BY_COUNTRY}/${countryName}`,
        );

        setQuickFactInfo(quickFactResponse.data.extract);

        const foodResponse = await axios.get(
          `${API.MEAL_DB_BY_COUNTRY}${countryInfoObject.demonyms}`,
        );

        setFoodInfo(foodResponse.data.meals);

        const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
        const visited = JSON.parse(localStorage.getItem("visited")) ?? [];

        setPhoto(countryData.photo);

        if (favorites.length) {
          const isFavorite = !!favorites.find(
            (fav) => fav.name.toLowerCase() === countryName.toLowerCase(),
          );
          setMatched(isFavorite);
        }

        if (visited.length) {
          const isVisited = !!visited.find(
            (fav) => fav.name.toLowerCase() === countryName.toLowerCase(),
          );
          setVisited(isVisited);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchCountryData();
  }, [countryName]);

  const handleCountrySave = (type) => {
    const storageKey = type === "favorite" ? "favorites" : "visited";
    const redirectPath = type === "favorite" ? "/favourites" : "/visited";

    const storedItems = JSON.parse(localStorage.getItem(storageKey)) ?? [];

    const isAlreadySaved = storedItems?.some(
      (item) => item.name.toLowerCase() === countryName.toLowerCase(),
    );

    if (!isAlreadySaved) {
      storedItems.push(countryInfo);
      localStorage.setItem(storageKey, JSON.stringify(storedItems));
    }

    navigate(redirectPath);
  };

  return (
    <div className="details-country-container">
      {loading && <Spinner />}
      <div className="details-country-image">
        <div className="image-overlay"></div>
        <div className="badges">
          {matched && (
            <Badge
              label="Matched"
              icon={Heart}
              variant="matched"
              iconProps={{ size: 16 }}
            />
          )}
          {visited && (
            <Badge
              label="Visited"
              icon={Map}
              variant="visited"
              iconProps={{ size: 16 }}
            />
          )}
        </div>
        <img alt={countryName} src={photo} />
        <CountryBadge
          name={countryInfo?.name}
          flag={countryInfo?.flag}
          style={{
            bottom: "24px",
            left: "24px",
            textTransform: "uppercase",
            height: "24px",
            padding: "var(--padding-s)",
          }}
        />
        <div className="btn-container">
          {!matched && (
            <Button
              label="Mark as favorite"
              icon={Heart}
              iconProps={{ size: 16 }}
              variant="matched"
              onClick={() => handleCountrySave("favorite")}
            />
          )}

          {!visited && (
            <Button
              label="Mark as visited"
              icon={Map}
              iconProps={{ size: 16 }}
              variant="visited"
              onClick={() => handleCountrySave("visited")}
            />
          )}
        </div>
      </div>
      <div className="details-country-two-columns">
        <div className="details-country-half">
          <CardLayout title="Country information">
            <Info title="Capital" value={countryInfo?.capital} />
            <Info title="Continent" value={countryInfo?.continent} />
            <Info title="Languages" value={countryInfo?.languages.join(",")} />
            <Info title="Currency" value={countryInfo?.currency} />
          </CardLayout>
        </div>
        <div className="details-country-half">
          <CardLayout title="Current Weather">
            <Info
              title="Temperature"
              value={`${weatherInfo?.temperature}°C`}
              icon={Thermometer}
              iconProps={{ size: 24, color: "var(--primary-color-light)" }}
            />
            <Info
              title="Condition"
              value={weatherInfo?.condition}
              icon={Cloud}
              iconProps={{ size: 24, color: "var(--primary-color-light)" }}
              style={{ textTransform: "capitalize" }}
            />
            <Info
              title="Humidity"
              value={`${weatherInfo?.humidity}%`}
              icon={Droplet}
              iconProps={{ size: 24, color: "var(--primary-color-light)" }}
            />
            <Info
              title="Wind Speed"
              value={`${weatherInfo?.windSpeed}km/h`}
              icon={Wind}
              iconProps={{ size: 24, color: "var(--primary-color-light)" }}
            />
          </CardLayout>
        </div>
      </div>
      <CardLayout title="Quick Facts">
        <p>{quickFactInfo}</p>
      </CardLayout>
      {foodInfo?.length && (
        <CardLayout title="Typical Meals">
          <div className="food-list">
            {foodInfo?.map((recipe) => (
              <FoodCard
                key={recipe.idMeal}
                title={recipe.strMeal}
                photo={recipe.strMealThumb}
              />
            ))}
          </div>
        </CardLayout>
      )}
    </div>
  );
};

export default CountryDetails;
