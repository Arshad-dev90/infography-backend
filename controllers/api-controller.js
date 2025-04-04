const puppeteer = require('puppeteer');

const generateScreenshot = async(req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(process.env.URL, { waitUntil : 'networkidle2' });
        const screenshot = await page.screenshot( { fullPage : true } )

        await browser.close();

        res.status(200).contentType('image/png').send(screenshot);


    } catch (error) {
        console.error("Error Taking Screenshot:", error);
        res.status(500).json({ success: false, message: "Error taking screenshot" });
    }
}

module.exports = {
    generateScreenshot
}