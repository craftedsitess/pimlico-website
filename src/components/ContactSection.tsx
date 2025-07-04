import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  Heart,
  Utensils,
  Wine,
  Car,
  Award,
  Users,
  ChefHat,
  Sparkles,
  Quote
} from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      items: [
        { label: 'Primary', value: '+91 98765 43210', link: 'tel:+919876543210' },
        { label: 'Secondary', value: '+91 20 2456 7890', link: 'tel:+912024567890' }
      ],
      color: 'text-pink-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      items: [
        { label: 'Reservations', value: 'reservations@pimlicoerandwane.com', link: 'mailto:reservations@pimlicoerandwane.com' },
        { label: 'General Info', value: 'info@pimlicoerandwane.com', link: 'mailto:info@pimlicoerandwane.com' }
      ],
      color: 'text-rose-600'
    },
    {
      icon: MapPin,
      title: 'Address',
      items: [
        { label: 'Location', value: 'Shop 1, Survey 18/A/1A/2, Mrunimai CHS, Erandwane, Pune, Maharashtra 411004', link: 'https://maps.google.com/?q=Erandwane,Pune' }
      ],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      items: [
        { label: 'Mon-Thu', value: '11:00 AM - 11:00 PM' },
        { label: 'Fri-Sat', value: '11:00 AM - 12:00 AM' },
        { label: 'Sunday', value: '11:00 AM - 11:00 PM' }
      ],
      color: 'text-amber-600'
    }
  ];

  const features = [
    { 
      icon: Car, 
      title: 'Valet Parking', 
      description: 'Complimentary valet service for your convenience',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: Utensils, 
      title: 'Fine Dining', 
      description: 'Exquisite cuisine crafted by expert chefs',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      icon: Wine, 
      title: 'Premium Bar', 
      description: 'Curated wine selection and craft cocktails',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: () => <div className="flex items-center justify-center">💕</div>, 
      title: 'Special Occasions', 
      description: 'Perfect ambiance for memorable celebrations',
      color: 'from-pink-500 to-pink-600'
    },
    { 
      icon: ChefHat, 
      title: 'Expert Chefs', 
      description: 'International cuisine with local flavors',
      color: 'from-green-500 to-green-600'
    },
    { 
      icon: Award, 
      title: 'Award Winning', 
      description: 'Recognized for culinary excellence',
      color: 'from-yellow-500 to-yellow-600'
    },
    { 
      icon: Users, 
      title: 'Private Events', 
      description: 'Exclusive dining for groups and parties',
      color: 'from-indigo-500 to-indigo-600'
    },
    { 
      icon: Sparkles, 
      title: 'Premium Service', 
      description: 'Exceptional hospitality and attention to detail',
      color: 'from-rose-500 to-rose-600'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Pune',
      rating: 5,
      comment: 'Absolutely stunning ambiance and incredible food. The perfect place for special occasions!',
      avatar: '👩‍💼'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      comment: 'Outstanding service and authentic flavors. Pimlico has become our go-to restaurant in Pune.',
      avatar: '👨‍💻'
    },
    {
      name: 'Sneha Patel',
      location: 'Erandwane',
      rating: 5,
      comment: 'The wine selection is exceptional and the staff is incredibly knowledgeable. Highly recommended!',
      avatar: '👩‍🎨'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 text-sm font-semibold rounded-full">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            <span className="gradient-text-hero">Contact Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visit us at Pimlico Erandwane for an exceptional dining experience. 
            We're here to serve you the finest cuisine in the heart of Pune.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="glass-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r from-pink-100 to-rose-100 ${info.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-800 mb-4">{info.title}</h3>
                      <div className="space-y-3">
                        {info.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex flex-col">
                            <span className="text-sm text-gray-500 font-medium mb-1">{item.label}</span>
                            {item.link ? (
                              <a
                                href={item.link}
                                className="text-gray-700 hover:text-pink-600 transition-colors font-semibold text-lg break-words"
                                target={item.link.startsWith('http') ? '_blank' : undefined}
                                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {item.value}
                              </a>
                            ) : (
                              <span className="text-gray-700 font-semibold text-lg">{item.value}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Why Choose Pimlico Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 text-sm font-semibold rounded-full">
              Excellence in Every Detail
            </Badge>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold gradient-text-hero mb-6">
              Why Choose Pimlico?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes us the premier dining destination in Erandwane, 
              where every visit becomes a cherished memory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                  <CardContent className="p-6 text-center relative">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-pink-700 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Customer Testimonials */}
          <div className="text-center mb-8">
            <h4 className="text-2xl font-playfair font-bold text-gray-800 mb-2">What Our Guests Say</h4>
            <p className="text-gray-600">Hear from our valued customers about their Pimlico experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-pink-300 mb-3" />
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Interactive Map */}
        <Card className="glass-card border-0 shadow-2xl overflow-hidden">
          <CardHeader className="text-center bg-gradient-to-r from-pink-500 to-rose-500 text-white">
            <CardTitle className="text-2xl font-playfair font-bold flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6" />
              Find Us in Erandwane
            </CardTitle>
            <p className="text-pink-100">Experience fine dining in the heart of Pune</p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0267890123456!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin&q=Erandwane+Pune"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pimlico Restaurant Location"
              ></iframe>
              
              {/* Enhanced map overlay */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Pimlico Restaurant</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Shop 1, Survey 18/A/1A/2, Mrunimai CHS, Erandwane, Pune, Maharashtra 411004
                    </p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-lg text-xs"
                        onClick={() => window.open('https://maps.google.com/?q=Erandwane,Pune', '_blank')}
                      >
                        Get Directions
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-pink-300 text-pink-700 hover:bg-pink-50 rounded-lg text-xs"
                        onClick={() => {
                          const element = document.getElementById('menu');
                          if (element) {
                            const navHeight = 80;
                            const elementPosition = element.offsetTop - navHeight;
                            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                          }
                        }}
                      >
                        View Menu
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
