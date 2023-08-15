import { useState } from "react";
import Button from "@mui/material/Button";
import HighlightIcon from "@mui/icons-material/Highlight";

const LightButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      style={{
        width: "80px", // Reducir tamaño
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        textAlign: "center",
        backgroundColor: isOn ? "#FFFBE6" : "#E0E0E0",
        opacity: isOn ? 1 : 0.6,
        margin: "5px 5px 10px 5px", // Reducir el margen inferior
      }}
    >
      <Button
        variant="contained"
        onClick={handleClick}
        style={{
          backgroundColor: isOn ? "#FFD700" : "#D3D3D3",
          color: "white",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <HighlightIcon style={{ fontSize: 30 }} />
      </Button>
      <div
        style={{
          marginTop: "10px",
          fontSize: "14px",
          fontWeight: "500",
          opacity: isOn ? 1 : 0.7,
        }}
      >
        Luz
      </div>
      <div style={{ fontSize: "12px", color: isOn ? "#000000" : "#B0B0B0" }}>
        {isOn ? "Encendido" : "Apagado"}
      </div>
    </div>
  );
};

export default LightButton;
