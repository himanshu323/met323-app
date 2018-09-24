import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  { tradeDate: "22/03/17", commodity: 'AL',side:'Buy',qty:'2345',price:'1234' ,counterparty: "ABC", location: 'London' },
  { tradeDate: "22/03/17", commodity: 'AL',side:'Buy',qty:'2345',price:'1234' ,counterparty: "ABC", location: 'Test' },
  { tradeDate: "22/03/17", commodity: 'AL',side:'Buy',qty:'2345',price:'1234' ,counterparty: "ABC", location: 'ABC' }
  
];

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {

  displayedColumns: string[] = ['tradeDate', 'commodity', 'side', 'qty','price','counterparty','location'];

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
