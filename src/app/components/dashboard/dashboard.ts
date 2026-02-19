import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  // Aquí guardaremos las acciones que lleguen de la base de datos
  portfolio: any[] = [];
  isLoading = true; // Para mostrar un mensaje de "Cargando..."

  constructor(private portfolioService: PortfolioService) {}

  // ngOnInit se ejecuta AUTOMÁTICAMENTE cuando el usuario entra a esta pantalla
  ngOnInit() {
    this.portfolioService.getUserPortfolio().subscribe({
      next: (data) => {
        this.portfolio = data; // Guardamos los datos de Azure en nuestra variable
        this.isLoading = false;
        console.log('Datos reales de Azure:', data);
      },
      error: (err) => {
        console.error('Error al traer el portafolio', err);
        this.isLoading = false;
      }
    });
  }
}