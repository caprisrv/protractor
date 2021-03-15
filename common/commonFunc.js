const { HomePage } = require("../pages/homepagenew");
const inputData = require("../testdata/homePageInput.json");

const homePage = new HomePage();
class CommonFunc{
    async enterNumbersAndClick(){
        await homePage.enterFirstNumber(inputData.homepage.firstNumber);
        await homePage.enterSecondNumber(inputData.homepage.secondNumber);
        await homePage.clickgoBtn();
    }

    async openPage(){
        await browser.get(inputData.url.baseURL);
        browser.manage().window().maximize();
    }
}

exports.CommonFunc=CommonFunc