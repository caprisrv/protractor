const { browser, element, by } = require("protractor");
var homePage = require('../pages/homepage.js');

describe('Enter Name', function(){

    beforeAll(async function(){
        await homePage.get();
    });

    
    /* it('verify title of julie mr site',function(){
        browser.getTitle().then(title=>{
            console.log("title is "+title);
            expect(title).toEqual('Super Calculator');
        })
    }); */

    fit('verify title of julie mr site',async function(){
        var title = await browser.getTitle();
        expect(title).toEqual('Super Calculator');
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

