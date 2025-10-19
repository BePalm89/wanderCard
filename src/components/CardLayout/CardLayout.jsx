import "./CardLayout.css";
import PropTypes from "prop-types";

const CardLayout = ({ title, children }) => {
  return (
    <div className="card-layout-container">
      <h3 className="card-layout-title">{title}</h3>
      <div className="card-layout-content">{children}</div>
    </div>
  );
};

CardLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CardLayout;
