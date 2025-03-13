
import { Book, Briefcase, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-portfolio-gray-light">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A passionate data scientist and machine learning engineer with expertise in NLP, computer vision, and AI applications for healthcare.
        </p>
        
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 text-portfolio-primary">My Journey</h3>
            <p className="text-gray-600 mb-6">
              I am a Data Science and Machine Learning enthusiast with a Master's degree from IIT Guwahati. My academic journey has taken me through IIT Bombay for a PGDIIT and Aryabhatta Knowledge University for my B.Tech.
            </p>
            <p className="text-gray-600 mb-6">
              Currently, I'm working as a Data Science Intern at ARKRAY, Japan, where I'm improving medical diagnostic accuracy through advanced AI techniques. My research interests include NLP, computer vision, and developing AI solutions for healthcare applications.
            </p>
            <p className="text-gray-600 mb-6">
              I'm passionate about leveraging AI for social good and constantly exploring ways to improve model performance through innovative approaches.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4 text-portfolio-accent">
                <GraduationCap size={40} />
              </div>
              <h4 className="font-bold text-xl mb-2">Education</h4>
              <p className="text-gray-600">
                M.Tech at IIT Guwahati with 9.20 CGPA and PGDIIT from IIT Bombay with 9.27 CGPA.
              </p>
            </div>
            
            <div className="card p-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 text-portfolio-accent">
                <Briefcase size={40} />
              </div>
              <h4 className="font-bold text-xl mb-2">Experience</h4>
              <p className="text-gray-600">
                Data Science Intern at ARKRAY, Japan, improving diagnostic accuracy with AI.
              </p>
            </div>
            
            <div className="card p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="mb-4 text-portfolio-accent">
                <Book size={40} />
              </div>
              <h4 className="font-bold text-xl mb-2">Research</h4>
              <p className="text-gray-600">
                Focused on NLP tasks, data augmentation with LLMs, and medical imaging analysis.
              </p>
            </div>
            
            <div className="card p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="mb-4 text-portfolio-accent">
                <Heart size={40} />
              </div>
              <h4 className="font-bold text-xl mb-2">Passion</h4>
              <p className="text-gray-600">
                Committed to developing AI solutions that address real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
