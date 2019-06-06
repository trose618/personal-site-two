const puppeteer = require('puppeteer');

test('should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=560,840']
    })

    const page = await browser.newPage();

    await page.setViewport({ width: 360, height: 640 })

    await page.goto(
        'http://127.0.0.1:5500/'
    );


    await page.click('.burger');

    await page.waitFor(3000);
    await page.close();

})