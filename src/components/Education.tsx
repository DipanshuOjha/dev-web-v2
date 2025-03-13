
import { Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "M.Tech in Data Science",
      institution: "Indian Institute of Technology, Guwahati",
      period: "2023-Present",
      score: "CGPA: 9.20",
      description: "Currently pursuing Master's in Data Science with focus on NLP and healthcare AI applications."
    },
    {
      degree: "PGDIIT",
      institution: "Indian Institute of Technology, Bombay",
      period: "2022-2023",
      score: "CGPA: 9.27",
      description: "Postgraduate Diploma with Department Rank 2 in MEMS department."
    },
    {
      degree: "B.Tech",
      institution: "Aryabhatta Knowledge University",
      period: "2018-2022",
      score: "CGPA: 8.62",
      description: "Bachelor's degree with strong foundation in computer science and engineering concepts."
    },
    {
      degree: "Senior Secondary",
      institution: "Bihar State Examination Board",
      period: "2018",
      score: "Percentage: 73.4%",
      description: "Completed senior secondary education with focus on science and mathematics."
    }
  ];

  const courses = [
    "Probability and Statistics", 
    "Matrix Computation", 
    "Optimization Techniques", 
    "Linear Algebra",
    "Deep Learning", 
    "Machine Learning", 
    "NLP with Large Language Models", 
    "Data Structures and Algorithms",
    "DBMS", 
    "OOP", 
    "Data Visualization", 
    "Image Processing with ML"
  ];

  return (
    <section id="education" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic journey has equipped me with strong theoretical knowledge and practical skills in data science and machine learning.
        </p>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div 
                  key={index} 
                  className="card p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-portfolio-primary">{edu.degree}</h3>
                    <span className="inline-flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" /> {edu.period}
                    </span>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <MapPin size={18} className="text-portfolio-accent mt-1 mr-2" />
                    <div>
                      <p className="font-medium">{edu.institution}</p>
                      <p className="text-sm text-portfolio-accent">{edu.score}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="card p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold text-portfolio-primary mb-4">Key Courses</h3>
              
              <div className="flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <span 
                    key={index} 
                    className="inline-block px-3 py-1 bg-portfolio-secondary rounded-full text-sm text-portfolio-primary"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="card p-6 mt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-bold text-portfolio-primary mb-4">Achievements</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-2"></span>
                  <span>Currently Ranked 1, M.Tech Data Science, IIT Guwahati (July'23 - Present)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-2"></span>
                  <span>Department Rank 2, Department of MEMS, IIT Bombay (July'22 - July'23)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-2"></span>
                  <span>AIR 255, Graduate Aptitude Test in Engineering (GATE) (April'22)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
