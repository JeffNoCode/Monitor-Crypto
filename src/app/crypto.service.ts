import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'https://api.coingecko.com/api/v3';

  constructor(private http: HttpClient) { }

  getTopCryptos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false`);
  }

  searchCrypto(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/coins/markets?vs_currency=brl&ids=${query}`);
  }

  
  getCryptoPrice(cryptoId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/simple/price?ids=${cryptoId}&vs_currencies=brl`);
  }
}