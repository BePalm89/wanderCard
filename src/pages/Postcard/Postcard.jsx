import "./Postcard.css";

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/Button/Button.jsx";
import Preview from "../../components/Preview/Preview.jsx";
import PostcardForm from "../../components/PostcardForm/PostcardForm.jsx";

const Postcard = () => {
  const [postcardData, setPostcardData] = useState({
    destination: null,
    message: "",
    senderName: "",
    recipientName: "",
    recipientEmail: "",
  });

  const navigate = useNavigate();

  return (
    <div className="postcard-container">
      <div>
        <Button
          label="Back to visited"
          icon={ArrowLeft}
          iconProps={{ size: 16 }}
          variant="outline"
          onClick={() => navigate(-1)}
        />
      </div>

      <div className="postcard-content">
        <PostcardForm
          postcardData={postcardData}
          setPostcardData={setPostcardData}
        />
        <Preview postcardData={postcardData} />
      </div>
    </div>
  );
};

export default Postcard;
