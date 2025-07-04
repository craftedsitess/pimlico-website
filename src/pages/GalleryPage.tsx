import Navbar from '@/components/Navbar';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24"> {/* Add padding top to account for fixed navbar */}
        <GallerySection />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage; 