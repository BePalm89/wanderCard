import "./CountryDetailsCard.css";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CountryBadge from "../CountryBadge/CountryBadge.jsx";

const CountryDetailsCard = ({ country }) => {
  const navigate = useNavigate();

  const handleNavigationToCountryDetails = () => {
    navigate(`/country/${country.name.toLowerCase()}`);

    localStorage.setItem("countryData", JSON.stringify(country));
  };

  return (
    <div
      className="country-detail-card-container"
      onClick={() => handleNavigationToCountryDetails()}
    >
      <div className="image-overlay"></div>
      <img alt={country.name} src={country.photo} />
      <CountryBadge
        name={country.name}
        flag={country.flag}
        style={{
          bottom: "20px",
          left: "20px",
          textTransform: "capitalize",
          padding: "0 var(--padding-xs)",
        }}
      />
    </div>
  );
};

CountryDetailsCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryDetailsCard;
