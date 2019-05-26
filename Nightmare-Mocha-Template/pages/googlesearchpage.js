export default class GoogleSearchPage {

    get searchbox() {return 'input[name="q"]';}

    constructor(nightmare) {
        this.nightmare = nightmare;
    }

    open(){
        this.nightmare.goto('http://www.google.com')
    }

    getTitle(){
        return this.nightmare.title()
    }

    searchFor(searchterm){
        this.nightmare.type(this.searchbox, searchterm+ String.fromCharCode(13))
    }

}