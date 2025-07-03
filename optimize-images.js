import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [320, 640, 1200];
const inputDir = './public/originals';
const outputDir = './public/optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Optimize regular images
const optimizeImages = async () => {
  const files = ['1.png', '2.png', '3.png'];
  
  for (const filename of files) {
    const name = path.parse(filename).name;
    
    for (const size of sizes) {
      try {
        await sharp(`${inputDir}/${filename}`)
          .resize({ width: size })
          .webp({ quality: size < 640 ? 70 : 80 })
          .toFile(`${outputDir}/${name}-${size}w.webp`);
        console.log(`Created ${outputDir}/${name}-${size}w.webp`);
      } catch (error) {
        console.error(`Error processing ${filename} at size ${size}:`, error);
      }
    }
  }

  // Optimize logo
  try {
    await sharp(`${inputDir}/logo.png`)
      .resize(128)
      .webp({ quality: 90 })
      .toFile(`${outputDir}/logo-128w.webp`);
    console.log(`Created ${outputDir}/logo-128w.webp`);

    await sharp(`${inputDir}/logo.png`)
      .resize(64)
      .webp({ quality: 90 })
      .toFile(`${outputDir}/logo-64w.webp`);
    console.log(`Created ${outputDir}/logo-64w.webp`);

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing logo:', error);
  }
};

optimizeImages().catch(console.error);