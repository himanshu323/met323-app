import *  as excel from "ts-xlsx"
import {IWorkSheet} from "xlsx"
import { expect } from 'chai';
export class ExcelUtils{



   static ReadDataFromExcel(filePath:string):IWorkSheet{


       let file= excel.readFile(filePath);
       let worksheet=file.Sheets["Sheet1"]
       
        return excel.utils.sheet_to_json(worksheet)[0];

    }
}