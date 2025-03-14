import { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const socialLinks = [
    { 
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:t.kumar@iitg.ac.in",
      handle: "t.kumar@iitg.ac.in"
    },
    { 
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/tarunkumar",
      handle: "tarunkumar"
    },
    { 
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/tarunkumar",
      handle: "tarunkumar"
    },
    { 
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/tarunkumar",
      handle: "@tarunkumar"
    }
  ];

  return (
    <section id="contact" className="bg-portfolio-gray-light dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title dark:text-white">Get In Touch</h2>
        <p className="section-subtitle dark:text-gray-300">
          Feel free to reach out for collaborations, research opportunities, or just to say hello!
        </p>
        
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition-all"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-6">Connect With Me</h3>
            
            <div className="card p-6 mb-6 dark:bg-gray-800">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm always open to discussing new projects, research opportunities, and collaboration ideas. Feel free to get in touch using any of the methods below.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group p-3 border border-gray-200 dark:border-gray-700 rounded-md hover:border-portfolio-accent transition-colors dark:bg-gray-800"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-secondary dark:bg-gray-700 text-portfolio-primary dark:text-white group-hover:bg-portfolio-accent group-hover:text-white transition-colors mr-3">
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-medium text-portfolio-primary dark:text-white">{link.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{link.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="card p-6 border-l-4 border-l-portfolio-accent dark:bg-gray-800">
              <h4 className="font-bold text-portfolio-primary dark:text-white mb-2">Currently Available For</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-2"></span>
                  <span>Research Collaborations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-2"></span>
                  <span>Data Science & ML Projects</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-2"></span>
                  <span>Technical Consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-2"></span>
                  <span>Speaking Engagements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
