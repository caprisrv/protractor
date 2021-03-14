const { BaseClass } = require("../common/baseClass");
const { HomePage } = require("../pages/homepagenew");

const homePage = new HomePage();
const baseClass = new BaseClass();

describe('Enter Name',function(){

    beforeAll(async function(){
        baseClass.openPage();
    })

    it('verify title of julie mr site',async function(){
        var title = await browser.getTitle();
        expect(title).toEqual('Super Calculator');
    });

    it('verify addition of two numbers',async function(){

        await homePage.enterFirstNumber('1');
        await homePage.enterSecondNumber('2');
        await homePage.clickgoBtn();
        await expect(homePage.ResulText().getText()).toEqual('3');
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