import { motion } from "framer-motion";
import { HABILIDADES } from "../Constants";
import { useTranslation } from "react-i18next";

const iconVariants = () => ({
  initial: {x: -14},
  animate: {
    x: [14, -14],
    transition:{
      duration: 3,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  },
});



const Skills = () => {

   const {t} = useTranslation ("translate");

    return (
      <section className="md:p-2 m-4 lg:m-20">
        <motion.h2
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 2}}
          className="text-3xl  my-10 md:mb-12 lg:text-4xl font-bold text-blue-500 " >
            {t("skills")}
        </motion.h2>
        <div className="justify-around grid grid-cols-2 gap-5 md:gap-3 md:grid-cols-3 text-center">
          {HABILIDADES.map((hab, index) => (
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate" 
              className="px-4 py-2 font-bold text-sm rounded-2xl md:text-lg  bg-gray-100" key={index}>
              {hab.skill}
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  export default Skills;