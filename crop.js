const sharp = require('sharp');
const fs = require('fs');

const certs = [
  'oracle_certificate.png',
  'aicte_certificate_1773661881667.png',
  'tcs_ion_certificate_1773662045243.png',
  'movidu_certificate_1773661820486.png'
];

async function cropAll() {
  for (const cert of certs) {
    const path = `public/${cert}`;
    if (!fs.existsSync(path)) {
      console.log(`Skipping ${path}`);
      continue;
    }
    console.log(`Cropping ${cert}...`);
    try {
      // Create a temporary file
      const tempPath = `public/temp_${cert}`;
      
      // Trim removes borders of the same color as the top-left pixel.
      // We'll pass a threshold to handle slight color variations in screenshots.
      await sharp(path)
        .trim({ threshold: 10 })
        .toFile(tempPath);
      
      // Replace original with cropped
      fs.renameSync(tempPath, path);
      console.log(`Cropped ${cert} successfully.`);
    } catch (e) {
      console.error(`Error cropping ${cert}:`, e);
    }
  }
}

cropAll();
