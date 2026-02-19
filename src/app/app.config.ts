import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// 1. Importamos la función withInterceptors
import { provideHttpClient, withInterceptors } from '@angular/common/http';
// 2. Importamos nuestro interceptor recién creado
import { jwtInterceptor } from './interceptors/jwt-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    // 3. Le decimos al Cartero (HttpClient) que siempre use a nuestro Asistente (jwtInterceptor)
    provideHttpClient(withInterceptors([jwtInterceptor]))
  ]
};