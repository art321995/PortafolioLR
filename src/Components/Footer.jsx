import { Mail, MapPin, Phone, Github, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';


const enviarMensajeWhatsApp = () => {
  const mensaje = '¡Hola! Estoy interesado en tu perfil profesional';
  const url = `https://wa.me/+5216674510099/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
};


const Footer = () => {
  const {t} = useTranslation("translate");

  return (
    <div className="border-t-2 border-t-gray-100 md:p-2 m-auto ">
      <div 
            className="flex-1 text-center m-10 md:text-left">
            <h1 className="font-poppins font-bold text-2xl md:text-3xl text-blue-500 mb-4">
              Luis Rodríguez
            </h1>
            <h2 className="font-inter  font-bold text-xl md:text-2xl text-bold mb-4">
              {t("rol")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-2 md:mt-2 text-gray-700">
              <a href="mailto:luuiz.rodriguez.lopez@gmail.com?Subject=Me interesa tu Perfil Profesional" 
                 className="flex items-center gap-2 justify-center md:justify-start hover:text-blue-500 hover:cursor-pointer">
                <Mail  size={20} className="text-primary" />
                <span className='text-sm md:text-lg'>luuiz.rodriguez.lopez@gmail.com</span>
              </a>
              <a onClick={enviarMensajeWhatsApp} className="flex items-center gap-2 justify-center md:justify-start hover:text-blue-500 hover:cursor-pointer">
                <Phone  size={20} className="text-primary" />
                <span className='text-sm md:text-lg'>+52 667451 0099</span>
              </a>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin  size={20} className="text-primary" />
                <span className='text-sm md:text-lg'>Culiacan, Sinaloa</span>
              </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4">
                  <div className="flex  items-center justify-center gap-4 md:justify-start">
                    <a href="https://github.com/luisrodriguezlopez" className="text-gray-700 hover:text-blue-500">
                      <Github  size={20}/>
                    </a>
                    <a href="https://www.linkedin.com/in/luis-rodriguez-lopez-094118105/" className="text-gray-700 hover:text-blue-500">
                      <Linkedin size={20}/>
                    </a>
                  </div>
                  <div className="flex justify-center md:justify-end ">
                    <a href="#" className="flex hover:text-blue-500 mt-4 text-base md:text-lg font-bold">
                      {t("btnStart")} <ArrowUp />
                    </a>
                  </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Footer;
