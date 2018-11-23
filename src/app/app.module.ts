import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; 

import { AppComponent } from './app.component';
import { ShoppingGridComponent } from './shopping-grid/shopping-grid.component';

import { AgGridModule } from "ag-grid-angular";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
