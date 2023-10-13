import FotoAerea from "../assets/FOTO-AEREA-GUAYAQUIL.png";

const Reseña = () => {
  return (
    <div className=" overflow-x-hidden flex flex-col-reverse sm:flex-row-reverse justify-normal">
      <div className="m-0 sm:m-16 ">
        <img
          src={FotoAerea}
          alt="foto necesitas"
          className=" w-[400px] ml-8 mb-8 md:w-[900px] h-[400px] justify-center md:h-[800px] rounded-br-[200px] rounded-s-[200px] rounded-es-none"
        />
      </div>
      <div className="flex flex-col gap-20 m-12 h-[700px] w-[600px] justify-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl mb-6 mt-12 mr-[200px] md:mr-2 justify-center text-center">
            Misión
          </h1>
          <p className="text-md w-[350px] md:w-[600px] ml-6 mr-[100px] md:ml-2 md:text-xl items-center justify-center text-center">
            Ser un corporativo confiable y eficiente. Satisfacer las necesidades
            de todos nuestros clientes y contribuir al bienestar de nuestros
            colaboradores
          </p>
        </div>
        <div className="">
          <h1 className="text-4xl md:text-5xl mb-6 mt-12 mr-[200px] md:mr-2 justify-center text-center">
            Visión
          </h1>
          <p className="text-md w-[350px] md:w-[600px] ml-6 mr-[100px] md:ml-2 md:text-xl items-center justify-center text-center">
            Convertirnos en una empresa líder en prestación de servicios
            directos a nivel Nacional e Internacional
          </p>
        </div>
        <div className=" flex flex-col text-center mr-10 pr-10 ">
          <h1 className="text-4xl md:text-5xl mb-6 mt-12 mr-[120px] xl:ml-[100px] md:mr-2 justify-center text-center">
            Valores
          </h1>
          <p className=" text-md w-[350px] md:w-[600px] ml-6 mr-[100px] md:ml-2 md:text-xl items-center justify-center text-center">
            Liderazgo, Integridad, Responsabilidad, Pasión, Diversidad,
            Colaboración
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reseña;
// se modifico en valores en xl: 100 mr!!!!!!!