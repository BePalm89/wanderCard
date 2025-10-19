import "./Badge.css";

import PropTypes from "prop-types";

const Badge = ({ label, icon: Icon, iconProps, variant }) => {
  return (
    <div className={`badge ${variant}`}>
      {Icon && <Icon {...iconProps} />}
      {label}
    </div>
  );
};

Badge.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
  iconProps: PropTypes.object,
  variant: PropTypes.string,
};

export default Badge;
