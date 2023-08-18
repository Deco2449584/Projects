// Importamos el hook useState de la librería React para gestionar el estado local del componente.
import { useState, useEffect } from "react";
// Vamos a usar un ícono de bombilla para representar WLED.
import { MdLightbulbOutline } from "react-icons/md";
// Importamos CirclePicker, un componente de la librería react-color para seleccionar colores.
import { CirclePicker } from "react-color";
// Importamos los estilos específicos para este componente.
import "../scss/components/wled.scss";
// Definimos el componente funcional WLEDControl.
function WLEDControl() {
  // Establecemos el estado inicial del color, brillo y estado (encendido/apagado) usando el hook useState.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [color, setColor] = useState("#FF0000");
  const [brightness, setBrightness] = useState(255);
  const [isOn, setIsOn] = useState(true);

  // Constante para la dirección IP del dispositivo WLED.
  const wledIP = "http://192.168.10.37";

  // Función para manejar el cambio de color a través del picker.
  const handleColorChange = async (colorEvent) => {
    // Establecemos el estado del color con el nuevo valor.
    setColor(colorEvent.hex);

    // Convertimos el código hexadecimal del color a valores RGB.
    const r = parseInt(colorEvent.hex.slice(1, 3), 16);
    const g = parseInt(colorEvent.hex.slice(3, 5), 16);
    const b = parseInt(colorEvent.hex.slice(5, 7), 16);

    // Construimos la URL para hacer la solicitud al dispositivo WLED con el nuevo color.
    const url = `${wledIP}/win&R=${r}&G=${g}&B=${b}&A=${brightness}`;
    console.log("Sending request to:", url);

    // Hacemos la solicitud y mostramos la respuesta.
    try {
      const response = await fetch(url);
      const responseData = await response.text();
      console.log("Received response:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Función para encender o apagar la luz.
  const handlePowerToggle = async () => {
    setIsOn((prevIsOn) => !prevIsOn);
    try {
      const url = `${wledIP}/win&T=${isOn ? 1 : 0}`;
      console.log("Sending power toggle request to:", url);

      const response = await fetch(url);
      const responseData = await response.text();
      console.log("Received response:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Función para manejar el cambio de brillo a través del control deslizante.
  const handleBrightnessChange = async (e) => {
    // Obtenemos el nuevo valor de brillo del evento.
    const newBrightness = Number(e.target.value);

    // Establecemos el estado del brillo con el nuevo valor.
    setBrightness(newBrightness);
    console.log("Setting brightness to:", newBrightness);

    // Construimos la URL para hacer la solicitud al dispositivo WLED con el nuevo brillo.
    const url = `${wledIP}/win&A=${newBrightness}`;
    console.log("Sending brightness request to:", url);

    // Hacemos la solicitud y mostramos la respuesta.
    try {
      const response = await fetch(url);
      const responseData = await response.text();
      console.log("Received response:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    console.log("Valor de isModalOpen:", isModalOpen);
  }, [isModalOpen]);
  // Renderizamos los elementos de la interfaz del componente.
  return (
    <div className="wled-button" onClick={() => setIsModalOpen(true)}>
      <MdLightbulbOutline size={30} />
      <span>WLED</span>

      {isModalOpen && (
        <div className="wled-modal">
          <div className="wled-modal-content">
            <button
              onClick={() => {
                setIsModalOpen(false);
                console.log("Clic en cerrar");
                console.log("Valor de isModalOpen:", isModalOpen);
              }}
            >
              Cerrar
            </button>

            {/* Aquí está el botón de encendido/apagado */}
            <button onClick={handlePowerToggle}>
              {isOn ? "Apagar" : "Encender"}
            </button>

            <CirclePicker color={color} onChangeComplete={handleColorChange} />
            <input
              type="range"
              min="0"
              max="255"
              value={brightness}
              onChange={handleBrightnessChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default WLEDControl;
