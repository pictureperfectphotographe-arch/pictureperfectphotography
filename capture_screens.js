/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer-core');
const path = require('path');
const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function waitForServer(port, timeout = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http.get(`http://localhost:${port}`, (res) => {
        resolve();
      }).on('error', () => {
        if (Date.now() - start > timeout) {
          reject(new Error('Timeout waiting for server'));
        } else {
          setTimeout(check, 500);
        }
      });
    };
    check();
  });
}

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
          setTimeout(() => {
            window.scrollTo(0, 0);
            resolve();
          }, 600);
        }
      }, 40);
    });
  });
  await new Promise((r) => setTimeout(r, 1500));
}

async function main() {
  console.log('Starting Next.js production server on port 3001...');
  const nextProcess = spawn('npx.cmd', ['next', 'start', '-p', '3001'], {
    stdio: 'inherit',
    shell: true,
  });

  try {
    await waitForServer(3001);
    console.log('Next.js server is up on port 3001.');

    console.log('Launching Chrome via puppeteer-core...');
    const browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    });

    const page = await browser.newPage();

    const viewports = [
      { name: 'desktop_1920', width: 1920, height: 1080, dpr: 1 },
      { name: 'desktop_1440', width: 1440, height: 900, dpr: 1 },
      { name: 'laptop_1024', width: 1024, height: 768, dpr: 1 },
      { name: 'tablet_768', width: 768, height: 1024, dpr: 1 },
      { name: 'mobile_390', width: 390, height: 844, dpr: 2, isMobile: true },
    ];

    // 1. Portfolio Main Page across 5 viewports
    for (const vp of viewports) {
      console.log(`Capturing /portfolio at ${vp.name}...`);
      await page.setViewport({
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: vp.dpr,
        isMobile: vp.isMobile || false,
      });
      await page.goto('http://localhost:3001/portfolio', {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });
      await autoScroll(page);
      await page.screenshot({
        path: path.join(__dirname, `screenshot_portfolio_${vp.name}.png`),
        fullPage: true,
      });
      console.log(`Saved screenshot_portfolio_${vp.name}.png`);
    }

    // 2. Dedicated Story: /portfolio/akhila-vepunder across desktop & mobile
    for (const vp of [viewports[0], viewports[4]]) {
      console.log(`Capturing /portfolio/akhila-vepunder at ${vp.name}...`);
      await page.setViewport({
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: vp.dpr,
        isMobile: vp.isMobile || false,
      });
      await page.goto('http://localhost:3001/portfolio/akhila-vepunder', {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });
      await autoScroll(page);
      await page.screenshot({
        path: path.join(__dirname, `screenshot_story_${vp.name}.png`),
        fullPage: true,
      });
      console.log(`Saved screenshot_story_${vp.name}.png`);
    }

    // 3. Client Gallery Gate: /client-gallery/akhila-vepunder
    console.log(`Capturing /client-gallery/akhila-vepunder...`);
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
    await page.goto('http://localhost:3001/client-gallery/akhila-vepunder', {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });
    await page.screenshot({
      path: path.join(__dirname, `screenshot_client_gallery_gate.png`),
      fullPage: true,
    });
    console.log(`Saved screenshot_client_gallery_gate.png`);

    // 4. Homepage verification: verify unchanged
    console.log(`Capturing Homepage / for verification...`);
    await page.goto('http://localhost:3001/', {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });
    await autoScroll(page);
    await page.screenshot({
      path: path.join(__dirname, `screenshot_homepage_verified.png`),
      fullPage: true,
    });
    console.log(`Saved screenshot_homepage_verified.png`);

    await browser.close();
    console.log('All screenshots captured successfully!');
  } finally {
    console.log('Stopping Next.js server...');
    nextProcess.kill('SIGKILL');
  }
}

main().catch((err) => {
  console.error('Screenshot capture failed:', err);
  process.exit(1);
});
