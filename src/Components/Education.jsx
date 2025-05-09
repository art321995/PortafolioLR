import { GraduationCap } from 'lucide-react';
import { EDUCACION_EN, EDUCACION_ES } from '../Constants';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';


const Education = () => {

  const { t, i18n } = useTranslation("translate");
    const educacionData = i18n.language === "es" ? EDUCACION_ES : EDUCACION_EN;
 
  return (
    <div className="md:flex w-full mt-10 lg:mt-40 bg-gray-100">
      <motion.h2
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 2}}
        className="flex text-center pt-8 items-center md:p-2 m-4 lg:m-20 text-3xl lg:text-4xl font-bold text-blue-500" >
          {t('educacionTitle')}
      </motion.h2>
      <div className="m-auto flex">
        {educacionData.map((edu, index) => (
          <motion.div key={index} 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 2}}
            className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <GraduationCap size={26} className="text-primary" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl lg:text-2xl text-gray-800">{edu.escuela}</h3>
                <p className="text-base lg:text-xl font-semibold text-blue-500 mt-2">{edu.año}</p>
                <p className="text-base lg:text-lg mt-2 text-gray-700">{edu.carrera}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;