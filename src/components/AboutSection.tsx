import React from 'react';
import vibe1 from '@/assets/images/vibe1.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slideInLeft">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-text mb-6 animate-glow">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mb-8 animate-shimmer"></div>
            <p className="text-lg text-dark-text mb-6 leading-relaxed font-medium">
              Welcome to Pimlico, where culinary excellence meets warm hospitality. 
              Nestled in the vibrant heart of Pune, we've been crafting extraordinary 
              dining experiences that blend international flavors with local inspiration.
            </p>
            <p className="text-lg text-dark-text mb-6 leading-relaxed font-medium">
              Our passionate chefs source the finest ingredients to create dishes that 
              not only tantalize your taste buds but also create lasting memories. 
              From our signature Thai curries to artisanal pizzas, every plate is 
              a work of art.
            </p>
            <p className="text-lg text-dark-text leading-relaxed font-medium">
              Whether you're celebrating a special occasion or simply enjoying a 
              meal with loved ones, Pimlico offers an atmosphere of refined elegance 
              and genuine warmth that makes every visit unforgettable.
            </p>
          </div>

          {/* Restaurant Image */}
          <div className="relative animate-fadeInUp">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift-intense animate-glow">
              <img
                src={vibe1}
                alt="Pimlico Restaurant - Elegant Interior Design and Sophisticated Ambiance"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  // Fallback to a gradient background if image fails to load
                  const target = e.currentTarget;
                  target.style.background = 'linear-gradient(135deg, #fbf7f4 0%, #f9e7ed 50%, #f3e8ff 100%)';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                  target.innerHTML = '<div class="text-center text-pink-600"><div class="text-6xl mb-4">🏮</div><div class="text-2xl font-bold">Elegant Dining</div><div class="text-lg">Pimlico Restaurant</div></div>';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
              
              {/* Image overlay with restaurant info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <h3 className="font-playfair font-bold text-pink-800 text-lg mb-1">
                    Elegant Dining Experience
                  </h3>
                  <p className="text-pink-600 text-sm">
                    Sophisticated interior with warm ambiance
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-gold/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '5+', label: 'Years of Excellence' },
            { number: '100+', label: 'Signature Dishes' },
            { number: '10K+', label: 'Happy Customers' },
            { number: '4.8', label: 'Customer Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fadeInUp card-premium p-6 rounded-2xl hover-lift animate-glow" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="font-playfair text-3xl md:text-4xl font-bold gradient-text-complex mb-2 animate-gradient">
                {stat.number}
              </div>
              <div className="text-dark-text font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
