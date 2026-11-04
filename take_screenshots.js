const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 40);
    });
  });
  // Wait a short moment for images and fonts to settle
  await new Promise((r) => setTimeout(r, 2500));
}

async function capture() {
  console.log('Launching Chrome via puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  // Desktop 1440px
  console.log('Navigating to http://localhost:3000 at 1440px...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await autoScroll(page);
  await page.screenshot({
    path: path.join(__dirname, 'screenshot_desktop_1440.png'),
    fullPage: true
  });
  console.log('Saved screenshot_desktop_1440.png');

  // Mobile 390px
  console.log('Navigating to http://localhost:3000 at 390px...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await autoScroll(page);
  await page.screenshot({
    path: path.join(__dirname, 'screenshot_mobile_390.png'),
    fullPage: true
  });
  console.log('Saved screenshot_mobile_390.png');

  // Tablet 768px
  console.log('Navigating to http://localhost:3000 at 768px...');
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await autoScroll(page);
  await page.screenshot({
    path: path.join(__dirname, 'screenshot_tablet_768.png'),
    fullPage: true
  });
  console.log('Saved screenshot_tablet_768.png');

  await browser.close();
  console.log('All screenshots completed successfully!');
}

capture().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
