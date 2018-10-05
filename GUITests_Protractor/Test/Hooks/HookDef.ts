import { Before, BeforeAll, AfterAll, After,Status, setDefaultTimeout } from "cucumber";
import { browser } from "protractor";
import { config } from '../steps/config';


BeforeAll(async() => {
   await  console.log("Before everyfeature");
});

AfterAll(async() => {

    await console.log(" After every feature")
});

Before(async ()=>{
  
   await browser.get(config.baseUrl);

});

After( function (testcase) {

 
    var world = this;
  if (testcase.result.status === Status.FAILED) {
    return browser.takeScreenshot().then(function(screenShot) {
      // screenShot is a base-64 encoded PNG
     
     world.attach(screenShot, 'image/png');
    });
  }

  
});
