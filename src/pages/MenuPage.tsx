import Navbar from '@/components/Navbar';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';

const MenuPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24"> {/* Add padding top to account for fixed navbar */}
        <MenuSection />
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage; 