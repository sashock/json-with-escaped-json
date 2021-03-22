import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PrettyJsonModule} from 'angular2-prettyjson';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormatterComponent } from './formatter/formatter.component';

@NgModule({
  imports:      [ BrowserModule, PrettyJsonModule ,FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, FormatterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
