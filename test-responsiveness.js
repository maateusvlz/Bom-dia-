/**
 * Script básico para teste de responsividade usando Puppeteer
 * 
 * Para executar:
 * 1. Instale as dependências: npm install puppeteer
 * 2. Execute: node test-responsiveness.js
 */

const puppeteer = require('puppeteer');

const devices = [
  { name: 'Desktop', width: 1280, height: 800 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Mobile', width: 375, height: 667 }
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Substitua pelo caminho correto do arquivo local ou URL
  const url = 'file://' + __dirname + '/index.html';

  for (const device of devices) {
    await page.setViewport({ width: device.width, height: device.height });
    await page.goto(url);
    await page.waitForTimeout(1000); // Espera para carregar e renderizar

    // Captura screenshot para análise visual
    await page.screenshot({ path: `responsiveness-${device.name.toLowerCase()}.png` });
    console.log(`Screenshot capturada para ${device.name}`);
  }

  await browser.close();
})();
