import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralComponent } from './component/structural/structural.component';
import {FormsModule} from '@angular/forms';
import { AtributeComponent } from './component/atribute/atribute.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralComponent,
    AtributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
