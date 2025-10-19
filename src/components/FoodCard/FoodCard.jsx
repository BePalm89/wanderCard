import "./FoodCard.css";

import PropTypes from "prop-types";

const FoodCard = ({ title, photo }) => {
  return (
    <div className="food-card-container">
      <div className="food-card-img-container">
        <img alt={title} src={photo} />
      </div>
      <div className="food-card-info">
        <p>{title}</p>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default FoodCard;
