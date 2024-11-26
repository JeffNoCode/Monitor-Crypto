import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];
  prices: { [key: string]: number } = {};

  constructor(private favoritesService: FavoritesService, private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
    this.fetchPrices();
  }

  fetchPrices() {
    this.favorites.forEach(crypto => {
      this.cryptoService.getCryptoPrice(crypto.id).subscribe(priceData => {
        if (priceData[crypto.id] && priceData[crypto.id].brl) {
          this.prices[crypto.id] = Number(priceData[crypto.id].brl); 
          
          
          if (typeof crypto.previousPrice !== 'number') {
            crypto.previousPrice = this.prices[crypto.id];
          }
        } else {
          console.warn(`Preço não encontrado para ${crypto.id}`, priceData);
        }
      });
    });
  }

  removeFavorite(crypto: any) {
    this.favoritesService.removeFavorite(crypto);
    this.favorites = this.favoritesService.getFavorites();
    delete this.prices[crypto.id]; 
    this.fetchPrices(); 
  }
}