import "./Favoutire.css";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

import CountryDetailsCard from "../../components/CountryDetailsCard/CountryDetailsCard.jsx";
import Button from "../../components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
  const navigate = useNavigate();

  const [favouriteCountries, setFavouriteCountries] = useState([]);

  useEffect(() => {
    setFavouriteCountries(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  return (
    <div>
      {favouriteCountries?.length ? (
        <div className="cards-countries-container">
          {favouriteCountries?.map((country) => (
            <CountryDetailsCard key={country.name} country={country} />
          ))}
        </div>
      ) : (
        <div className="no-items">
          <p>
            Hi there! You don’t have any favourite countries yet. Start spinning
            the globe and add the ones you would like to visit!
          </p>
          <div>
            <Button
              label="Go To Travel Roulette"
              variant="primary"
              icon={ArrowLeft}
              iconProps={{ size: 16 }}
              onClick={() => navigate("/")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourite;
