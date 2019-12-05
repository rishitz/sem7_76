import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StAddComponent } from './st-add/st-add.component';
import { StGetComponent } from './st-get/st-get.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StService} from './st.service'

@NgModule({
  declarations: [
    AppComponent,
    StAddComponent,
    StGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StService],
  bootstrap: [AppComponent]
})
export class AppModule { }
