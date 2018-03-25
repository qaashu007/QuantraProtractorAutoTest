//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// An example configuration file.
exports.config = {

seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [
  './spec-login-new-post.js'
  ],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 900000
  },
		
  onPrepare: function() {
    browser.driver.manage().window().maximize();
    //jasmine.getEnv().addReporter(
    //new Jasmine2HtmlReporter({
    //      savePath: '../target/'
    //})
 // );
},
};
