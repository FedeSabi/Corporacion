import { MdCall, MdNearMe, MdOutlineMarkEmailRead } from "react-icons/md";
import Postal1 from "../assets/Postal1.jpg";

const Guayaquil = () => {
  return (
    <div>
      <div>
        <div>
          <img
            src={Postal1}
            alt="edificios"
            className="w-full h-[800px] opacity-75 mx-auto object-cover" 
            style={{ display: "block" }}   
          />{/*se modifico object cover */}
        </div>

        <div className="flex flex-col sm:flex-row justify-evenly gap-8 p-10 m-3 w-full">
          <div className="w-full sm:w-[400px] p-2 m-2 text-center">
            <div className="flex justify-center">
              <MdNearMe style={{ fontSize: "60px" }} />
            </div>
            <p className="pt-5">
              Av. 9 de Octubre 234 y Baquerizo Monero - Edificio Gran pasaje P.
              10 Of. 1013
            </p>
          </div>
          <div className="w-full sm:w-[400px] p-2 m-2 text-center">
            <div className="flex justify-center">
              <a href="mailto:info@joginere.com" className="icon-link">
                <MdOutlineMarkEmailRead className="text-gray-600 hover:text-blue-500 text-[60px]" />
              </a>
            </div>
            <p className="pt-5">info@joginere.com</p>
          </div>
          <div className="w-full sm:w-[400px] p-2 m-2 text-center">
            <div className="flex justify-center">
              <MdCall style={{ fontSize: "60px" }} />
            </div>
            <p className="pt-5">04 6011928 - 0995060053</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Guayaquil;
