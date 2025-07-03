const https = require('https');
const fs = require('fs');
const path = require('path');

// High-quality restaurant images from Unsplash (free to use)
const imageUrls = [
  // Interior shots
  {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop&crop=center',
    filename: '1-1200w.webp',
    category: 'interior',
    description: 'Modern restaurant interior with elegant dining tables'
  },
  {
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=800&fit=crop&crop=center',
    filename: '2-1200w.webp',
    category: 'interior',
    description: 'Cozy restaurant with warm lighting and booth seating'
  },
  {
    url: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1200&h=800&fit=crop&crop=center',
    filename: '3-1200w.webp',
    category: 'interior',
    description: 'Contemporary bar area with premium spirits display'
  },
  
  // Food photography
  {
    url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=640&h=480&fit=crop&crop=center',
    filename: '1-640w.webp',
    category: 'food',
    description: 'Gourmet grilled meat dish with herbs and vegetables'
  },
  {
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=640&h=480&fit=crop&crop=center',
    filename: '2-640w.webp',
    category: 'food',
    description: 'Fresh seafood platter with Mediterranean styling'
  },
  {
    url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=640&h=480&fit=crop&crop=center',
    filename: '3-640w.webp',
    category: 'food',
    description: 'Artisanal pasta with premium truffle and cheese'
  },
  
  // Beverages
  {
    url: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=320&h=240&fit=crop&crop=center',
    filename: '1-320w.webp',
    category: 'beverages',
    description: 'Elegant cocktail with pink garnish in sophisticated glassware'
  },
  {
    url: 'https://images.unsplash.com/photo-1574870111867-089730e5a72c?w=320&h=240&fit=crop&crop=center',
    filename: '2-320w.webp',
    category: 'beverages',
    description: 'Premium wine selection in temperature-controlled display'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=240&fit=crop&crop=center',
    filename: '3-320w.webp',
    category: 'beverages',
    description: 'Artisanal coffee service with elegant presentation'
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
    
    // Skip if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`✓ ${imageInfo.filename} already exists`);
      resolve();
      return;
    }
    
    console.log(`📥 Downloading ${imageInfo.filename}...`);
    
    const file = fs.createWriteStream(filePath);
    
    https.get(imageInfo.url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${imageInfo.filename}: ${response.statusCode}`));
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
        reject(error);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('🚀 Starting image download for Pimlico Restaurant...\n');
  
  try {
    for (const imageInfo of imageUrls) {
      await downloadImage(imageInfo);
    }
    
    console.log('\n✨ All images downloaded successfully!');
    console.log('\n📋 Image Summary:');
    console.log('Interior shots: 3 images (1200x800px)');
    console.log('Food photography: 3 images (640x480px)');
    console.log('Beverages: 3 images (320x240px)');
    console.log('\n🎯 Images are now ready for your Pimlico restaurant website!');
    
  } catch (error) {
    console.error('❌ Error downloading images:', error.message);
    process.exit(1);
  }
}

// Run the download
downloadAllImages(); 