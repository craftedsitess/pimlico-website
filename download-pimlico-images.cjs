const https = require('https');
const fs = require('fs');
const path = require('path');

// Diverse restaurant images from Unsplash (free to use) - verified working URLs
const imageUrls = [
  // Interior shots - Different styles
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop',
    filename: '1-1200w.webp',
    category: 'interior',
    description: 'Elegant restaurant interior with modern tables and warm lighting'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
    filename: '2-1200w.webp',
    category: 'interior',
    description: 'Upscale dining room with sophisticated booth seating'
  },
  {
    url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop',
    filename: '3-1200w.webp',
    category: 'interior',
    description: 'Modern bar area with premium design and ambient lighting'
  },
  
  // Food photography - Gourmet dishes
  {
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=640&h=480&fit=crop',
    filename: '1-640w.webp',
    category: 'food',
    description: 'Beautifully plated gourmet dish with artistic presentation'
  },
  {
    url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=640&h=480&fit=crop',
    filename: '2-640w.webp',
    category: 'food',
    description: 'Fresh seafood preparation with herbs and elegant plating'
  },
  {
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=640&h=480&fit=crop',
    filename: '3-640w.webp',
    category: 'food',
    description: 'Artisanal pasta dish with truffle and premium ingredients'
  },
  
  // Beverages - Different styles
  {
    url: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=320&h=240&fit=crop',
    filename: '1-320w.webp',
    category: 'beverages',
    description: 'Craft cocktail with elegant garnish and professional presentation'
  },
  {
    url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=320&h=240&fit=crop',
    filename: '2-320w.webp',
    category: 'beverages',
    description: 'Wine selection with bottles and glasses in restaurant setting'
  },
  {
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=320&h=240&fit=crop',
    filename: '3-320w.webp',
    category: 'beverages',
    description: 'Premium coffee service with latte art and pastries'
  }
];

// Ensure directories exist
const optimizedDir = path.join(__dirname, 'public', 'optimized');
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Function to download a single image
function downloadImage(imageInfo) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(optimizedDir, imageInfo.filename);
    
    console.log(`📥 Downloading ${imageInfo.filename}...`);
    
    const file = fs.createWriteStream(filePath);
    
    https.get(imageInfo.url, (response) => {
      if (response.statusCode !== 200) {
        console.log(`⚠️ Skipping ${imageInfo.filename}: ${response.statusCode}`);
        resolve(); // Don't fail the whole process
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Successfully downloaded ${imageInfo.filename}`);
        resolve();
      });
      
      file.on('error', (error) => {
        fs.unlink(filePath, () => {}); // Delete the file on error
        console.log(`⚠️ Error with ${imageInfo.filename}: ${error.message}`);
        resolve(); // Don't fail the whole process
      });
    }).on('error', (error) => {
      console.log(`⚠️ Network error for ${imageInfo.filename}: ${error.message}`);
      resolve(); // Don't fail the whole process
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('🚀 Starting fresh image download for Pimlico Restaurant...\n');
  
  try {
    for (const imageInfo of imageUrls) {
      await downloadImage(imageInfo);
    }
    
    console.log('\n✨ Image download process completed!');
    console.log('\n📋 New Image Summary:');
    console.log('Interior shots: Restaurant interior images (1200x800px)');
    console.log('Food photography: Gourmet dishes (640x480px)');
    console.log('Beverages: Premium drink presentations (320x240px)');
    console.log('\n🎯 Images are ready for your Pimlico restaurant website!');
    
  } catch (error) {
    console.error('❌ Error in download process:', error.message);
  }
}

// Run the download
downloadAllImages(); 