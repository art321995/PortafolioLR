import { motion } from "framer-motion";
import { PROYECTOS } from "../Constants";

const Projects = () => {
  return (
    <section className="md:p-2 m-4 lg:m-20">
      <motion.h2
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 2}}
        className="text-3xl text-center lg:text-5xl font-bold text-blue-500" >
          Proyectos
      </motion.h2>
      <div className="md:flex-wrap  grid  gap-3 p-4 md:grid-cols-3">
        {PROYECTOS.map((pro, index) => (
          <div key={index} className="w-full  px-4">
            <div className="text-center mt-10 md:mt-20 font-bold md:text-2xl">
              <a href="">{pro.titulo}</a></div>
            <div className="md:mt-4 md:px-4">{pro.descripcionP}</div>
            <a href="">
              <img
                src={pro.imagen}
                width={200}
                height={200}
                alt={pro.titulo}
                className="m-6 mx-auto rounded"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
