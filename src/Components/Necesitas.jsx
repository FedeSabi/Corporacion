import { useState } from "react";
import FotoNecesitas from "../assets/FOTO-PARA-NECESITAS-AYUDA.png";

const Necesitas = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row-reverse justify-evenly ">
      {
        <div className="m-16">
          <img
            src={FotoNecesitas}
            alt="foto necesitas"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-300 hover:scale-105 hover:opacity-50 hover:bg-azul-joginere-800 rounded-bl-[200px] rounded-e-[200px] rounded-ee-none`}
            style={{
              width: hovered ? "600px" : "600px",
              height: hovered ? "600px" : "600px",
            }}
          />
        </div>
      }

      <div className="w-[400px] sm:w-[800px]">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold Poppins text-left w-200 pt-[30px] sm:pt-[160px] pb-8 pl-20">
          ¿Necesitas ayuda en algún tema en específico?
        </h1>
        <p className="text-md sm:text-md md:text-xl lg:text-2xl xl:text-2xl Poppins text-left w-200 pl-20 pb-10 sm:pb-12">
          Estamos aquí para ayudarte, por favor, contáctanos para obtener toda
          la información que necesitas y así sentirte seguro al elegirnos como
          tu opción.
        </p>
      </div>
    </div>
  );
};

export default Necesitas;
