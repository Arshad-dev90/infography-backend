const puppeteer = require('puppeteer');

const generateScreenshot = async(req, res) => {
    try {
        const browser = await puppeteer.launch({
            headless: "new",
            executablePath: '/opt/render/.cache/puppeteer/chrome/linux-134.0.6998.165/chrome',
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox"
            ]
        });
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