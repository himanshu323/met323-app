import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TradeCreateComponent } from 'src/app/trades/trade-create/trade-create.component';
import { FormsModule } from '@angular/forms';
import { TradeListComponent } from './trades/trade-list/trade-list.component';


import {FlexLayoutModule} from "@angular/flex-layout"
import { TradeSearchComponent } from 'src/app/trades/trade-search/trade-search.component';
import { TradeComponent } from 'src/app/trades/trade.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,TradeCreateComponent, TradeListComponent, 
    TradeSearchComponent,TradeComponent, SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
   AppRoutingModule,
   HttpClientModule
    
    





  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
