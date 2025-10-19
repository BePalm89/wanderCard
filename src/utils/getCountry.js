import axios from "axios";

import { COUNTRIES } from "../costants/countries.js";
import { API } from "../api/endpoints.js";

const getCountryDetails = async () => {
  try {
    const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    const randomIndex = Math.floor(Math.random() * COUNTRIES.length);
    const randomCountry = COUNTRIES[randomIndex];

    const countryResponse = await axios.get(
      `${API.COUNTRY_BY_NAME}/${randomCountry}`,
    );

    const countryData =
      randomCountry !== "China"
        ? countryResponse.data[0]
        : countryResponse.data[1];
    const name = countryData.name.common;

    const photoResponse = await axios.get(`${API.COUNTRY_PHOTO}`, {
      params: {
        query: name,
        client_id: unsplashAccessKey,
        orientation: "landscape",
      },
    });

    const photo =
      photoResponse.data.results[0].urls.regular || "/images/globe.jpg";

    const countryInfoObj = {
      name: countryData.name.common,
      flag: countryData.flag,
      capital: countryData.capital[0],
      continent: countryData.region,
      languages: countryData.languages
        ? Object.values(countryData.languages)
        : [],
      currency: countryData.currencies
        ? Object.keys(countryData.currencies)[0]
        : null,
      code: countryData.cca2,
      demonyms: countryData.demonyms["eng"].m,
      photo: photo,
    };

    return countryInfoObj;
  } catch (error) {
    console.error("Error fetching country or photo:", error);
  }
};

export { getCountryDetails };
