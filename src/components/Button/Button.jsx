import "./Button.css";

import PropTypes from "prop-types";

const Button = ({
  label,
  icon: Icon,
  iconProps,
  variant,
  onClick,
  disabled,
}) => {
  return (
    <button onClick={onClick} className={`btn ${variant}`} disabled={disabled}>
      {Icon && <Icon {...iconProps} />}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  iconProps: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
