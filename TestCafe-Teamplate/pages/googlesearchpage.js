import { Selector, t } from 'testcafe';

export default class GoogleSearchPage {

    constructor() {
        this.title = Selector('title');
        this.searchbox = Selector('input[name="q"]');
    }

    async getTitle(){
         return this.title.textContent
     }

     async searchFor(searchterm){
         await t.typeText(this.searchbox, searchterm)
         await t.pressKey('enter')
     }
}