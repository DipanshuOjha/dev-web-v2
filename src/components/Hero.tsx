
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-portfolio-primary/5"></div>
      <div className="section-container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 animate-fade-in-up">
            <p className="text-portfolio-accent font-medium mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-portfolio-primary mb-4">
              Tarun Kumar
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md">
              A passionate Data Scientist and Machine Learning Engineer specializing in NLP and AI applications for healthcare.
            </p>
            <div className="flex gap-4">
              <a href="#about" className="btn btn-primary">
                Discover More
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-scale-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* Replace with your image - this is a placeholder */}
              <div className="w-full h-full bg-portfolio-accent flex items-center justify-center text-white font-bold text-4xl">
                TK
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll Down"
      >
        <ArrowDown className="text-portfolio-primary" size={32} />
      </a>
    </section>
  );
};

export default Hero;
