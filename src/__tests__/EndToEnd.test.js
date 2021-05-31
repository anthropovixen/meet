import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
	let browser, page;

	beforeAll(async () => {
		jest.setTimeout(10000);
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 250,
			ignoreDefaultArgs: ['--disable-extensions'],
		});
		page = await browser.newPage();
		await page.goto('http://localhost:3000/');
		await page.waitForSelector('.event');
	});

	test('An event element is collapsed by default', async () => {
		const eventDetails = await page.$('.event .expanded');
		expect(eventDetails).toBeNull();
		browser.close();
	});
});
