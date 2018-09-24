import { NgModule } from "@angular/core";
import {Routes} from "@angular/router"
import { RouterModule } from "@angular/router/src/router_module";

const routes:Routes=[{
    path:"trade"
}]
@NgModule({
    imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule{

}