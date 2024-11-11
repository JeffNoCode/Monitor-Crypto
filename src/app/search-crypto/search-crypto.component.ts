import { Component } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-search-crypto',
  templateUrl: './search-crypto.component.html',
  styleUrls: ['./search-crypto.component.css']
})
export class SearchCryptoComponent {
  query: string = '';
  crypto: any;

  constructor(private cryptoService: CryptoService, private favoritesService: FavoritesService) { }

  search() {
    this.cryptoService.searchCrypto(this.query).subscribe(data => {
      if (data.length > 0) {
        this.crypto = data[0]; 
      } else {
        this.crypto = null; 
      }
    });
  }

  addFavorite(crypto: any) {
    this.favoritesService.addFavorite(crypto);
    alert(`${crypto.name} adicionado aos favoritos!`);
  }
}