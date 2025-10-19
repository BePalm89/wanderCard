import "./Favoutire.css";
import { useEffect, useState } from "react";
import CountryDetailsCard from "../../components/CountryDetailsCard/CountryDetailsCard.jsx";

const Favourite = () => {
  const [favouriteCountries, setFavouriteCountries] = useState([]);

  useEffect(() => {
    setFavouriteCountries(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  return (
    <div className="cards-countries-container">
      {favouriteCountries?.map((country) => (
        <CountryDetailsCard key={country.name} country={country} />
      ))}
    </div>
  );
};

export default Favourite;
