import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Mr. Diganta Diasi",
      role: "Research Scolar, Data Science Lab, IIT Guwahati",
      image: "digata.jpg", // Replace with actual image
      text: "I've had the pleasure of supervising Tarun's research work. His analytical thinking and methodical approach to problem-solving are impressive. He consistently delivers high-quality work and shows great potential as a researcher in the field of data science and AI."
    },
    {
      name: "Dr. Gaurav Trivedi",
      role: "Professor, IIT Guwahati",
      image: "", // Replace with actual image
      text: "Tarun has demonstrated exceptional skills in machine learning and NLP during his thesis work. His ability to quickly grasp complex concepts and implement innovative solutions sets him apart. His work on data augmentation techniques for NLP tasks has shown promising results and reflects his deep understanding of the field."
    },
    
    {
      name: "Tapan Mahata",
      role: "Senior Data Scientist",
      image: "/images/testimonials/akihiko-takahashi.jpg", // Replace with actual image
      text: "Working with Tarun on medical imaging projects has been a rewarding experience. His contributions to improving our diagnostic models have been significant. He brings a unique perspective to the team and has a talent for finding efficient solutions to complex problems."
    },
    {
      name: "Viplav Prakash",
      role: "Team Lead, Saathi Counselling Cell",
      image: "vip.jpg", // Replace with actual image
      text: "Tarun's leadership at Saathi has transformed our mentorship program. His data-driven approach to student counselling has significantly improved our engagement metrics. Beyond his technical skills, his empathy and commitment to student well-being make him an invaluable team member."
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-portfolio-gray-light dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title dark:text-white">Recommendations</h2>
        <p className="section-subtitle dark:text-gray-300">
          Feedback from colleagues, mentors, and collaborators who have worked with me.
        </p>
        
        <div className="mt-12 relative">
          <div className="card p-8 dark:bg-gray-800 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-portfolio-accent opacity-20">
              <Quote size={60} />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex flex-col items-center md:items-start">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-portfolio-accent">
                  <div className="w-full h-full bg-portfolio-secondary dark:bg-gray-700 flex items-center justify-center text-portfolio-primary dark:text-white text-xl font-bold">
                    {testimonials[activeIndex].image ? (
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      testimonials[activeIndex].name.charAt(0)
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-portfolio-primary dark:text-white text-center md:text-left">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center md:text-left">
                  {testimonials[activeIndex].role}
                </p>
              </div>
              
              <div className="md:col-span-2">
                <blockquote className="text-gray-600 dark:text-gray-300 italic relative">
                  "{testimonials[activeIndex].text}"
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex 
                    ? 'bg-portfolio-accent' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:block hidden">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-portfolio-primary dark:text-white hover:bg-portfolio-secondary dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:block hidden">
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-portfolio-primary dark:text-white hover:bg-portfolio-secondary dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 