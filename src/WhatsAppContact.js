// components/WhatsAppContact.js
import React from "react";

const WhatsAppContact = ({ number, displayNumber }) => {
  return (
    <a
      href={`https://wa.me/${number.replace(/\+/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: "20px", marginRight: "5px" }}
      />
      {displayNumber}
    </a>
  );
};

export default WhatsAppContact;
