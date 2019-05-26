import { Given, When, Then, After, Before } from 'cucumber';
import puppeteer from "puppeteer";
import GoogleSearchPage from '../pages/googlesearchpage';
import SearchResultsPage from '../pages/searchresultspage';
import { expect } from 'chai';

let browser
let page
let googlesearchpage;
let searchresultspage;

Before(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
    googlesearchpage = new GoogleSearchPage(page)
    searchresultspage = new SearchResultsPage(page)
});

Given(/^User is on Google search page$/, async () => {
    await googlesearchpage.open()
});

When(/^User searches for Selenium$/, async () => {
    await googlesearchpage.searchFor('Selenium')
});

Then(/^User can see Selenium results$/, async () => {
    expect(await searchresultspage.isSeleniumPresent()).to.have.string('Selenium')
});

After(() => browser.close());