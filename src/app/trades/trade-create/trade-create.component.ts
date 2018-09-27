import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Trade } from '../../trade.model';
import { TradeService } from '../../trade.service';

@Component({
  selector: 'app-trade-create',
  templateUrl: './trade-create.component.html',
  styleUrls: ['./trade-create.component.css']
})
export class TradeCreateComponent implements OnInit {
  ngOnInit(){
    
  }

  commodities = [
    { value: 'al', viewValue: 'Aluminium' },
    { value: 'iron', viewValue: 'Iron' },
    { value: 'copper', viewValue: 'Copper' }
  ];

  sides = [
    { value: 'buy', viewValue: 'Buy' },
    { value: 'sell', viewValue: 'Sell' }
  ];

  constructor(private tradeService:TradeService) { }


  onTrade(form:NgForm){

    if(form.invalid){
      return
    }

    let trade:Trade={

      quantity:form.value.quantity,

      tradeDate:form.value.tradeDate,
  
      
  
      commodity:form.value.commodity,
  
      price:form.value.price,
  
      counterparty:form.value.counterparty,
  
      location:form.value.location,
  
      side:form.value.side
  
    }

    console.log(form);


    console.log(trade);

    this.tradeService.addTrade(trade);
  }

}
