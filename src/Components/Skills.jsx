import { motion } from "framer-motion";


const Skills = () => {

    return (
      <section className="md:p-2 m-4 lg:m-20">
        <motion.h2
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 2}}
          className="text-3xl mb-4 md:mb-12 text-center lg:text-5xl font-bold text-blue-500 " >
            Habilidades
        </motion.h2>
      </section>
    );
  };

  export default Skills;