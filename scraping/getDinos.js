const puppeteer = require('puppeteer');

async function init() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.dinos.org/');

    const dinos = await page.evaluate(() => {
        
    });

    await browser.close();
}

init();
