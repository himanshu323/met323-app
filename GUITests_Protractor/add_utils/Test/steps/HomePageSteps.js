"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const cucumber_1 = require('cucumber');
const Homepage_1 = require('../pages/Homepage');
const protractor_1 = require("protractor");
const CourseDetailsPage_1 = require('../pages/CourseDetailsPage');
const chai_1 = require("chai");
const ExcelUtils_1 = require("../../utilities/ExcelUtils");
var homepage = new Homepage_1.HomePage();
var coursepage = new CourseDetailsPage_1.CourseDetailsPage();
cucumber_1.Given(/^When user naviagte to application$/, () => __awaiter(this, void 0, void 0, function* () {
    yield homepage.OpenBrowser("http://localhost:8808/");
}));
cucumber_1.When(/^Get all the headings$/, () => __awaiter(this, void 0, void 0, function* () {
    // await browser.get(config.baseUrl);
    yield homepage.GetHeaderText();
}));
cucumber_1.When(/^Click on '([^\"]*)' course$/, (heading) => __awaiter(this, void 0, void 0, function* () {
    yield homepage.ClickHeaderArg(heading);
}));
cucumber_1.Then(/^Shoud see '([^\"]*)' under Course Details Page$/, (expectedValue) => __awaiter(this, void 0, void 0, function* () {
    yield coursepage.GetHeaderText();
    // await expect(coursepage.GetHeaderText).to.be.not.null;
}));
cucumber_1.Then(/^Read all the courses from table$/, (table) => {
    let expected = [['Test1', '2'], ['ABC', '4']];
    chai_1.assert.deepEqual(expected, table.rows());
    console.log(table.rows());
});
cucumber_1.When(/^Get the data from External JSON file$/, () => __awaiter(this, void 0, void 0, function* () {
    //data:searchData
    //let dataJSON:searchData =  data;
    var a;
    var b;
    yield console.log(a.SearchValue);
    //await homepage.GetDataFromExternalJSONFile(dataJSON);
    // await browser.sleep(2000);
}));
cucumber_1.When(/^Get the data from External Excel file$/, () => __awaiter(this, void 0, void 0, function* () {
    let sheet = ExcelUtils_1.ExcelUtils.ReadDataFromExcel("../data/dataExcel.xls");
    yield console.log(sheet.SearchValue);
    yield homepage.GetDataFromExternalExcelFile(sheet.SearchValue);
    yield protractor_1.browser.sleep(2000);
}));
/* class searchImp implements searchData{
    SearchValue:string,
    CourseTitles:{
        Title1:string,
        Title2:string
    }
}*/
//# sourceMappingURL=HomePageSteps.js.map