// HeroSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, Sparkles, Heart, ChefHat } from 'lucide-react';

const HeroSection = () => {
  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to contact section for reservations
  const scrollToContact = () => {
    scrollToSection('contact');
  };

  // Scroll to menu section
  const scrollToMenu = () => {
    scrollToSection('menu');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with sophisticated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 animate-gradient"></div>
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-br from-rose-300 to-rose-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Enhanced Hero Content */}
        <div className="mb-8 animate-fadeInUp">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 glass-strong rounded-full px-6 py-3 mb-6">
            <MapPin className="w-5 h-5 text-pink-600" />
            <span className="text-pink-800 font-semibold">Erandwane, Pune</span>
          </div>
          
          {/* Main Heading with enhanced styling */}
          <div className="relative">
            <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold mb-6 gradient-text-hero leading-tight">
              Pimlico
            </h1>
            <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-pink-500 animate-pulse" />
            <Heart className="absolute -bottom-2 -left-2 w-6 h-6 text-rose-500 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <p className="text-2xl md:text-3xl font-light text-pink-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Fine Dining • Contemporary Cuisine • Elegant Ambiance
          </p>
          
          <p className="text-xl text-pink-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience culinary excellence in the heart of Erandwane. Where every meal is crafted with passion 
            and served with sophistication.
          </p>
        </div>

        {/* Restaurant Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto animate-fadeInUp" style={{ animationDelay: '300ms' }}>
          {/* Address Card */}
          <div className="glass-strong rounded-2xl p-6 hover-lift">
            <MapPin className="w-8 h-8 text-pink-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-pink-800 mb-2">Location</h3>
            <p className="text-pink-700 text-sm leading-relaxed">
              Shop 1, Survey 18/A/1A/2<br />
              Mrunimai CHS, Erandwane<br />
              Pune, Maharashtra 411004
            </p>
          </div>

          {/* Contact Card */}
          <div className="glass-strong rounded-2xl p-6 hover-lift">
            <Phone className="w-8 h-8 text-pink-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-pink-800 mb-2">Reservations</h3>
            <p className="text-pink-700 text-sm mb-2">
              <a href="tel:+919876543210" className="hover:text-pink-600 transition-colors">
                +91 98765 43210
              </a>
            </p>
            <p className="text-pink-700 text-sm">
              <a href="tel:+912024567890" className="hover:text-pink-600 transition-colors">
                +91 20 2456 7890
              </a>
            </p>
          </div>

          {/* Hours Card */}
          <div className="glass-strong rounded-2xl p-6 hover-lift">
            <Clock className="w-8 h-8 text-pink-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-pink-800 mb-2">Hours</h3>
            <p className="text-pink-700 text-sm mb-1">Mon-Thu: 11:00 AM - 11:00 PM</p>
            <p className="text-pink-700 text-sm mb-1">Fri-Sat: 11:00 AM - 12:00 AM</p>
            <p className="text-pink-700 text-sm">Sun: 11:00 AM - 11:00 PM</p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style={{ animationDelay: '600ms' }}>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="btn-premium text-xl px-12 py-6 font-semibold group"
          >
            <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            Make Reservation
          </Button>
          
          <Button 
            onClick={scrollToMenu}
            variant="outline" 
            size="lg" 
            className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50 hover:border-pink-400 text-xl px-12 py-6 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 group"
          >
            <ChefHat className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            View Menu
          </Button>
        </div>

        {/* Awards and Recognition */}
        <div className="mt-16 animate-fadeInUp" style={{ animationDelay: '900ms' }}>
          <div className="glass-strong rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-8 text-pink-700">
              <div className="text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">4.8/5 Rating</p>
                <p className="text-xs opacity-75">Google Reviews</p>
              </div>
              <div className="w-px h-12 bg-pink-200"></div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">Premium Dining</p>
                <p className="text-xs opacity-75">Pune's Finest</p>
              </div>
              <div className="w-px h-12 bg-pink-200"></div>
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <p className="text-sm font-semibold">Award Winning</p>
                <p className="text-xs opacity-75">Excellence in Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
