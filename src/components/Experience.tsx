import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Department Placement Representative",
      company: "CICPS, IIT Guwahati",
      location: "IIT Guwahati",
      period: "May 2025 - Present",
      responsibilities: [
        "Managed placement activities by serving as a primary liaison between the student body (MTech CICPS department) the College Placement Team for a smooth and effective communication.",
        "Initiated corporate outreach, successfully onboarding several new companies for campus recruitment for the first time in IIT Guwahati through Center for Career Development (CCD).",
      ],
      skills: ["Leadership", "Team Management", "Data-Driven Systems", "Smooth Communication"]
    }
  ];

  return (
    <section id="experience" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title dark:text-white">Experience</h2>
        <p className="section-subtitle dark:text-gray-300">
          My professional journey has allowed me to apply my skills in real-world scenarios and contribute meaningfully to projects.
        </p>
        
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="card p-6 mb-8 last:mb-0 animate-fade-in-up dark:bg-gray-800"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-portfolio-primary dark:text-white flex items-center">
                    <Briefcase size={20} className="text-portfolio-accent mr-2" />
                    {exp.title}
                  </h3>
                  <p className="text-lg font-medium mt-1 dark:text-gray-300">{exp.company}</p>
                </div>
                
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="border-l-2 border-portfolio-accent pl-4 my-6">
                <h4 className="font-medium text-portfolio-primary dark:text-white mb-2">Key Responsibilities & Achievements</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
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
                    className="inline-block px-3 py-1 bg-portfolio-secondary dark:bg-gray-700 rounded-full text-sm text-portfolio-primary dark:text-white"
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
