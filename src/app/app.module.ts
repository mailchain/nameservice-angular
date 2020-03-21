import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameserviceAngularModule } from 'projects/nameservice-angular/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NameserviceAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
