import "./Dialog.css";
import PropTypes from "prop-types";
import Text from "../Text/Text.jsx";
import { CircleX } from "lucide-react";

export const Dialog = ({ open, title, children, onClose }) => {
  if (!open) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-container" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <Text
            level={1}
            text={title}
            style={{
              textTransform: "capitalize",
              color: "var(--text-color)",
              fontSize: "var(--font-size-l)",
            }}
          />
          <CircleX size={24} onClick={onClose} className="pointer" />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Dialog;
