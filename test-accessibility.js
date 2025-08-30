/**
 * Script básico para teste de acessibilidade usando axe-core e Puppeteer
 * 
 * Para executar:
 * 1. Instale as dependências: npm install puppeteer axe-core
 * 2. Execute: node test-accessibility.js
 */

const puppeteer = require('puppeteer');
const axeCore = require('axe-core');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Substitua pelo caminho correto do arquivo local ou URL
  const url = 'file://' + __dirname + '/index.html';

  await page.goto(url);

  // Injetar axe-core no contexto da página
  await page.addScriptTag({ path: require.resolve('axe-core') });

  // Executar a análise de acessibilidade
  const results = await page.evaluate(async () => {
    return await axe.run();
  });

  if (results.violations.length === 0) {
    console.log('Nenhuma violação de acessibilidade encontrada.');
  } else {
    console.log('Violação(s) de acessibilidade encontradas:');
    results.violations.forEach((violation) => {
      console.log(`- ${violation.id}: ${violation.description}`);
      violation.nodes.forEach((node) => {
        console.log(`  Elemento: ${node.target.join(', ')}`);
        console.log(`  Mensagem: ${node.failureSummary}`);
      });
    });
  }

  await browser.close();
})();
