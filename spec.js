const { browser, element, by } = require("protractor");
var homePage = require('./pages/homepage');

describe('Enter Name', function(){

    beforeAll(async function(){
        await homePage.get();
    });

    
    it('verify title of julie mr site',function(){
        var text=browser.getTitle();
        expect(text).toEqual('Super Calculator');
    });

    it('verify addition of two numbers',function(){

        homePage.setFirstName('1');
        homePage.setSecondName('2');
        homePage.getButton();
        expect(homePage.getText()).toEqual('3');
        
        homePage.setFirstName('2');
        homePage.setSecondName('3');
        homePage.getButton();
        expect(homePage.getText()).toEqual('5');
    });

    it('Verify history',async function(){
        await homePage.getHistory().each((ele) => {
            ele.getText().then((text) => {
                console.log(text);
            });
    });
    });
    
});

