import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  // 1. Buscamos el token en la memoria del navegador (LocalStorage)
  const token = localStorage.getItem('token');

  // 2. Si el usuario tiene un token, modificamos (clonamos) la petición para agregarlo
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` // Aquí le ponemos el Bearer automáticamente 🐻
      }
    });
    // 3. Enviamos la petición modificada hacia Azure
    return next(authReq);
  }

  // Si no hay token (ej: está apenas haciendo login), enviamos la petición normal
  return next(req);
};