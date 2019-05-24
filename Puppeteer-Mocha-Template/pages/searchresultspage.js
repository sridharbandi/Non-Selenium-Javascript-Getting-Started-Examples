export default class SearchResultsPage{

    constructor(page) {
        this.page = page;
        this.LINK_SELENIUM = 'a h3';
    }

    async isSeleniumPresent(){
        await this.page.waitForSelector(this.LINK_SELENIUM)
        const links = await this.page.evaluate(() => {
            return Array.from(document.querySelectorAll('a h3'))
                .map(link => { return link.textContent })
        })
        return links[0];
    }
}