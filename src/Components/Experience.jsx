import { BriefcaseIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack Senior",
      company: "Empresa Tech",
      period: "2020 - Presente",
      description: "Desarrollo de aplicaciones web usando React, Node.js y MongoDB. Liderazgo de equipo y arquitectura de soluciones.",
    },
    {
      title: "Desarrollador Frontend",
      company: "Startup Innovadora",
      period: "2018 - 2020",
      description: "Implementación de interfaces de usuario responsivas y optimización del rendimiento de aplicaciones web.",
    },
  ];

  return (
    <section className="fade-in">
      <h2 className="section-title">Experiencia</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
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