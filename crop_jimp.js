const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const certs = [
  'oracle_certificate.png',
  'aicte_certificate_1773661881667.png',
  'tcs_ion_certificate_1773662045243.png',
  'movidu_certificate_1773661820486.png'
];

function colorDistance(c1, c2) {
  // simple euclidean distance of r,g,b
  return Math.sqrt(
    Math.pow(c1.r - c2.r, 2) +
    Math.pow(c1.g - c2.g, 2) +
    Math.pow(c1.b - c2.b, 2)
  );
}

async function cropAll() {
  for (const cert of certs) {
    const filePath = path.join('public', cert);
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${cert}`);
      continue;
    }
    console.log(`Processing ${cert}...`);
    try {
      const img = await Jimp.read(filePath);
      const bg = Jimp.intToRGBA(img.getPixelColor(0, 0));
      
      let minX = img.bitmap.width;
      let minY = img.bitmap.height;
      let maxX = 0;
      let maxY = 0;

      // Scan every pixel
      for (let y = 0; y < img.bitmap.height; y++) {
        for (let x = 0; x < img.bitmap.width; x++) {
          const c = Jimp.intToRGBA(img.getPixelColor(x, y));
          // If color is sufficiently different and not completely transparent
          if (c.a > 10 && colorDistance(c, bg) > 20) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }

      if (maxX > minX && maxY > minY && (maxX - minX > 100) && (maxY - minY > 100)) {
        console.log(`Cropping ${cert} to box: ${minX}, ${minY}, ${maxX - minX}, ${maxY - minY}`);
        img.crop({ x: minX, y: minY, w: maxX - minX, h: maxY - minY });
        await img.write(filePath);
        console.log(`Saved ${cert}`);
      } else {
        console.log(`Could not find reasonable bounding box for ${cert}`);
      }
    } catch (e) {
      console.error(`Error processing ${cert}:`, e);
    }
  }
}

cropAll();
