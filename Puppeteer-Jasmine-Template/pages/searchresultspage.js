export default class SearchResultsPage{

    constructor(page) {
        this.page = page;
        this.LINK_SELENIUM = '.rc h3';
    }

    async isSeleniumPresent(){
        await this.page.waitForSelector(this.LINK_SELENIUM)
        return await this.page.$$eval(this.LINK_SELENIUM, link => link[0].textContent);     
    }
}