import { Book, Briefcase, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-portfolio-gray-light dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title dark:text-white">About Me</h2>
        <p className="section-subtitle dark:text-gray-300">
         Data Scientist and ML Engineer with a strong foundation in mathematical modeling and statistics, and hands-on experience in NLP, computer vision, and generative AI. Passionate about building intelligent, data-driven solutions across diverse domains.
        </p>
        
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 text-portfolio-primary dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am a Data Science and Machine Learning enthusiast with a Master's degree from IIT Guwahati. My academic journey has taken me through IIT Bombay for a PGDIIT and Aryabhatta Knowledge University for my B.Tech.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
             Currently working as a Data Scientist at DHL Supply Chain, where I focus on supply chain optimization using machine learning and integrate Generative AI for automation and intelligent analytics.
             Previously, I interned at ARKRAY Inc., Japan, as part of the R&D team, where I worked on medical imaging and developed novel attention mechanisms to enhance object detection performance.
             My core interests include Stats, ML, NLP, computer vision, generative AI, and building practical AI solutions for real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm passionate about leveraging AI for social good and constantly exploring ways to improve model performance through innovative approaches.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-6 animate-fade-in-up dark:bg-gray-800" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4 text-portfolio-accent">
                <GraduationCap size={40} />
              </div>
              <h4 className="font-bold text-xl mb-2 dark:text-white">Education</h4>
              <p className="text-gray-600 dark:text-gray-300">
                M.Tech at IIT Guwahati with 9.20 CGPA and PGDIIT from IIT Bombay with 9.27 CGPA.
              </p>
            </div>
            
            <div className="card p-6 animate-fade-in-up dark:bg-gray-800" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 text-portfolio-accent">
                <Briefcase size={40} />
              </div>
              <h4 className="font-bold text-xl mb-2 dark:text-white">Experience</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Data Scientist at DHL Supply Chain — Optimising supply chain with ML, DL, and mathematical modelling. Previously, Data Science Intern at ARKRAY, Japan.
              </p>
            </div>
            
            <div className="card p-6 animate-fade-in-up dark:bg-gray-800" style={{ animationDelay: '0.3s' }}>
              <div className="mb-4 text-portfolio-accent">
                <Book size={40} />
              </div>
              <h4 className="font-bold text-xl mb-2 dark:text-white">Research</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Focused on NLP tasks, data augmentation with LLMs, and medical imaging analysis.
              </p>
            </div>
            
            <div className="card p-6 animate-fade-in-up dark:bg-gray-800" style={{ animationDelay: '0.4s' }}>
              <div className="mb-4 text-portfolio-accent">
                <Heart size={40} />
              </div>
              <h4 className="font-bold text-xl mb-2 dark:text-white">Passion</h4>
              <p className="text-gray-600 dark:text-gray-300">
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
