import { Component } from "@angular/core/src/metadata/directives";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatDatepickerModule, MatButtonModule, MatNativeDateModule, MatRadioModule, MatCheckboxModule, MatTableModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatSortModule, MatPaginatorModule } from "@angular/material";




@NgModule({
imports:[
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
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatPaginatorModule],
exports:[
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
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatPaginatorModule
]
})
export class AppMaterialModule{


}