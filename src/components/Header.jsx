import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="mt-0 lg:mt-5 max-w-screen-xl bg-white gap-3 mx-auto flex items-center justify-between px-3 lg:px-0 lg:rounded-lg lg:border">
      <div className="flex-1 hidden lg:flex space-x-2 p-3 items-center font-medium text-base">
        <a href="#" className="p-2 bg-gold text-black border rounded-lg">
          Anasayfa
        </a>
        <a className="p-2  hover:bg-gold/10 cursor-pointer duration-300 rounded-lg">
          Hakkımızda
        </a>
        <a href="#" className="block hover:bg-gold/10 p-2 rounded-lg">
          Yasal
        </a>
        <a href="#" className="p-2 hover:bg-gold/10 duration-300 rounded-lg">
          İletişim
        </a>
      </div>

      <img src={logo} className="w-16 md:w-20 py-2" alt="Logo" />

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="bg-black p-1 rounded-xl text-gold"
        >
          {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      <div className="flex-1 hidden lg:flex justify-end space-x-5 p-3 font-medium text-base">
        <a href="#" className="p-2 hover:bg-gold/10 duration-300 rounded-lg">
          Hizmetlerimiz
        </a>
        <a href="#" className="p-2 hover:bg-gold/10 duration-300 rounded-lg">
          Randevu Al
        </a>
        <a href="#" className="p-2 hover:bg-gold/10 duration-300 rounded-lg">
          Blog
        </a>

        <button
          href="#"
          className="p-2 bg-black w-40 text-white font-semibold rounded-lg"
        >
          Giriş Yap
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 py-2 gap-1 right-0 bg-gradient-to-r from-gold to-orange-500 shadow-lg rounded-lg flex flex-col items-center lg:hidden z-50"
        >
          <a
            href="#"
            className="block p-3 text-white bg-black/20 hover:bg-black/30 duration-300 rounded-full shadow-md w-10/12 text-center"
          >
            Anasayfa
          </a>
          <a
            href="#"
            className="block p-3 text-white bg-black/20 hover:bg-black/30 duration-300 rounded-full shadow-md w-10/12 text-center"
          >
            Hakkımızda
          </a>
          <a
            href="#"
            className="block p-3 text-white bg-black/20 hover:bg-black/30 duration-300 rounded-full shadow-md w-10/12 text-center"
          >
            Yasal
          </a>
          <a
            href="#"
            className="block p-3 text-white bg-black/20 hover:bg-black/30 duration-300 rounded-full shadow-md w-10/12 text-center"
          >
            İletişim
          </a>
          <a
            href="#"
            className="block p-3 text-white bg-black/20 hover:bg-black/30 duration-300 rounded-full shadow-md w-10/12 text-center"
          >
            Hizmetlerimiz
          </a>
          <a
            href="#"
            className="block p-3 text-white bg-black/20 hover:bg-black/30 duration-300 rounded-full shadow-md w-10/12 text-center"
          >
            Randevu Al
          </a>
          <a
            href="#"
            className="block p-3 text-white bg-black/20 hover:bg-black/30 duration-300 rounded-full shadow-md w-10/12 text-center"
          >
            Blog
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
