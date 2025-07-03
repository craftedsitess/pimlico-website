
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-text text-light-text py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="Pimlico" 
                className="h-12 w-auto brightness-0 invert animate-glow"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIzMCIgZm9udC1mYW1pbHk9IlBsYXlmYWlyIERpc3BsYXkiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IndoaXRlIj5QaW1saWNvPC90ZXh0Pjwvc3ZnPg==';
                }}
              />
            </div>
            <p className="text-light-text/80 mb-6 max-w-md font-medium">
              Experience culinary excellence at Pimlico, where every dish is crafted 
              with passion and served with elegance. Creating memorable dining 
              experiences in the heart of Pune.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110 animate-glow"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110 animate-glow"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110 animate-glow"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 gradient-text-hero">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-light-text/80 hover:text-pink-400 transition-colors duration-300 font-medium interactive-element"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 gradient-text-hero">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-pink-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-light-text/80 text-sm font-medium">
                    123 Fine Dining Street<br />
                    Koregaon Park, Pune 411001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-pink-400 flex-shrink-0" size={16} />
                <p className="text-light-text/80 text-sm font-medium">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-pink-400 flex-shrink-0" size={16} />
                <p className="text-light-text/80 text-sm font-medium">hello@pimlicopune.com</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-pink-300">Opening Hours</h4>
              <p className="text-light-text/80 text-sm font-medium">
                Mon - Thu: 11:00 AM - 11:00 PM<br />
                Fri - Sun: 11:00 AM - 12:00 AM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-light-text/20 mt-8 pt-8 text-center">
          <p className="text-light-text/80 text-sm font-medium">
            © 2025 Pimlico Restaurant. All rights reserved. Crafted with ❤️ for fine dining.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
