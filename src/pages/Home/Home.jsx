import "./Home.css";

import { useState } from "react";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Text from "../../components/Text/Text.jsx";
import Button from "../../components/Button/Button.jsx";
import Dialog from "../../components/Dialog/Dialog.jsx";
import CountryCard from "../../components/CountryCard/CountryCard.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";

import { getCountryDetails } from "../../utils/getCountry.js";

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getCountry = async () => {
    const countryDetails = await getCountryDetails();

    setCountry(countryDetails);
  };

  const navigateToCountryDetails = () => {
    navigate(`country/${country.name.toLowerCase()}`);

    localStorage.setItem("countryData", JSON.stringify(country));
  };

  const handleCountryAction = async (action, country) => {
    if (action === "like") {
      const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];

      const isAlreadySaved = favorites?.some(
        (fav) => fav.name === country.name,
      );

      if (!isAlreadySaved) {
        favorites.push(country);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    }

    setLoading(true);
    const nextCountry = await getCountryDetails().finally(() =>
      setLoading(false),
    );

    setCountry(nextCountry);
  };

  const RULES = [
    "Spin the globe to discover a random country.",
    "Click the thumbs up if you'd like to visit — it will be saved to your favorites.",
    "Click the thumbs down if you wouldn't like to visit.",
  ];

  return (
    <div>
      {loading && <Spinner />}

      <div className="home-page">
        <div className="home-page-text">
          <Text
            text={"Travel Roulette"}
            level={1}
            style={{
              fontSize: "var(--font-size-xxl)",
              textTransform: "uppercase",
            }}
          />
          <Text
            text={"Spin the globe and discover your next adventure!"}
            level={7}
            style={{
              fontSize: "var(--font-size-l)",
            }}
          />
        </div>
        <Button
          label={"How to play"}
          variant={"primary"}
          onClick={() => setIsDialogOpen(true)}
        />
        {country?.name ? (
          <CountryCard
            country={country}
            handleAction={(action, c) => handleCountryAction(action, c)}
            handleCountryDetail={() => navigateToCountryDetails()}
          />
        ) : (
          <div className="spin-globe"></div>
        )}
        {!country?.name && (
          <Button
            label={"Spin the globe"}
            variant={"secondary"}
            icon={Play}
            iconProps={{ size: 16 }}
            onClick={() => {
              setLoading(true);
              getCountry().finally(() => setLoading(false));
            }}
          />
        )}
      </div>
      {isDialogOpen && (
        <Dialog
          open={isDialogOpen}
          title={"How to play"}
          onClose={() => setIsDialogOpen(false)}
        >
          <ul className="rules-list">
            {RULES.map((rule, index) => (
              <li key={index}>
                <Text level={7} text={rule} />
              </li>
            ))}
          </ul>
        </Dialog>
      )}
    </div>
  );
};

export default Home;
