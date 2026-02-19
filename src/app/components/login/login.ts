import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // <-- 1. Importamos el "chofer"
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  errorMessage = '';

  // 2. Inyectamos el Router junto con el servicio de autenticación
  constructor(private authService: Auth, private router: Router) {}

  onLogin() {
    this.errorMessage = ''; 

    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        // 3. Guardamos el token en la memoria secreta del navegador
        localStorage.setItem('token', response.token);
        
        // 4. ¡Arrancamos a la nueva página!
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Error en el login', error);
        this.errorMessage = 'Usuario o contraseña incorrectos.';
      }
    });
  }
}