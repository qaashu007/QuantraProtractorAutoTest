# QuantraProtractorAutoTest

These are the full e2e automated tests that actually run inside a browser. This project is based on Javascript, nodejs and protractor with jasmine framework. 

## Getting Started
To run this test project, you need to install below tools & dependencies

```
Nodejs version: 8.10.0
npm version: 5.10.0
```

### Prerequisites
You need to install some important softwares and dependencies to run test successfully. For details, Read below setup

### setup

To setup node.js
   1. Download nodejs https://nodejs.org/en/download/ and install the same in your system
   2. check version by command:
      ```
      node --version
      ```
   
To install protractor:    

   ```
   npm install -g protractor
   
   webdriver-manager update  
   ```

To start test server: 

   ```
   webdriver-manager start
   ```

### run

To run a automated test:
   1. Go to Project folder where conf.js file is present
   2. Open command prompt here and type the below command
   
   ```
   protractor conf.js
   ```

Note: Before run, Please create config.json same as config.sample.js file.
