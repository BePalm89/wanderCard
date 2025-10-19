import "./Spinner.css";
import Lottie from "lottie-react";
import loading from "../../loading.json";
import PropTypes from "prop-types";

const Spinner = ({ size = 400 }) => {
  return (
    <div className="spinner-overlay">
      <Lottie
        animationData={loading}
        loop={true}
        style={{ width: size, height: size }}
      />
      ;
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.number,
};

export default Spinner;
