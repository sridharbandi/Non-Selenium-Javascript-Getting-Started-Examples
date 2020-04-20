import { Selector, ClientFunction, t } from 'testcafe';

export default class SearchResultsPage {

    constructor() {
        this.linkselenium = Selector('a[href=\'https://www.selenium.dev/\'] > h3');
    }

    async getSeleniumText(){
        return this.linkselenium.textContent
    }

    async executeScript(){
        const getPageUrl = ClientFunction(() => window.location.href);
        console.log(await getPageUrl());
        
    }
}