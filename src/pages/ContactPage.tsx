import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24"> {/* Add padding top to account for fixed navbar */}
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage; 