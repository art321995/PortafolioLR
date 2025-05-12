
import { useTranslation } from "react-i18next";
import { ABOUT_TEXT } from "../Constants";
import { motion } from "motion/react";




const AboutMe = () => {
    const { t } = useTranslation("translate"); 

    return (
      <section className=" md:p-2 m-4 lg:m-20">
        <motion.h2
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 2}}
          className="text-3xl lg:text-4xl font-bold text-blue-500"> 
          {t('aboutMe')}
        </motion.h2> 
        <div className="p-6">
        <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 2}}
            className=" text-base  text-gray-700 md:mt-4">
            {t('aboutText', {ABOUT_TEXT})}
          </motion.p>
        </div>
      </section>
    );
  };
  
  export default AboutMe;