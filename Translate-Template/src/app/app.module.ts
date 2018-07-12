import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule, ButtonModule } from 'primeng/primeng';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DataService } from './services/data.service';
import { HttpLoaderFactory } from './services/http-loader-factory.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

