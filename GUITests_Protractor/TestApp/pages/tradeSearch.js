"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BasePage_1 = require("../../utilities/BasePage");
const log_1 = require("../../utilities/log");
const Locators = {
    fromDate: {
        value: "fromDate"
    },
    toDate: {
        value: "toDate"
    },
    buy: {
        value: "buy"
    },
    sell: {
        value: "sell"
    },
    counterparty: {
        value: "counterparty"
    },
    commodity: {
        value: "commodity"
    },
    location: {
        value: "location"
    },
    search: {
        value: "//span[text()='Search']"
    },
    clear: {
        value: "//span[text()='Clear']"
    },
    tradeSearchForm: {
        value: "//form[text()='searchForm']"
    },
    tradeChangeForm: {
        value: "//span[text()='changeForm']"
    }
};
class TradeSearch extends BasePage_1.BasePage {
    // fromDate=element(by.xpath(Locators.tradeSearchForm['value'])).element(by.name(Locators.fromDate['value']))
    // toDate=element(by.xpath(Locators.tradeSearchForm['value'])).element(by.name(Locators.toDate['value']))
    // buy =element(by.xpath(Locators.tradeSearchForm['value'])).element(by.name(Locators.buy['value']));
    // sell=element(by.xpath(Locators.tradeSearchForm['value'])).element(by.name(Locators.sell['value']));
    // commoditySelect=element(by.xpath(Locators.tradeSearchForm['value'])).element(by.name(Locators.commodity['value']));
    // counterpartySelect=element(by.xpath(Locators.tradeSearchForm['value'])).element(by.name(Locators.counterparty['value']));
    // locationSelect=element(by.xpath(Locators.tradeSearchForm['value'])).element(by.name(Locators.location['value']))
    // tradeSearchForm=element(by.xpath(Locators.tradeSearchForm['value']))
    // tradeChangeForm=element(by.xpath(Locators.tradeChangeForm['value']))
    // searchButton=element(by.xpath(Locators.tradeSearchForm['value'])).element(by.xpath(Locators.search['value']));
    // clearButton=element(by.xpath(Locators.tradeSearchForm['value'])).element(by.xpath(Locators.clear['value']))
    enterTradeSearchDetails(tradeFromDate, tradeToDate, commoditySelect, side, counterparty, location) {
        return __awaiter(this, void 0, void 0, function* () {
            // await element(by.xpath(Locators.tradeSearchForm['value'])).this.fromDate.sendKeys(tradeFromDate);
            // await this.tradeSearchForm.this.toDate.sendKeys(tradeToDate);
            yield protractor_1.browser.sleep(7000);
            yield console.log("insidse");
            let c = yield protractor_1.element(protractor_1.by.xpath("//form[@id='searchForm']//mat-select[@name='commodity']")).getAttribute("class");
            yield console.log(c);
            yield protractor_1.element(protractor_1.by.xpath(`//span[@class='mat-option-text'][contains(text(),'${commoditySelect}')]`)).click();
            // if(this.tradeSearchForm.side.toLowerCase()==="buy"){
            //     await this.buy.click();
            // }
            // else if(this.tradeSearchForm.side.toLowerCase()==="sell"){
            //     await this.sell.click();
            // }
            // await this.tradeSearchForm.this.counterpartySelect.click();
            // await this.tradeSearchForm.element(by.xpath(`//span[@class='mat-option-text'][contains(text(),'${this.counterpartySelect}')]`)).click();
            // await this.tradeSearchForm.this.locationSelect.click();
            // await this.tradeSearchForm,element(by.xpath(`//span[@class='mat-option-text'][contains(text(),'${location}')]`)).click();
            // await this.tradeSearchForm.this.search.click();
            yield log_1.winston.log("info", "Logged Into Trade dashboard Successfully");
        });
    }
}
exports.TradeSearch = TradeSearch;
//# sourceMappingURL=tradeSearch.js.map