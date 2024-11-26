import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'favoritos';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    
    if (isPlatformBrowser(this.platformId)) {
      if (!sessionStorage.getItem(this.storageKey)) {
        sessionStorage.setItem(this.storageKey, JSON.stringify([]));
      }
    }
  }

  addFavorite(crypto: { id: string; name: string }) {
    if (isPlatformBrowser(this.platformId)) {
      const favorites = this.getFavorites();
      
      if (!favorites.some((fav: { id: string }) => fav.id === crypto.id)) {
        favorites.push(crypto);
        sessionStorage.setItem(this.storageKey, JSON.stringify(favorites));
      }
    }
  }

  removeFavorite(crypto: { id: string }) {
    if (isPlatformBrowser(this.platformId)) {
      let favorites = this.getFavorites();
      favorites = favorites.filter((fav: { id: string }) => fav.id !== crypto.id);
      sessionStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }

  getFavorites(): { id: string; name: string }[] {
    if (isPlatformBrowser(this.platformId)) {
      const favorites = sessionStorage.getItem(this.storageKey);
      return favorites ? JSON.parse(favorites) : [];
    }
    return []; 
  }
  isFavorite(crypto: { id: string}): boolean {
    const favorites = this.getFavorites();
    return favorites.some((fav: {id: string}) => fav.id == crypto.id);
  }
}