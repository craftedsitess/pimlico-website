import React, { useState, useMemo, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Search, Filter, Sparkles, Heart, Star, Leaf, Utensils, Crown, Award } from 'lucide-react';
import { menuData } from '@/data/menuData';
import { MenuItem } from '@/types/menu';

const MenuSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [openCategories, setOpenCategories] = useState<string[]>(['Chef\'s Special']);
  
  // Optimized filtering function
  const filteredMenuData = useMemo(() => {
    return menuData.categories.map(category => ({
      ...category,
      items: category.items.filter(item => {
        const matchesSearch = searchTerm === '' || 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesFilter = filterType === 'all' || 
          (filterType === 'veg' && item.isVeg) || 
          (filterType === 'non-veg' && !item.isVeg);
        
        return matchesSearch && matchesFilter;
      })
    })).filter(category => category.items.length > 0);
  }, [searchTerm, filterType]);

  const toggleCategory = useCallback((categoryName: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  }, []);

  const getItemIcon = (item: MenuItem) => {
    if (item.isSpecial) return <Crown className="w-4 h-4 text-yellow-500" />;
    if (item.isVeg) return <Leaf className="w-4 h-4 text-green-500" />;
    return <Utensils className="w-4 h-4 text-pink-500" />;
  };

  const getBadgeVariant = (item: MenuItem) => {
    if (item.isSpecial) return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
    if (item.isVeg) return 'bg-gradient-to-r from-green-400 to-green-600 text-white';
    return 'bg-gradient-to-r from-pink-400 to-pink-600 text-white';
  };

  return (
    <section id="menu" className="relative py-20 px-4 min-h-screen overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 animate-gradient"></div>
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-rose-300 to-rose-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="relative inline-block mb-6">
            <h2 className="text-5xl md:text-7xl font-playfair font-bold gradient-text-hero mb-4">
              Our Exquisite Menu
            </h2>
            <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-pink-500 animate-pulse" />
            <Heart className="absolute -bottom-2 -left-2 w-6 h-6 text-rose-500 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover culinary artistry at its finest. Each dish is crafted with passion, 
            using the freshest ingredients to create an unforgettable dining experience.
          </p>
          
          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-pink-200 bg-white/80 backdrop-blur-sm focus:border-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-200/50 transition-all duration-300 text-pink-900 placeholder-pink-400"
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex gap-2">
              {[
                { id: 'all', label: 'All', icon: <Utensils className="w-4 h-4" /> },
                { id: 'veg', label: 'Vegetarian', icon: <Leaf className="w-4 h-4" /> },
                { id: 'non-veg', label: 'Non-Veg', icon: <Award className="w-4 h-4" /> }
              ].map((filter) => (
                <Button
                  key={filter.id}
                  onClick={() => setFilterType(filter.id as 'all' | 'veg' | 'non-veg')}
                  variant={filterType === filter.id ? 'default' : 'outline'}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    filterType === filter.id
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg glow-pink hover:scale-105'
                      : 'border-pink-200 text-pink-700 hover:border-pink-400 hover:bg-pink-50 hover:scale-105'
                  }`}
                >
                  {filter.icon}
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-8">
          {filteredMenuData.map((category, categoryIndex) => (
            <div key={category.name} className="animate-fadeInUp" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <Collapsible 
                open={openCategories.includes(category.name)}
                onOpenChange={() => toggleCategory(category.name)}
              >
                <CollapsibleTrigger asChild>
                  <Card className="card-premium hover-lift mb-6 cursor-pointer group">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-3xl">
                            {category.icon || '🍽️'}
                          </div>
                          <div>
                            <h3 className="text-3xl font-playfair font-bold text-pink-800 mb-2">
                              {category.name}
                            </h3>
                            <p className="text-pink-600 text-lg">
                              {category.items.length} delicious items
                            </p>
                          </div>
                        </div>
                        <ChevronDown 
                          className={`w-8 h-8 text-pink-500 transition-transform duration-300 ${
                            openCategories.includes(category.name) ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleTrigger>

                <CollapsibleContent className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.items.map((item, itemIndex) => (
                      <Card key={item.name} className="menu-item hover-lift group" style={{ animationDelay: `${itemIndex * 100}ms` }}>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              {getItemIcon(item)}
                              <h4 className="text-xl font-semibold text-pink-800 group-hover:text-pink-600 transition-colors">
                                {item.name}
                              </h4>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className="text-2xl font-bold text-pink-600">
                                ₹{item.price}
                              </span>
                              {item.isSpecial && (
                                <Badge className={`text-xs px-3 py-1 rounded-full ${getBadgeVariant(item)}`}>
                                  Chef's Special
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-pink-700 leading-relaxed mb-4">
                            {item.description || 'A delicious dish crafted with care and fresh ingredients.'}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="border-pink-300 text-pink-600">
                              {item.isVeg ? '🌱 Vegetarian' : '🍖 Non-Vegetarian'}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fadeInUp">
          <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl font-playfair font-bold gradient-text mb-6">
              Can't Decide? Let Our Chef Surprise You!
            </h3>
            <p className="text-xl text-pink-700 mb-8 leading-relaxed">
              Experience our specially curated tasting menu featuring the best of our seasonal offerings.
            </p>
            <Button className="btn-premium text-lg px-12 py-4">
              <Crown className="w-5 h-5 mr-2" />
              Chef's Tasting Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

// Add these styles to your global CSS
/*
@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-20px) translateX(5px); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
*/
