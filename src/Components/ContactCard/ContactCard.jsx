import React from "react";
import Avatar from "../../assets/download.png";

function ContactCard({data}) {
  const message = data.message.substring(0,22)
  return (
    <div className="contactCard w-100 d-flex align-items-center p-2">
      <img src={Avatar} className="contactCardImg" />
      <div className="information d-flex flex-wrap justify-content-between p-1 align-items-center">
        <h6 className="w-100">{data.name}</h6>
        <span>{message}...</span>
        <span>{data.time}</span>
      </div>
    </div>
  );
}

export default ContactCard;
