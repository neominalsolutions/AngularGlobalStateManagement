import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // araya giren servis
    // request ve response süreçlerinde çift taraflı olarak araya giriyor.
    // Her bir API Call işleminde çalıacak.
    console.log('request', request);

    const req = request.clone({
      headers: request.headers.append('Authorization', 'Bearer Token'),
    });

    return next.handle(req);
  }
}
