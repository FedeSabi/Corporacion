{/*}


import { Link } from "react-router-dom";
import Logo from "../assets/LOGOTIPO.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [aboutDropdownOpen2, setAboutDropdownOpen2] = useState(false); // Nuevo estado para el dropdown de "Sobre Nosotros"
  const [aboutDropdownOpen3, setAboutDropdownOpen3] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleAboutDropdown2 = () => {
    setAboutDropdownOpen2(!aboutDropdownOpen2);
  };

  const toggleAboutDropdown3 = () => {
    setAboutDropdownOpen3(!aboutDropdownOpen3);
  };

  return (
    <nav>
      <div className="h-32 flex justify-between z-50 text-violeta-joginere lg:py-2 px-2 py-2">
        <div className="flex items-center flex-1">
          <span className="text-lg font-bold">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "350px", height: "350px" }}
            />
          </span>
        </div>
        <div className=" lg:flex md:flex lg: flex-1 items-center justify-end font-normal  hidden">
          <div className="flex-10">
            <ul className="flex gap-[18px] mr-16 text-[16px] font-semibold fill-stone-700">
              <Link
                to="/"
                smooth={true}
                duration={500}
                className=" hover:text-blue-500"
              >
                <li>Inicio</li>
              </Link>

              {/*dropdown con arrow */} {/*}
              <li className="mb-4 relative">
                <button
                  onClick={toggleAboutDropdown}
                  className="hover:text-blue-500 focus:outline-none flex items-center"
                >
                  Sobre Nosotros
                  <span className="ml-1">
                    {aboutDropdownOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {aboutDropdownOpen && (
                  <ul className="ml-4 mb-2 absolute left-0 mt-2 w-auto bg-white border border-gray-300 shadow-lg">
                    {/* Elementos del dropdown */} {/*}
                    <li>
                      <Link
                        to="/Nosotros"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                      >
                        Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Reseña"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                      >
                        Reseña
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Corporativo"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                      >
                        Corporativo
                      </Link>
                    </li>
                    {/* Agrega más elementos según sea necesario */} {/*}
                  </ul>
                )}
              </li>

              {/*dropdown con arrow */} {/*}
              <li className="mb-4 relative">
                <button
                  onClick={toggleAboutDropdown2}
                  className="hover:text-blue-500 focus:outline-none flex items-center"
                >
                  Nuestras Marcas
                  <span className="ml-1">
                    {aboutDropdownOpen2 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {aboutDropdownOpen2 && (
                  <ul className="ml-4 mb-2 absolute left-0 mt-2 w-auto bg-white border border-gray-300 shadow-lg">
                    {/* Elementos del dropdown */} {/*}
                    <li>
                      <Link
                        to="/Tecningenio"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                      >
                        Tecningenio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/JGCreativos"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                      >
                        JG Creativos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/GCTravelGroup"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                      >
                        GC Travel Group
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/JogicralEcuador"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                      >
                        Jogicral Ecuador
                      </Link>
                    </li>
                    {/* Agrega más elementos según sea necesario */} {/*}
                  </ul>
                )}
              </li>
              {/*dropdown con arrow */}{/*}
              <li className="mb-4 relative">
                <button
                  onClick={toggleAboutDropdown3}
                  className="hover:text-blue-500 focus:outline-none flex items-center"
                >
                  Trabaja con nosotros
                  <span className="ml-1">
                    {aboutDropdownOpen3 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {aboutDropdownOpen3 && (
                  <ul className="ml-4 mb-2 absolute left-0 mt-2 w-auto bg-white border border-gray-300 shadow-lg">
                    {/* Elementos del dropdown */} {/*}
                    <li>
                      <Link
                        to="/Postulate"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                      >
                        Postúlate
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Proveedor"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                      >
                        ¿Quieres ser proveedor?
                      </Link>
                    </li>
                    {/* Agrega más elementos según sea necesario */} {/*}
                  </ul>
                )}
              </li>

              <Link
                to="Contactanos"
                smooth={true}
                duration={500}
                className=" hover:text-blue-500"
              >
                <li>Contactanos</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="lg:hidden md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-xl text-gray-500 hover:text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden md:hidden">
          {/* Agrega aquí tu menú desplegable */} {/*}
          <ul className="bg-white p-4">
            <li className="mb-4">
              <Link
                to="/"
                smooth={true}
                duration={500}
                className="hover:text-blue-500"
              >
                Inicio
              </Link>
            </li> 
            {/*sobre nosotros con arrow */} {/*}
            <li className="mb-4 relative">
              <button
                onClick={toggleAboutDropdown}
                className="hover:text-blue-500 focus:outline-none flex items-center"
              >
                Sobre Nosotros
                <span className="ml-1">
                  {aboutDropdownOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {aboutDropdownOpen && (
                <ul
                  className="ml-4 mb-2 absolute left-0 mt-2 w-auto bg-white border border-gray-300 shadow-lg"
                  style={{ zIndex: 1000 }}
                >
                  {/* Elementos del dropdown */} {/*}
                  <li>
                    <Link
                      to="/Nosotros"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Reseña"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                    >
                      Reseña
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Corporativo"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                    >
                      Corporativo
                    </Link>
                  </li>
                  {/* Agrega más elementos según sea necesario */} {/*}
                </ul>
              )}
            </li>
            {/*dropdown con arrow */} {/*}
            <li className="mb-4 relative">
              <button
                onClick={toggleAboutDropdown2}
                className="hover:text-blue-500 focus:outline-none flex items-center"
              >
                Nuestras Marcas
                <span className="ml-1">
                  {aboutDropdownOpen2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {aboutDropdownOpen2 && (
                <ul
                  className="ml-4 mb-2 absolute left-0 mt-2 w-auto bg-white border border-gray-300 shadow-lg"
                  style={{ zIndex: 1000 }}
                >
                  {/* Elementos del dropdown */} {/*}
                  <li>
                    <Link
                      to="/Tecningenio"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                    >
                      Tecningenio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/JGCreativos"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                    >
                      JG Creativos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/GCTravelGroup"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                    >
                      GC Travel Group
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/JogicralEcuador"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                    >
                      Jogicral Ecuador
                    </Link>
                  </li>
                  {/* Agrega más elementos según sea necesario */} {/*}
                </ul>
              )}
            </li>

            {/*dropdown con arrow */} {/*}
            <li className="mb-4 relative">
              <button
                onClick={toggleAboutDropdown3}
                className="hover:text-blue-500 focus:outline-none flex items-center"
              >
                Trabaja con nosotros
                <span className="ml-1">
                  {aboutDropdownOpen3 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {aboutDropdownOpen3 && (
                <ul
                  className="ml-4 mb-2 absolute left-0 mt-2 w-auto bg-white border border-gray-300 shadow-lg"
                  style={{ zIndex: 1000 }}
                >
                  {/* Elementos del dropdown */} {/*}
                  <li>
                    <Link
                      to="/Postulate"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                    >
                      Postúlate
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/QuieresSerProveedor"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                    >
                      ¿Quieres ser proveedor?
                    </Link>
                  </li>
                  {/* Agrega más elementos según sea necesario */} {/*}
                </ul>
              )}
            </li>
            <li className="mb-4">
              <Link
                to="Contactanos"
                smooth={true}
                duration={500}
                className=" hover:text-blue-500"
              >
                Contactanos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
*/}

