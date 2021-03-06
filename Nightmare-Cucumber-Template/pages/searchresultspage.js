export default class SearchResultsPage{
    get linkselenium() {return '.rc h3';}

    constructor(nightmare) {
        this.nightmare = nightmare;
    }

    async getSeleniumText(){
        await this.nightmare.wait(this.linkselenium)
        const selector = this.linkselenium
        await this.nightmare.evaluate(selector => {
            return document.querySelector(selector).innerText
          }, selector)
          .then(text => {
            this.text = text
          })
          return this.text
    }
}