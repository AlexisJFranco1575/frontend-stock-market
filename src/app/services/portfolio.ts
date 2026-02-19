import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // La URL de tu API para obtener las acciones del usuario
  private apiUrl = 'https://api-stock-market-g4crdscbhmfth8h6.westus3-01.azurewebsites.net/api/portfolio';

  constructor(private http: HttpClient) { }

  // Función para pedirle a Azure el arreglo de acciones
  getUserPortfolio(): Observable<any> {
    // ¡Ojo! No le estamos pasando el token aquí, ¡el Interceptor lo hará automáticamente! 🥷
    return this.http.get(this.apiUrl);
  }
}