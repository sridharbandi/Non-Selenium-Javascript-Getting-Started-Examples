import puppeteer from "puppeteer";
import GoogleSearchPage from "../pages/googlesearchpage";
import SearchResultsPage from "../pages/searchresultspage";

let browser
let page
let googlesearchpage
let searchresultspage

describe('Google Test', () => {

    beforeAll(async () => {
        browser = await puppeteer.launch()
        page = await browser.newPage()
        googlesearchpage = new GoogleSearchPage(page)
        searchresultspage = new SearchResultsPage(page)
    });

    it('Assert title "Google"', async () => {
        await googlesearchpage.open()
        const title = await googlesearchpage.getTitle()
        expect(title).toBe('Google')
    });

    it('Search for "Selenium"', async () => {
        await googlesearchpage.searchFor('Selenium')
        expect(await searchresultspage.isSeleniumPresent()).toContain('Selenium')
    });

    afterAll(async () => {
        await browser.close()
    });
});

