import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  DataTableModule,
  SharedModule,
  DropdownModule,
  TooltipModule,
  CalendarModule,
  PickListModule,
  GrowlModule,
  DialogModule,
  MultiSelectModule,
  PanelModule,
  GMapModule
} from "primeng/primeng";

import { AppComponent } from './app.component';
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    DropdownModule,
    TooltipModule,
    CalendarModule,
    PickListModule,
    GrowlModule,
    DialogModule,
    MultiSelectModule,
    PanelModule,
    GMapModule,
    CheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
