import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'favoritos';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Inicializa o storage se não houver dados
    if (isPlatformBrowser(this.platformId)) {
      if (!sessionStorage.getItem(this.storageKey)) {
        sessionStorage.setItem(this.storageKey, JSON.stringify([]));
      }
    }
  }

  addFavorite(crypto: { id: string; name: string }) {
    if (isPlatformBrowser(this.platformId)) {
      const favorites = this.getFavorites();
      // Verifica se a criptomoeda já está nos favoritos
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
    return []; // Retorna um array vazio se não estiver no navegador
  }
}