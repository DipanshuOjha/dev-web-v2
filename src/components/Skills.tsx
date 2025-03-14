import { useEffect, useRef, useState, lazy, Suspense } from 'react';

// Import Radar chart with React.lazy instead of Next.js dynamic
const RadarChart = lazy(() => import('./charts/RadarChart'));

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

  // Data for radar chart
  const radarData = {
    labels: ["Python", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "PyTorch"],
    datasets: [
      {
        label: 'Technical Proficiency',
        data: [95, 90, 85, 90, 80, 85],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
      }
    ]
  };

  return (
    <section id="skills" className="bg-portfolio-gray-light dark:bg-gray-800" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title dark:after:bg-blue-400">Skills</h2>
        <p className="section-subtitle dark:text-gray-300">
          A comprehensive overview of my technical expertise and professional competencies.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium dark:text-gray-200">{skill.name}</span>
                    <span className="text-portfolio-accent dark:text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar dark:bg-gray-700">
                    <div 
                      className="skill-progress dark:bg-blue-500"
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
          
          <div className="flex flex-col">
            <div className="card p-6 animate-fade-in-up dark:bg-gray-700" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-4">Skills Visualization</h3>
              <div className="h-64 w-full">
                {isVisible && (
                  <Suspense fallback={<div className="flex items-center justify-center h-full">Loading chart...</div>}>
                    <RadarChart data={radarData} />
                  </Suspense>
                )}
              </div>
            </div>
            
            <div className="card p-6 animate-fade-in-up dark:bg-gray-700 mt-6" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-4">Key Frameworks & Tools</h3>
              
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <span 
                    key={index} 
                    className="inline-block px-3 py-1 bg-portfolio-secondary dark:bg-gray-700 rounded-full text-sm text-portfolio-primary dark:text-white"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-6">Soft Skills</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="card p-4 text-center animate-fade-in-up dark:bg-gray-700" 
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <span className="font-medium dark:text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
