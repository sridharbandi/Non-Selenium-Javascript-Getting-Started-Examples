import { Selector, t } from 'testcafe';

export default class SearchResultsPage {

    constructor() {
        this.linkselenium = Selector('a[href=\'https://www.seleniumhq.org/\'] > h3');
    }

    async getSeleniumText(){
        return this.linkselenium.textContent
    }
}