import { element, by, browser } from 'protractor';
import { IdentificationType, BasePage } from '../../utilities/BasePage';
import { async } from 'q';
import { importExpr } from '@angular/compiler/src/output/output_ast';

import { winston as logger } from "../../utilities/log"



const Locators = {


    customerLoginButton: {
        type: IdentificationType[IdentificationType.ButtonText],
        value: "Customer Login"
    }
    ,
    bankManagerLoginButton: {
        type: IdentificationType[IdentificationType.NgClick],
        value: "manager()"


    }

};


export class HomePage extends BasePage {


    customerLoginButton = this.ElementLocator(Locators.customerLoginButton);

    bankManagerLogin = this.ElementLocator(Locators.bankManagerLoginButton);



    async loginAsCustomer() {

        await this.customerLoginButton.click();

        await logger.log("info", "Logged Into Customer Dashboard Successfully");


    }

    async loginAsBankManager() {


        await this.bankManagerLogin.click();

        await logger.log("info", "Logged Into Bank Manager  Dashboard Successfully");
    }


}