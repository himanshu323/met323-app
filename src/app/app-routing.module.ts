import { NgModule } from "@angular/core";
import {Routes} from "@angular/router"
import { RouterModule } from "@angular/router";
import { TradeComponent } from "src/app/trades/trade.component";
import { TradeCreateComponent } from "src/app/trades/trade-create/trade-create.component";

const routes:Routes=[{
    path:"trades",component:TradeComponent,children:[
        {
            path: ":id", component: TradeCreateComponent
        },

        {
            path: "", component: TradeCreateComponent
        }

    ]
},

   

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}