import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { TokenService, LocalStorageService } from '../../services/index';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  BASE_URL = 'https://api2.air-ways.online/';


  // constructor(private localStorage: LocalStorageService, private tokenService: TokenService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `${this.BASE_URL}${req.url}` });
    return next.handle(apiReq);
  }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const apiRequest = 'https://test.api.amadeus.com/';
  //   const token = this.localStorage.getItem('apiToken');
  //   const expirationTime = this.localStorage.getItem('tokenExpirationTime');
  //   const isTokenValid = token && expirationTime && Date.now() < expirationTime;
  //
  //   if (request.method === 'POST') {
  //     const authApiRequest = request.clone({
  //       url: `${apiRequest}/${request.url}`,
  //     });
  //
  //     return next.handle(authApiRequest);
  //
  //   }
  //
  //   if (isTokenValid && request.method === 'GET') {
  //     console.log('Time left:', (expirationTime-Date.now())/1000/60);
  //
  //     const headers = new HttpHeaders()
  //     .set('Authorization', `Bearer ${token}`);
  //
  //     const authApiRequest = request.clone({
  //       headers: headers,
  //       url: `${apiRequest}/${request.url}`,
  //     });
  //
  //     return next.handle(authApiRequest);
  //
  //   } else {
  //     console.log('Token is expire!');
  //
  //     return this.tokenService.getToken()
  //     .pipe(
  //       switchMap((newToken) => {
  //          const headers = new HttpHeaders()
  //          .set('Authorization', `Bearer ${newToken}`);
  //
  //         const authApiRequest = request.clone({
  //           headers: headers,
  //           url: `${apiRequest}/${request.url}`,
  //         });
  //
  //         return next.handle(authApiRequest);
  //
  //       })
  //     );
  //   }
  // }
}
