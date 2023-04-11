import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';


const MODULES = [
	BrowserModule,
	HttpClientModule,
	AppRoutingModule,
	CoreModule.forRoot(),
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
