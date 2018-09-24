import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

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

  constructor() { }


  onTrade(form:NgForm){


    console.log(form);
  }

}
