import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopCryptosComponent } from './top-cryptos/top-cryptos.component';
import { SearchCryptoComponent } from './search-crypto/search-crypto.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CurrencyConverterPipe } from './currency-converter.pipe';
import { HighlightDirective } from './highlight.directive';
import { FadeInDirective } from './fade-in.directive';

@NgModule({
  declarations: [
    AppComponent,
    TopCryptosComponent,
    SearchCryptoComponent,
    FavoritesComponent,
    CurrencyConverterPipe,
    HighlightDirective,
    FadeInDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  // Adicione esta linha
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }