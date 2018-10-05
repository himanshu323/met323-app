"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const protractor_1 = require('protractor');
const BasePage_1 = require('../../utilities/BasePage');
const Locators = {
    heading: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//h1[text()=' All courses ']//ancestor::div//h2[text()=' Selenium Framework development ']"
    },
    headings: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//h1[text()=' All courses ']//ancestor::div//h2"
    },
    searchCourse: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//input[@placeholder='Search Courses']"
    }
};
class HomePage extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        /* heading =element(by.xpath("//h1[text()=' All courses ']//ancestor::div//h2[text()=' Selenium Framework development ']"));
        
        headings =element.all(by.xpath("//h1[text()=' All courses ']//ancestor::div//h2"));
         */
        this.heading = this.ElementLocator(Locators.heading);
        this.headings = this.ElementsLocator(Locators.headings);
        this.searchCourse = this.ElementLocator(Locators.searchCourse);
    }
    OpenBrowser(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get(url);
        });
    }
    GetHeaderText() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.headings.getText().then((items) => {
                console.log(items);
            });
            yield console.log("bye");
        });
    }
    ClickHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.heading.click();
        });
    }
    ClickHeaderArg(header) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Reading the arg value from scenario" + header);
            yield this.heading.click();
        });
    }
    GetDataFromExternalJSONFile(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchCourse.sendKeys(data.SearchValue);
        });
    }
    GetDataFromExternalExcelFile(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchCourse.sendKeys(data);
        });
    }
}
exports.HomePage = HomePage;
class LoginLocators extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.loginPageTextElement = { type: BasePage_1.IdentificationType.ClassName, value: "login-container" };
        this.userNameInputElement = { type: BasePage_1.IdentificationType.CSS, value: "#catUsernameInputField" };
        this.passwordInputElement = { type: BasePage_1.IdentificationType.CSS, value: "#catPasswordInputField" };
        this.btnLoginElement = { type: BasePage_1.IdentificationType.CSS, value: "#catLoginButton" };
        this.errorMsgElement = { type: BasePage_1.IdentificationType.ClassName, value: "input-field-error" };
        this.formLoginErrElement = { type: BasePage_1.IdentificationType.ClassName, value: "form-login-error" };
        this.consolidatedMsgElement = { type: BasePage_1.IdentificationType.CSS, value: "#bannerText" };
        this.arrowIconToLogoutElement = { type: BasePage_1.IdentificationType.CSSContainingText, value: ".material-iconsexpand_more" };
        this.logoutBtnElement = { type: BasePage_1.IdentificationType.ButtonText, value: "Logout" };
        this.logoElementElement = { type: BasePage_1.IdentificationType.ID, value: "catLogo" };
        this.catLoginHeaderElement = { type: BasePage_1.IdentificationType.CSS, value: "#catLoginHeader" };
        this.otpInputElement = { type: BasePage_1.IdentificationType.CSS, value: "#catOtpInputField" };
        this.otpLoginElement = { type: BasePage_1.IdentificationType.CSS, value: "#catOtpButton" };
        this.catStageHeaderElement = { type: BasePage_1.IdentificationType.CSS, value: "#catStageHeader" };
    }
}
exports.LoginLocators = LoginLocators;
//# sourceMappingURL=Homepage.js.map