import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ZoomIn, Camera, MapPin, Star, Utensils, Wine, Coffee, Heart } from 'lucide-react';

// Import images from the new assets directory
import vibe1 from '@/assets/images/vibe1.png';
import vibe2 from '@/assets/images/vibe2.png';
import vibe3 from '@/assets/images/vibe3.png';
import food1 from '@/assets/images/food1.png';
import food2 from '@/assets/images/food2.png';
import food3 from '@/assets/images/food3.png';
import beverage1 from '@/assets/images/beverage1.png';
import beverage2 from '@/assets/images/beverage2.png';
import beverage3 from '@/assets/images/beverage3.png';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'interior' | 'food' | 'beverages'>('all');

  const galleryImages = [
    // Interior Images (Vibe)
    {
      id: 1,
      category: 'interior',
      src: vibe1,
      alt: 'Elegant dining atmosphere at Pimlico Erandwane with sophisticated interior design',
      title: 'Sophisticated Ambiance',
      description: 'Experience the refined elegance of our carefully curated dining spaces'
    },
    {
      id: 2,
      category: 'interior',
      src: vibe2,
      alt: 'Modern interior design at Pimlico restaurant with warm lighting and contemporary furniture',
      title: 'Contemporary Design',
      description: 'Modern aesthetics blended with comfort for the perfect dining atmosphere'
    },
    {
      id: 3,
      category: 'interior',
      src: vibe3,
      alt: 'Premium dining space at Pimlico Erandwane showcasing elegant decor and ambiance',
      title: 'Premium Dining Space',
      description: 'Luxurious interiors designed to create memorable dining experiences'
    },
    // Food Images
    {
      id: 4,
      category: 'food',
      src: food1,
      alt: 'Exquisite gourmet dish showcasing culinary artistry at Pimlico restaurant',
      title: 'Culinary Artistry',
      description: 'Each dish is crafted with precision and presented as a work of art'
    },
    {
      id: 5,
      category: 'food',
      src: food2,
      alt: 'Fresh and vibrant food preparation highlighting quality ingredients at Pimlico',
      title: 'Fresh & Vibrant',
      description: 'Premium ingredients sourced daily to ensure the finest quality'
    },
    {
      id: 6,
      category: 'food',
      src: food3,
      alt: 'Signature dish at Pimlico Erandwane featuring innovative flavors and presentation',
      title: 'Signature Creations',
      description: 'Innovative dishes that blend international flavors with local inspiration'
    },
    // Beverages
    {
      id: 7,
      category: 'beverages',
      src: beverage1,
      alt: 'Artfully crafted cocktail with premium spirits at Pimlico Erandwane bar',
      title: 'Artisanal Cocktails',
      description: 'Handcrafted cocktails using premium spirits and fresh ingredients'
    },
    {
      id: 8,
      category: 'beverages',
      src: beverage2,
      alt: 'Curated wine selection and premium beverages at Pimlico restaurant',
      title: 'Premium Beverages',
      description: 'Carefully curated selection of wines and specialty drinks'
    },
    {
      id: 9,
      category: 'beverages',
      src: beverage3,
      alt: 'Elegant beverage presentation showcasing variety at Pimlico Erandwane',
      title: 'Beverage Excellence',
      description: 'From coffee to cocktails, every beverage is served with excellence'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos', icon: <Camera className="w-4 h-4" />, count: galleryImages.length },
    { id: 'interior', label: 'Ambiance', icon: <Utensils className="w-4 h-4" />, count: galleryImages.filter(img => img.category === 'interior').length },
    { id: 'food', label: 'Cuisine', icon: <Star className="w-4 h-4" />, count: galleryImages.filter(img => img.category === 'food').length },
    { id: 'beverages', label: 'Beverages', icon: <Wine className="w-4 h-4" />, count: galleryImages.filter(img => img.category === 'beverages').length }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const selectedImageData = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

  return (
    <section id="gallery" className="relative py-20 px-4 min-h-screen overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 animate-gradient"></div>
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-1/3 right-12 w-16 h-16 bg-gradient-to-br from-rose-300 to-rose-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl md:text-7xl font-playfair font-bold gradient-text-hero mb-6">
            Gallery
          </h2>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Step into the world of Pimlico Erandwane. Experience our elegant ambiance, 
            exquisite cuisine, and premium beverages in Pune's cultural heart.
          </p>
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 glass-strong rounded-full px-6 py-3 mb-8">
            <MapPin className="w-5 h-5 text-pink-600" />
            <span className="text-pink-800 font-semibold">Shop 1, Mrunimai CHS, Erandwane</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as any)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg glow-pink hover:scale-105'
                  : 'border-pink-200 text-pink-700 hover:border-pink-400 hover:bg-pink-50 hover:scale-105'
              }`}
            >
              {category.icon}
              {category.label}
              <Badge variant="secondary" className="ml-1 bg-white/20 text-current">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="gallery-item hover-lift group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(image.id)}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to a gradient background if image fails to load
                      const target = e.currentTarget;
                      target.style.background = 'linear-gradient(135deg, #f9e7ed 0%, #fce8f3 50%, #f3e8ff 100%)';
                      target.style.display = 'flex';
                      target.style.alignItems = 'center';
                      target.style.justifyContent = 'center';
                      target.innerHTML = `<div class="text-pink-600 text-center"><div class="text-4xl mb-2">🏮</div><div class="font-semibold">${image.title}</div></div>`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="glass-strong rounded-full p-4 hover:scale-110 transition-transform duration-300">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <Badge 
                    className={`absolute top-4 left-4 capitalize ${
                      image.category === 'interior' ? 'bg-blue-500' :
                      image.category === 'food' ? 'bg-orange-500' : 'bg-purple-500'
                    }`}
                  >
                    {image.category === 'interior' ? 'ambiance' : image.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-pink-800 mb-2 group-hover:text-pink-600 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-pink-700 leading-relaxed">
                    {image.description}
                  </p>
                  <p className="text-xs text-gray-500 break-all">Debug Path: {image.src}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section - Experience Only */}
        <div className="text-center animate-fadeInUp">
          <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-pulse" />
            <h3 className="text-4xl font-playfair font-bold gradient-text mb-6">
              Experience Pimlico Erandwane
            </h3>
            <p className="text-xl text-pink-700 mb-8 leading-relaxed">
              Join us for an unforgettable dining experience where every detail is crafted with passion. 
              Located in the vibrant Erandwane neighborhood, we bring you the finest in contemporary cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const navHeight = 80;
                    const elementPosition = element.offsetTop - navHeight;
                    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                  }
                }}
                className="btn-premium text-lg px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Visit Us in Erandwane
              </Button>
              <Button 
                onClick={() => {
                  const element = document.getElementById('menu');
                  if (element) {
                    const navHeight = 80;
                    const elementPosition = element.offsetTop - navHeight;
                    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                  }
                }}
                variant="outline" 
                className="border-pink-300 text-pink-700 hover:bg-pink-50 text-lg px-8 py-4 rounded-2xl"
              >
                <Coffee className="w-5 h-5 mr-2" />
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <Button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full p-3 z-10"
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={selectedImageData.src}
                  alt={selectedImageData.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="capitalize">
                    {selectedImageData.category === 'interior' ? 'ambiance' : selectedImageData.category}
                  </Badge>
                  <h3 className="text-2xl font-playfair font-bold text-pink-800">
                    {selectedImageData.title}
                  </h3>
                </div>
                <p className="text-pink-700 text-lg leading-relaxed">
                  {selectedImageData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
