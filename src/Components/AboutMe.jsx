import { ABOUT_TEXT } from "../Constants";
import { motion } from "framer-motion";


const AboutMe = () => {
    return (
      <section className="w-full p-6 md:p-2  lg:mt-40">
        <motion.h2
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}
          className="text-3xl lg:text-4xl font-bold text-blue-500">
            Sobre Mí
        </motion.h2>
        <div className="p-6">
          
        </div>
      </section>
    );
  };
  
  export default AboutMe;