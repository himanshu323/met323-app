import { By } from "selenium-webdriver";
import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class SelectWrapper {

    WebElement: ElementFinder;

    selector:By;

    constructor() {


        /* his.selector = selector;
     console.log("Added webelement" + selector); */
    }

   async getAllOptions() {

         return await this.WebElement.all(by.tagName("option"));
    }

    async selectByValue(value: string) {

        await this.WebElement.all(by.css("option[value='" + value + "']")).click();

    }

   async  selectByText(element:ElementFinder,text: string){
        await this.WebElement.all(by.xpath("//option[.='" + text + "']")).click();
    }

    async selectByIndex(element:ElementFinder,index: number){

        
        await element.all(by.tagName("option")).get(index).click();
    }


    async selectByPartialText(element:ElementFinder,partialText: string){

        await  element.all(by.cssContainingText("option", partialText)).click();
    }



}