import Logo from "../assets/LOGOTIPO.png";

const Construccion = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "450px", height: "450px" }}
      />
      <h1 className="text-4xl m-6 mb-36 ">PAGINA EN CONSTRUCCION!!!</h1>
    </div>
  );
};

export default Construccion;
