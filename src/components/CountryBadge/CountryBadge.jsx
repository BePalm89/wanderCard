import "./CountryBadge.css";
import PropTypes from "prop-types";

const CountryBadge = ({ name, flag, style }) => {
  return (
    <div className="country-title" style={style}>
      <p>{flag}</p>
      <p>{name}</p>
    </div>
  );
};

CountryBadge.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.bool.isRequired,
  style: PropTypes.object,
};

export default CountryBadge;
