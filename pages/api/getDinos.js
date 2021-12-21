import puppeteer from 'puppeteer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getData() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.nhm.ac.uk/discover/dino-directory/name/name-az-all.html');

    const dinos = await page.evaluate(() => {
        data = []
        const dinoList = document.querySelectorAll('.dinosaurfilter--name');
        dinoList.forEach(dino => {
            data.push({
                name: dino.innerText.trim()
            })
        })
        return data;
    });
    await page.close();
    const diniInfo = [];

    // dinos.forEach(async (name) => {
    //     const findInfo = await browser.newPage();
    //     await findInfo.goto(`https://www.nhm.ac.uk/discover/dino-directory/${name}.html`);
    //     const info = await findInfo.evaluate(() => {
    //         const _dinoInfo = document.querySelectorAll('.dinosaur--info.dinosaur--list dd a');
    //         const dinoInfo2 = document.querySelectorAll('.dinosaur--description.dinosaur--list dd');
    //         console.log(_dinoInfo[0].innerText.trim());

    //         const dinoInfo = {
    //             name: document.querySelector('.dinosaur--name').src,
    //             image: document.querySelector('.dinosaur--comparison-dino').children[0].src.trim(),
    //             description: document.querySelector('.dinosaur--content-container').innerText.trim(),
    //             diet: _dinoInfo[0].innerText.trim(),
    //             live: _dinoInfo[1].innerText.trim(),
    //             found: _dinoInfo[2].innerText.trim(),
    //             type: dinoInfo2[0].innerText.trim(),
    //             length: dinoInfo2[1].innerText.trim(),
    //         }
    //         return dinoInfo;
    //     });
    //     diniInfo.push(info);
    //     findInfo.close()
    // })

    await browser.close();
    return dinos;
}

export default async (req, res) => {
    getData().then(async dinos => {
        // await prisma.$connect();
        // await prisma.dinoName.createMany({
        //     data: dinos
        // });
        res.statusCode = 200;
        res.json(dinos);
    });

}