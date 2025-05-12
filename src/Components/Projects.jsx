import { motion } from "framer-motion";
import { PROYECTOS_EN, PROYECTOS_ES } from "../Constants";
import { useTranslation } from "react-i18next";
import { BriefcaseIcon } from 'lucide-react';

const Projects = () => {
    const { t, i18n } = useTranslation("translate");
      const projectsData = i18n.language === "es" ? PROYECTOS_ES : PROYECTOS_EN;

  return (
    <section className="md:p-2 m-4 lg:m-20">
      <motion.h2
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 2}}
        className="text-3xl mb-4 md:mb-12 text-center lg:text-4xl font-bold text-blue-500 " >
          {t("projects")}
      </motion.h2>
      <div className="md:flex-wrap  grid grid-cols-2 gap-3 p-4 md:grid-cols-3">
        {projectsData.map((pro, index) => (
          <motion.div key={index} 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 100}}
            transition={{duration: 2}}
            className="w-full  px-4 border-4 border-none border-blue-600 bg-gray-100 rounded-2xl">
             <a href={pro.url}>
              <img
                src={pro.imagen}
                width={250}
                height={250}
                alt={pro.titulo}
                className="m-6 mx-auto rounded-4xl transition-all duration-400 hover:scale-110"
              />
            </a>
            <div className="text-center my-4 font-bold text-lg md:text-xl hover:text-blue-400">
              <a href={pro.url}>{pro.titulo}</a>
            </div>
            <div className="mb-4 md:px-4 text-sm md:text-base">{pro.descripcionP}</div>
            <div className="mb-4 text-xs md:text-sm text-blue-500 text-center  ">{pro.actividad}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
