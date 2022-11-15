import { useState } from "react";
import axios from "axios";

import "./Form.scss";

const Form = ({ property }) => {
  const [newUrl, setNewUrl] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const updateUrl = (event) => {
    event.preventDefault();

    const urlRegex =
      /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;

    if (!urlRegex.test(newUrl)) {
      setError("Invalid URL");
    } else {
      setError("");
      axios
        .patch(`/properties/${property.property_id}`, { book_now_url: newUrl })
        .then((res) => {
          setMsg(res.data.msg);
        });
    }
  };

  return (
    <form onSubmit={updateUrl} className="form">
      <label htmlFor="UpdateUrl">Update Property URL</label>
      <p className="error-message text-heavy">{error}</p>
      <p className="success-message text-heavy">{msg}</p>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setNewUrl(e.target.value);
        }}
        placeholder={property.contracts[0].book_now_url}
      />
      <button type="submit" className="btn btn-primary">
        Update URL
      </button>
    </form>
  );
};

export default Form;