import { Link } from "react-router-dom";
import Logo from "../assets/LOGOTIPO.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setActiveDropdown(null); // Cierra cualquier dropdown cuando se abre el menú
    }
  };

  const toggleAboutDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };
  
  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav>
      <div className="h-32 flex justify-between z-50 text-violeta-joginere lg:py-2 px-2 py-2">
        <div className="flex items-center flex-1">
          <span className="text-lg font-bold">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "350px", height: "350px" }}
            />
          </span>
        </div>
        <div className=" lg:flex md:flex lg: flex-1 items-center justify-end font-normal  hidden">
          <div className="flex-10">
            <ul className="flex gap-[18px] mr-16 text-[16px] font-semibold fill-stone-700">
              <Link
                to="/"
                smooth={true}
                duration={500}
                className=" hover:text-blue-500"
                onClick={closeDropdown} // Cierra dropdown al hacer clic en Inicio
              >
                <li>Inicio</li>
              </Link>

              <li className="mb-4 relative">
                <button
                  onClick={() => toggleAboutDropdown("aboutDropdownOpen")}
                  className="hover:text-blue-500 focus:outline-none flex items-center"
                >
                  Sobre Nosotros
                  <span className="ml-1">
                    {activeDropdown === "aboutDropdownOpen" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {activeDropdown === "aboutDropdownOpen" && (
                  <ul className="ml-4 mb-2 absolute left-0 mt-2 w-auto bg-white border border-gray-300 shadow-lg">
                    <li>
                      <Link
                        to="/Nosotros"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                        onClick={closeDropdown} // Cierra dropdown al hacer clic en Nosotros
                      >
                        Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Reseña"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                        onClick={closeDropdown} // Cierra dropdown al hacer clic en Reseña
                      >
                        Reseña
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Corporativo"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                        onClick={closeDropdown} // Cierra dropdown al hacer clic en Corporativo
                      >
                        Corporativo
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="mb-4 relative">
                <button
                  onClick={() => toggleAboutDropdown("aboutDropdownOpen2")}
                  className="hover:text-blue-500 focus:outline-none flex items-center"
                >
                  Nuestras Marcas
                  <span className="ml-1">
                    {activeDropdown === "aboutDropdownOpen2" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {activeDropdown === "aboutDropdownOpen2" && (
                  <ul className="ml-4 mb-2 absolute left-0 mt-2 w-auto bg-white border border-gray-300 shadow-lg">
                    <li>
                      <Link
                        to="/Tecningenio"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                        onClick={closeDropdown} // Cierra dropdown al hacer clic en Tecningenio
                      >
                        Tecningenio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/JGCreativos"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                        onClick={closeDropdown} // Cierra dropdown al hacer clic en JG Creativos
                      >
                        JG Creativos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/GCTravelGroup"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                        onClick={closeDropdown} // Cierra dropdown al hacer clic en GC Travel Group
                      >
                        GC Travel Group
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/JogicralEcuador"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                        onClick={closeDropdown} // Cierra dropdown al hacer clic en Jogicral Ecuador
                      >
                        Jogicral Ecuador
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="mb-4 relative">
                <button
                  onClick={() => toggleAboutDropdown("aboutDropdownOpen3")}
                  className="hover:text-blue-500 focus:outline-none flex items-center"
                >
                  Trabaja con nosotros
                  <span className="ml-1">
                    {activeDropdown === "aboutDropdownOpen3" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {activeDropdown === "aboutDropdownOpen3" && (
                  <ul className="ml-4 mb-2 absolute left-0 mt-2 w-auto bg-white border border-gray-300 shadow-lg">
                    <li>
                      <Link
                        to="/Postulate"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                        onClick={closeDropdown} // Cierra dropdown al hacer clic en Postúlate
                      >
                        Postúlate
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/QuieresSerProveedor"
                        smooth={true}
                        duration={500}
                        className="hover:text-blue-500 block px-4 py-2"
                        onClick={closeDropdown} // Cierra dropdown al hacer clic en ¿Quieres ser proveedor?
                      >
                        ¿Quieres ser proveedor?
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <Link
                to="Contactanos"
                smooth={true}
                duration={500}
                className=" hover:text-blue-500"
                onClick={closeDropdown} // Cierra dropdown al hacer clic en Contactanos
              >
                <li>Contactanos</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="lg:hidden md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-xl text-gray-500 hover:text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden md:hidden">
          <ul className="bg-white p-4">
            <li className="mb-4">
              <Link
                to="/"
                smooth={true}
                duration={500}
                className="hover:text-blue-500"
                onClick={closeDropdown} // Cierra dropdown al hacer clic en Inicio
              >
                Inicio
              </Link>
            </li>
            <li className="mb-4 relative">
              <button
                onClick={() => toggleAboutDropdown("aboutDropdownOpen")}
                className="hover:text-blue-500 focus:outline-none flex items-center"
              >
                Sobre Nosotros
                <span className="ml-1">
                  {activeDropdown === "aboutDropdownOpen" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {activeDropdown === "aboutDropdownOpen" && (
                <ul className="ml-4 mb-2 absolute left-0 mt-2 w-auto bg-white border border-gray-300 shadow-lg">
                  <li>
                    <Link
                      to="/Nosotros"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                      onClick={closeDropdown} // Cierra dropdown al hacer clic en Nosotros
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Reseña"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                      onClick={closeDropdown} // Cierra dropdown al hacer clic en Reseña
                    >
                      Reseña
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Corporativo"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                      onClick={closeDropdown} // Cierra dropdown al hacer clic en Corporativo
                    >
                      Corporativo
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-4 relative">
              <button
                onClick={() => toggleAboutDropdown("aboutDropdownOpen2")}
                className="hover:text-blue-500 focus:outline-none flex items-center"
              >
                Nuestras Marcas
                <span className="ml-1">
                  {activeDropdown === "aboutDropdownOpen2" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {activeDropdown === "aboutDropdownOpen2" && (
                <ul className="ml-4 mb-2 absolute left-0 mt-2 w-auto bg-white border border-gray-300 shadow-lg">
                  <li>
                    <Link
                      to="/Tecningenio"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                      onClick={closeDropdown} // Cierra dropdown al hacer clic en Tecningenio
                    >
                      Tecningenio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/JGCreativos"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                      onClick={closeDropdown} // Cierra dropdown al hacer clic en JG Creativos
                    >
                      JG Creativos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/GCTravelGroup"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                      onClick={closeDropdown} // Cierra dropdown al hacer clic en GC Travel Group
                    >
                      GC Travel Group
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/JogicralEcuador"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                      onClick={closeDropdown} // Cierra dropdown al hacer clic en Jogicral Ecuador
                    >
                    Jogicral Ecuador
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-4 relative">
              <button
                onClick={() => toggleAboutDropdown("aboutDropdownOpen3")}
                className="hover:text-blue-500 focus:outline-none flex items-center"
              >
                Trabaja con nosotros
                <span className="ml-1">
                  {activeDropdown === "aboutDropdownOpen3" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {activeDropdown === "aboutDropdownOpen3" && (
                <ul className="ml-4 mb-2 absolute left-0 mt-2 w-auto bg-white border border-gray-300 shadow-lg">
                  <li>
                    <Link
                      to="/Postulate"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                      onClick={closeDropdown} // Cierra dropdown al hacer clic en Postúlate
                    >
                      Postúlate
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/QuieresSerProveedor"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-500 block px-4 py-2"
                      onClick={closeDropdown} // Cierra dropdown al hacer clic en ¿Quieres ser proveedor?
                    >
                    ¿Quieres ser proveedor?
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-4">
              <Link
                to="Contactanos"
                smooth={true}
                duration={500}
                className=" hover:text-blue-500"
                onClick={closeDropdown} // Cierra dropdown al hacer clic en Contactanos
              >
                Contactanos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;