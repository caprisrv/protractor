const { HomePage } = require("../pages/homepagenew");
const { CommonFunc } = require("../common/commonFunc");
const inputData = require("../testdata/homePageInput.json");

const homePage = new HomePage();
const CF = new CommonFunc();

describe('Enter Name',function(){

    beforeAll(async function(){
        CF.openPage();
    })

    it('verify title of julie mr site',async function(){
        var title = await browser.getTitle();
        expect(title).toEqual('Super Calculator');
    });

    it('verify addition of two numbers',async function(){

        /* await homePage.enterFirstNumber(inputData.homepage.firstNumber);
        await homePage.enterSecondNumber(inputData.homepage.secondNumber);
        await homePage.clickgoBtn(); */
        await CF.enterNumbersAndClick();
        await expect(homePage.ResulText().getText()).toEqual(inputData.homepage.validateNumber);
        });
    it('Verify history',async function(){
        //var history = homePage.findHistory();
        await homePage.findHistory().each((ele) => {
            ele.getText().then((text) => {
                console.log("The Text is "+text);
            });
    });
    });

})