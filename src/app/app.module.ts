import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule, MatInputModule,MatFormFieldModule, MatCardModule, MatSelectModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule, MatTableModule, MatTableDataSource, MatSidenavModule, MatIconModule, MatListModule} from "@angular/material"

import { TradeCreateComponent } from 'src/app/trades/trade-create/trade-create.component';
import { FormsModule } from '@angular/forms';
import { TradeListComponent } from './trades/trade-list/trade-list.component';


import {FlexLayoutModule} from "@angular/flex-layout"
import { TradeSearchComponent } from 'src/app/trades/trade-search/trade-search.component';
import { TradeComponent } from 'src/app/trades/trade.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,TradeCreateComponent, TradeListComponent, 
    TradeSearchComponent,TradeComponent, SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    

    AppRoutingModule
    
    





  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
