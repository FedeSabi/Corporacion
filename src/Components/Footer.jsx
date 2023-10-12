import { MdFacebook } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import {MdWhatsapp} from "react-icons/md";

const Footer = () => {
  return (
    <footer>
    
      <div className="bg-slate-100 flex flex-col items-center justify-center w-[100%] h-[150px] text-center overflow-x-hidden">
        <div className="flex gap-4 mb-4">
          <a
            href="https://www.facebook.com/profile.php?id=61552056427575&locale=es_LA"
            className="icon-link hover:text-blue-500"
          >
            <MdFacebook className="text-gray-600 hover:text-blue-500 text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/corporaci%C3%B3n-joginere-426161295/"
            className="icon-link hover:text-blue-500"
          >
            <FaLinkedin className="text-gray-600 hover:text-blue-500 text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/corp.joginere/"
            className="icon-link hover:text-blue-500"
          >
            <FaInstagram className="text-gray-600 hover:text-blue-500 text-3xl" />
          </a>
          <a
            href="https://twitter.com/CJoginere"
            className="icon-link hover:text-blue-500"
          >
            <SiX className="text-gray-600 hover:text-blue-500 text-3xl" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=593962870338" className="icon-link hover:text-blue-500">
            <MdWhatsapp className="text-gray-600 hover:text-blue-500 text-3xl" />
          </a>
        </div>
        <div>
          <p className="text-md">
            Copyright 2023 Corp. Joginere S.A.S. Design by Tecningenio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
