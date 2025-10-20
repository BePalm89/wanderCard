import "./BoxLayout.css";

import PropTypes from "prop-types";

const BoxLayout = ({ title, children }) => {
  return (
    <div className="box-container">
      <p>{title}</p>
      <div>{children}</div>
    </div>
  );
};

BoxLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BoxLayout;
