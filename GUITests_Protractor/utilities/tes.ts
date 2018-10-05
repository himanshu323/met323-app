/**
 * @author himanshuarora
 */

import { ElementFinder, browser, element, by, ExpectedConditions } from "protractor";
import { logger } from './loggerUtils';
import { IdentificationType } from './basePage';
import { ExplicitWait } from "./explicitWait";
import { protractor } from "protractor/built/ptor";
import { Assert } from "./assert";
import { SoftAssert } from "./SoftAssert";
var fs = require("fs");


export class Actions {

    static async enterTextOnElement(locator: ElementFinder, value: string, elementLabel: string) {
        await logger.info(`Entering ${value} on ${elementLabel}`);
        await locator.clear();
        await locator.sendKeys(value);
    }

    /* 
    Move to element then Clicks on the target element
    */
    static async MoveNClickOnElement(locator: ElementFinder, elementLabel: string) {
        await logger.info(`Moving & Clicking on ${elementLabel}`);
        await browser.actions().mouseMove(locator).click().perform()
    }

    /* 
     * Clicks  on the target hover element
     * */
    static async clickOnHoverElement(locator: ElementFinder, elementLabel: string) {
        await logger.info(`Clicking on ${elementLabel}`);
        try {
            await locator.click();
        } catch (error) {
            await locator.click();
        }

    }


    /* 
    Clicks  on the target element
    */
    static async clickOnElement(locator: ElementFinder, elementLabel: string) {
        await logger.info(`Clicking on ${elementLabel}`);
        await locator.click();
    }


    /* 
     * Get text from 'value' Attribute 
     * */
    static async getValueFromAttribute(locator: ElementFinder, attr: string, elementLabel: string) {
        await console.log(`Verifying the  subtext on element ${elementLabel}`);
        return await locator.getAttribute(attr);
    }

    /* 
    * Clicks  on the target element via javascript
    **/
    static async clickViaJavascript(locatorObject, index: number = 0, elementLabel: string) {
        await logger.info(`Clicking on ${elementLabel}`);
        let executeClick;

        if (locatorObject.type == IdentificationType.ClassName) {
            await logger.info(`Clicking via class`);
            executeClick = `document.getElementsByClassName('${locatorObject.value}')[${index}].click()`;
        } else if (locatorObject.type == IdentificationType.ID) {
            await logger.info(`Clicking via ID`);
            executeClick = `document.getElementByID(${locatorObject.value}).click()`;
        } else if (locatorObject.type == IdentificationType.TagName) {
            await logger.info(`Clicking via tagname`);
            executeClick = `document.getElementsByTagName(${locatorObject.value})[${index}].click()`;
        }
        await logger.info(`Clicking via tagname ${executeClick}`);
        return await browser.executeScript(executeClick);
    }

    /* 
     *  * Get text from element 
     *   * */
    static async getTextFromElement(locator: ElementFinder, elementLabel: string) {
        await console.log(` the  text on element ${elementLabel}`);
        return await locator.getText().then(txt => txt);
    }

    static async multiSelect(placeHolderValue, ...values) {


        let selectLabel = await element(by.xpath(`//mat-select[@placeholder='${placeHolderValue}']`));

        await browser.executeScript('arguments[0].click()', selectLabel);

        for (let i = 0; i < values.length; i++) {

            let selectElement = await element(by.xpath(`//mat-option//span[@class='mat-option-text'][text()='${values[i].toUpperCase()}']//preceding-sibling::mat-pseudo-checkbox`));

            await browser.executeScript('arguments[0].click()', selectElement);


        }
        await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();

        let plusIcon = await element(by.xpath(`//mat-select[@placeholder='${placeHolderValue}']//ancestor::mat-form-field//following-sibling::button`));

        await plusIcon.click();

        let sidePadLocator = `//mat-select[@placeholder='${placeHolderValue}']//ancestor::div[contains(@class,'noSidePad')][1]//following-sibling::div[contains(@class,'noSidePad')][1]//span[contains(@class,'onlySidePad')]`


        await element.all(by.xpath(sidePadLocator)).each(async sidePad => {

            let elementValue = await sidePad.getText();

            await logger.info(`${elementValue} is selected`);

        })
    }

    static async singleSelect(placeHolderValue,value) {


        let selectLabel = await element(by.xpath(`//mat-select[@placeholder='${placeHolderValue}']`));

        await browser.executeScript('arguments[0].click()', selectLabel);

        

            let selectElement = await element(by.xpath(`//mat-option//span[@class='mat-option-text'][text()='${value.toUpperCase()}']`));

            await browser.executeScript('arguments[0].click()', selectElement);


        
    
    }

    static async getSingleSelectValues(placeHolderValue,...values) {


        let selectLabel = await element(by.xpath(`//mat-select[@placeholder='${placeHolderValue}']`));

        await browser.executeScript('arguments[0].click()', selectLabel);


        for (let i = 0; i < values.length; i++) {

            
            let selectElement=await element(by.xpath(`//mat-option//span[@class='mat-option-text'][text()='${values[i].toUpperCase()}']`));



        }

        await element(by.xpath(`//mat-option//span[@class='mat-option-text'][text()='${values[0].toUpperCase()}']`)).click();


//let selectElement = await element(by.xpath(`//mat-option//span[@class='mat-option-text'][text()='${value.toUpperCase()}']`));

       




    }


}

