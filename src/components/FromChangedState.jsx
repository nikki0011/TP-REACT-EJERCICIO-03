import { useState } from "react";

const FromChangedState = () => {
  const [texto, setString] = useState("Hello my friend");

  const agregarTexto = () => {
    setString(texto + " (from changed state!)");
  };
  return (
    <section className="border border-3 p-3 ">
      <p className="fs-3 ">{texto}</p>
      <button
        className="btn btn-info btn-lg"
        id="btn-agregar"
        onClick={agregarTexto}
      >
        Agregar Texto
      </button>
    </section>
  );
};

export default FromChangedState;
