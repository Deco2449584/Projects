import PropTypes from "prop-types";
import "./Light.scss";
import { useState, useEffect } from "react";

const Light = ({ id, status: initialStatus, sendMessage }) => {
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    setStatus(initialStatus);
  }, [initialStatus]);

  const toggleStatus = () => {
    const newStatus = status === "true" ? "false" : "true";
    setStatus(newStatus); // Actualizamos el estado local

    const data = {
      id: id,
      type: "light",
      status: newStatus,
    };
    sendMessage(data);
  };

  return (
    <div
      className={`light-button ${status === "true" ? "on" : "off"}`}
      onClick={toggleStatus}
    >
      Light {id}
    </div>
  );
};

Light.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default Light;
