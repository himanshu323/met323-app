import { NgModule } from "@angular/core";
import {Routes} from "@angular/router"
import { RouterModule } from "@angular/router";
import { TradeComponent } from "src/app/trades/trade.component";

const routes:Routes=[{
    path:"trade",component:TradeComponent
}]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}