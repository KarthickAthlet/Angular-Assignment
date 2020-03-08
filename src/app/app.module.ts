import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CardListModule } from './card-list/card-list.module';
import { FilterModule } from './filter/filter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FilterModule,
    CardListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
