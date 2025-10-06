import { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbllpero"; // Replace with your Formspree endpoint

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [touched, setTouched] = useState<{[key: string]: boolean}>({});
  const { toast } = useToast();
  
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: {[key: string]: string} = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setErrors({});
        setTouched({});
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const socialLinks = [
    { 
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:dev.wankhede@iitg.ac.in",
      handle: "dev.wankhede@iitg.ac.in"
    },
    { 
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/PrepStation201",
      handle: "dev-wankhede"
    },
    { 
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/dev-wankhede-45233b201/",
      handle: "dev-wankhede"
    },
    { 
      name: "Hugging Face",
      icon: <Instagram size={20} />,
      url: "https://huggingface.co/PrepStation201",
      handle: "dev-wankhede"
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-6 flex items-center">
              <MessageCircle className="mr-3 text-portfolio-accent" size={24} />
              Send Me a Message
            </h3>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition-all duration-300 ${
                      errors.name && touched.name 
                        ? 'border-red-500 dark:border-red-500' 
                        : formData.name && !errors.name 
                        ? 'border-green-500 dark:border-green-500' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    placeholder="John Doe"
                  />
                  {formData.name && !errors.name && (
                    <CheckCircle className="absolute right-3 top-3 text-green-500" size={20} />
                  )}
                  {errors.name && touched.name && (
                    <AlertCircle className="absolute right-3 top-3 text-red-500" size={20} />
                  )}
                </div>
                {errors.name && touched.name && (
                  <motion.p 
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition-all duration-300 ${
                      errors.email && touched.email 
                        ? 'border-red-500 dark:border-red-500' 
                        : formData.email && !errors.email 
                        ? 'border-green-500 dark:border-green-500' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    placeholder="john@example.com"
                  />
                  {formData.email && !errors.email && (
                    <CheckCircle className="absolute right-3 top-3 text-green-500" size={20} />
                  )}
                  {errors.email && touched.email && (
                    <AlertCircle className="absolute right-3 top-3 text-red-500" size={20} />
                  )}
                </div>
                {errors.email && touched.email && (
                  <motion.p 
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition-all duration-300 ${
                      errors.subject && touched.subject 
                        ? 'border-red-500 dark:border-red-500' 
                        : formData.subject && !errors.subject 
                        ? 'border-green-500 dark:border-green-500' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    placeholder="Project Collaboration"
                  />
                  {formData.subject && !errors.subject && (
                    <CheckCircle className="absolute right-3 top-3 text-green-500" size={20} />
                  )}
                  {errors.subject && touched.subject && (
                    <AlertCircle className="absolute right-3 top-3 text-red-500" size={20} />
                  )}
                </div>
                {errors.subject && touched.subject && (
                  <motion.p 
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition-all duration-300 resize-none ${
                      errors.message && touched.message 
                        ? 'border-red-500 dark:border-red-500' 
                        : formData.message && !errors.message 
                        ? 'border-green-500 dark:border-green-500' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    placeholder="Your message here..."
                  ></textarea>
                  {formData.message && !errors.message && (
                    <CheckCircle className="absolute right-3 top-3 text-green-500" size={20} />
                  )}
                  {errors.message && touched.message && (
                    <AlertCircle className="absolute right-3 top-3 text-red-500" size={20} />
                  )}
                </div>
                <div className="flex justify-between items-center mt-1">
                  {errors.message && touched.message && (
                    <motion.p 
                      className="text-red-500 text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                  <span className={`text-sm ml-auto ${
                    formData.message.length < 10 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {formData.message.length}/500
                  </span>
                </div>
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting || Object.values(errors).some(error => error !== '')}
                className="btn btn-primary w-full flex items-center justify-center py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                {isSubmitting ? (
                  <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Sending...</span>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="flex items-center relative z-10"
                    whileHover={{ x: 2 }}
                  >
                    <span>Send Message</span>
                    <motion.div
                      whileHover={{ x: 3, rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Send size={18} className="ml-3" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-portfolio-primary dark:text-white mb-6 flex items-center">
              <Mail className="mr-3 text-portfolio-accent" size={24} />
              Connect With Me
            </h3>
            
            <motion.div 
              className="card p-6 mb-6 dark:bg-gray-800 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I'm always open to discussing new projects, research opportunities, and collaboration ideas. Feel free to get in touch using any of the methods below.
              </motion.p>
              
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-portfolio-accent hover:shadow-md transition-all duration-300 dark:bg-gray-700/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-secondary dark:bg-gray-600 text-portfolio-primary dark:text-white group-hover:bg-portfolio-accent group-hover:text-white transition-all duration-300 mr-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {link.icon}
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-semibold text-portfolio-primary dark:text-white group-hover:text-portfolio-accent transition-colors">{link.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{link.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="card p-6 border-l-4 border-l-portfolio-accent dark:bg-gray-800 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h4 
                className="font-bold text-portfolio-primary dark:text-white mb-4 flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="mr-2 text-portfolio-accent" size={20} />
                Currently Available For
              </motion.h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {[
                  'Research Collaborations',
                  'Data Science & ML Projects', 
                  'Technical Consulting',
                  'Speaking Engagements'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="inline-block w-2 h-2 rounded-full bg-portfolio-accent mt-2 mr-3 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:text-portfolio-accent transition-colors duration-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
