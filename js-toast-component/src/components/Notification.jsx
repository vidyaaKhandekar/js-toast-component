import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineWarning,
  AiOutlineInfoCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import "./Notification.css";

const iconStyle = {
  marginRight: "10px",
};
const icon = {
  success: <AiOutlineCheckCircle style={iconStyle} />,
  warning: <AiOutlineWarning style={iconStyle} />,
  info: <AiOutlineInfoCircle style={iconStyle} />,
  error: <AiOutlineCloseCircle style={iconStyle} />,
};
const Notification = ({ type = "info", message, onClose = () => {} }) => {
  return (
    <div className={`notification ${type}`}>
      {icon[type]}
      {message}
      <AiOutlineClose
        color="white"
        onClick={() => {
          onClose();
        }}
        className="close-btn"
      />
    </div>
  );
};

export default Notification;
