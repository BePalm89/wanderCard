import "./Preview.css";

import PropTypes from "prop-types";
import { Send } from "lucide-react";

import BoxLayout from "../BoxLayout/BoxLayout.jsx";
import CountryBadge from "../CountryBadge/CountryBadge.jsx";
import Text from "../Text/Text.jsx";
import Button from "../Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const Preview = ({ postcardData }) => {
  const navigate = useNavigate();

  const { destination, message, senderName, recipientName, recipientEmail } =
    postcardData;

  const isFormValid =
    destination &&
    message.trim().length > 0 &&
    senderName.trim().length > 0 &&
    recipientName.trim().length > 0 &&
    recipientEmail.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipientEmail);

  return (
    <div className="preview-container">
      <BoxLayout title="Preview">
        <div className="preview-image">
          <img alt={destination?.name} src={destination?.photo} />
          <CountryBadge
            name={destination?.name}
            flag={destination?.flag}
            style={{
              bottom: "20px",
              left: "20px",
              padding: "0 var(--padding-xs)",
            }}
          />
        </div>
        <div className="preview-message">
          <Text text="Message" level={7} />
          {message && (
            <div className="message-container">
              <Text text={message} level={7} />
            </div>
          )}
        </div>
        <div className="preview-sender-name">
          <Text text="From:" level={7} />
          {senderName && <Text text={senderName} level={7} />}
        </div>
        <hr />
        <div className="preview-recipient-name">
          <Text text="To:" level={7} />
          {recipientName && <Text text={recipientName} level={7} />}
        </div>
        {recipientEmail && (
          <Text
            text={recipientEmail}
            level={7}
            style={{
              fontSize: "var(--font-size-xs)",
              color: "var(--text-color-light)",
            }}
          />
        )}
      </BoxLayout>
      <div className="send-postcard">
        <Button
          label="Send Postcard"
          variant="primary"
          icon={Send}
          iconProps={{ size: 16 }}
          disabled={!isFormValid}
          onClick={() => navigate("/visited")}
        />
      </div>
    </div>
  );
};

Preview.propTypes = {
  postcardData: PropTypes.object.isRequired,
};

export default Preview;
