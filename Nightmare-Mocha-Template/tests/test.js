import Nightmare from "nightmare";
import {expect} from "chai";
import GoogleSearchPage from '../pages/googlesearchpage';
import SearchResultsPage from "../pages/searchresultspage";

describe('Google Search', function () {
    let nightmare
    let googlesearchpage
    let searchresultspage
    this.timeout(50000)

    before(async () => {
        nightmare = Nightmare()
        googlesearchpage = new GoogleSearchPage(nightmare)
        searchresultspage = new SearchResultsPage(nightmare)
    });

    it('Assert title "Google"', async () => {
        await googlesearchpage.open()
        const title = await googlesearchpage.getTitle()
        expect(title).to.equal('Google')
    });

    it('Search for "Selenium"', async function () {
        await googlesearchpage.searchFor('Selenium')
        const linkselenium = await searchresultspage.getSeleniumText()
        expect(linkselenium).to.include('Selenium')
    });

    after(() => nightmare.end());

});