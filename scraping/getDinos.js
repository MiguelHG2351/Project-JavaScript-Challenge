
import puppeteer from 'puppeteer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
    await prisma.$connect();
    const dinos = await prisma.dinoName.findMany();
    
    const browser = await puppeteer.launch();
    const e = dinos.slice(218);
    const data = []
    for(let i = 0; i < e.length; i++) {
            const page = await browser.newPage();
            await page.goto(`https://www.nhm.ac.uk/discover/dino-directory/${e[i].name.toLowerCase()}.html`, {
                waitUntil: 'networkidle2'
            });
            console.log(e[i].name);
            const info = await page.evaluate(() => {
                const _dinoInfo = document.querySelectorAll('.dinosaur--info.dinosaur--list dd a');
                const dinoInfo2 = document.querySelectorAll('.dinosaur--description.dinosaur--list dd');
                const description = document.querySelectorAll('.dinosaur--content-container p')
                let descriptionText = ''
                try {
                    description.forEach(d => {
                        descriptionText += d.innerText.trim()
                    })
                } finally {
                    console.log('f')
                }

                // console.log(_dinoInfo[0].innerText.trim());
                // console.log(document.querySelector('.dinosaur--name').innerHTML);
                
                let dinoInfo = {
                    description: descriptionText || 'Info no encontrada',
                }
                try {
                    dinoInfo.image = document.querySelector('.dinosaur--comparison-dino img').src
                } catch (error) {
                    dinoInfo.image = 'Info no encontrada'
                }
                try {
                    dinoInfo.name = document.querySelector('.dinosaur--name').innerText.trim()
                } catch (error) {
                    dinoInfo.name = 'Info no encontrada'
                }

                try {
                    dinoInfo.diet = _dinoInfo[0].innerText.trim()
                } catch (error) {
                    dinoInfo.diet = 'Info no encontrada'
                }

                try {
                    dinoInfo.live= _dinoInfo[1].innerText.trim()
                } catch (error) {
                    dinoInfo.live= 'Info no encontrada'
                }
                try {
                    dinoInfo.found= _dinoInfo[2].innerText.trim()
                } catch (error) {
                    dinoInfo.found= 'Info no encontrada'
                }
                try {
                    dinoInfo.type= dinoInfo2[0].innerText.trim()
                } catch (error) {
                    dinoInfo.type= 'Info no encontrada'
                }
                try {
                    dinoInfo.length= dinoInfo2[1].innerText.trim()
                } catch (error) {
                    dinoInfo.length= 'Info no encontrada'
                }
                return dinoInfo;
            });
            
            await prisma.dino.create({
                data: info
            });
            data.push(info);
            await page.close();
    }
    // await browser.close();
    
    res.json(data);
}