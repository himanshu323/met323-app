import { Injectable } from "@angular/core";
import { Trade } from "./trade.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";


@Injectable({providedIn:'root'})
export class TradeService{

    trades:Trade[];

    tradesUpdate=new Subject<{trades:Trade[]}>()



    constructor(private http:HttpClient){

    }

    addTrade(trade:Trade){


        this.http.post("http://localhost:3000/api/trades",trade).subscribe(response=>{

        console.log(response);
        })

        
    }

    getTradeListener(){

        return this.tradesUpdate.asObservable();
    }



    getAllTrades(){

        //let queryParam=`?pageSize=${tradesPerPage}&currentPage=${currentPage}`

        this.http.get<{message:string,trades:Trade[]}>("http://localhost:3000/api/trades").subscribe(response=>{

        console.log(response)

        this.trades=response.trades;

        this.tradesUpdate.next({trades:this.trades});


        })


    }

}