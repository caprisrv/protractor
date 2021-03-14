const { browser } = require("protractor");

class BaseClass {

    async openPage(){
        await browser.get('http://juliemr.github.io/protractor-demo/')
        browser.manage().window().maximize();
    }
}

exports.BaseClass=BaseClass