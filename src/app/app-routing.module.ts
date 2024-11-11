import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopCryptosComponent } from './top-cryptos/top-cryptos.component';
import { SearchCryptoComponent } from './search-crypto/search-crypto.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: '', component: TopCryptosComponent },
  { path: 'search', component: SearchCryptoComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }