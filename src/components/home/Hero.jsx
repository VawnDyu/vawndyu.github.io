import { AssetsImg } from '../../imports';
import SocialLinks from '../common/SocialLinks';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-minimal">
      <div className="hero-container">
        {/* Profile Image */}
        <div className="hero-avatar">
          <img
            src={AssetsImg.ProfilePic}
            alt="Vonne Dew"
            className="avatar-image"
          />
        </div>

        {/* Text Content */}
        <div className="hero-text">
          <p className="hero-label">Full Stack Developer</p>
          <h1 className="hero-title">Vonne Dew</h1>
          <p className="hero-description">
            Building interactive web experiences with the MERN stack.
            Passionate about clean code and user-friendly design.
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

export default Hero;