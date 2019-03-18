import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './_services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
