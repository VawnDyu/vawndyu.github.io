import Hero from '../components/home/Hero';
import AboutMe from '../components/home/AboutMe';
import './Home.css';

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <AboutMe />
    </main>
  );
}

export default Home;