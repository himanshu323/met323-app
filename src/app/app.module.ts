import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule, MatInputModule,MatFormFieldModule, MatCardModule, MatSelectModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule} from "@angular/material"
import { HeaderComponent } from 'src/app/header/header.component';
import { TradeCreateComponent } from 'src/app/trades/trade-create/trade-create.component';
import { FormsModule } from '@angular/forms';
import { TradeListComponent } from './trades/trade-list/trade-list.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,TradeCreateComponent, TradeListComponent
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
    MatRadioModule
    
    





  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
