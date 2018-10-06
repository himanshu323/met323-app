import { BasePage } from "../../utilities/BasePage";
 import { HomePage } from "../pages/HomePage";
import * as dataFile from "../../data/tradeData.json"
import { TradeSearch } from "../pages/tradeSearch";

var basePage = new BasePage();
var homePage = new HomePage();
let tradeSearch=new TradeSearch();
let data: any = dataFile;

describe("Trade Search Test",async()=>{


    it("login to trade search",async()=>{

       

        
        await basePage.navigateToURL(data);

        await homePage.loginToTrade(data.testData.login.email,data.testData.login.password);
    })


    it("search the trade",async()=>{

        

        
        // await tradeSearch.enterTradeSearchDetails(
        //     data.testData.tradeSearch.tradeFromDate,
        //     data.testData.tradeSearch.tradeToDate,
        //     data.testData.tradeSearch.commodity,
        //     data.testData.tradeSearch.side,
        //     data.testData.tradeSearch.counterparty,
        //     data.testData.tradeSearch.location
          
        // )

        
    })
})