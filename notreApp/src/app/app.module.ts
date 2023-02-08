import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { KhouloudComponent } from './khouloud/khouloud.component';
import { FirstCommponentComponent } from './components/first-commponent/first-commponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    KhouloudComponent,
    FirstCommponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
