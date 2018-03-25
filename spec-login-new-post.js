var util = require ('util')
var config = require('./config.json');

describe ("Protractor login & new post test", function(){
	
	
    it('should able to login', function(){
		browser.ignoreSynchronization = true;			 
		browser.get(config.siteURL);                                         //launch url
		browser.sleep(9000);
		browser.waitForAngular();
       // element(by.css('.openLogin.inner-header-link.ng-binding')).click();  
	    element(by.xpath('//a[contains(text(), "Login")]')).click();
		browser.sleep(4000);                                         
		element(by.model('login.email')).sendKeys(config.loginEmail);        //enter login email
		element(by.model('login.password')).sendKeys(config.loginPass);      //enter login password
		element(by.xpath('//input[@type="submit"]')).click();                //click login button
		browser.sleep(9000);
		browser.waitForAngular();
		expect(element(by.css('.openLogin.inner-header-link.ng-binding')).isPresent()).toBe(false);   //verify loggedin page
    });
	
	it('should get an error during new post',function(){
		browser.ignoreSynchronization = true;
		browser.sleep(3000);
		browser.waitForAngular();
		element.all(by.css('.follow.not-following.ng-scope')).get(0).click();  //upvote first post 
		browser.sleep(1000);
		element(by.css('.btn.new-post-btn.ng-binding')).click();               //click new post button
		browser.sleep(5000);
		element(by.model('ngDialogData.communityCntrlObj.title')).sendKeys(config.postTitle);   //enter post title
		element(by.css('.cke_editable.cke_editable_themed.cke_contents_ltr.cke_show_borders')).sendKeys(config.postDescription);  //enter description
		element.all(by.css('.tag.addable.clickable.ng-binding.ng-scope.unselected')).get(0).click();    //click tag
		element(by.css('.btn.btn-primary.post-save.ng-binding')).click();      //click post button
		browser.sleep(1000);
		browser.waitForAngular();
		expect(element(by.xpath('//div[contains(text(), "Recaptcha required")]')).isPresent()).toBe(true);   //verify error message
	});
	
});