import { Given, When, Then, After, Before } from 'cucumber';
import Nightmare from "nightmare";
import {expect} from "chai";
import GoogleSearchPage from '../pages/googlesearchpage';
import SearchResultsPage from "../pages/searchresultspage";

let nightmare
let googlesearchpage
let searchresultspage

Before(async () => {
    nightmare = Nightmare()
    googlesearchpage = new GoogleSearchPage(nightmare)
    searchresultspage = new SearchResultsPage(nightmare)
});

Given(/^User is on Google search page$/, async () => {
    await googlesearchpage.open()
});

When(/^User searches for Selenium$/, async () => {
    await googlesearchpage.searchFor('Selenium')
});

Then(/^User can see Selenium results$/, async () => {
    const linkselenium = await searchresultspage.getSeleniumText()
        expect(linkselenium).to.include('Selenium')
});

After(() => nightmare.end());