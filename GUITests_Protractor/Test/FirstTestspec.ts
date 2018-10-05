import { browser, element, by, $$ } from "protractor";
import { HomePage } from './pages/Homepage';
import { async } from "q";


var homepage=new HomePage();



describe("Test Write",()=>{

/* it("test should pass",()=>{

    homepage.OpenBrowser("http://localhost:8808");

    homepage.GetHeaderText();

    homepage.ClickHeader();


let a=12;
expect(a).toBe(12);
}); */

it("test should pass",async()=> {

   await homepage.OpenBrowser("http://localhost:8808");

   await homepage.GetHeaderText();

   await  homepage.ClickHeader();


let a=12;
expect(a).toBe(12);
});




  //browser.sleep(10000);
   // expect(a).toBe(14);
    });

    
    