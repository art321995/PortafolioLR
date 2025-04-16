import { BriefcaseIcon } from 'lucide-react';
import { EXPERIENCIA } from '../Constants';
import { motion } from "motion/react"

const Experience = () => {
  

  return (
    <section className="md:mt-32">
      <motion.h2
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 2}}
        className="text-3xl lg:text-5xl font-bold text-blue-500">
          Experiencia
      </motion.h2>
      <div className="md:space-y-4">
        {EXPERIENCIA.map((exp, index) => (
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
                <h3 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-800 ">{exp.empresa}</h3>
                <p className="text-xl lg:text-2xl font-semibold mt-2">{exp.puesto}</p>
                <p className="text-lg lg:text-xl font-bold text-blue-500 mt-2">{exp.tiempo}</p>
                <p className="text-lg lg:text-xl mt-2 text-gray-700">{exp.descripcion}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;