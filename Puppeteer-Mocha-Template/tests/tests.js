import assert from "assert";
import puppeteer from "puppeteer";
import GoogleSearchPage from "../pages/googlesearchpage";
import SearchResultsPage from "../pages/searchresultspage";

let browser
let page
let googlesearchpage
let searchresultspage

before(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
    googlesearchpage = new GoogleSearchPage(page)
    searchresultspage = new SearchResultsPage(page)
});

describe('Google Test', () => {
    it('Assert title "Google"', async () => {
        await googlesearchpage.open()
        const title = await googlesearchpage.getTitle()
        assert.equal(title, 'Google')
    });

    it('Search for "Selenium"', async () => {
        await googlesearchpage.searchFor('Selenium')
        assert.equal(await searchresultspage.isSeleniumPresent(), 'Selenium')
    });

});

after(async () => {
    await browser.close()
});