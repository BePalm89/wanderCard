import "./PostcardForm.css";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import BoxLayout from "../BoxLayout/BoxLayout.jsx";

const PostcardForm = ({ postcardData, setPostcardData }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange", defaultValues: postcardData || {} });

  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    setVisitedCountries(JSON.parse(localStorage.getItem("visited")));
  }, []);

  const { message, senderName, recipientName, recipientEmail } = watch();

  useEffect(() => {
    setPostcardData((prev) => ({
      ...prev,
      message,
      senderName,
      recipientName,
      recipientEmail,
    }));
  }, [message, senderName, recipientName, recipientEmail, setPostcardData]);

  const handleSelect = (e) => {
    const country = visitedCountries?.find((v) => v.name === e.target.value);
    setPostcardData((prev) => ({ ...prev, destination: country }));
  };

  return (
    <div className="postcard-form-container">
      <form>
        <BoxLayout title="Choose Destination">
          <select
            {...register("destination", { required: true })}
            onChange={handleSelect}
            defaultValue=""
          >
            <option value="" disabled>
              {" "}
              Choose a destination...
            </option>
            {visitedCountries.map((v) => (
              <option key={v.name} value={v.name}>
                {v.flag} {v.name}
              </option>
            ))}
          </select>
        </BoxLayout>
        <BoxLayout title="Your Message">
          <div className="form-control">
            <label htmlFor="message">Postcard Message *</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              rows={10}
              defaultValue={postcardData?.message || ""}
            />
            {errors.message && (
              <p role="alert" className="error">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="senderName">Your name *</label>
            <input
              {...register("senderName", {
                required: "Sender name is required",
              })}
              id="senderName"
              defaultValue={postcardData?.senderName || ""}
            />
            {errors.senderName && (
              <p role="alert" className="error">
                {errors.senderName.message}
              </p>
            )}
          </div>
        </BoxLayout>
        <BoxLayout title="Recipient">
          <div className="form-control">
            <label htmlFor="recipientName">Recipient Name *</label>
            <input
              {...register("recipientName", {
                required: "Recipient name is required",
              })}
              id="recipientName"
            />
            {errors.recipientName && (
              <p role="alert" className="error">
                {errors.recipientName.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="recipientEmail">Your name *</label>
            <input
              {...register("recipientEmail", {
                required: "Recipient email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              id="recipientEmail"
              type="email"
            />
            {errors.recipientEmail && (
              <p role="alert" className="error">
                {errors.recipientEmail.message}
              </p>
            )}
          </div>
        </BoxLayout>
      </form>
    </div>
  );
};

PostcardForm.propTypes = {
  postcardData: PropTypes.object.isRequired,
  setPostcardData: PropTypes.func.isRequired,
};

export default PostcardForm;
