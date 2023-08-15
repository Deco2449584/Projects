import LightButton from "./LightButton";

const Contenido = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LightButton />
      <LightButton />
      <LightButton />
      <LightButton />
      {/*... Añade más botones o contenido según lo requieras */}
    </div>
  );
};

export default Contenido;
