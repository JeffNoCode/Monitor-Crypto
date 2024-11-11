import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any[] = [];

  constructor() {}

  addFavorite(crypto: any) {
    this.favorites.push(crypto);
  }

  removeFavorite(crypto: any) {
    this.favorites = this.favorites.filter(fav => fav.id !== crypto.id);
  }

  getFavorites() {
    return this.favorites;
  }
}