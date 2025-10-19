import "./Info.css";

import PropTypes from "prop-types";

const Info = ({
  title,
  value,
  icon: Icon,
  iconProps,
  style = { textTransform: "none" },
}) => {
  return (
    <div className="info-container">
      {Icon && <Icon {...iconProps} />}
      <div className="info-text">
        <p className="info-title">{title}</p>
        <p
          className="info-value"
          style={{ textTransform: style.textTransform }}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

Info.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  iconProps: PropTypes.object,
  style: PropTypes.object,
};

export default Info;
