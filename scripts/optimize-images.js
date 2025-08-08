const fs = require('fs');
const path = require('path');

// Function to get file size in MB
function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Function to scan and report large images
function scanLargeImages(directory, maxSizeMB = 1) {
  const largeImages = [];
  
  function scanDir(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext)) {
          const sizeMB = parseFloat(getFileSizeInMB(fullPath));
          if (sizeMB > maxSizeMB) {
            largeImages.push({
              path: fullPath,
              size: sizeMB,
              relativePath: path.relative(process.cwd(), fullPath)
            });
          }
        }
      }
    });
  }
  
  scanDir(directory);
  return largeImages;
}

// Scan for large images
console.log('🔍 Scanning for large images...\n');
const largeImages = scanLargeImages('./public/assets', 0.5); // 500KB threshold

if (largeImages.length === 0) {
  console.log('✅ No large images found! All images are optimized.');
} else {
  console.log('⚠️  Large images found that should be optimized:\n');
  largeImages.forEach(img => {
    console.log(`📁 ${img.relativePath} - ${img.size}MB`);
  });
  
  console.log('\n💡 Recommendations:');
  console.log('1. Use WebP format instead of PNG/JPG');
  console.log('2. Compress images using tools like TinyPNG or ImageOptim');
  console.log('3. Consider using responsive images with different sizes');
  console.log('4. Use the OptimizedImage component for better loading');
}

// Check for missing alt attributes in components
console.log('\n🔍 Checking for image optimization best practices...\n');

const componentFiles = [
  'src/components/portfolioCard.tsx',
  'src/components/ProjectIntro.tsx',
  'src/components/singleImageViewer.tsx',
  'src/app/page.tsx'
];

componentFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const imageComponents = content.match(/<Image[^>]*>/g) || [];
    
    imageComponents.forEach(img => {
      if (!img.includes('alt=')) {
        console.log(`⚠️  Missing alt attribute in ${file}`);
      }
      if (!img.includes('loading=')) {
        console.log(`⚠️  Missing loading attribute in ${file}`);
      }
    });
  }
});

console.log('\n✅ Image optimization check complete!');
