import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "M.Tech in Data Science",
      institution: "Indian Institute of Technology, Guwahati",
      period: "2023-2025",
      score: "CGPA: 9.37",
      description: "Specializing in Data Science with a focus on machine learning, deep learning, and natural language processing. Recognized as the Department Topper for academic excellence."
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
      description: "Developed strong foundation in engineering principles and technical skills."
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
    <section id="education" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title dark:text-white">Education</h2>
        <p className="section-subtitle dark:text-gray-300">
          My academic journey has equipped me with strong theoretical knowledge and practical skills in data science and machine learning.
        </p>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div 
                  key={index} 
                  className="card p-6 animate-fade-in-up dark:bg-gray-800"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-portfolio-primary dark:text-white">{edu.degree}</h3>
                    <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={16} className="mr-1" /> {edu.period}
                    </span>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <MapPin size={18} className="text-portfolio-accent mt-1 mr-2" />
                    <div>
                      <p className="font-medium dark:text-white">{edu.institution}</p>
                      <p className="text-sm text-portfolio-accent">{edu.score}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="card p-6 animate-fade-in-up dark:bg-gray-800" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-4">Key Courses</h3>
              
              <div className="flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <span 
                    key={index} 
                    className="inline-block px-3 py-1 bg-portfolio-secondary dark:bg-gray-700 rounded-full text-sm text-portfolio-primary dark:text-white"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="card p-6 mt-6 animate-fade-in-up dark:bg-gray-800" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-4">Achievements</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-2"></span>
                  <span className="dark:text-gray-300">Department Rank 1, M.Tech Data Science, IIT Guwahati (July'23 - Jun'25)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-2"></span>
                  <span className="dark:text-gray-300">Department Rank 2, Department of MEMS, IIT Bombay (July'22 - July'23)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-2"></span>
                  <span className="dark:text-gray-300">AIR 255, Graduate Aptitude Test in Engineering (GATE) (April'22)</span>
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
