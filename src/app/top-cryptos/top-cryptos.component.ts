import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-top-cryptos',
  templateUrl: './top-cryptos.component.html',
  styleUrls: ['./top-cryptos.component.css']
})
export class TopCryptosComponent implements OnInit {
  topCryptos: any[] = [];
  favorites: any[] = [];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getTopCryptos().subscribe(data => {
      this.topCryptos = data;
    });
  }

  addFavorite(crypto: any) {
    if (!this.favorites.includes(crypto)) {
      this.favorites.push(crypto);
      alert(`${crypto.name} adicionado aos favoritos!`);
    } else {
      alert(`${crypto.name} já está nos favoritos!`);
    }
  }
}