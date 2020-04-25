class SearchResultsPage {
    get linkselenium() { return cy.contains('Selenium'); }

    seleniumLink(){
        return this.linkselenium;
    }
}
export default new SearchResultsPage();