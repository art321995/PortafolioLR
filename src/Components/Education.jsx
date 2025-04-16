import { GraduationCap } from 'lucide-react';
import { EDUCACION } from '../Constants';


const Education = () => {
 
  return (
    <div className="md:flex w-full mt-10 lg:mt-40 bg-gray-100">
      <h2 className="flex text-center items-center text-3xl lg:text-5xl font-bold text-blue-500" >Educación</h2>
      <div className="m-auto flex">
        {EDUCACION.map((edu, index) => (
          <div key={index} className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <GraduationCap size={26} className="text-primary" />
              </div>
              <div>
                <h3 className="ffont-poppins font-bold text-2xl lg:text-3xl text-gray-800">{edu.escuela}</h3>
                <p className="text-lg lg:text-xl font-bold text-blue-500 mt-2">{edu.año}</p>
                <p className="text-lg lg:text-xl mt-2 text-gray-700">{edu.carrera}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;