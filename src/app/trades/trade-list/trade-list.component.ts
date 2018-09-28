import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';
import { TradeService } from '../../trade.service';
import { Trade } from '../../trade.model';
import { TradeSearch } from '../../trade-search.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {

  trades:Trade[];

  commodityFilter;

  locationFilter;

  displayedColumns: string[] = ['tradeDate', 'commodity', 'side', 'qty','price','counterparty','location','actions'];

  dataSource;

  pageSizeOptions=[1,5, 10, 20];
  
  @ViewChild(MatSort) sort:MatSort;

  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private traderService:TradeService,private router:Router) { 




  }

  ngOnInit() {

    

    this.traderService.getAllTrades();

    this.traderService.getTradeListener().subscribe(data=>{

      console.log("Trade")
      console.log(data.trades);
      this.trades=data.trades;
      this.dataSource=new MatTableDataSource(this.trades);
      this.dataSource.filterPredicate=(data:Trade,filterValue:TradeSearch)=>{


        return this.traderService.filterSearchCriteria(data,filterValue);
    
    }

      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;

      this.traderService.getSearchTradeListener().subscribe(tradeSearch=>{
        console.log("Helloooooooooo")
          this.dataSource.filter=tradeSearch;

      })
    })


  
  }

  onDelete(tradeId){


    this.traderService.deleteTrade(tradeId).subscribe(resp=>{

      console.log(resp);

      this.router.navigate(["/trades"]);

      
      this.traderService.getAllTrades();

    })
  }



}
