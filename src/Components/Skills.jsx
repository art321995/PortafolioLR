const Skills = () => {
    const skills = {
      "Frontend": ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind"],
      "Backend": ["Node.js", "Express", "Python", "Django"],
      "Bases de datos": ["MongoDB", "PostgreSQL", "MySQL"],
      "Herramientas": ["Git", "Docker", "AWS", "Firebase"]
    };
  
    return (
      <section className="fade-in">
        <h2 className="section-title">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="p-6">
              <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    );
  };

  export default Skills;