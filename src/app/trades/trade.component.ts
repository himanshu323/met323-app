import { NgModule, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { SocketService } from "../socket.service";
import { TradeService } from "../trade.service";
import { Router } from "@angular/router";

@Component({
    selector:'app-trade',
    templateUrl: './trade.component.html',
    styleUrls:['./trade.component.css']
})
export class TradeComponent implements OnInit{

    
        
    
constructor(private socketService:SocketService){
}
ngOnInit(): void {


    this.socketService.initializeSocket();
    
}

    
}