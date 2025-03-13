
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Optimizing Downstream NLP Tasks through Data Augmentation with LLMs",
      period: "June'24 - Present",
      type: "Master's Thesis",
      supervisor: "Dr. Gaurav Trivedi (Dept. of EEE) and Dr. Teena Sharma (MFSDSAI), IIT Guwahati",
      status: "Ongoing",
      description: [
        "Designed advanced data augmentation techniques to enhance model performance in downstream NLP tasks by fine-tuning language models on datasets like SST-2 and EMOTION.",
        "Achieved a 5% improvement in overall accuracy on the SST dataset by implementing Conditional Augmentation using RoBERTa and Llama-3.3-70B, surpassing baseline performance."
      ],
      technologies: ["NLP", "LLMs", "RoBERTa", "Llama-3", "Data Augmentation"],
      github: null
    },
    {
      title: "Care Vision AI: Disease Detection on Medical Imaging Datasets",
      period: "Jan'24 - May'24",
      type: "Course Project, IIT Guwahati",
      supervisor: null,
      status: "Completed",
      description: [
        "Built AI models for detecting medical conditions like skin cancer, brain tumors, lung cancer, and pneumonia using CNN, SVM, Random Forest, and morphological operations.",
        "Enhanced Recall by 4% using Transfer Learning with the ResNet50 architecture and designed a user-friendly web application integrating these models seamlessly, enabling efficient real-time detection and diagnosis."
      ],
      technologies: ["Computer Vision", "CNN", "ResNet50", "Transfer Learning", "Medical Imaging"],
      github: "https://github.com/username/care-vision-ai"
    },
    {
      title: "Large Language Model Based Healthcare Assistant",
      period: "Jan'24 - Apr'24",
      type: "Course Project, IIT Guwahati",
      supervisor: null,
      status: "Completed",
      description: [
        "Fine-tuned Llama2-7b model on a custom dataset from the Medical Encyclopedia to develop a healthcare chatbot.",
        "Employed QLoRA, 4-bit quantization, and Hugging Face libraries for parameter-efficient fine-tuning, resulting in 50% lower RAM usage and 400% faster training times, significantly optimizing resource utilization."
      ],
      technologies: ["LLMs", "Llama2", "QLoRA", "Healthcare", "NLP"],
      github: "https://github.com/username/llm-healthcare-assistant"
    },
    {
      title: "Steel Industry Energy Consumption Classification",
      period: "Aug'23 - Nov'23",
      type: "Course Project",
      supervisor: "Dr. Prithwijit Guha, Dept. of EEE, IIT Guwahati",
      status: "Completed",
      description: [
        "Performed Exploratory Data Analysis on electricity consumption data from a steel plant with 35,000+ entries, and built machine learning models using Logistic Regression, Random Forest, ANN, SVM, and Naive Bayes.",
        "Optimized the Random Forest model's performance through hyperparameter tuning, achieving an F1 score of 0.98."
      ],
      technologies: ["Machine Learning", "Random Forest", "EDA", "Classification", "Energy Consumption"],
      github: "https://github.com/username/steel-industry-energy"
    }
  ];

  return (
    <section id="projects" className="bg-portfolio-gray-light">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of my academic and personal projects showcasing my technical skills and research interests.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card group animate-fade-in-up overflow-hidden flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-2 bg-portfolio-accent w-full"></div>
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-portfolio-primary">{project.title}</h3>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-portfolio-accent transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-portfolio-accent">{project.period}</span>
                  <p className="text-sm text-gray-500 mt-1">{project.type}</p>
                  {project.supervisor && (
                    <p className="text-sm text-gray-500 mt-1">Supervisor: {project.supervisor}</p>
                  )}
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-portfolio-secondary text-portfolio-primary mt-2">
                    {project.status}
                  </span>
                </div>
                
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="inline-block px-2 py-1 bg-portfolio-secondary rounded-full text-xs text-portfolio-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.github && (
                <div className="px-6 py-3 bg-portfolio-secondary">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-portfolio-primary hover:text-portfolio-accent transition-colors inline-flex items-center"
                  >
                    View Project <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
