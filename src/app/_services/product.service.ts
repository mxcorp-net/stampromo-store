import { Injectable } from '@angular/core';
import {CoreService} from "./core.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProductModel} from "../_models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements CoreService{

  constructor(
    private http: HttpClient
  ) {
    this.prefix = environment.products.api;
  }

  prefix: string = '';

  add(query: {}): Observable<any> | undefined {
    return undefined;
  }

  delete(id: string): Observable<boolean> | undefined {
    return undefined;
  }

  find(id: string): Observable<any> | undefined {
    return undefined;
  }

  update(query: {}): Observable<any> | undefined {
    return undefined;
  }

  where(params: {}): Observable<ProductModel[]> {
    return this.http.get<any>(`${this.prefix}/products`, { params });
  }
}
