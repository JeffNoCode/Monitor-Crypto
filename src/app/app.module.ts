import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopCryptosComponent } from './top-cryptos/top-cryptos.component';
import { SearchCryptoComponent } from './search-crypto/search-crypto.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CurrencyFormatterPipe } from './currencyFormatter.pipe';
import { HighlightDirective } from './highlight.directive';
import { ZoomDirective } from './zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    TopCryptosComponent,
    SearchCryptoComponent,
    FavoritesComponent,
    CurrencyFormatterPipe,
    HighlightDirective,
    ZoomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }