# QuantraProtractorAutoTest

These are the full e2e automated tests that actually run inside a browser. This project is based on Javascript, nodejs and protractor with jasmine framework. 

## Getting Started
To run this test project, you need to install below tools & dependencies

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
### Assignment Test Case
Given Test cases are:

  ```
  1. Go to https://quantra-preprod.quantinsti.com/community 
  2. Sign in using the email & password mentioned below. 
  3. Check you've logged in successfully. 
  4. Upvote on the first post that you see on that page. 
  5. Click on the "New Post" button. 6. After the modal opens, fill the form using dummy data (except the recaptcha). 
  7. Click on the "Post" button. 
  8. Assert you get an error: "Recaptcha required"
  ```
