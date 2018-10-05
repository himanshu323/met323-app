

import { Given, When, Then, TableDefinition, JsonFormatter} from 'cucumber';
import { HomePage } from '../pages/Homepage';
import { browser } from "protractor";
import { CourseDetails } from '../../app/courses/course-details/courseDetails.component';
import { CourseDetailsPage } from '../pages/CourseDetailsPage';
import {expect, assert} from "chai"
import * as data from "../data/dataTest.json"

import  {ExcelUtils} from "../../utilities/ExcelUtils"
import { Title } from '@angular/platform-browser/src/browser/title';
import { RootObject, CourseTitles } from '../../data/dataTest';
import { config } from './config';



var homepage = new HomePage();

var coursepage =new CourseDetailsPage();

Given(/^When user naviagte to application$/, async () => {
    await homepage.OpenBrowser("http://localhost:8808/");
    
});

When(/^Get all the headings$/,async ()=>{
  // await browser.get(config.baseUrl);
    await homepage.GetHeaderText();

});

When(/^Click on '([^\"]*)' course$/,async (heading)=>{

   await homepage.ClickHeaderArg(heading);

});


Then(/^Shoud see '([^\"]*)' under Course Details Page$/,async(expectedValue)=>{
    await coursepage.GetHeaderText();

   // await expect(coursepage.GetHeaderText).to.be.not.null;
});

Then(/^Read all the courses from table$/,(table:TableDefinition)=>{

    let expected= [[ 'Test1', '2' ], [ 'ABC', '4' ]];

    assert.deepEqual(expected,table.rows());

    console.log(table.rows());
});

When(/^Get the data from External JSON file$/,async ()=>{
    //data:searchData

    //let dataJSON:searchData =  data;

    
    var a:RootObject;
    var b;
    
    
    await console.log(a.SearchValue);
    //await homepage.GetDataFromExternalJSONFile(dataJSON);
   // await browser.sleep(2000);
});

When(/^Get the data from External Excel file$/,async ()=>{
    
    let sheet=<searchData>ExcelUtils.ReadDataFromExcel("../data/dataExcel.xls");
    await console.log(sheet.SearchValue);
    await homepage.GetDataFromExternalExcelFile(sheet.SearchValue);
    await browser.sleep(2000);
});

interface searchData{

    SearchValue:string,
    CourseTitles:{
        Title1:string,
        Title2:string
    }


 

}

/* class searchImp implements searchData{
    SearchValue:string,
    CourseTitles:{
        Title1:string,
        Title2:string
    } 
}*/


