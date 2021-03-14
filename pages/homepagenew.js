class HomePage {
    #firstnumber = element(by.model('first'));
    #secondnumber = element(by.model('second'));
    #gobtn = element(by.id('gobutton'));
    #resulttext = element(by.className('ng-binding'));
    #history = element.all(by.repeater('result in memory'));

    async enterFirstNumber(text){
        await this.#firstnumber.sendKeys(text);
    }

    async enterSecondNumber(text){
        await this.#secondnumber.sendKeys(text);
    }

    async clickgoBtn(){
        await this.#gobtn.click();
    }

    ResulText(){
        return this.#resulttext;
    }

    findHistory(){
        return this.#history;
    }
}

exports.HomePage=HomePage