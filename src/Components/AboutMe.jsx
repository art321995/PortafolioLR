import { ABOUT_TEXT } from "../Constants";
import { motion } from "motion/react"


const AboutMe = () => {
    return (
      <section className="w-full p-6 md:p-2  lg:mt-40">
        <motion.h2
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 2}}
          className="text-3xl lg:text-5xl font-bold text-blue-500"> 
          Sobre Mí
        </motion.h2> 
        <div className="p-6">
        <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 2}}
            className=" text-xl  text-gray-700 mt-4">
            {ABOUT_TEXT}
          </motion.p>
        </div>
      </section>
    );
  };
  
  export default AboutMe;