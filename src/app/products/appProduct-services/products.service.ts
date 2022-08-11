import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../app-Product-interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'https://firstangularapp-lti-default-rtdb.firebaseio.com/products.json';
  secureUrl = 'https://firstangularapp-lti-default-rtdb.firebaseio.com/secure-products.json';

  private headers = new HttpHeaders({'content-Type':'goodapplication/json'})

  constructor(private _http:HttpClient) { }

  saveProducts(products:Product[]){
    console.log("service called");
    return this._http.put<Product[]>(this.url, products, {headers : this.headers})
  }

  saveShipment(shipment:Product){
    return this._http.post<Product>(this.secureUrl, shipment)
  }

  fetchProducts(){
    
    return this._http.get(this.url)
  }

  fetchShipments(){
    return this._http.get(this.secureUrl)
  }
  deleteShipments(prodCode:string){
    return this._http.delete('https://firstangularapp-lti-default-rtdb.firebaseio.com/secure-products/'+prodCode+'.json');
  }
  updateEditShipment(prodCode:string, product:Product){
    return this._http.put('https://firstangularapp-lti-default-rtdb.firebaseio.com/secure-products/'+prodCode+'.json', product);
  }
  getDataTitle(){
    return this._http.get('https://firstangularapp-lti-default-rtdb.firebaseio.com/dataTitle.json');
  }
}
