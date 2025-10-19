import "./CountryCard.css";

import { ThumbsDown, ThumbsUp } from "lucide-react";
import PropTypes from "prop-types";

export const CountryCard = ({ country, handleAction, handleCountryDetail }) => {
  return (
    <div className="card-container pointer" onClick={handleCountryDetail}>
      <img alt={country.name} src={country.photo} />
      <div className="country-name"> {country.name}</div>
      <div className="custom-icon down">
        <ThumbsDown
          size={28}
          color="var(--error-color)"
          className="pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleAction("dislike", country);
          }}
        />
      </div>
      <div className="custom-icon up">
        <ThumbsUp
          size={28}
          color="var(--success-color)"
          className="pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleAction("like", country);
          }}
        />
      </div>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
  handleAction: PropTypes.func.isRequired,
  handleCountryDetail: PropTypes.func.isRequired,
};

export default CountryCard;
