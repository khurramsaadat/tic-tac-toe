const fs = require('fs');
const puppeteer = require('puppeteer');

async function convertSvgToPng() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Read the SVG file
  const svgContent = fs.readFileSync('public/hero-background.svg', 'utf8');
  
  // Set viewport to match SVG dimensions
  await page.setViewport({ width: 1200, height: 1200 });
  
  // Set content with SVG
  await page.setContent(svgContent);
  
  // Take a screenshot
  await page.screenshot({
    path: 'public/hero-background.png',
    omitBackground: false,
    scale: 2 // For higher quality
  });
  
  await browser.close();
  console.log('Conversion completed!');
}

convertSvgToPng().catch(console.error); 