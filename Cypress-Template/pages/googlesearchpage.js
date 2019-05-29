class GoogleSearchPage {

    get searchbox() { return cy.get('input[name="q"]'); }

    open() {
        cy.visit('http://www.google.com')
    }

    title(){
        return cy.title();
    }

    searchfor(searchterm) {
        this.searchbox.type(searchterm);
        this.searchbox.type('{enter}', {force: true});
    }
}

export default new GoogleSearchPage();