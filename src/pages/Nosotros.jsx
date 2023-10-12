import FotoNoria from "../assets/NORIA-GUAYAQUIL.png";

const Nosotros = () => {
  return (
    <div className="flex flex-col-reverse  sm:flex-row-reverse justify-normal">
      <div className="m-16 ">
        <img
          src={FotoNoria}
          alt="foto necesitas"
          className=" h-[500px] sm:w-[900px] sm:h-[1000px] mt-10 rounded-br-[200px] rounded-s-[200px] rounded-es-none"
        />
      </div>
      <div className=" flex flex-col gap-20 m-12 h-[800px] w-[600px] justify-center">
        <div className="container mx-auto">
          <h1 className=" text-3xl w-[240px] xl:w-[500px] h-10 xl:h-16 mb-[150px] xl:mt-[180px]  text-justify ml-[20px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:justify-center sm:items-center sm:text-left md:text-center">
            Nuestra Historia
          </h1>
          <p className="flex text-sm xl:text-lg text-justify xl:text-left w-[300px] xl:w-[500px] ml-4 h-[600px] sm:text-center justify-center items-center mt-12 mr-4">
            CORPORACION JOGINERE S.A.S., es una compañía orientada a la venta de
            bienes y prestación de servicios varios a través de sus marcas
            propias, dedicadas a la captación de consumidores finales junto a
            sus socios estratégicos de negocios. Comenzó sus actividades en el
            año 2019 por medio de persona natural y luego fue constituida
            legalmente como empresa en el año 2023, abriendo sus puertas
            empresarialmente, con el fin de reinvertir el capital obtenido de
            las ventas realizadas de esos periodos. Desde entonces, CORPORACION
            JOGINERE S.A.S., se ha insertado en el mercado local y regional,
            logrando conquistar espacios en las principales ciudades del país;
            difundiendo campañas por medios impresos, páginas web y redes
            sociales. En la actualidad, CORPORACION JOGINERE S.A.S., ha ampliado
            sus metas, encontrando un gran nicho en el ámbito de las diferentes
            actividades de sus marcas, sean estas, la de Agencia Publicitaria
            Digital e impresa, Tienda Tecnológica de Hardware y Software,
            Agencia de Viajes, Comercialización segura vía web, producción y
            venta de mariscos procesados. De esta forma, CORPORACION JOGINERE
            S.A.S., cumple con su principal Misión, convertirse en una empresa
            pionera en la realización de sus actividades. Para nuestra
            satisfacción, hemos visto buena aceptación por parte de los
            consumidores finales, socios de negocios y proveedores, por lo que a
            CORPORACION JOGINERE S.A.S., de mano de su presidente, fundador y
            guía, seguirá apostando a su crecimiento. Vienen años de grandes
            triunfos y crecimiento, para esta empresa que espera cuya próxima
            meta a conquistar sea seguir con la inclusión tecnológica en
            nuestros procesos internos y así poder seguir brindando ventas
            eficientes de bienes y servicios de alta calidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
