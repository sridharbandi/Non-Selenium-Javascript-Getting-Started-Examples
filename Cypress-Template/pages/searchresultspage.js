class SearchResultsPage {
    get linkselenium() { return cy.contains('Selenium - Web Browser Automation'); }

    seleniumLink(){
        return this.linkselenium;
    }
}
export default new SearchResultsPage();