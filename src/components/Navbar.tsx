import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin, Clock, Star, Heart, ChefHat } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showReservationGlow, setShowReservationGlow] = useState(false);
  
  const isHomePage = location.pathname === '/';

  // Update active section based on current route
  useEffect(() => {
    if (!isHomePage) {
      const path = location.pathname.replace('/', '');
      setActiveSection(path || 'home');
    }
  }, [location.pathname, isHomePage]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'menu', 'gallery', 'about', 'contact'];
      const scrollPosition = scrollTop + 120;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reservation button glow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowReservationGlow(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle navigation - either scroll on home page or navigate to route
  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      // On home page - scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // On other pages - navigate to route
      if (sectionId === 'home') {
        navigate('/');
      } else {
        navigate(`/${sectionId}`);
      }
    }
    setIsOpen(false);
  };

  // Handle home navigation
  const handleHomeNavigation = () => {
    if (isHomePage) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setActiveSection('home');
    } else {
      navigate('/');
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home', action: handleHomeNavigation, icon: Heart },
    { name: 'Menu', id: 'menu', action: () => handleNavigation('menu'), icon: ChefHat },
    { name: 'Gallery', id: 'gallery', action: () => handleNavigation('gallery'), icon: Star },
    { name: 'About', id: 'about', action: () => handleNavigation('about'), icon: MapPin },
    { name: 'Contact', id: 'contact', action: () => handleNavigation('contact'), icon: Phone }
  ];

  return (
    <>
      {/* Premium backdrop blur overlay */}
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'h-20 bg-gradient-to-b from-white/95 via-white/90 to-white/85 backdrop-blur-xl' 
          : 'h-24 bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-md'
      }`}></div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'shadow-xl shadow-pink-500/10 border-b border-pink-200/30' 
          : 'shadow-2xl shadow-black/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled ? 'h-20' : 'h-24'
          }`}>
            
            {/* Enhanced Logo - Always Visible Dark Pink */}
            <div className="flex items-center group">
              <button 
                onClick={handleHomeNavigation}
                className={`relative text-4xl md:text-5xl font-playfair font-bold transition-all duration-500 hover:scale-110 z-10 group-hover:drop-shadow-2xl ${
                  isScrolled 
                    ? 'text-pink-700' 
                    : 'text-pink-600'
                }`}
                style={{
                  textShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.3)',
                  filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.3))'
                }}
              >
                <span className="relative z-10">Pimlico</span>
                {/* Enhanced glow effect - Always pink */}
                <div className={`absolute inset-0 blur-xl transition-opacity duration-500 ${
                  isScrolled 
                    ? 'bg-pink-500 opacity-10 group-hover:opacity-20'
                    : 'bg-pink-400 opacity-15 group-hover:opacity-30'
                }`}></div>
                {/* Sparkle effects */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300"></div>
              </button>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className={`group relative px-6 py-3 font-semibold transition-all duration-300 rounded-2xl overflow-hidden ${
                      isActive
                        ? isScrolled 
                          ? 'text-white bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg shadow-pink-500/30'
                          : 'text-pink-200 bg-white/20 shadow-lg shadow-white/20 backdrop-blur-sm'
                        : isScrolled 
                          ? 'text-pink-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-400 hover:shadow-lg hover:shadow-pink-400/20' 
                          : 'text-white hover:text-pink-200 hover:bg-white/10 hover:shadow-lg hover:shadow-white/10 drop-shadow-sm'
                    } hover:scale-105 hover:-translate-y-0.5`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    
                    {/* Animated underline */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                      isActive 
                        ? 'w-8 h-1' 
                        : 'w-0 h-0.5 group-hover:w-6'
                    } ${
                      isScrolled 
                        ? isActive ? 'bg-white/50' : 'bg-pink-500'
                        : 'bg-white shadow-sm'
                    } rounded-full`}></div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/10 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                );
              })}
            </div>

            {/* Enhanced Contact Info & Reserve Button */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Quick Contact Info */}
              <div className={`flex flex-col items-end transition-all duration-500 ${
                isScrolled ? 'opacity-100' : 'opacity-80'
              }`}>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className={`w-4 h-4 ${isScrolled ? 'text-pink-600' : 'text-white'}`} />
                  <a 
                    href="tel:+919876543210" 
                    className={`font-semibold hover:underline transition-colors duration-300 ${
                      isScrolled ? 'text-pink-700 hover:text-pink-600' : 'text-white drop-shadow-sm hover:text-pink-200'
                    }`}
                  >
                    +91 98765 43210
                  </a>
                </div>
                <div className={`text-xs mt-1 ${
                  isScrolled ? 'text-pink-500' : 'text-white/70'
                }`}>
                  11:00 AM - 11:00 PM
                </div>
              </div>
              
              {/* Enhanced Reserve Button */}
              <Button 
                onClick={() => handleNavigation('contact')}
                className={`relative px-8 py-3 rounded-2xl font-semibold transition-all duration-500 hover:scale-110 hover:-translate-y-1 overflow-hidden group ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-xl shadow-pink-500/30'
                    : 'bg-white/95 hover:bg-white text-pink-700 hover:text-pink-800 shadow-xl shadow-black/20'
                } ${showReservationGlow ? 'animate-pulse' : ''}`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Reserve Table
                </span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </Button>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className={`relative rounded-2xl w-12 h-12 transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-pink-700 hover:bg-pink-50 hover:text-pink-600' 
                    : 'text-white drop-shadow-sm hover:bg-white/10 hover:text-pink-200'
                } ${isOpen ? 'rotate-180' : ''}`}
              >
                <div className="relative">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  {/* Menu dots indicator */}
                  {!isOpen && (
                    <div className="absolute -top-1 -right-1 flex gap-0.5">
                      <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-rose-400 rounded-full animate-pulse delay-150"></div>
                      <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                  )}
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isOpen 
            ? 'max-h-screen opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
        } overflow-hidden bg-white/98 backdrop-blur-xl border-t border-pink-200/50 shadow-2xl shadow-pink-500/10`}>
          <div className="px-6 py-8 space-y-6">
            {/* Mobile Navigation Items */}
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`group flex items-center w-full text-left px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg shadow-pink-500/30 border-l-4 border-white/50'
                      : 'text-pink-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-400 hover:shadow-lg hover:shadow-pink-400/20'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-5 h-5 mr-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-lg">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </button>
              );
            })}
            
            {/* Mobile Contact Info */}
            <div className="pt-6 border-t border-pink-200 space-y-4">
              <div className="flex items-center gap-3 text-pink-700">
                <Phone className="w-5 h-5 text-pink-500" />
                <div>
                  <a href="tel:+919876543210" className="font-semibold text-lg hover:text-pink-600 transition-colors">
                    +91 98765 43210
                  </a>
                  <div className="text-sm text-pink-500">Primary Contact</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-pink-700">
                <Clock className="w-5 h-5 text-pink-500" />
                <div>
                  <div className="font-semibold">11:00 AM - 11:00 PM</div>
                  <div className="text-sm text-pink-500">Mon-Thu | Fri-Sat: till 12 AM</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-pink-700">
                <MapPin className="w-5 h-5 text-pink-500" />
                <div>
                  <div className="font-semibold">Erandwane, Pune</div>
                  <div className="text-sm text-pink-500">Premium Location</div>
                </div>
              </div>
              
              <Button 
                onClick={() => handleNavigation('contact')}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-pink-500/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Reserve Your Table
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
