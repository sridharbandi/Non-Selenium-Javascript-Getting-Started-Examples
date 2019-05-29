import GoogleSearchPage from '../pages/googlesearchpage';
import SearchResultsPage from '../pages/searchresultspage';

describe('GoogleSearch Test', function () {
    it('Verify Title', function () {
        GoogleSearchPage.open();
        GoogleSearchPage.title().should('eq', 'Google');
    });

    it('Search for Selenium', function () {
        GoogleSearchPage.searchfor('Selenium');
        SearchResultsPage.seleniumLink();
    });
});