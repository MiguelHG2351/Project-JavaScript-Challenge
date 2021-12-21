// 
// https://www.gameuidatabase.com/uploads/JurassicWorldEvolution04242020-083705.jpg
// https://www.gameuidatabase.com/uploads/JurassicWorldEvolution04242020-083736.jpg
// https://www.gameuidatabase.com/uploads/JurassicWorldEvolution04242020-083037_thumb.jpgc
const puppeteer = require('puppeteer');

async function getData() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.nhm.ac.uk/discover/dino-directory/aardonyx.html');

    const dinos = await page.evaluate(() => {
        const dino = document.querySelectorAll('.dinosaur--description.dinosaur--list dd');

        return {
            type: dino[0].innerText.trim(),
            length : dino[1].innerText.trim(),
        }
    });

    await page.close();
    
    browser.close();
    console.log(dinos);
}

getData()