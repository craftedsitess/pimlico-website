import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24"> {/* Add padding top to account for fixed navbar */}
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage; 