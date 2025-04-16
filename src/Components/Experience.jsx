import { BriefcaseIcon } from 'lucide-react';
import { EXPERIENCIA } from '../Constants';

const Experience = () => {
  

  return (
    <section className="fade-in">
      <h2 className="section-title">Experiencia</h2>
      <div className="space-y-4">
        {EXPERIENCIA.map((exp, index) => (
          <div key={index} className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <BriefcaseIcon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-lg text-gray-800">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;