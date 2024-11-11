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
        if (priceData[crypto.id]) {
          this.prices[crypto.id] = priceData[crypto.id].brl; 
        }
      });
    });
  }

  removeFavorite(crypto: any) {
    this.favoritesService.removeFavorite(crypto);
    this.favorites = this.favoritesService.getFavorites();
    delete this.prices[crypto.id]; 
  }
}