import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trade-search',
  templateUrl: './trade-search.component.html',
  styleUrls: ['./trade-search.component.css']
})
export class TradeSearchComponent implements OnInit {

  commodities = [
    { value: 'al', viewValue: 'Aluminium' },
    { value: 'iron', viewValue: 'Iron' },
    { value: 'copper', viewValue: 'Copper' }
  ];

  sides = [
    { value: 'buy', viewValue: 'Buy' },
    { value: 'sell', viewValue: 'Sell' }
  ];


  counterParties = [
    { value: 'Loreum', viewValue: 'Loreum' },
    { value: 'Ipsum', viewValue: 'Ipsum' }
  ];

  locations = [
    { value: 'BA', viewValue: 'BA' },
    { value: 'India', viewValue: 'India' }
  ];
  constructor() { }

  ngOnInit() {
  }


  onSearch(form:NgForm){
    console.log(form);
  }
}
