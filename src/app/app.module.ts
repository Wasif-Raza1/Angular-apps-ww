import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './MyComponents/heroes/heroes.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FiltersComponent } from './MyComponents/filters/filters.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { OffersComponent } from './MyComponents/offers/offers.component';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FiltersComponent,
    NavbarComponent,
    FooterComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzAutocompleteModule,
    NzIconModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
