
import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Deep Learning", level: 85 },
    { name: "NLP", level: 90 },
    { name: "Computer Vision", level: 80 },
    { name: "PyTorch", level: 85 },
    { name: "Keras", level: 80 },
    { name: "C++", level: 70 },
    { name: "MATLAB", level: 60 },
    { name: "R", level: 55 },
  ];
  
  const frameworks = [
    "NumPy", "Pandas", "Scikit-learn", "PyTorch", "Keras", 
    "YOLO", "LangChain", "Docker", "MySQL"
  ];
  
  const softSkills = [
    "Leadership", "Team Management", "Problem Solving", 
    "Research", "Communication", "Time Management"
  ];

  return (
    <section id="skills" className="bg-portfolio-gray-light" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical expertise and professional competencies.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-portfolio-primary mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-portfolio-accent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="mb-10">
              <h3 className="text-xl font-bold text-portfolio-primary mb-6">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {frameworks.map((framework, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white rounded-lg shadow-sm text-portfolio-primary border border-gray-100 hover:border-portfolio-accent transition-colors"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-portfolio-primary mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-portfolio-accent text-white rounded-lg shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
