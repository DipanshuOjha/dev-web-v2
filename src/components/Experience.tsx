
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "ARKRAY, Japan",
      location: "Remote",
      period: "Jan 2025 - Present",
      responsibilities: [
        "Improved mAP by 5% for urine sediment analysis by integrating attention mechanisms like CBAM into YOLOX, enhancing diagnostic accuracy across 7 classes.",
        "Optimized the object detection pipeline, reducing detection time by 15% and enhancing efficiency in medical laboratory testing."
      ],
      skills: ["Computer Vision", "YOLOX", "Attention Mechanisms", "Medical Imaging", "Object Detection"]
    },
    {
      title: "Associate Head",
      company: "Saathi Counselling Cell, IIT Guwahati",
      location: "IIT Guwahati",
      period: "Apr 2023 - Present",
      responsibilities: [
        "Implemented a data-driven feedback system for 1600+ students, boosting mentor-mentee engagement by 65%.",
        "Managed a team of 13 to coordinate with 200+ mentors, handle feedback, and enhance students' mental well-being."
      ],
      skills: ["Leadership", "Team Management", "Data-Driven Systems", "Student Counselling", "Mental Health Support"]
    }
  ];

  return (
    <section id="experience" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey has allowed me to apply my skills in real-world scenarios and contribute meaningfully to projects.
        </p>
        
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="card p-6 mb-8 last:mb-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-portfolio-primary flex items-center">
                    <Briefcase size={20} className="text-portfolio-accent mr-2" />
                    {exp.title}
                  </h3>
                  <p className="text-lg font-medium mt-1">{exp.company}</p>
                </div>
                
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-500 mb-1">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="border-l-2 border-portfolio-accent pl-4 my-6">
                <h4 className="font-medium text-portfolio-primary mb-2">Key Responsibilities & Achievements</h4>
                <ul className="space-y-2 text-gray-600">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-2"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="inline-block px-3 py-1 bg-portfolio-secondary rounded-full text-sm text-portfolio-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
