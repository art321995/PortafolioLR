import { Mail, MapPin, Phone, Github, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from "framer-motion";


const enviarMensajeWhatsApp = () => {
  const mensaje = '¡Hola! Estoy interesado en tu perfil profesional';
  const url = `https://wa.me/+5216674510099/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
};


const Footer = () => {
  return (
    <div className="border-t-2 border-t-gray-100 md:p-2 m-auto lg:m-12">
      <div 
            className="flex-1 text-center m-10 md:text-left">
            <h1 className="font-poppins font-bold text-2xl md:text-3xl text-blue-500 mb-4">
              Luis Rodríguez
            </h1>
            <h2 className="font-inter  font-bold text-xl md:text-2xl text-bold mb-4">
              iOS Developer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-2 md:mt-2 text-gray-700">
              <a href="mailto:luuiz.rodriguez.lopez@gmail.com?Subject=Me interesa tu Perfil Profesional" 
                 className="flex items-center gap-2 justify-center md:justify-start hover:text-blue-500 hover:cursor-pointer">
                <Mail md:size={24} size={16} className="text-primary" />
                <span className='text-sm md:text-xl'>luuiz.rodriguez.lopez@gmail.com</span>
              </a>
              <a onClick={enviarMensajeWhatsApp} className="flex items-center gap-2 justify-center md:justify-start hover:text-blue-500 hover:cursor-pointer">
                <Phone md:size={24} size={16} className="text-primary" />
                <span className='text-sm md:text-xl'>+52 667451 0099</span>
              </a>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin md:size={24} size={16} className="text-primary" />
                <span className='text-sm md:text-xl'>Culiacan, Sinaloa</span>
              </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4">
                  <div className="flex  items-center justify-center gap-4 md:justify-start">
                    <a href="https://github.com/luisrodriguezlopez" className="text-gray-700 hover:text-blue-500">
                      <Github md:size={24}  size={16}/>
                    </a>
                    <a href="https://www.linkedin.com/in/luis-rodriguez-lopez-094118105/" className="text-gray-700 hover:text-blue-500">
                      <Linkedin md:size={24} size={16}/>
                    </a>
                  </div>
                  <div className="flex justify-center md:justify-end ">
                    <a href="#" className="flex hover:text-blue-500 mt-4 text-base md:text-lg font-bold">
                      Inicio <ArrowUp />
                    </a>
                  </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Footer;
