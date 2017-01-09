import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { JournalFormComponent } from './components/journal-form/journal-form.component';
import { JournalIndexComponent } from './components/journal-index/journal-index.component';

import { RoutingModule } from './routing.module';
import { CuppingIndexComponent } from './components/cupping-index/cupping-index.component';
import { TopComponent } from './components/top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalFormComponent,
    JournalIndexComponent,
    CuppingIndexComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
