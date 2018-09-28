import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Trade } from '../../trade.model';
import { TradeService } from '../../trade.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trade-create',
  templateUrl: './trade-create.component.html',
  styleUrls: ['./trade-create.component.css']
})
export class TradeCreateComponent implements OnInit {

  mode="create";
  tradeId;

  trade:Trade={

    quantity: 0,

    tradeDate: null,


    commodity: null,

    price: 0,

    counterparty: null,

    location: null,

    side: null,

    id: null


  };
  ngOnInit(){


    this.route.paramMap.subscribe(params=>{

      console.log(params.has("id"))
        if(params.has("id")){

          console.log("test1Inside");
          this.mode="edit";

         this.tradeId= params.get("id")

          console.log(this.tradeId);

            this.tradeService.getTrade(this.tradeId).subscribe(trade=>{

              console.log("test1");
              console.log(trade);
              this.trade={


                quantity: trade.quantity,

                tradeDate: trade.tradeDate,


                commodity: trade.commodity,

                price: trade.price,

                counterparty: trade.counterparty,

                location: trade.location,

                side: trade.side,

                id: trade._id


              };
            })
        }

        // else{

        //   this.mode="create";
        //   this.trade=null;
        // }

    })
    
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

  counterparties = [
    { value: 'Loreum', viewValue: 'Loreum' },
    { value: 'Ipsum', viewValue: 'Ipsum' }
  ];

  locations = [
    { value: 'BA', viewValue: 'BA' },
    { value: 'India', viewValue: 'India' }
  ];

  constructor(private tradeService:TradeService,private route:ActivatedRoute) { }


  onTrade(form:NgForm){

    if(form.invalid){
      return
    }

    if (this.mode == "create"){

    let trade:Trade={

     
      quantity:form.value.quantity,

      tradeDate:form.value.tradeDate,
  
      id:null,
  
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

  else if(this.mode=="edit"){

    let trade={
      quantity: form.value.quantity,

      tradeDate: form.value.tradeDate,

      id: this.tradeId,

      commodity: form.value.commodity,

      price: form.value.price,

      counterparty: form.value.counterparty,

      location: form.value.location,

      side: form.value.side


    }

    this.tradeService.updateTrade(this.tradeId,trade);


  }
  }
}
