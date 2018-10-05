import { element, by, browser } from 'protractor';
import { IdentificationType, BasePage } from '../../utilities/BasePage';
import { async } from 'q';
 


const Locators = {


    heading: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//h1[text()=' All courses ']//ancestor::div//h2[text()=' Selenium Framework development ']"
    }
    ,
    headings: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//h1[text()=' All courses ']//ancestor::div//h2"
    }
,
    searchCourse: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//input[@placeholder='Search Courses']"
    }
};


export class HomePage extends BasePage {





    /* heading =element(by.xpath("//h1[text()=' All courses ']//ancestor::div//h2[text()=' Selenium Framework development ']"));
    
    headings =element.all(by.xpath("//h1[text()=' All courses ']//ancestor::div//h2"));
     */

    heading = this.ElementLocator(Locators.heading);

    headings = this.ElementsLocator(Locators.headings);

    searchCourse=this.ElementLocator(Locators.searchCourse);

    async OpenBrowser(url: string){

        await browser.get(url);

    }

    async GetHeaderText() {


        await this.headings.getText().then((items) => {

            console.log(items);

        });

        await console.log("bye")
    }

    async ClickHeader() {


        await this.heading.click();
    }


    async ClickHeaderArg(header) {

        console.log("Reading the arg value from scenario" + header);
        await this.heading.click();
    }

    async GetDataFromExternalJSONFile(data){

        await this.searchCourse.sendKeys(data.SearchValue);
    }

    async GetDataFromExternalExcelFile(data){

        await this.searchCourse.sendKeys(data);
    }

}

import { IdentificationType, BasePage } from "../utilities/BasePage";
import { CommonLocators } from "./commonLocators";
import { ElementFinder } from "protractor";
import { ReporterLocators } from "./reporterPageLocators";

export class LoginLocators extends BasePage {
         loginPageTextElement= { type: IdentificationType.ClassName, value: "login-container" };

         userNameInputElement= { type: IdentificationType.CSS, value: "#catUsernameInputField" }

         passwordInputElement= { type: IdentificationType.CSS, value: "#catPasswordInputField" };
         btnLoginElement= { type: IdentificationType.CSS, value: "#catLoginButton" };
         errorMsgElement= { type: IdentificationType.ClassName, value: "input-field-error" };
         formLoginErrElement= { type: IdentificationType.ClassName, value: "form-login-error" };
         consolidatedMsgElement= { type: IdentificationType.CSS, value: "#bannerText" };
         arrowIconToLogoutElement= { type: IdentificationType.CSSContainingText, value: ".material-iconsexpand_more" };
         logoutBtnElement= { type: IdentificationType.ButtonText, value: "Logout" };
         logoElementElement= { type: IdentificationType.ID, value: "catLogo" };
         catLoginHeaderElement= { type: IdentificationType.CSS, value: "#catLoginHeader" };
         otpInputElement= { type: IdentificationType.CSS, value: "#catOtpInputField" };
         otpLoginElement= { type: IdentificationType.CSS, value: "#catOtpButton" };
         catStageHeaderElement= { type: IdentificationType.CSS,value: "#catStageHeader" };
       }=