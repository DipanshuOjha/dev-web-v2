
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <Layout>
      <div className="page-transition">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Blog />
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
