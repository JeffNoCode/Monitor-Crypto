import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { FavoritesService } from '../favorites.service'; 

@Component({
  selector: 'app-top-cryptos',
  templateUrl: './top-cryptos.component.html',
  styleUrls: ['./top-cryptos.component.css']
})
export class TopCryptosComponent implements OnInit {
  topCryptos: any[] = [];

  constructor(private cryptoService: CryptoService, private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.loadTopCryptos();
  }

  loadTopCryptos(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const storedCryptos = sessionStorage.getItem('topCryptos');
      
      if (storedCryptos) {
        this.topCryptos = JSON.parse(storedCryptos);
      } else {
        this.cryptoService.getTopCryptos().subscribe(data => {
          this.topCryptos = data;
          sessionStorage.setItem('topCryptos', JSON.stringify(this.topCryptos));
        });
      }
    } else {
      this.cryptoService.getTopCryptos().subscribe(data => {
        this.topCryptos = data;
      });
    }
  }

  addFavorite(crypto: any): void {
    this.favoritesService.addFavorite(crypto);
    alert(`${crypto.name} adicionado aos favoritos!`);
  }

  isFavorite(crypto: any): boolean {
    return this.favoritesService.isFavorite(crypto);
  }
}