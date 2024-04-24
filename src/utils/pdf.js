const Puppeteer = require('puppeteer');

module.exports = async function buildPdf(inputFile, outputFile) {
  const browser = await Puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`file://${inputFile}`, {
    waitUntil: 'networkidle2'
  });
  await page.pdf({
    path: outputFile,
    format: 'A3',
    border: 0,
    margin: {
      top: '2.54cm',
      right: '2.54cm',
      bottom: '2.54cm',
      left: '2.54cm',
    },
  });
  await browser.close();
};
