const puppeteer = require('puppeteer');

async function init() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.nhm.ac.uk/discover/dino-directory/name/name-az-all.html');

    const dinos = await page.evaluate(() => {
        data = []
        const dinoList = document.querySelectorAll('.dinosaurfilter--name');
        dinoList.forEach(dino => {
            data.push(dino.innerText.trim())
        })
        return data;
    });
    console.log(dinos)
    await browser.close();
}

init();
