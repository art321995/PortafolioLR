import { useTranslation } from "react-i18next";
import { BriefcaseIcon } from 'lucide-react';
import { EXPERIENCIA_EN, EXPERIENCIA_ES } from '../Constants';
import { motion } from "motion/react"

const Experience = () => {

  const { t, i18n } = useTranslation("translate");
  const experienciaData = i18n.language === "es" ? EXPERIENCIA_ES : EXPERIENCIA_EN;

  

  return (
    <section className="md:p-2 m-4 lg:m-20">
      <motion.h2
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 2}}
        className="text-3xl lg:text-4xl font-bold text-blue-500">
        {t('experienceTitle')}
      </motion.h2>
      <div className="md:space-y-4 p-6">
       {experienciaData.map((exp, index) => (
          <div key={index} className="">
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 2}}
              className="flex items-start gap-4 mt-10">
              <div className="p-2 bg-primary/10 rounded-full ">
                <BriefcaseIcon size={26} className="text-primary" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl lg:text-2xl text-gray-800 ">{exp.empresa}</h3>
                <p className="text-lg lg:text-xl font-semibold mt-2">{exp.puesto}</p>
                <p className="text-base lg:text-lg font-semibold text-blue-500 mt-2">{exp.tiempo}</p>
                <p className="text-base lg:text-base mt-2 text-gray-700">{exp.descripcion}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;