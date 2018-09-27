import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';
import { TradeService } from '../../trade.service';
import { Trade } from '../../trade.model';

const ELEMENT_DATA = [
  { tradeDate: "22/03/17", commodity: 'AL',side:'Buy',qty:'23',price:'1234' ,counterparty: "ABC", location: 'London' },
  { tradeDate: "22/03/17", commodity: 'GG',side:'Sell',qty:'53',price:'5234' ,counterparty: "ABC", location: 'Test' },
  { tradeDate: "22/03/17", commodity: 'BB',side:'ABC',qty:'12',price:'4234' ,counterparty: "ABC", location: 'ABC' }
  
];

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {

  trades:Trade[];

  commodityFilter;

  locationFilter;

  displayedColumns: string[] = ['tradeDate', 'commodity', 'side', 'qty','price','counterparty','location'];

  dataSource ;

  pageSizeOptions=[1,5, 10, 20];
  @ViewChild(MatSort) sort:MatSort;

  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private traderService:TradeService) { 


  }

  ngOnInit() {

    

    this.traderService.getAllTrades();

    this.traderService.getTradeListener().subscribe(data=>{

      this.trades=data.trades;
      this.dataSource=new MatTableDataSource(this.trades);

      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    })


    // combineLatest(this.commodityFilter, this.locationFilter)
    //   .map(([name, color]) => ({ name, color }))
    //   .subscribe(filter => {
    //     if (!this.dataSource) { return; }
    //     this.dataSource.filter = filter;
    //   });
  }

  onFilter(filterValue:string){

    this.commodityFilter=filterValue;
    this.dataSource.filter = filterValue;

  }



}
