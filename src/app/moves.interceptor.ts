import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovesInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_KEY = `3f9071e1`;
    const url = `https://omdbapi.com/?apikey=3f9071e1& , http://img.omdbapi.com/?apikey=3f9071e1&`
    request = request.clone({
      url: url + API_KEY + request.url
    });
    return next.handle(request)
  }

  }

