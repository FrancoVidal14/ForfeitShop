import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { apiServer } from '../apiServer';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private ApiUrl: string = apiServer.serverUrl

  constructor(private http: HttpClient) { }

  getProducto(){
    return this.http.get(`${this.ApiUrl}`);
  }

}
