import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakesoreService {
  private apiurl = 'https://fakestoreapi.com/products';
  constructor(private _http: HttpClient) { }
  private caturl ='https://fakestoreapi.com/products/categories';
  private baseUrl = 'https://fakestoreapi.com/products/category';

  private carturl = 'https://fakestoreapi.com/carts';

  getproducts(): Observable<any[]>{
    return this._http.get<any[]>(this.apiurl).pipe(
      catchError(Error => {
        console.error("error", Error);
        throw Error;
      })
    );
  }
  
  getcategories(): Observable<any[]> {
    return this._http.get<any[]>(`${this.caturl}`).pipe(
      catchError(Error => {
        console.error("Error fetching categories", Error);
        return throwError(Error);
      })
    );
  }


  getProduct(id: string): Observable<any> {
    return this._http.get<any>(`${this.apiurl}/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching product', error);
        return throwError(error);
      })
    );
  }
  
  getcategory(category: string): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseUrl}/${category}`).pipe(
      catchError(error => {
        console.error('Error fetching products', error);
        return throwError(error);
      })
    );
  }

  getcarts(): Promise<any[]> {
    return fetch(this.carturl)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
        return res.json();
      })
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(error => {
        console.error('Error fetching carts', error);
        throw error;
      });
  }
}
