import TechStack from './TechStack';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-minimal">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">About</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        {/* Bio Content */}
        <div className="bio-content">
          <p>
            Hi! I'm Vonne Dew — a passionate Full Stack Web Developer with a focus on the MERN stack
            (MongoDB, Express, React, Node.js). I love transforming ideas into interactive digital
            experiences, from building responsive user interfaces to developing robust backend systems.
          </p>
          <p>
            While my strengths lie in web development, I'm also curious about game development,
            especially creating visual novel-style experiences — it's something I'm still learning,
            but very excited to grow in.
          </p>
          <p>
            I enjoy crafting clean, user-friendly applications that work smoothly across devices.
            Whether it's building dynamic frontends with React or designing secure APIs with Node
            and Express, I thrive on solving real-world problems and constantly learning.
          </p>
          <p>
            I'm currently looking for opportunities to grow professionally — either through freelance
            work or by collaborating with a creative team. Outside of coding, I love sketching,
            exploring design trends, and sipping coffee while dreaming up my next passion project.
          </p>
        </div>

        {/* Section Header */}
        <div className="CT-section">
          <div className="section-header">
            <span className="section-label">Certifications / Training</span>
            <h2 className="section-title">AWS AI Practitioner Challenge (Udacity)</h2>
          </div>

          <div className='bio-content'>
            <p>
              Completed the course covering AI/ML fundamentals, generative AI, and AWS AI/ML services (SageMaker, Lambda, S3).
            </p>

            <p>
              <a className="view-certificate" href="https://www.udacity.com/certificate/e/ef97f110-2bcb-11f1-bdf1-8bccdff46573">View Certificate</a>
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="tech-section">
          <div className="section-header">
            <span className="section-label">Skills</span>
            <h2 className="section-title">Tech Stack</h2>
          </div>
          <TechStack />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;