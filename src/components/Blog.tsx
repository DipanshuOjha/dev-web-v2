
import { Calendar, Trophy } from 'lucide-react';

const Blog = () => {
  const achievements = [
    {
      title: "Currently Ranked 1 in M.Tech Data Science",
      date: "July 2023 - Present",
      description: "Maintaining the top position in the M.Tech Data Science program at IIT Guwahati through consistent academic excellence and research contributions.",
      category: "Academic"
    },
    {
      title: "Department Rank 2 at IIT Bombay",
      date: "July 2022 - July 2023",
      description: "Secured the second rank in the Department of MEMS at IIT Bombay during the PGDIIT program, demonstrating strong academic performance and technical skills.",
      category: "Academic"
    },
    {
      title: "AIR 255 in GATE Examination",
      date: "April 2022",
      description: "Achieved All India Rank 255 in the Graduate Aptitude Test in Engineering (GATE), showcasing comprehensive understanding of engineering concepts and problem-solving abilities.",
      category: "Competitive Exam"
    }
  ];
  
  // Placeholder for future blog posts
  const blogPlaceholders = [
    {
      title: "Implementing Attention Mechanisms in Object Detection Models",
      category: "Technical",
      preview: "Sharing insights from my work on integrating attention mechanisms like CBAM into YOLOX for medical imaging applications."
    },
    {
      title: "Data Augmentation Techniques for NLP Tasks",
      category: "Research",
      preview: "Exploring various strategies for enhancing model performance through effective data augmentation in natural language processing."
    }
  ];

  return (
    <section id="blog" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Achievements & Blog</h2>
        <p className="section-subtitle">
          Highlighting key milestones in my academic journey and insights from my professional experience.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-portfolio-primary mb-6">Notable Achievements</h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="card p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <div className="mr-4 text-portfolio-accent">
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-portfolio-primary">{achievement.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1 mb-2">
                        <Calendar size={14} className="mr-1" />
                        <span>{achievement.date}</span>
                      </div>
                      <p className="text-gray-600">{achievement.description}</p>
                      <span className="inline-block mt-3 px-3 py-1 bg-portfolio-secondary rounded-full text-xs text-portfolio-primary">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-portfolio-primary mb-6">Upcoming Blog Posts</h3>
            
            <div className="space-y-4">
              {blogPlaceholders.map((blog, index) => (
                <div 
                  key={index} 
                  className="card p-6 animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <span className="inline-block mb-2 px-2 py-1 bg-portfolio-accent/10 rounded-full text-xs text-portfolio-accent">
                    {blog.category}
                  </span>
                  <h4 className="text-lg font-bold text-portfolio-primary">{blog.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{blog.preview}</p>
                  <div className="mt-4">
                    <span className="text-sm text-portfolio-accent">Coming soon</span>
                  </div>
                </div>
              ))}
              
              <div className="card p-6 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <p className="text-gray-500 mb-2">More articles will be added soon!</p>
                <p className="text-sm text-gray-400">Check back later for technical insights, research findings, and professional experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
