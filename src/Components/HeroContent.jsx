import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";
import {  useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";


const enviarMensajeWhatsApp = () => {
  const mensaje = '¡Hola! Estoy interesado en tu perfil profesional';
  const url = `https://wa.me/+5216674510099/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
};

const container = (delay) =>({
  hidden:{y: -100, opacity:0},
  visible:{y: 0, opacity: 1, transition:{duration: 1, delay} }
});
  


const HeroContent = () => {
  const { i18n } = useTranslation(["translate"]);
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const baseClass = "text-lg hover:cursor-pointer transition";
  const activeClass = "font-bold underline text-blue-700";
  const inactiveClass = "text-blue-500 hover:underline";
  
  return (
    <>
    <div className="flex justify-end w-full gap-2 p-6">
      <button
        className={`${baseClass} ${language === "en" ? activeClass : inactiveClass}`}
        onClick={() => changeLanguage("en")} >
        English
      </button>
      <p className="text-blue-500 text-lg font-bold">/</p>
      <button
        className={`${baseClass} ${language === "es" ? activeClass : inactiveClass}`}
        onClick={() => changeLanguage("es")}>
        Español
      </button>
    </div>



    <div className="md:p-2 m-auto lg:m-20">
      
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mt-10">
          <div className="w-32 h-32 md:w-50 md:h-50 rounded-full overflow-hidden">
            <motion.img
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
              src="./img/Perfil.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center md:text-left">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-blue-500 mb-4">
               Luis Rodríguez
            </h1>
            <h2 className="font-inter  font-bold text-2xl md:text-3xl text-bold mb-4">
              iOS Developer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:mt-2 text-sm text-gray-700">
              <a href="mailto:luuiz.rodriguez.lopez@gmail.com?Subject=Me interesa tu Perfil Profesional" 
                 className="flex items-center gap-2 justify-center md:justify-start hover:text-blue-500 hover:cursor-pointer">
                <Mail size={24} className="text-primary" />
                <span className='text-lg'>luuiz.rodriguez.lopez@gmail.com</span>
              </a>
              <a onClick={enviarMensajeWhatsApp} className="flex items-center gap-2 justify-center md:justify-start hover:text-blue-500 hover:cursor-pointer">
                <Phone size={24} className="text-primary" />
                <span className='text-lg'>+52 667451 0099</span>
              </a>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin size={24} className="text-primary" />
                <span className='text-lg'>Culiacan, Sinaloa</span>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <a href="https://github.com/luisrodriguezlopez"  className="text-gray-700 hover:text-blue-500">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/luis-rodriguez-lopez-094118105/"  className="text-gray-700 hover:text-blue-500">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>

  );
}

export default HeroContent;
