import { GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: "Máster en Ingeniería de Software",
      school: "Universidad Tecnológica",
      period: "2016 - 2018"
    },
    {
      degree: "Grado en Ingeniería Informática",
      school: "Universidad de Madrid",
      period: "2012 - 2016"
    }
  ];

  return (
    <section className="fade-in">
      <h2 className="section-title">Educación</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-lg text-gray-800">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.school}</p>
                <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;