var AngularHomepage = function() {

    var firstnumber = element(by.model('first'));
    var secondnumber = element(by.model('second'));
    var gobtn = element(by.id('gobutton'));
    var text = element(by.className('ng-binding'));
    var history = element.all(by.repeater('result in memory'));
  
    this.get = async function() {
      await browser.get('http://juliemr.github.io/protractor-demo/')
      .then(()=>browser.manage().window().maximize());
    };
  
    this.setFirstName = async function(name) {
      await firstnumber.sendKeys(name);
    };

    this.setSecondName = async function(name) {
      await secondnumber.sendKeys(name);
    };
  
    this.getText = function() {
      return text.getText();
    };

    this.getButton = async function(){
      await gobtn.click();
    }

    this.getHistory = function() {
      return history;
    };
  };
  module.exports = new AngularHomepage();